# Closures

## 🐇 네임스페이스인 함수

{% hint style="info" %}
함수 안에서 선언한 변수는 함수 바깥에서 보이지 않는다. 따라서 전역 네임스페이스를 어지럽히지 않도록 임시 네임스페이스 기능을 하는 함수를 정의하는 것이 유용할 때도 있다.&#x20;
{% endhint %}

```javascript
function chunkNamespace() {
  // 코드는 여기에 존재한다.
  // 함수에서 정의한 변수는 모두 로컬 변수이므로 전역 네임스페이스를 어지럽히지 않는다.
}
chunkNamespace(); // 단 호출을 해줘야 한다.
```

{% hint style="info" %}
**즉시 호출 함수(IIFE)**

프로퍼티 하나라도 전역에 남겨두고 싶지 않다면 표현식 하나로 익명함수를 정의하고 즉시 호출할 수 있다.&#x20;
{% endhint %}

```javascript
(function() {  // 여는 괄호로 감싸줘야 인터프리터가 function을 선언이 아닌 표현식으로 인식
  // 코드는 여기 존재한다.
})();  // 함수 리터럴을 종료하고 즉시 호출한다.
```

{% hint style="info" %}
이렇게 함수를 네임스페이스로 사용하는 방법은 네임스페이스 안에 있는 변수를 사용해 하나 이상의 함수를 정의하고, 정의된 함수를 네임스페이스 함수의 반환값으로 사용할 때 아주 유용하다. 이런 함수를 클로저라고 한다.
{% endhint %}

## 🐇 클로저

{% hint style="info" %}
대부분 최신 프로그래밍 언어와 마찬가지로 자바스크립트 역시 어휘적 스코프를 사용한다. 어휘적 스코프란 함수가 호출 시점의 스코프가 아니라 자신이 정의된 시점의 변수 스코프를 사용하여 실행된다는 뜻이다. 어휘적 스코프를 구현하기 위해서는 자바스크립트 함수 객체의 내부 상태에 함수의 코드 뿐 아니라 함수가 정의된 스코프에 대한 참조도 반드시 포함되어 있어야 한다. 이렇게 함수 객체와 스코프를 조합한 것을 클로저라고 한다.

엄밀히 말해 자바스크립트 함수는 모두 클로저이니잠 대부분의 함수가 자신이 정의된 곳과 같은 스코프에서 호출되므로 보통은 클로저인지 아닌지 따질 필요가 없다. 클로저가 유용할 때는 함수가 정의된 곳과 다른 스코프에서 호출될 때 뿐이다. 가장 흔한 예시는 함수가 함수를 정의해 반환하는 경우이다. 클로저는 자신을 정의한 외부 함수의 로컬 변수와 매개변수를 그대로 캡쳐한다.&#x20;
{% endhint %}

```javascript
let scope = 'global scope';
function checkscope() {
  let scope = 'local scope';
  function func() {return scope};
  return func();
}
checkscope();  // 'local scope': 자신이 정의된 곳에서 스코프를 갖는다.
```

```javascript
let scope = 'global scope';
function checkscope() {
  let scope = 'local scope';
  function func() {return scope};
  return func;
}
checkscope()();  // 'local scope': func을 어디서 실행하는 정의된 스코프에서 실행된다.
```

{% hint style="info" %}
&#x20;다음 예제에서 즉시 호출하는 함수 표현식에서 네임스페이스를 정의하고, 클로저가 이 네임스페이스를 사용해 비공개 상태를 유지하도록 할 수 있다. 중첩된 함수는 자신의 스코프에 있는 변수에 접근할 수 있으며 일단 외부 함수가 종료되면 다른 코드에서는 내부 변수를 볼 수 없다.
{% endhint %}

```javascript
function counter() {
  let num = 0;
  return {
    count: function() {return num++},
    reset: function() {num = 0;},
  }
}
let counter1 = counter(); counter2 = counter();
counter1.count();  // 0
counter2.count();  // 0
counter1.reset();  // 0
counter2.count();  // 0
counter2.count();  // 1: counter 함수는 호출할 때마다 독립된 새 스코프가 생성된다.
```

{% hint style="info" %}
&#x20;클로저 기법과 프로퍼티 게터와 세터를 조합할 수도 있다. 게터와 세터를 활용하면 로컬 변수를 선언하지 않고 매개변수 num에 프로퍼티 접근자 메서드에서 공유한 비공개 상태를 담을 수 있다.
{% endhint %}

```javascript
function counter(num) {
  return {
    get count() {return num++},
    set count(newNum) {
      if(newNum > num) num = newNum;
      esle throw Error('카운트는 더 큰 값으로만 바꿀 수 있습니다.')
    },
  }
}
let c = counter(1000);
c.count;        // 1000
c.count;        // 1001
s.count = 2000;
c.count;        // 2000
c.count = 2000; // Error: 카운트는 더 큰 값으로만 바꿀 수 있습니다.
```



```javascript
function addPrivateProperty(obj, name, predicate) {
  let value;
  obj[`get${name}`] = function() return value;
  obj[`set${name}`] = function(v) {
    if(prodicate && !predicate(v)) {
      throw new TypeError('올바르지 않은 타입을 사용했습니다.');
    } esle {
      value = v;
    }
  }
}
let obj = {};
addPrivateProperty(obj, 'Name', x => typeof x === 'string');
obj.setName('Lee'); // 프로퍼티 값을 저장한다.
obj.getName();      // 'Lee'
obj.setName(0);     // TypeError: 올바르지 않은 타입을 사용했습니다.
```
