# Plugins

## &#x20;🐇 Plugins

{% hint style="info" %}
플러그인은 웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성이다. 로더랑 비교하면 로더는 파일을 해석하고 변환하는 과정에 관여하는 반면, 플러그인은 해당 결과물의 형태를 바꾸는 역할을 다. 플러그인의 배열에는 생성자 함수로 생성한 객체 인스턴스만 추가될 수 있습니다.
{% endhint %}

```
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin()
  ]
}
```
