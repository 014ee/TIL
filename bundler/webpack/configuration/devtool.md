# Devtool

## 🐇 Devtool

{% hint style="info" %}
[devtool](https://webpack.kr/configuration/devtool/) 옵션을 통해 소스맵 생성 여부와 방법을 설정할 수 있다. 소스맵이란 배포용으로 빌드한 압축 파일과 원본 파일을 서로 매칭시켜주는 기능으로 디버깅을 할 때 유용하게 사용된다.&#x20;
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  devtool: 'source-map'
}
```
