# Create React App

## Create React App

```bash
npx create-react-app 프로젝트명
npm i -g serve
npm run build
npx serve -s build // -s 옵션은 spa의 약어로, 어떤 라우팅으로 요청해도 index.html를 응답
```

## ESLint

{% hint style="info" %}
cra에 이미 설치되어 있고 기본 세팅도 어느정도 되어 있다. 아래와 같이 명령어로 따로 설치해도 되고 vscode에서 확장자 설치해서 사용해도 된다.
{% endhint %}

```bash
npm i eslint -D    // eslint 설치
npx eslint --init  // 설치된 eslint 초기화 및 설치파일 생성
```

```javascript
// .eslintrc.js

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

## prettier

{% hint style="info" %}
prettier의 가로 폭을 제한하는 특징이 리액트 코드를 정리하는데 매우 유용하다. cra에 기본 설치는 안되어 있고, 보통 확장자 설치 후 설정에서 저장 시 자동으로 수정되도록 등록해서 사용한다.
{% endhint %}

```bash
npm i prettier -D
npx prettier index.js          // 어떻게 수정하겠다만 터미널로 보여줌
npx prettier index.js --write  // 검사 후 수정까지 해줌
```

<pre class="language-js"><code class="lang-js"><strong>// .prettierrc.json
</strong><strong>
</strong><strong>{
</strong>  "singleQuote": true
}</code></pre>

## eslint-config-prettier

{% hint style="info" %}
eslint 설정 중 prettier과 충돌할 수 있는 모든 규칙을 꺼준다. cra에서는 eslintConfig에 추가하면 된다.
{% endhint %}

```js
"eslintConfig": {
  "extends": [
    "react-app",
    "react-app/jest",
    "prettier"
  ]
},
```

## husky

{% hint style="info" %}
git hook을 쉽게 사용하도록 도와준다. git init이 되어 있지 않은 상태에서 husky를 설치할 경우 hook을 사용할 수 없다.
{% endhint %}

```bash
git init
npm i husky -D
npx husky install
```

```json
"scripts": {
  "prepare": "husky install",
},
```

```bash
npx husky add .husky/pre-commit "npm test" // 커밋을 하기 전 코드를 점검할 수 있게 해줌
```

## lint-staged

```bash
git init
npm i husky -D
npx husky install
```

```json
"scripts": {
  "prepare": "husky install",
},
```

```bash
npx husky add .husky/pre-commit "lint-staged" // 커밋을 하기 전 코드를 점검할 수 있게 해줌
```

```bash
npm i lint-staged -D
```

```bash
npx lint-staged
```

```json
"lint-staged":{
    "**/*.js": [ // js 파일이 올라와 있으면
    "eslint --fix", // eslint 점검/수정을 하고
    "prettier --write" // prettier 점검/수정을 하고
    "git add" // 다시 git add 해라
  ]
}
```
