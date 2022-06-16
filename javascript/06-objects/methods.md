# Methods

{% hint style="info" %}
명시적으로 프로토타입 없이 생성한 객체를 제외하면 자바스크립트 객체는 모두 Object.prototype로부 프로퍼티를 상속받는다. Object.prototype에 정의되긴 했지만 상황에 따라 좀 더 구체적으로 변형하도록 의도된 공용 메서드들을 알아보자.
{% endhint %}

## 🐇 toString()

{% hint style="info" %}
호출한 객체의 값을 나타내는 문자열을 반환한다. 자바스크립트는 + 연산자로 문자열과 객체를 병합하거나, 문자열을 예상하는 함수에 객체를 전달하는 상황과 같이 객체를 문자열로 변환해야 할 때마다 이 메서드를 호출한다.
{% endhint %}

> 기본 메서드에서 유용한 정보를 제공하지 않으므로 여러 클래스에서 자신만의 toString()을 정의하곤 한다. 가령 배열을 문자열로 변환하면 배열 요소 각각을 문자열로 변환한 리스트를 얻고, 함수를 문자열로 변환하면 소스 코드를 얻을 수 있다.

```
const func = function() {return 1}
funct.toString()          // 'function() {return 1}'
{a: 1, b: 2}.toString();  // [object object]
[1,2,3].toString();       // '1,2,3'
```

{% hint style="info" %}
&#x20;아래와 같이 toString() 메서드를 직접 정의할 수 있다.
{% endhint %}

```
const person = {
  name: 'Lee',
  age: 30,
  toString: function() {return `이름: ${this.name}, 나이: ${this.age}`}
}
String(person); // 이름: Lee, 나이: 30 (문자열로 변환할 때 toString()메서드 호출)
```

## 🐇 toLocaleString()

{% hint style="info" %}
모든 객체에는 toString() 메서드와 유사한 toLocaleString() 메서드 있다. 이 메서드의 목적은 **지역에 맞는 문자열 표현을 반환**하는 것인데, Object에 정의된 기본 toLocaleString() 메서드 자체에는 지역화 기능이 없 toString()을 호출해 그 값을 반환하기만 하며 **Date와 숫자 클래스에만 숫자, 날짜, 시간을 지역의 관습에 맞게 표현하는 toLocaleString()**가 구현되어 있다.
{% endhint %}

```
const price = {
  apple: 5000,
  banana: 3500,
  toLocaleString: function() {
    return (this.apple + this.banana).toLocaleString();
  }
}
price.toLocaleString() // 8,500: 천 단위 구분
```

## 🐇 valueOf()

{% hint style="info" %}
**기본 값(주로 숫자)을 예상하는 곳에 객체를 사용하면 자동으로 이 메서드를 호출**한다.\
Date 클래스의 valueof()는 날짜를 숫자로 변환므로 Date 객체는 < 와 >을 사용해 시간 순서를 비교할 수 있다.&#x20;
{% endhint %}

```
const today = new Date();  // Thu Jun 16 2022 19:30:46 GMT+0900 (한국 표준시)
today.valueOf();           // 1655375446393
```

## 🐇 toJSON()

{% hint style="info" %}
Object.prototype에 실제로 toJSON() 메서드가 정의된 것은 아니지만, JSON.stringify() 메서드는 직렬화 할 객체에서 toJSON() 메서드를 검색하여 이런 메서드가 존재하면 해당 메서드를 호출해 반환 값을 직렬화한다. Date 클래스의 toJSON() 메서드는 직렬화 가능한 문자열 표현을 반환한다.
{% endhint %}

```
const today = new Date(); // Thu Jun 16 2022 19:30:46 GMT+0900 (한국 표준시)
today.toJSON();           // '2022-06-16T10:30:46.393Z'
JSON.stringify(today);    // '"2022-06-16T10:30:46.393Z"'
```
