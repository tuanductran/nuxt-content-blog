/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  plugins: [
    'prettier-plugin-tailwindcss',
    // for sort fields in package.json
    'prettier-plugin-pkg'
  ],
  proseWrap: 'always' // printWidth line breaks in md/mdx
}
