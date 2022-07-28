# Quick Start

## 01. 웹팩 설치

```bash
npm i webpack webpack-cli webpack-dev-server -D
```

## 02. 명령어 추가

```javascript
// package.json
"scripts": {
  "dev": "webpack-dev-server --mode=development",
  "build": "webpack --mode=production"
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
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', 
    clean: true,
  },
};
```

## 03. 기본 플러그인 추가

```bash
npm i html-webpack-plugin copy-webpack-plugin -D
```

```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // index.html 파일 번들러에 포함
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'static'} // static 폴더 내 파일들을 번들러에 포함시켜줌
      ]
    }),
  ],
};
```

## 04. 로더/플러그인 추가

```bash
npm i style-loader css-loader mini-css-extract-plugin -D
npm i sass sass-loader -D
npm I postcss postcss-loader autoprefixer -D
```

```javascript
// webpack.config.js

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', 
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'static'}
      ]
    }),
  ],
};
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
