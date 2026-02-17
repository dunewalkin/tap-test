// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.{js,ts,vue}'],
    rules: {
      '@stylistic/quotes': 'off',
      '@stylistic/brace-style': 'off',
      '@stylistic/indent': 'off',
      'quotes': 'off',
      'brace-style': 'off',
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/html-indent': 'off',
      'vue/script-indent': 'off',
      'vue/html-self-closing': 'off',
    },
  },
)
