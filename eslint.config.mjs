import antfu, { combine, imports, jsdoc } from '@antfu/eslint-config'

export default combine(
  imports({
    stylistic: {
      indent: 'tab',
      semi: true,
      quotes: 'double',
    },
  }),
  jsdoc({
    stylistic: {
      indent: 'tab',
      semi: true,
      quotes: 'double',
    },
  }),
  antfu({
    ignores: [
      '**/.github/*',
      '**/node_modules/*',
      '**/docs/*',
      '**/dist/*',
      '**/tsconfig.json',
      '**/tsconfig-build.json',
      '**/README.md',
    ],
    rules: {
      'no-console': ['warn'],
      'antfu/no-top-level-await': ['off'],
      'require-await': ['error'],
      'node/prefer-global/process': ['off'],
      'perfectionist/sort-imports': ['error', {
        internalPattern: ['@/**'],
      }],
      'no-unused-vars': ['error'],
      'dot-notation': ['off'],
      'jsdoc/check-param-names': ['error'],
      'jsdoc/require-property': ['error'],
      'jsdoc/require-returns-description': ['error'],
      'jsdoc/require-returns-check': ['error'],
      'unicorn/filename-case': ['error', {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
        ignore: ['README.md'],
      }],
    },
  }),
)
