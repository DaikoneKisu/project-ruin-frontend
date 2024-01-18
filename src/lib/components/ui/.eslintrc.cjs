/** @type { import("eslint").Linter.Config } */
module.exports = {
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^\$\$(Props|Events|Slots|Generic)$' // eslint-disable-line no-useless-escape -- false positive of useless escape, here I want to match $$Props, $$Events, $$Slots and $$Generic
      }
    ]
  }
}
