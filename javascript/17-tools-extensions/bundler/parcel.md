# Parcel

* 2017년 출시
* 캐싱을 하므로 두 번째 빌드부터 속도가 굉장히 빠름
* Webpack과 달리 별도의 설정없이 진입 파일만 지정하면 바로 빌드 가능
* 대신 디테일이나 안정성이 조금 떨어지므로 소/중형 프로젝트에 적합
* Babel, PostCSS 같은 트랜스파일러들을 내장하여 지원하므로 `.babelrc`, `.postcssrc` 같은 설정 파일들을 발견하면 자동으로 변환
* 런타임 중 페이지를 새로고침 하지 않아도 모듈을 자동으로 업데이트하는 HTR(Hot Module Replacement) 내장
* 배포용 빌드시 자동으로 압축 및 난독화를 활성화하여 실행 (비활성화 방법: `$ parcel build entry.js --no-minify`)

```
npm i -D parcel-bundler
```

```
// package.json 에 명령어 추가

"scripts": {
  "dev": "parcel index.html",
  "build": "parcel build index.html"
},
```

## 정적 파일 연결하기

파비콘 같은 정적 파일 사용시 dist 폴더에 직접 넣지 말고, 개발서버 오픈 또는 빌드시 자동으로 넣어주는 패키지 이용할 것

```
npm i -D parcel-plugin-static-files-copy
```

```
// package.json 에 옵션 추가

"staticFiles":{
  "staticPath":"static" // 최상위 static 폴더에 있는 파일을 개발서버 오픈 또는 빌드시 자동으로 dist 폴더로 넣어줌
}
```

## postCSS 사용하기

구형 브라우저에서도 최신 css가 적용 되도록 자동으로 벤더 프리픽스 붙여주는 패키지 설치

```
npm i -D postcss autoprefixer
```

```
// package.json 에 옵션 추가

"browserslist": [ // 현재 npm 프로젝트에서 지원한 브라우저 범위 명시 (autoprefixer 패키지가 이 옵션을 활용함)
  "> 1%", // 전세계 점유율 1% 이상인 모든 브라우저의
  "last 2 versions" // 최신 2개 버전까지 지원
]
```

```js
// .postcssrc.js (파일이름 앞에 마침표가 붙는거는 일반적으로 구성 옵션 또는 숨김파일이라는 의미)

module.exports = { // 노드 환경에서 작동하므로 commonJS를 사용
  plugins: [require('autoprefixer')],
};
```

## babel 사용하기

package.json 파일의 browserlist 구성 옵션을 바벨해서도 참고하여 동작한다.\
따라서 바벨을 사용하려면 browserlist가 추가되어 있어야 함

```
npm i -D @babel/core @babel/preset-env
```

```
// .babelrc.js

module.exports = {
  presets: ['@babel/preset-env'],
};
```

위 설정만으로는 aync/await 같은 기능들이 작동될 수 있게 도와주지 못하므로 아래 패키지 추가 설치 필요\
`Uncaught ReferenceError: regeneratorRuntime is not defined`

```
npm i -D @babel/plugin-transform-runtime
```

```
// .babelrc.js

module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [['@babel/plugin-transform-runtime']],
};
```

## 기타 CLI 옵션 중 하나를 적용해보자! (포트번호 변경)

but, 파셀 번들러는 개발자가 별도의 설정을 하지않아도 작동되도록 하는 것이 파셀의 기본 컨셉이기 때문에 필요하지 않은 이상 크게 사용 x [https://ko.parceljs.org/cli.html](https://ko.parceljs.org/cli.html)

```
"scripts": {
  "dev": "parcel index.html --port 4321",
  "build": "parcel build index.html"
},
```
