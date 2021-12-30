# ✅  Classes (ES 6)
## class
* `template`(붕어빵을 만들 수 있는 틀)
* 데이터는 들어있지 않고 틀만 만들어져 있어 실제 메모리에 올라가지 않는다.
* 한번만 선언한다.
 ```js
class User {
 constructor (firstName, lastName, age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
 }
 getFullName() {
  return `${this.firstName} ${this.lastName}`
 }
}
```
## object
* class를 이용해 만들어진 새로운 `instance`(붕어빵)
* 데이터가 들어가 있으므로 메모리에 올라간다.
* 여러번 만들어낼 수 있다.
 ```js
 const ellie = new User('ellie', 'Kim', 20)
 console.log(ellie.getFullName) // ellie Kim
 ```

# ✅ Getter/Setter
* 내가 기대하는 범위의 값을 사용자가 입력하지 않았을 때를 대비하여 미리 반환할 값을 준비해놓는 것
* 이 값을 다른 사람이 변경하는 것은 좋지 않기 때문에 인캡슐레이션화하여 숨길 수 있다.
```js
const steve = new User('steve', 'Lee', -1) // 나이가 -1인 것은 말이 안됨
```
 ```js
class User {
 constructor (firstName, lastName, age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
 }
 get age(){ // 값을 리턴
  return this._age;
 }
 set age(value){ // 값을 설정
 // if (value < 0){
 //  throw Error('age can not be negative')
 // }
  this._age = value < 0 ? 0 : value;
 }
}
```

# ✅ 상속(확장)
* class 상속을 통해 공통적으로 쓰이는 속성값을 재사용 할 수 있다. 
```javascript
class Vehicle {
 constructor(name, wheel){
  this.name = name
  this.wheel = wheel
 }
}
```
```js
class Car extends Vehicle {}
```
* 오버라이팅하면 기존에 정의한 값을 덮어쓰게 된다.
* 덮어쓰지 않고 새로운 값을 추가하기 위해 `super`를 사용한다. 
```js
class Car extends Vehicle {
 constructor(name, wheel, license) {
  super(name, wheel) // 기존에 상속받은 속성 유지(super)
  this.license = license // 새로운 속성 추가
 }
}
```
```js
const myCar = new Car ('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)
```

# ✅ instanceof
* 왼쪽에 있는 object가 오른쪽에 있는 class의 instance 인지 아닌지 확인 `true/false`
```js
console.log(Car instanceof Vehicle) // true
console.log(Car instanceof Object) // true (js에서 만든 모든 object, class들은 js의 Object를 상속한 것)
```
 
 
 
 
 
 
 
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


