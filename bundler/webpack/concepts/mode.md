# Mode

## 🐇 Mode

{% hint style="info" %}
[mode](https://webpack.kr/configuration/mode/) 속성은 웹팩 버전 4.0.0 에서 추가되었으며 빌드 실행 모드를 지정할 수 있다.
{% endhint %}

* `none` : 모드의 기본 값을 설정하지 않으면 `production` 모드로 자동 설정된다.
* `development` : 개발자가 보기 편하게 웹팩 로그나 결과물이 보여진다.
* `production` : 성능 최적화를 위해 기본적인 파일 압축 등의 빌드 과정이 추가된다.

```javascript
// webpack.config.js
module.exports = {
  mode: 'none',
}
```
