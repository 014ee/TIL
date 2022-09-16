# Modules

## 모듈이란?

{% hint style="info" %}
&#x20;모듈화 프로그래밍의 목표는 큰 프로그래램을 코드 모듈로 분리해서 모듈 개발자가 예측하지 못한 상황에서도 코드 전체가 정확히 실행되도록 하는 것이다. 실용적인 관점에서 모듈화는 프로그램의 세부 사항을 캡슐화하고 전역 네임 스페이스를 깔끔하게 유지해서 모듈이 다른 모듈의 변수, 함수, 클래스를 수정하는 사고를 막아준다.&#x20;
{% endhint %}

## 클래스를 사용하는 모듈

{% hint style="info" %}
&#x20;클래스의 중요한 기능 중 하나는 메서드가 모듈처럼 동작한다는 점이다. 클래스 메서드가 다른 클래스 메서드와 독립적인 이유는 각 클래스 메서드가 독립적인 프로토타입 객체의 프로퍼티로 정의되었기 때문이다. 객체가 모듈의 성격을 가지므로 클래스 역시 모듈의 성격을 띈다.
{% endhint %}

## 객체를 사용하는 모듈

{% hint style="info" %}
&#x20;자바스크립트 객체에서 프로퍼티를 정의하는 것은 변수 선언과 비슷하지만, 객체에 프로퍼티를 추가해도 전역 네임스페이스나 다른 객체의 프로퍼티에 영향을 끼치지 않는다. 자바스크립트에는 몇가지 수학 함수나 사웃가 있는데, 이들은 전역으로 정의되지 않고 전역 객체 Math의 프로퍼티로 존재한다.&#x20;
{% endhint %}

## 클로저를 사용하는 모듈

{% hint style="info" %}
클래스와 객체를 통한 모듈화는 널리 쓰이고 유용하기도 하지만 모듈 내부의 세부 사항을 숨길 방법이 없으므로 그다지 발전되지 않았다. 함수에서 선언한 로컬 변수와 중첩된 함수는 그 안에서만 사용할 수 있는 비공개 값이다. 즉, 즉시 호출하는 함수 표현식을 사용해 세부 사항과 유틸리티 함수를 내부에 기고 모듈의 공개 API만 반환해서 일종의 모듈성을 얻을 수 있다.
{% endhint %}

## 클로저를 사용하는 자동 모듈화

{% hint style="info" %}
내보낼 값과 그렇지 않은 값을 구분하여 자바스크립트 코드를 모듈화할 수 있다. 다음 코드는 웹팩이나 파셀 같은 코드 번들링 도구가 하는 일을 간단히 요약한 것이며 노드 프로그램에서 사용하는 require() 함수도 이와 비슷하게 동작한다.
{% endhint %}

```javascript
const modules = {};
function require(moduleName) {return modules[moduleName]};

modules['sets.js'] = (function() {
  const exports = {};
  exports.BitSet = calss BitSet {...}
  return exports;
}());

module['start.js'] = (function() {
  const exports = {};
  const sum = (x, y) => x + y;
  const square = x => x * x;
  exports.mean = function(data) {...};
  exports.stddev = function(data) {...};
  return exports;
}());

const stats = require('stats.js');
const BitSet = require('sets.js').BitSet;

let s = new BitSet(100);
s.insert(20);
let average = stats.mean([...s]);
```
