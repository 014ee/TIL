# Quick Start

## 01. 웹팩 설치

```bash
npm i webpack webpack-cli webpack-dev-server -D
```

## 02. 명령어 추가

```javascript
// package.json
"scripts": {
  "dev": "webpack serve",
  "build": "webpack"
}
```

## 03. 기본 설정

{% hint style="info" %}
webpack.config.js 파일에서 프로젝트에 따른 유연한 설정이 가능하다. 웹팩 버전 4.0.0 이후로는 별도의 설정 파일 없이도 번들할 수 있다.&#x20;
{% endhint %}

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js', 
    clean: true,
  },
};
```

## 04. 기본 플러그인 추가

```bash
npm i html-webpack-plugin copy-webpack-plugin -D
```

```javascript
// webpack.config.js
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlPlugin({
      template: './index.html', // index.html 파일을 번들에 포함
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'} // static 폴더 내 파일들을 번들에 포함
      ]
    }),
  ],
};
```

## 05. 바벨 로더 추가

```bash
npm i babel-loader @babel/core @babel/preset-env -D
```

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: ['babel-loader'],
        exclude: /(node_modules|bower_components)/,
      }
    ]
  },
};
```

```javascript
// .babelrc.js
module.exports = {
  presets: ['@babel/preset-env'],
}
```

## 06. CSS 로더 추가

```bash
npm i style-loader css-loader mini-css-extract-plugin -D
npm i sass sass-loader -D
npm i postcss postcss-loader autoprefixer -D
```

```javascript
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module: {
  rules: [
    {
      test: /\.(sass|scss|css)$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
  ]
},
plugins: [
  new MiniCssExtractPlugin(),
],
```

```javascript
// .postcssrc.js
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

```json
// package.jsonon
"browerslist": [
  "> 1%",
  "last 2 versions"
]
```

## 07. 기타 속성 추가

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
}
```
