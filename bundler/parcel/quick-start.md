# Quick Start

## 01. 파셀 설치

```bash
npm i parcel-bundler -D
```

## 02. 명령어 추가

```json
// package.json
"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
},
```

## 03. 정적 파일 연결

{% hint style="info" %}
빌드시 favicon이나 image 같은 정적 파일도 함께 빌드되도록 하려면 별도의 플러그인을 설치해야 한다.
{% endhint %}

```bash
npm i parcel-plugin-static-files-copy -D 
```

```json
// package.json
"staticFiles":{
  "staticPath": "static" // 최상위 static 폴더 내 파일들을 빌드시 dist 폴더에 넣어줌
}
```

## 04. PostCSS, babel 추가

```bash
npm i postcss autoprefixer -D
npm i @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

```json
// package.json
"browserslist": [
  "> 1%", // 전세계 점유율 1% 이상인 모든 브라우저의
  "last 2 versions" // 최신 2개 버전까지 지원
]
```

```javascript
// .postcssrc.js 
module.exports = {
  plugins: [require('autoprefixer')],
};
```

```javascript
// .babelrc.js
module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime']],
};
```
