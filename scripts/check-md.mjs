import { exec, execSync } from 'child_process'
import { readFileSync, unwatchFile, watchFile } from 'fs'
import { join, resolve } from 'path'
import { createInterface } from 'readline'
import { sync } from 'glob'

const contentDir = resolve(process.cwd(), 'content')

const rl = createInterface({ input: process.stdin, output: process.stdout })

function askEditor(callback) {
  rl.question('Choose editor: (1) VS Code, (2) Zed: ', answer => {
    const editor =
      answer.trim() === '1' ? 'code' : answer.trim() === '2' ? 'zed' : null
    if (!editor) {
      console.warn('Invalid choice. Please enter 1 or 2.')
      return askEditor(callback)
    }
    rl.close()
    callback(editor)
  })
}

function getMarkdownFiles(directory) {
  return sync(join(directory, '**/*.md'))
}

function checkMarkdownErrors(filePath, key) {
  try {
    const content = readFileSync(filePath, 'utf8')
    return content.split('\n').some((line, index) => {
      if (new RegExp(`^${key}:\\s*".*".*".*"`).test(line)) {
        console.warn(`Error in ${key} (line ${index + 1}) - File: ${filePath}`)
        return true
      }
      return false
    })
  } catch (error) {
    console.error(`Failed to read file: ${filePath}, Error: ${error.message}`)
    return false
  }
}

function runMarkdownLint(filePath) {
  try {
    execSync(`npx markdownlint "${filePath}" --config .markdownlint.yml`, {
      stdio: 'inherit'
    })
    execSync(`npx case-police lint "${filePath}"`, { stdio: 'inherit' })
    return false
  } catch (error) {
    console.error(`Lint error in ${filePath}: ${error.message}`)
    return true
  }
}

function openFilesSequentially(files, editor) {
  let index = 0

  function processNextFile() {
    if (index >= files.length) {
      console.log('All files checked and fixed!')
      return
    }

    const filePath = files[index]
    const hasErrors = [
      checkMarkdownErrors(filePath, 'title'),
      checkMarkdownErrors(filePath, 'description'),
      runMarkdownLint(filePath)
    ].some(Boolean)

    if (hasErrors) {
      console.log(`Opening file: ${filePath}`)
      exec(`${editor} "${filePath}"`)
      watchFile(filePath, { interval: 500 }, (curr, prev) => {
        if (curr.mtime !== prev.mtime) {
          console.log(`Fixed: ${filePath}`)
          unwatchFile(filePath)
          index++
          processNextFile()
        }
      })
    } else {
      index++
      processNextFile()
    }
  }

  processNextFile()
}

function runChecks(directory) {
  const files = getMarkdownFiles(directory)
  if (files.length === 0) {
    console.warn('No Markdown files found!')
    return
  }

  console.log(`Checking ${files.length} Markdown files in: ${directory}`)
  askEditor(editor => openFilesSequentially(files, editor))
}

runChecks(contentDir)
