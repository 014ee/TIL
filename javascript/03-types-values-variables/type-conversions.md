# Type-Conversions

## 🐇 타입 변환

{% hint style="info" %}
자바스크립트는 값의 타입을 강제하지 않는다. 따라서 기대하는 것과 다른 타입의 값을 써도 자바스크립트는 해당 타입에 맞게 변환을 시도한다. 모든 타입은 불 타입으로 변환이 가능하며, 문자나 숫자 타입으로의 변환은 타입 변환 알고리즘에 따라 다르게 작동한다.&#x20;
{% endhint %}

* **falsy (거짓 같은 값):**  0, -0, NaN, '', false, null, undefined
* **truthy (참같은 값):** true, 'false', {}, \[] 등

## 🐇 타입 변환 알고리즘

{% hint style="info" %}
자바스크립트가 객체를 기본 값으로 변환하는 규칙은 조금 복잡한데, 그 이유 중 하나는 Date 같은 일부 객체는 여러가지 기본 값으로 표현될 수 있기 때문이다. 자바스크립트 명세에는 객체를 기본 값으로 변환하는 세가지 기본적인 알고리즘이 정의되어 있으며, 모든 객체는 기본 값으로 변환할 때 사용하는 toString()과 valueOf() 메서드를 상속받는다.&#x20;
{% endhint %}

* **문자열 선호:** toString()로 문자열 변환을 먼저 시도한 후 실패할 경우 valueOf()을 시도한다.
* **숫자 선호:** valueOf()로 **** 숫자 변환을 먼저 시도한 후 실패할 경우 toString()을 시도한다.
* **선호 없음:** 변환하는 객체 **** 클래스에 따라 다르게 동작한다. (Date 제외 숫자 변환을 선호한다.)

## 🐇 객체를 문자열로

{% hint style="info" %}
문자열 인자를 예상하는 내장 함수에 객체를 전달할 때, String()을 변환 함수로 호출할 때, 템플릿 리터럴에 객체를 사용할 때 같은 경우 자바스크립트는 문자열 선호 알고리즘을 사용해 기본 값으로 변환한 다음 필요하다면 규칙에 따라 그 기본 값을 문자열로 변환한다.
{% endhint %}

> **toString() 메서드**
>
> 기본 toString() 메서드는 그리 유용한 값을 반환하지 않으며, 대부분의 클래스에는 해당 클래스에 알맞는 toString() 메서드가 새롭게 정의되어 있다.

```javascript
({x: 1, y: 2}).toString()  // [object Object]
[1, 2, 3].toString()       // '1,2,3'
(function(){}).toString()  // 'function(){}'
(new Date()).toString()    // 'Fri Jun 24 2022 03:27:29 GMT+0900 (한국 표준시)'
```

## 🐇 객체를 숫자로

{% hint style="info" %}
숫자 인자를 예상하는 내장 함수에 객체를 받았을 때, 숫자 피연산자를 예상하는 연산자에 객체를 사용할 때 같은 경우 자바스크립트는 숫자 선호 알고리즘에 따라 기본 값으로 변환한 다음 필요하다면 그 기본 값을 숫자로 변환한다.
{% endhint %}

> **valueOf() 메서드**
>
> 이 메서드는 객체를 표현하는 기본 값이 존재한다면 그 값으로 객체를 변환하는데, 대게 객체는 기본 값으로 표현하는 것이 불가능하므로 기본 valueOf() 메서드는 객체 자체를 반환한다. 문자열, 숫자, 불의 래퍼 클래스의 valueOf() 메서드는 그냥 그 기본값을 반환한다.

```javascript
({x: 1, y: 2}).valueOf()   // {x: 1, y: 2}
[1, 2, 3].valueOf()        // [1, 2, 3]
(function(){}).valueOf()   // ƒ (){}
(new Date()).valueOf()     // 1656009362468
```

## 🐇 묵시적 변환

{% hint style="info" %}
묵시적인 타입 변환을 수행하는 자바스크립트 연산자를 타입 변환 목적으로 쓸 때도 있다. + 연산자는 문자열을 우선으로 변환하고, 단항 + 연산자는 숫자를 우선으로 변환하며, 단항 ! 연산자는 피연산자를 불로 변환한 후 그 값을 부정한다.
{% endhint %}

```javascript
x + ''  // String(x)
+x      // Number(x)
x-0     // Number(x)
!!x     // Boolean(x)
```

## 🐇 명시적 변환

{% hint style="info" %}
자바스크립트는 자동으로 타입을 변환하기는 하지만 때때로 직접 변환해야 할 때도 있다. 명시적으로 타입을 변환하는 가장 단순한 방법은 Boolean(), Number(), String() 함수를 사용하는 것이다. String() 대신 동일한 동작을 하는 toString() 메서드를 사용할 수도 있다.
{% endhint %}

```javascript
Boolean([])           // true
Number([])            // 0
Number([99])          // 99
let a = Number('3')   // 3
'0b' + a.toString(2)  // '0b11'
parseInt('-12.34')    // -12
```

## 🐇 정확한 타입 출력

```javascript
function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1);
} 
```
