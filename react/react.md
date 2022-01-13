# ✅ React 맛보기
```html
<body>
  <div id="root"></div>
  <button id='btn_plus'>+</button>
</body>
```
* 자바스크립트로 컴포넌트를 만들면 상태가 변경될 때마다 함수를 다시 호출해줘야 한다.
```js
const component = { // 컴포넌트 생성
  message: 'init',
  count: 0,
  render(){
    return `<p>${this.message} : ${this.count}</p>`
  }
}

function render(rootElement, component){
  rootElement.innerHTML = component.render()
}
render(document.querySelector('#root'), component) // html에 컴포넌트 랜더

document.querySelector('#btn_plus').addEventListener('click', function(){
  component.message = 'update'
  component.count = component.count + 1
  render(document.querySelector('#root'), component) // 이벤트 적용 후 다시 랜더
})
```
* 리액트는 컴포넌트의 변경된 상태를 비교하여 해당 부분만 자동으로 수정해준다.
```js
const Component = props => {
  return React.createElement('p', null, `${props.message} : ${props.count}`) // (태그, 속성, 내용)
}

ReactDOM.render(
  React.createElement(Component, {message: 'init', count: 0}, null),
  document.querySelector('#root')
)

document.querySelector('#btn_plus').addEventListener('click', () => {
  ReactDOM.render(
    React.createElement(Component, {message: 'update', count: 10}, null),
    document.querySelector('#root')
  ) // 이벤트 발생시 다시 랜더
}) 
```
# ✅ Create React App [(CRA)](https://create-react-app.dev/)
npx란? npm 5.2.0 이상부터 함께 설치된 커맨드라인 명령어 (최신 버전의 라이브러리로 설치해줌)
```js
npx create-react-app [프로젝트명]
```
```js
"dependencies": {
  "@testing-library/jest-dom": "^5.16.1",
  "@testing-library/react": "^12.1.2",
  "@testing-library/user-event": "^13.5.0",
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-scripts": "5.0.0",
  "web-vitals": "^2.1.3"
},
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject" // create-react-app에서 해결이 안되는 설정을 추가해야 할 때 (관리/복구가 어려워 거의 안씀)
},
```
```js
npm run build

npm i -g serve
serve -s build // build라는 폴더를 파일 서버로 사용 (-s 옵션은 어떤 라우팅으로 요청해도 index.html 응답하도록 해줌)

npx serve -s build // 로컬에 설치하지 않고 npx 실행할 때 마다 새로운 서브 패키지를 받는 방법
```
## [ESLint](https://eslint.org/)
cra에서 지원(이미 설치되어 있고 기본 세팅도 어느정도 되어 있음)
명령어로 따로 설치해서 쓸 경우 아래 참고 (보통은 플러그(확장자)인 설치해서 사용)
```js
npm i eslint -D // eslint 설치
npx eslint --init // 설치된 eslint 초기화 및 설치파일(.eslintrc.js) 생성
```
```js
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
  "ecmaVersion": 13,
  "sourceType": "module"
  },
  "rules": {
    semi: ["error", "always"], // 이런식으로 규칙을 지정해 줄 수 있음
  },
};
```
```js
npx eslint index.js // index.js eslint 검사해줌
```
```js
npx eslint index.js --fix // 자동으로 검사 후 수정해줌
```
## [prettier](https://prettier.io/docs/en/index.html)
eslint와 마찬가지로 보통 플러그인 설치 후 설정에서 저장 시 자동으로 수정되도록 등록해서 사용  
명령어로 하려면 아래 방식  
가로 폭을 제한하는 특징이 리액트 코드를 정리하는데 도움됨
```js
npm i prettier -D
npx prettier index.js // 실행은 안되고 어떻게 수정하겠다만 터미널로 보여줌
npx prettier index.js --write // 바로 수정
```
프리티어 설정 변경하고 싶으면 프로젝트 루트에 `.prettierrc.json` 파일 생성 후 커스텀
```js
{
  "singleQuote": true
}
```
## eslint-config-prettier
eslint 설정 중 prettier과 충돌할 수 있는 모든 규칙을 꺼줌  
create-react-app 에서는 eslintConfig에 추가하면 됨
```js
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "prettier"
  ]
},
```
## [husky](https://github.com/typicode/husky)
git hook을 쉽게 사용하도록 도와줌
깃이 설치되어 있지 않은 상태에서 husky를 설치할 경우 hook을 사용할 수 없다.
```
git init
npm i husky -D
npx husky install
```
```
  "scripts": {
    "prepare": "husky install",
  },
```
```
npx husky add .husky/pre-commit "npm test" // 커밋을 하기 전 코드를 점검할 수 있게 해줌
```
## lint-staged
```
git init
npm i husky -D
npx husky install
```
```
  "scripts": {
    "prepare": "husky install",
  },
```
```
npx husky add .husky/pre-commit "lint-staged" // 커밋을 하기 전 코드를 점검할 수 있게 해줌
```
```
npm i lint-staged -D
```
```
npx lint-staged
```
```
"lint-staged":{
"**/*.js": [ // js 파일이 올라와 있으면
  "eslint --fix", // eslint 점검/수정을 하고
  "prettier --write" // prettier 점검/수정을 하고
  "git add" // 다시 git add 해라
]
}
```

