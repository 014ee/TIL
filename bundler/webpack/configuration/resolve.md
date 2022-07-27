# Resolve

## 🐇 Resolve

{% hint style="info" %}
[resolve](https://webpack.kr/configuration/resolve/)는 웹팩이 모듈을 해석해 나가는 방식을 상세하게 지정할 수 있도록 하는 옵션이다.&#x20;
{% endhint %}

## 🐇 resolve.alias

{% hint style="info" %}
[alias](https://webpack.kr/configuration/resolve/#resolvealias) 속성을 통해 import나 require로 가져오는 모듈 경로의 별칭을 만들어서 코드를 간략하게 작성할 수 있도록 만들어준다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      Utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
};
```

```javascript
import colors from 'utils/colors.js';
// import Colors from '../../utils/colors.js';
```

## 🐇 resolve.extentions

{% hint style="info" %}
[extentions](https://webpack.kr/configuration/resolve/#resolveextensions) 속성을 통해 import나 require로 가져오는 모듈의 파일명에서 배열에 등록한 확장자를 생략해도 인식해서 가져올 수 있도록 만들어준다. 파일명이 동일하지만 다른 확장자를 가진 경우 배열의 앞에서부터 파일을 해석하고 남은 것은 해석하지 않는다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
  },
```

```javascript
import Card from '../components/card';
```
