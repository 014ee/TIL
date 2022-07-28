# Quick Start

## 01. NPM 설치

```bash
npm i eslint prettier eslint-plugin-prettier -D
npm i @babel/eslint-parser -D (?)
npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

## 02. 설정 파일

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};


```

```
// .eslintignore
./node_modules
./dist 
```
