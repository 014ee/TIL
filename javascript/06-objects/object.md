# object



## ✅ Object

* 객체데이터 내 `속성과 메서드를 통틀어서 멤버`라고도 한다.

```
const obj1 = {key: value};  // object literal
const obj2 = new Object(); // object constructor
```

```
console.log(user.name) // 코딩하는 순간, 그 key에 해당하는 값을 받아오고 싶을 때
console.log(user['name']) // 코딩하는 순간, 그 key에 해당하는 값이 얼마인지 모를 때
```

### Key in object

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

### Object.keys()

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

### Object.assign()

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

### 일반 함수의 this

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

### 화살표 함수의 this

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
