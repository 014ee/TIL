# Quick Start

## 기본 환경

* VSCODE에 ESLint 확장 프로그램 설치
* settings.json 폴더에 아래 속성 추가 (VSCODE => ctrl + shift + p)n

```json
// settings.json 
"editor.tabSize": 2,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
 },
"eslint.workingDirectories": [{ "mode": "auto" }],
"eslint.validate": [
  "javascript",
  "typescript"
],
"eslint.alwaysShowStatus": true
```

## 자바스크립트 + 바벨 환경

```bash
npm i eslint prettier eslint-plugin-prettier -D
npm i @babel/eslint-parser -D 
```

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  plugins: ['prettier'],
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
  parser: '@babel/eslint-parser',
};
```

```
// .eslintignore
./node_modules
./dist 
```

## 타입스크립트 환경

```bash
npm i @typescript-eslint/parser @typescript-eslint/eslint-plugin -D
```

```javascript

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
