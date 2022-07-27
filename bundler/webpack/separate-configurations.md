# Separate Configurations

## 🐇웹팩 머 (파일 구분 전략)

{% hint style="info" %}
일반적으로 웹 애플리케이션을 제작할 떄는 웹팩 설정을 개발(Development)용과 배포(Production)용으로 나누어 적용한다. 실행 모드에 따라 조건문으로 설정을 구분할 수 있으나 실제로 파일을 구분하는 [webpack merge](https://webpack.kr/guides/production/) 방식이 더 권장된다.
{% endhint %}

```bash
npm install webpack-merge -D
```

* `webpack.common.js` : 실행 모드에 관계없이 공통으로 필요한 설정
* `webpack.dev.js` : 개발자 도구나 웹팩 데브 서버와 같은 개발 모드에서 필요한 설정
* `webpack.prod.js` : 배포하기 전 웹 리소스 최적화를 위한 설

```javascript
// webpack.common.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
}
```

```javascript
// webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: { contentBase: './dist' }
});
```

```javascript
// webpack.prod.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production'
});
```

## 🐇 조건문을 통한 분기

```javascript
// webpack.config.js
module.exports = (env) => {
  let entryPath = env.mode === 'production'
    ? './public/index.js'
    : './src/index.js';

  return {
    entry: entryPath,
  }
}
```

```json
// package.json
"build": "webpack",
"development": "npm run build -- --env.mode=development",
"production": "npm run build -- --env.mode=production"
```
