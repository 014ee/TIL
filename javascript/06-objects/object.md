# Objects

## 🐇 객체란?

{% hint style="info" %}
객체는 **프로퍼티의 순서 없는 집합**이며 각 프로퍼티에는 이름과 값이 있다. 프로퍼티 이름은 보통 문자열(간혹 심벌)이므로 문자열에 값을 연결한다고 볼 수 있다. 이런 동작을 다른 언어에서 '해시', '해시 테이블', '딕셔너리', '연관배열' 같은 이름으로 부른다. 객체 내 프로퍼티와 메서드를 통틀어 '멤버'라고 부른다.
{% endhint %}

> **이름 (key)**
>
> 빈 문자열과 심벌을 포함해 어떤 문자열든 쓸 수 있지만, 같은 이름의 프로퍼티는 존재할 수 없다.

> **값 (value)**
>
> 자바스크립트 표현식(값)이면 무엇이든 가능하며, 터나 세터 또는 둘 다가 될 수 있다.

{% hint style="info" %}
자바스크립트 객체는 동적이기 때문에 프로퍼티를 추가하거나 삭제할 수 있지만, 이름과 값 외에도 아래와 같은 세 가지 프로퍼티 속성을 가지고 있어 정적인 객체를 흉내 낼 수도 있고 정적 타입을 사용하는 언어의 구조 역시 사용할 수 있다.

자바스크립트 내장 객체의 프로퍼티 중 상당수는 읽기 전용이거나 열거 불가이거나 변경 불가이며, 직접 만드는 객체의 프로퍼티는 기본적으로 쓰기 가능, 열거 가능, 변경 가능이다.
{% endhint %}

> **쓰기 가능 (writable)**
>
> 쓰기 가능 속성은 프로퍼티에 값을 설정할 수 있는지 없는지를 나타낸다.

> **열거 가능 (enumerable)**
>
> 열거 가능 속성은 for/in 루프에 프로퍼티 이름을 반환할지 안할지를 나타낸다.

> **변경 가능 (configurable)**
>
> 변경 가능 속성은 프로퍼티를 삭제할 수 있는지 없는지, 속성을 바꿀 수 있는지 없는지를 나타낸다.

## 🐇 프로토타입 상속

{% hint style="info" %}
자바스크립트 객체는 단순히 문자열과 값을 연결한 자신만의 프로퍼티 즉 **자체 프로퍼티를 가지는 것 외에도 다른 객체로부터 '프로토타입'이라는 프로퍼티를 상속**받는다. 객체의 메서드는 일반적으로 상속된 프로퍼티이며, 객체에서 직접 정의한 프로퍼티와 프로토타입 객체에서 상속받은 프로퍼티를 구별하는 것이 중요할 때도 있으므로 '프로토타입 상속'은 자바스크립트의 중요한 기능이다.&#x20;
{% endhint %}

> **프로토타입 체인**
>
> 기억할 것은 거의 모든 객체에 프로토타입이 있지만, prototype 프로퍼티가 있는 객체는 비교적 적다는 것이다. **prototype 프로퍼티를 갖는 객체가 다른 객체의 프로토타입을 정의**한다.
>
> **Object.prototype은 프로토타입이 없는 드문 객체** 중 하나로, 이 객체는 어떤 프로토타입도 상속받지 않는다. 다른 프로토타입 객체는 일반적인 객체로, Object.prototype로부터 상속받는 프로토타입이 있다. 가령 Date.prototype은 Object.prototype에서 프로퍼티를 상속받으므로 new Date()로 생성한 Date 객체는 Date.prototype과 Object.prototype 양쪽에서 프로퍼티를 상속받는다. 이렇게 이어지는 프로토타입 객체 사이의 연결을 프로토타입 체인이라고 한다.

## 🐇 객체 생성

> **객체 리터럴**
>
> 객체를 생성하는 가장 쉬운 방법으로 이름: 값 쌍을 콤마로 구분해 중괄호로 감싼 형태이다.\
> 객체 리터럴은 평가할 때마다 새 객체가 만들어자며, 각 프로퍼티의 값 역시 리터럴을 평가할 때마다 평가된다. 따라서 객체 리터럴 자체가 바뀌지 않더라도 반복적으로 호출되는 함수나 루프 바디 안에 있다면 새 객체를 여러개 만들 수 있으며, 이 객체들의 프로퍼티 값 역시 매번 달라질 수 있다.

```
const obj = {x: point.x, y: point.y+1,} // Object.prototype으로부터 프로토타입 상속
/* 
* 객체 리터럴의 마지막 프로퍼티에 콤마를 사용하면
* 나중에 객체 리터럴에 프로퍼티를 추가할 때 문법 에러를 초래할 가능성이 줄어든다.
*/
```

> **new 연산자**
>
> new는 새 객체를 생성하고 초기화하는 연산자로, new 키워드 뒤에는 반드시 함수 호출이 있어야 한다.\
> 이런 형태로 사용되는 함수를 생성자 함수라고 부르며, new 키워드로 새로 생성된 객체를 초기화하는 목적으로 사용된다. 자바스크립트 내장 타입에도 생성자가 있으며, 직접 생성자 함수를 만들 수도 있다.

```
const obj = new Object();  // Object.prototype으로부터 프로토타입 상속
const array = new Array(); // Array.prototype으로부터 프로토타입 상속
const date = new Date();   // Date.prototype으로부터 프로토타입 상
```

> **Object.create()**
>
> Object.create()는 첫번째 인자를 프로토타입 삼아 새 객체를 생성한다. 인자로 null을 전달해 프로토타입이 없는 객체를 생성할 수도 있지만, 이렇게 생성된 객체는 아무것도 상속받지 않으며, toString()같은 기본 메서드 조차 사용할 수 없다. {}나 new Object()처럼 일반적인 빈 객체를 만들고 싶을 때는 Object.prototype을 전달한다.&#x20;
>
> 임의의 프로토타입을 사용해 새 객체를 만들 수 있는 것은 강력한 기능이며, 서드 파티 라이브러리에서 부주의하게 객체의 프로퍼티 값을 변경하지 못하게 하기 위 목적으로 사용할 수 있다.

```
const nothing = Object.create(null);         // 아무것도 상속받지 않는 빈 객
const obj = Object.create(Object.prototype);
const obj = Object.create({x: 1, y: 2,});
```



Key in object

* object 안에 특정 key 값이 있는지 없는지 체크

```
const user = {
 name: 'Heropy',
 age: 85,
 email: 'email@naver.com'
}
```

```
console.log('name' in user); // true
```

#### Object.keys()

* 객체 데이터의 `key 값을 배열로 반환`한다.

```
const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
```

* `.map()` 메서드를 이용해 속성에 대한 값들을 배열로 가져올 수 있다.

```
const values = keys.map(key => user[key])
console.log(value) // ['Heropy', 85, 'email@naver.com']
```

#### Object.assign()

* 대상 객체(첫번째 인수)에 하나 이상의 출처 객체 데이터를 병합시켜준다.
* 속성명이 같으면 값을 덮어쓴다.

```
const target = {a:1, b:2}
const source = {b:4, c:5}
const returndTarget = Object.assign(target, source)

console.log(target) // {a:1, :4, c:5}
console.log(returnedTarget) // {a:1, b:4, c:5}

console.log(target === returnedTarget) // true (단순히 값이 같아서가 아니라 같은 메모리 주소를 바라보고 있다.)
```

* 대상 객체 부분에 새로운 빈 객체를 만들어서 기존 객체 데이터의 원본을 유지할 수 있다.

```
const newTarget = Object.assign({}, target, source)
```

## ✅ This

* this의 대상은 this를 사용하는 함수를 어떻게 실행하느냐에 따라 바뀐다.
* `일반함수에서 this는 window` `'use strict' 모드의 일반함수에서 this는 undefined`

#### 일반 함수의 this

* 일반 함수는 `함수가 호출된 위치`에 따라 this를 정의한다.

```
const heropy = {
 name: 'Heropy',
 nomal: function () {
  console.log(this.name)
 },
 arrow: () => {
  console.log(this.name)
 }
 }

heroopy.normal() // Heropy
heropy.arrow() // undefined
```

* 일반함수는 메소드 속성을 아래와 같이 축약해서 사용할 수도 있다.

```
const heropy = {
 name: 'Heropy',
 nomal () {
  console.log(this.name)
 },
 arrow: () => {
  console.log(this.name)
 }
}

heropy.normal() // Heropy
heropy.arrow() // undefined
```

* 아래아 같이 다른 객체 데이터 내 함수를 가져올 수도 있다.

```
const amy = {
 name: 'Amy',
 normal: heropy.normal, 
 arrow:heropy.arrow
}
amy.normal(); // Amy
amy.arrow(); // undefined
```

#### 화살표 함수의 this

* 화살표 함수는 `함수가 선언된 범위`에 따라 this를 정의한다.
* setTimeout 같은 전역함수를 일반 함수로 작성하면 함수가 호출되는 setTimeout에서 this를 찾으므로 undefined로 출력된다.
* 따라서 `전역 함수 사용시` this를 사용할 확률이 있으면 화살표 함수로 작성하는 것이 활용도가 높다.

```
const timer = {
 name: 'Heropy',
 timeout: function (){
 setTimeout(() => {
  console.log(this.name)
  },2000)
 }
}
timer.timeout();
```

## ✅ 생성자 함수

* class가 없었을 때, 아래와 같이 중복되는 object는 함수를 이용하여 template을 만들었다.

```
const heropy = {
 firstName: "Heropy"
 lastName: "Park"
 getFullName: function (){
  return `&{this.firstName} &{this.lastName}`
 }
 
 const amy = {
  firstName: "Amy"
  lastName: "Lee"
  getFullName: function (){
  return `&{this.firstName} &{this.lastName}`
 }
}
```

* 별다른 계산 없이 순수하게 object를 생성하는 `생성자 함수`는 일반 함수와의 구분을 위해 관행적으로`PascalCase`로 작성한다.
* 또한 class의 constructor과 같이 this를 사용하여 내용을 작성하며, 이렇게 작성하면 `js가 알아서 object를 생성`해준다.
* `Key와 Value의 이름이 동일하면 하나로 생략` 가능하다. (property value shorthand)

```
function User (first, last) {
 // this = {} 생략
 this.firstName = first
 this.lastName = last
 // return this; 생략
}
```

* 생성자 함수가 할당된 변수를 생성자 함수의 인스턴스라고 한다.

```
const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Lee')
```

* 아래와 같이 `로직이 완전히 동일한 경우 참조하는 방식으로 사용`할 수 있다.
* 생성자 함수를 몇 개 만들던 아래 코드는 메모리에 딱 1번만 만들어져 성능적인 면에서 효과적이다.
* js는 아래와 같이 prototype 개념을 많이 사용하고 있어서 `prototype 기반의 프로그래밍 언어`라고도 한다.

```
User.prototype.getFullName = function(){
 return `${this.firstName} ${this.lastName}`
}

console.log(heropy.getFullName()) // Heropy Park
```
