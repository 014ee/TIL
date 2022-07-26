# Quick Start

## 01. NPM 설치

```bash
npm i webpack webpack-cli webpack-dev-server -D
npm i @babel/core @babel/preset-env babel-loader css-loader -D
npm i html-webpack-plugin mini-css-extract-plugin -D
```

## 02. 웹팩 설정

{% hint style="info" %}
&#x20;웹팩 버전 4.0.0 이후로는 별도의 설정 파일 없이도 번들할 수 있다. 하지만 webpack.config.js를 통해 사용자 요구에 따라 유연 설정이 가능하다.
{% endhint %}

```javascript
// webpack.config.js

// 인자로 넘어온 경로를 조합하여 유효한 파일 경로를 지정해주는 core Node.js 모듈
var path = require('path');
// 번들링시 css를 별도 파일로 뽑아주는 플러그인
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // 'none', 'development', 'production'
  entry: './src/index.js',
  output: {
    filename: 'main.js', // [name].[hash].bundle.js, [chunkhash].bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"] // 로더는 오른쪽에서 왼쪽 순서로 읽힌다.
      },
      {
        test: /\.m?js$/,
	exclude: /(node_modules|bower_components)/,
	use: {
	  loader: 'babel-loader',
	  options: {
	    presets: ['@babel/preset-env']
	  }
	}
      }
    ]
  }, 
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // index.html 템플릿을 기반으로 빌드 결과물을 추가
    }),
  ],
  devServer: {
    port: 9000,
    // ...
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
```

## 03. 명령어 추가

```json
// package.json
"scripts": {
  "dev": "webpack-dev-server"
  "build": "webpack"
}
```
