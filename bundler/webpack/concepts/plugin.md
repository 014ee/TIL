# Plugin

## &#x20;🐇 Plugin

{% hint style="info" %}
[plugin](https://webpack.kr/concepts/plugins/)은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다. 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 한다. 플러그인은 매개변수 및 옵션을 사용할 수 있으므로 플러그인 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있다.
{% endhint %}

```javascript
// webpack.config.js
const webpack = require('webpack');  //빌트인 플러그인에 접근하기 위함
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

* [HtmlWebpackPlugin](https://webpack.js.org/plugins/html-webpack-plugin/) : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해준다.
* [CopyWebpackPlugin](https://webpack.kr/plugins/copy-webpack-plugin/) : 개별 파일 또는 전체 디렉토리(ex. assets)를 빌드 디렉토리에 복사해준다.
* [MiniCssExtractPlugin](https://webpack.kr/plugins/mini-css-extract-plugin/) : 별도의 css 파일을 생성하여 내부스타일이 아닌 외부스타일로 빌드해준다.
* [ProgressPlugin](https://webpack.js.org/plugins/progress-plugin/#root) : 웹팩의 빌드 진행율을 표시해준다.
* [split-chunks-plugin](https://webpack.js.org/plugins/split-chunks-plugin/)&#x20;
* [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
* [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader)
* [webpack-bundle-analyzer-plugin](https://github.com/webpack-contrib/webpack-bundle-analyzer)
