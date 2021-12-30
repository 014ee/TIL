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
