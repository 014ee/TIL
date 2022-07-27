# Loader

## 🐇 Loader (module)

{% hint style="info" %}
[loader](https://webpack.kr/configuration/module/) 속성을 사용하여 다른 유형의 파일(html, css, images, font 등)도 유효한 모듈로 변환할 수 있다.&#x20;
{% endhint %}

## 🐇 module.rules

{% hint style="info" %}
모듈을 생성하기 위한 [Rule](https://webpack.kr/configuration/module/#rule)의 배열로, 로더를 모듈에 적용시키거나 파서를 수정할 수 있다.
{% endhint %}

* `rule.test` : 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
* `rule.use` : 해당 파일 유형에 적용할 로더의 이름  (옵션을 포함한 객체 형태로도 입력할 수 있다.)

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.ts$/, use: 'ts-loader' }, 
    ]
  }
}
```

{% hint style="info" %}
특정 파일에 여러개의 로더를 사용하는 경우 로더가 적용되는 순서에 주의해야 하는데, 로더는 기본적으로 오른쪽에서 왼쪽 순으로 적용된다. ex. sass-loader => css-loader => style-loader
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // { loader: 'style-loader' }의 축약
          {loader: 'css-loader',options: { modules: true }},
          'sass-loader'  // { loader: 'sass-loader' }의 축약
        ]
      },
    ]
  }
}
```

## 🐇 자주 사용하는 로더

### [Babel loader](https://webpack.kr/loaders/babel-loader/)

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
          options: { presets: ['@babel/preset-env'] },
        }
      }
    ]
  }, 
};
```

### [Syling loader](https://webpack.kr/loaders/#styling)

* [style-loader](https://webpack.kr/loaders/style-loader) : DOM에 스타일로 모듈 내보내기를 추가한다.
* [css-loader](https://webpack.kr/loaders/css-loader) : 리졸브된 가져오기로 CSS 파일을 로드하고 CSS 코드를 반환한다.
* [postcss-loader](https://webpack.kr/loaders/postcss-loader) : PostCSS 을 사용해 CSS/SSS 파일을 로드하고 변환한다.
* [sass-loader](https://webpack.kr/loaders/sass-loader) : SASS/SCSS 파일을 로드하고 컴파일한다.
* [mini-css-extract-plugin](https://webpack.kr/plugins/mini-css-extract-plugin/) : 별도의 css 파일을 생성하여 내부스타일이 아닌 외부스타일로 빌드해준다.

```bash
npm i css-loader style-loader -D
npm i postcss-loader postcss -D
npm i sass-loader sass -D
npm i mini-css-extract-plugin -D
```

```javascript
// webpack.config.js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'style-loader',
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
};
```

### [File loader](https://v4.webpack.js.org/loaders/file-loader/)

```bash
npm i file-loader -D
```

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};
```

### [TS loader](https://webpack.kr/guides/typescript/)

```bash
npm i typescript ts-loader -D
```

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
```
