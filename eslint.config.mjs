import tailwind from 'eslint-plugin-tailwindcss'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}'],
  rules: {
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off'
  }
})
  .append(tailwind.configs['flat/recommended'])
  .append({
    rules: {
      'tailwindcss/classnames-order': 'off', // conflicts with prettier-plugin-tailwindcss packages
      'tailwindcss/enforces-negative-arbitrary-values': 'error',
      'tailwindcss/enforces-shorthand': 'error',
      'tailwindcss/migration-from-tailwind-2': 'error',
      'tailwindcss/no-custom-classname': 'off' // conflicts with @nuxt/ui packages
    }
  })
