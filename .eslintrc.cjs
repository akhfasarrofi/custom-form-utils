module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  rules: {
    "no-console": "warn",
    "no-unused-vars": ["error", { args: "none" }],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": ["error", { namedComponents: "arrow-function" }],
    "import/prefer-default-export": "off",
    "no-empty": "warn",
  },
}
