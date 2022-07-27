# Quick Start

## 01. 웹팩 설치

```bash
npm i webpack webpack-cli webpack-dev-server -D
```

## 02. 명령어 추가

```javascript
// package.json
"scripts": {
  "dev": "webpack serve"
  "build": "webpack"
}
```

## 03. 기본 설정

{% hint style="info" %}
webpack.config.js를 통해 프로젝트에 따른 유연한 설정이 가능하다. 웹팩 버전 4.0.0 이후로는 별도의 설정 파일 없이도 번들할 수 있다.&#x20;
{% endhint %}

```javascript
// webpack.config.js
var path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'domain.com',
        changeOrigin: true
      }
    }
  },
};
```

## 04. 로더/플러그인 추가

### Babel

```bash
npm i @babel/core @babel/preset-env babel-loader -D
```

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {presets: ['@babel/preset-env']},
        }
      }
    ]
  }, 
};
```

### CSS

* css-loader :&#x20;
* style-loader :
* mini-css-extract-plugin : 별도의 css 파일을 생성하여 내부스타일이 아닌 외부스타일로 번들해줌

```bash
npm i css-loader style-loader mini-css-extract-plugin -D
```

```javascript
// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      },
    ]
  }, 
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
```

### HTML

```bash
npm i html-webpack-plugin -D
```

```javascript
// webpack.config.js
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html', 
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
