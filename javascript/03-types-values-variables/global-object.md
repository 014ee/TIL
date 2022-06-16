# Global-Object

## 🐇전역 객체

{% hint style="info" %}
**globalThis**

ES2020에서 정의한 globalThis는 어떤 환경에서든 전역 객체를 참조하는 표준으로 최신 브라우저 전체와 노드에서 globalThis를 지원한다.
{% endhint %}

> **window 전역객체**
>
> 웹 브라우저에서는 Window 객체가 모든 자바스크립트 코드의 전역 객체이며, 이 전역 Window 객체에는 자신을 참조하는 window 프로퍼티가 있으므로 이 프로퍼티를 통해 전역 객체를 참조할 수 있다.&#x20;

> **노드 전역객체**
>
> 노드의 전역 객체에는 이름이  global인 프로퍼티가 있으며, 그 값은 전역 객체 자체이다.

## 🐇 전역 객체 프로퍼티

{% hint style="info" %}
전역 객체의 프로퍼티는 전역에 정의된 식별자이며, 모든 자바스크립트 프로그램에서 사용할 수 있다. 자바스크립트 인터프리터를 시작할 때마다 또는 웹 브라우저가 새 페이지를 로드할 때 마다 다음과 같은 프로퍼티를 가진 새 전역 객체가 생성다.
{% endhint %}

* undefined, Infinity, NaN같은 전역 상수
* isNaN(), parseInt(), eval() 같은 전역 함수
* Date(), RegExp(), String(), Object(), Array() 같은 생성자 함수
* Math와 JSON 같은 전역 객체&#x20;
