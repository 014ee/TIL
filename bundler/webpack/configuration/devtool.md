# Devtool

## 🐇 Devtool

{% hint style="info" %}
[devtool](https://webpack.kr/configuration/devtool/) 옵션을 통해 소스맵 생성 여부와 방법을 설정할 수 있다. 소스맵이란 빌드한 압축 파일과 원본 파일을 서로 매칭시켜주는 기능을 말한다. 소스맵을 사용하면 빌드 후 디버깅을 할 때 유용하다는 장점이 있으나 정보 노출의 위험이 있으므로 소스맵 파일을 웹 서버에 배포해서는 안되며 개발용에서만 사용해야 한다. 또는 일반 사용자가 소스맵 파일에 접근 할 수 없도록 서버를 구성해야한다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  devtool: 'source-map'
}
```
