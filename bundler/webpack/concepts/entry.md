# Entry

## 🐇 Entry Points

{% hint style="info" %}
웹팩이 웹 자원을 변환하기 위한 최초 진입점 자바스크립트 파일로, 해당 파일을 기준으로 웹 애플리케이션에서 사용되는 모듈의 의존 관계를 분석하고 번들링하기 때문에 대게 이 파일 안에는 웹 애플리케이션의 전반적인 구조와 내용이 담겨있어야 한다. 기본 값은 './src/index.js' 이지만 다른 또는 여러 엔트리 포인트를 지정할 수도 있다.
{% endhint %}

## 🐇  Single Entry (단일 엔트리)

{% hint style="info" %}
단일 entry 구문은 다음과 같이 축약해 표현 수 있다.
{% endhint %}

```javascript
// 기본
entry: {
  main: './src/index.js',
},

// 축약
entry: './src/index.js',
```

## 🐇 Object Entry (다중 엔트리)

{% hint style="info" %}
싱글 페이지가 아닌 특정 페이지로 진입했을 때 서버에서 해당 정보를 내려주는 형태의 멀티 페이지 애플리케이션일 경우 다음과 같이 엔트리 포인트를 분리하여 사용할 수 있다.
{% endhint %}

```javascript
entry: {
  main: './src/MainView.js'
  login: './src/LoginView.js',
}
```
