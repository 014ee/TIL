# Quick Start

## 기본 환경

* VSCODE에 ESLint, Prettier 확장 프로그램 설치
* settings.json 폴더에 아래 속성 추가 (ctrl + shift + p or F1)
* 아래 설정은 html, css는 저장하면 설치한 prettier 기본 설정에 따라 자동 포매팅 되고,
* javascript는 개별 프로젝트에 npm 설치 후 별도의 설정을 해야 저장시 포매팅 되는 환경이다.

```json
// settings.json 
  "editor.formatOnSave": false,
  "editor.tabSize": 2,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": [{ "mode": "auto" }],
  "eslint.validate": ["javascript", "typescript"],
  "eslint.alwaysShowStatus": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  
  // html, css는 저장시 자동 포매
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features",
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
  },
  "css.format.spaceAroundSelectorSeparator": true,
  "scss.format.spaceAroundSelectorSeparator": true
```

## 자바스크립트 + 바벨 환경

```bash
npm i eslint eslint-plugin-prettier prettier -D
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
  parser: '@babel/eslint-parser', // 로드할 수 없다는 오류 뜨면 해당 코드 삭제
  ignorePatterns: ['dist', 'node_modules'],
};
```

```
// .eslintignore (ignorePatterns 옵션 대신 사용 가능)
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
