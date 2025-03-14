import eslintConfigPrettier from 'eslint-config-prettier/flat'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  files: ['**/*.{js,jsx,cjs,mjs,ts,tsx,cts,mts,vue}'],
  rules: {
    'node/prefer-global/process': 'off',
    'node/prefer-global/buffer': 'off',
    'vue/multi-word-component-names': 'off'
  }
}).append(eslintConfigPrettier)
