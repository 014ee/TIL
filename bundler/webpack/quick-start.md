# Quick Start

## 01. 웹팩 설치

```bash
npm i webpack webpack-cli webpack-dev-server -D
```

## 02. 명령어 추가

```javascript
// package.json
"scripts": {
  "dev": "webpack-dev-server"
  "build": "webpack"
}
```

## 03. 기본 설정

{% hint style="info" %}
webpack.config.js 파일에서 프로젝트에 따른 유연한 설정이 가능하다. 웹팩 버전 4.0.0 이후로는 별도의 설정 파일 없이도 번들할 수 있다.&#x20;
{% endhint %}

```javascript
// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 8080,
  },
};
```

## 04. 로더/플러그인 추가

```bash
npm i
```

```javascript
// webpack.config.js
```

## 05. 기타 설정

```javascript
// webpack.config.js
module.exports = {
  stats: {
    colors: true
  },
  devtool: 'source-map'
}; 
```
