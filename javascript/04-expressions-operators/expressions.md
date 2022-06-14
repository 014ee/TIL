# Expressions

{% hint style="info" %}
어떤 **값으로 평가**되는 구절
{% endhint %}

## 🐇 기본 표현식

* 단독으로 존재하는 가장 단순한 표현식 `1.23` `'hello'` `true` `null` `/pattern/` `this` `i`&#x20;
* 리터럴 방식을 통한 초기화 표현식

```
const 배열리터럴 = [1, 2, , , 3+5]
const 객체리터럴 = {x: 3, y: 8}
const 함수리터럴 = function funcName(x, y) {return x*y}
```

* 프로퍼티 접근 표현식  `person['name']` `apple.color`
* 호출 표현식: 함수에 리턴값이 없으면 undefined 반환 `write('string')`  `Math.max(1, 2)`
* 객체 생성 표현식: 인자가 없다면 괄호 생략 가능 `new Date`  `new Person('name')`

## 🐇 옵션 체인 (ES 2020)

{% hint style="info" %}
**`?.` ** 앞의 평가 대상이 `undefined`나 `null`이면 평가를 멈추고 `undefined`를 반환한다.
{% endhint %}

> **조건부 프로퍼티 접근**
>
> 자바스크립트에서 유일하게 null과 undefined는 프로퍼티를 갖지 못한다.
>
> 때문에 원래는 프로퍼티의 왼쪽에 위치한 값이 null이나 undefined면 TypeError를 반환한다.

```
const fruit = {
  banana: null
}

fruit['banana'].color // TypeError
fruit['banana']?.color // undefined
```

> **조건부 호출**
>
> 함수 표현식이 null이나 undefined로 평가될 때, 호출 표현식 전체를 undefined로 평가한다.
>
> null이나 undefined로 평가되면 함수 인자는 평가하지 않으므로 부수 효과 예방 할 수 있다.
>
> 값이 함수인지는 체크하지 않으므로 다른 값이 들어오면 예외가 발생한다는 점 주의할 것&#x20;

```
const func = null;
let count = 0;

try {
  func(count++);
} catch(e) {
  count; // 1 => 예외가 일어나기 전 증가
}

func?.(count++);
count; // 1 => 단축 평가이므로 평가가 중단되어 증가하지 않음

```

