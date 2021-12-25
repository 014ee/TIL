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
