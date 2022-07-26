# Webpack

* [웹팩 공식문서](https://webpack.kr/concepts/)
* [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html) by 캡틴판교
* [웹팩 소개 영상](https://www.youtube.com/watch?v=WQue1AN93YU)&#x20;

## 🐇 웹팩이란?

{% hint style="info" %}
웹팩은 모던 자바스크립트 애플리케이션을 위한 정적 모듈 번들러이다. 웹팩은 엔트리 포인트를 기점으로 프로젝트에 필요한 모든 모듈을 내부적으로 매핑하고, 하나 이상의 번들을 생성하는 [디펜던시 그래프](https://webpack.kr/concepts/dependency-graph/)(모듈 간 의존관계를 나타내는 구조)를 만든다. 기본적으로 웹팩은 js와 json파일만 인식하지만, [module 옵션](concepts/loader.md)을 별도로 지정하여 다른 유형의 파일(html, css, images, font 등)도 유효한 모듈로 변환하고 디펜던시 그래프에 추가할 수 있다.&#x20;
{% endhint %}

![](../../.gitbook/assets/0\_MztcXroPHZ5nkHOS.png)

## 🐇 웹팩을 사용하는 이유

* 자바스크립트 전역 변수 유효 범위의 문제를 ESM과 번들링으로 해결할 수 있다.
* 한번에 보낼 수 있는 [HTTP 요청 갯수](https://joshua1988.github.io/webpack-guide/motivation/problem-to-solve.html#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EB%B3%84-http-%EC%9A%94%EC%B2%AD-%EC%88%AB%EC%9E%90%EC%9D%98-%EC%A0%9C%EC%95%BD)는 제한되어 있는데, 이로 인한 성능 문제를 개선할 수 있다.
* 사용하지 않는 코드를 자동으로 관리해준다.
* [Code Splitting](https://webpack.kr/guides/code-splitting/)으로 Dynamic Loading과 Lazy Loading을 구현하여 초기 로딩 속도를 높일 수 있다.&#x20;
