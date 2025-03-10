import { exec, execSync } from 'node:child_process'
import { readFileSync, watchFile, unwatchFile } from 'node:fs'
import { join, resolve } from 'node:path'
import { createInterface } from 'node:readline'
import { sync } from 'glob'

// Determine the project's root directory and locate the 'content' directory
const contentDir = resolve(process.cwd(), 'content')

// Create a command-line interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

// Prompt the user to select a text editor for opening files
function askEditor(callback) {
  rl.question(
    'Do you want to open files with (1) VS Code or (2) Zed? ',
    answer => {
      let editor =
        answer.trim() === '1' ? 'code' : answer.trim() === '2' ? 'zed' : null
      if (!editor) {
        console.warn('Please choose 1 (VS Code) or 2 (Zed).\n')
        return askEditor(callback) // Recursively ask again if input is invalid
      }
      rl.close()
      callback(editor)
    }
  )
}

// Retrieve all Markdown files from the specified directory
function getMarkdownFiles(directory) {
  return sync(join(directory, '**/*.md'))
}

// Check for quotation mark errors in the title field of Markdown files
function checkTitleErrors(filePath) {
  const content = readFileSync(filePath, 'utf8')
  return content.split('\n').some((line, index) => {
    if (/^title:\s*".*".*".*"/.test(line)) {
      // Detects improperly nested quotes
      console.warn(
        `Quotation mark error in title (line ${index + 1}) - File: ${filePath}`
      )
      return true
    }
    return false
  })
}

// Check for quotation mark errors in the description field of Markdown files
function checkDescriptionErrors(filePath) {
  const content = readFileSync(filePath, 'utf8')
  return content.split('\n').some((line, index) => {
    if (/^description:\s*".*".*".*"/.test(line)) {
      // Detects improperly nested quotes
      console.warn(
        `Quotation mark error in description (line ${index + 1}) - File: ${filePath}`
      )
      return true
    }
    return false
  })
}

// Run markdownlint-cli and case-police to check for style and formatting issues
function checkMarkdownLint(filePath) {
  console.log(`Checking file: ${filePath}`)
  let hasError = false

  try {
    execSync(`npx markdownlint "${filePath}" --config .markdownlint.yml`, {
      stdio: 'inherit'
    })
  } catch (error) {
    console.error(`MarkdownLint error: ${error.message}`)
    hasError = true
  }

  try {
    execSync(`npx case-police lint "${filePath}"`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Case-police error: ${error.message}`)
    hasError = true
  }

  return hasError
}

// Open each Markdown file sequentially for review and fixing
function openFilesSequentially(files, editor) {
  let index = 0

  function openNextFile() {
    if (index >= files.length) {
      console.log('All files have been checked and fixed!')
      return
    }

    const filePath = files[index]
    const hasTitleError = checkTitleErrors(filePath)
    const hasDescriptionError = checkDescriptionErrors(filePath)
    const hasLintError = checkMarkdownLint(filePath)

    if (hasTitleError || hasDescriptionError || hasLintError) {
      console.log(`Opening file for fixes: ${filePath}`)
      exec(`${editor} "${filePath}"`)

      // Monitor file for changes and proceed once it's modified
      watchFile(filePath, { interval: 500 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
          console.log(`Fixed: ${filePath}`)
          unwatchFile(filePath)
          index++
          openNextFile()
        }
      })
    } else {
      index++
      openNextFile()
    }
  }

  openNextFile()
}

// Execute the complete checking and fixing process
function runChecks(directory) {
  const files = getMarkdownFiles(directory)
  if (files.length === 0) {
    console.warn('No Markdown files found!')
    return
  }

  console.log(
    `Checking ${files.length} Markdown files in directory: ${directory}`
  )
  askEditor(editor => openFilesSequentially(files, editor))
}

// Start the checking process on the 'content' directory
runChecks(contentDir)
