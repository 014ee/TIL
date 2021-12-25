# ✅  생성자 함수
* 객체데이터 내 속성과 매소드를 통틀어서 멤버라고도 한다.
* 아래와 같이 중복되는 코드를 하나하나 작성하면 코드가 길어지고 비효율적이다.
```js
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
console.log(heropy.getFullName) // Heropy Park
console.log(amy.getFullName) // Amy Lee
```
* `생성자 함수`는 일반 함수와 동일한 구조를 가지고 있으므로 구분하기 위해 관행적으로 `PascalCase`로 작성하고 있다.
```js
function User (first, last) {
 this.firstName = first
 this.lastName = last
}
```
* 생성자 함수가 할당된 변수를 생성자 함수의 인스턴스라고 한다.
```
const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Lee')
```
* 아래와 같이 로직이 완전히 동일한 경우 메모리를 위해 통일해서 참조하는 방식으로 사용할 수 있다.
* 생성자 함수를 몇 개 만들던 아래 코드는 메모리에 딱 1번만 만들어진다.
* 이후 생성자 함수에서 아래 코드를 `참조`하는 방식으로 사용할 수 있다.
* js는 아래와 같이 prototype 개념을 많이 사용하고 있어서 `prototype 기반의 프로그래밍 언어`라고도 한다.
```
User.prototype.getFullName = function(){
 return `&{this.firstName} &{this.lastName}`
}

console.log(heropy.getFullName()) // Heropy Park
```

# ✅  this
* this가 지칭하는 것은 로직에 따라 일반 함수로 작성할지, 화살표 함수로 작성할지 정할 수 있어야 한다.
* `일반 함수`는 `호출 위치`에 따라 this 정의
```javascript
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
```js
const amy = {
 name: 'Amy',
 normal: heropy.normal, 
 arrow:heropy.arrow
}
amy.normal(); // Amy
amy.arrow(); // undefined
```
* `화살표 함수`는 자신이 `선언된 함수 범위`에 따라 this 정의
* 아래 코드의 setTimeout을 일반 함수로 작성하면 this는 함수가 호출되는 setTimeout에서 this를 찾으며, 결국 undefined로 출력된다.
* 따라서 settimeout, setinterval 함수 사용시 (추후 this를 사용하기 위해) 화살표 함수로 작성하는 것이 활용도가 높다.
```javascript
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

## ES6 Classes
```javascript
function User (first, last) {
 this.firstName = first
 this.lastName = last
}
User.prototype.getFullName = function(){
 return `&{this.firstName} &{this.lastName}`
}
```
* 일반 함수의 경우 아래와 같이 축약해서 사용할 수 있다.
* 보기에 더 깔끔하고 리엑트에서 많이 쓰이는 방식이다.
```javascript
class User {
 constructor (first, last){
  this.firstName = first
  this.lastName = last
 }
 getFullName() {
  return `&{this.firstName} &{this.lastName}`
 }
}
```

## 상속(확장)
* 클래스 함수를 상속(확장)하여 사용할 수 있다.
```javascript
class Vehicle {
 constructor(name, wheel){
  this.name = name
  this.whell = wheel
 }
}
const myVehicle = new Vehicle('운송수단', '2');
```
* super가 있는 자리에서 상속받은 Vehicle이 실행된다.
```javascript
class Car extends Vehicle {
 constructor(name, wheel, license) {
  super(name, wheel)
  this.license = license
 }
}
const myCar = new Car ('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
```
