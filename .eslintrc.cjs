module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
    "eslint:recommended",
    "plugin:sonarjs/recommended-legacy"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'react-hooks',
    'simple-import-sort',
    'sonarjs'
  ],
  rules: {
    "import/no-anonymous-default-export": [
      "error",
      {
        "allowArray": false,
        "allowArrowFunction": false,
        "allowAnonymousClass": false,
        "allowAnonymousFunction": false,
        "allowCallExpression": true,
        "allowNew": false,
        "allowLiteral": false,
        "allowObject": true
      }
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "max-params": [
      "error",
      4
    ],
    "no-console": "warn",
    "no-unused-vars": ["error", { args: "none" }],
    "import/no-extraneous-dependencies": "off",
    "import/no-anonymous-default-export": "off",
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "no-empty": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "snake_case"
        ],
        "modifiers": [
          "destructured"
        ]
      },
      {
        "selector": "parameter",
        "format": [
          "snake_case",
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "method",
        "format": [
          "camelCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "function",
        "format": [
          "camelCase",
          "UPPER_CASE",
          "PascalCase"
        ],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },
      {
        "selector": "typeAlias",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^T[A-Z]",
          "match": true
        }
      },
      {
        "selector": "enum",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^E[A-Z]",
          "match": true
        }
      }
    ]
  },
}
