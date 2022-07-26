# Plugin

## &#x20;🐇 Plugin

{% hint style="info" %}
[plugin](https://webpack.kr/concepts/plugins/)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다. 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다. 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.
{% endhint %}

```javascript
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // index.html 템플릿을 기반으로 빌드 결과물을 추가
    }),
  ]
}
```

## 🐇 자주 사용하는 플러그인

* [ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/#root) : 웹팩의 빌드 진행율을 표시해주는 플러그인
* [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인
* [split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/) :&#x20;
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin) :
* [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) :
* [webpack-bundle-analyzer-plugin](https://github.com/webpack-contrib/webpack-bundle-analyzer) :
