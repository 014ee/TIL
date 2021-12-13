# ✅ JS 시작하기

## 데이터 타입 확인
* `typeof`를 통해 특정 데이터 타입을 확인할 수 있다.
* null, 배열, 객체의 경우 object로 뭉뚱그려 반환되는 문제가 있다.
```javascript
console.log(typeof 'Hello world!') // string
console.log(typeof 1234) // number
console.log(typeof true) // boolean
console.log(typeof undefined) //undefined

console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object
```
* 아래 코드를 통해 정확한 데이터 타입을 출력할 수 있다.
* `slice`를 하지 않으면 `[object 데이터타입]`으로 출력된다.
```javascript
export default function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```
* 위에서 작성한 코드를 다른 파일에서도 `import`하여 사용할 수 있다.
```javascript
import getType from './getType'
```

## 산술, 할당 연산자
* 산술 연산자: 더하기, 빼기, 곱하기, 나누기, 나머지
* 할당 연산자: `const`(재할당 불가능), `let`(재할당 가능)

## 비교, 논리 연산자
* `===` (일치 연산자): 값, 데이터타입 모두 일치해야 함
* `!==` (불일치 연산자): 다르면 true, 같으면 true를 반환함
* `==` (동일 연산자): 형변환이 일어나 값만 같으면 true
```javascrip
const a = 1 === '1' // false
const b = false !== true // true
const c = 'AB' == AB // true
```
* `&&` (그리고): 모두 true여야 true
* `||` (또는): 하나만 true여도 true
* `!` (부정 연산자): 반대값을 반환함
```javascript
console.log('&&:' , a && b && c) // &&: false
console.log('||:', 'a || b || c' ) // ||: true
console.log('!:', !a) // !: true
```

## 삼항 연산자
* (조건 ? '참일 때 반환하는 값' : '거짓일 때 반환하는 값')
```javascript
console.log(true ? '참' : '거짓') // 참
```

## 조건문 (If Else, Switch)
* Math의 랜덤함수와 내림처리를 통해 랜덤 숫자 추출하기
```javascript
export default function random() {
 return Math.floor(Math.random() * 10)
}

import random from './getRandom'
const a = random();
```
* `If Else`
```javascript
if (a===0){
 console.log('a is 0'); 
} else if (a===2){
 console.log('a is 2')
}else {
 console.log('rest...')
}
```

* `Switch`: 조건을 여러 분기로 나누어 작성할 수 있다.
* 조건이 끝나면 뒤에 `break`를 넣어야 한다. (나머지를 처리하는 `default`에서는 생략 가능)
* 딱 떨어지는 조건을 갖은 조건문에서 사용하면 코드를 깔끔하게 작성할 수 있다.
```javascript
switch (a) {
 case 0:
 console.log('a is 0')
 break
 case 2:
 console.log('a is 2')
 break
 case 4:
 console.log('a is 4')
 break
 default:
 console.log('rest...')
}
```

## 반복문 (For)
* (시작조건; 종료조건; 변화조건)
* 반복문을 동작시킬 때 통상적으로 `i` 변수를 사용한다.
```javascript
const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1){
 const li = document.createElement('li');
 li.textContent = `list-${i + 1}`
 
 if ((i+1) % 2 === 0){
  li.addEventListener('click', function(){
   console.log(li.textContent)
  })
 }
 ulEl.appendChild(li);
}
```

## 변수 유효범위
* 변수는 자신이 동작할 수 있는 유효한 범위를 갖는다.
* `let`, `const`는 변수가 선언되어 있는 `{블럭 내부}`가 유효 범위이다. (블록레벨)
* `var`는 변수가 선언되어 있는 `함수 범위 내부`가 유효 범위이다. (함수레벨)
* 함수레벨은 의도하지 않은 범위에서 사용될 수도 있고, 메모리 차지로 개발자가 인식하지 못하는 메모리 누수로 이어질 수 있다.

## 형변환
* `==` : 동등 연산자를 사용하면 형변환이 일어난다. (자바스크립트에서만 일어나는 특수한 케이스)
* 때문에 의도치 않게 다른 값이 나올 수 있으므로 사용을 자제하는 것이 좋다.
```javascript
console.log(1 == '1') // true
```
* truthy (참같은 값)
```javascript
true, 문자 데이터 ex 'false', {}, [], 1, 2, -12, 3.14 ...
```
* falsy (거짓 같은 값)
```javascript
false, '', null, undefined, 0, -0, NaN
```

# ✅ JS 함수
## 함수 복습
* 함수 내에서 return을 사용하면, 밖으로 반환해줌과 동시에 해당 함수를 종료하겠다는 의미
* 따라서 return 밑의 실행문은 작동이 되지 않으며, 이를 활용해 함수 내에 조건문을 만들어 특정 조건에 만족하면 함수가 종료되게 만들 수 있다.
* 함수에 따로 매개변수를 입력하지 않아도, 함수 내에서 arguments라는 객체를 사용하여 인수를 받을 수 있다. (권장하는 방법은 아님)
```javascript
function sum (){
 return arguments[0] + arguments[1];
}

console.log(sum(7,3)); // 10
```

## 화살표 함수
* return 키워드 앞에 실행문이 있다면 실행되지 않는다.
* 일반함수
```javascript
const double = function(x) {
 return x * 2
}
```
* 화살표 함수
```javascript
const double = (x) => {
 return x * 2
}
```
* 매개변수가 하나일 때는 소괄호도 삭제할 수 있다.
* 축약형으로 `중괄호`과 `return` 키워드를 함께 삭제할 수 있다. (이 둘은 세트)
```javascript
const double = x => x * 2
```
* 화살표 함수에서 객체데이터 사용시 소괄호로 감싸줘야 한다.
```javascript
const douoble = x => ({name:'Hello'})
```

## 즉시실행 함수 (IIFE)
* 함수를 만들자마자 즉시 실행해서 동작시키는 방법
* 소괄호 2개를 사용해서 쓴다. `(함수)()`  or `(함수 ())` // 2번째 방법 권장
* 다른 함수와 분리되어 인식이 잘 안되므로, 즉시 실행 함수 끝에는 `;` 을 붙여줘야 한다.
```javascript
const  a = 7;

(function (){
 console.log(a*2)
})();
```
```javascript
const  a = 7;

(function (){
 console.log(a*2)
}());
```

## 호이스팅
* 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
* 함수가 너무 길어질 경우, 어떤 함수인지 로직을 확인하기 전 쉽게 해석하기 위해 호이스팅을 사용할 수 있다.
* `함수 표현일 때는 함수 호이스팅이 안된다.`
```javascript
const a = 7
double();

function double(){
 console.log(a*2)
}
```

## 타이머 함수
* `setTimeout(함수, 시간)` : 일정 시간 후 함수 실행
* `setInterval(함수, 시간)` : 시간 간격마다 함수 실행
* `clearTimeout()`  : 설정된 timeout 함수를 종료
* `clearInterval()` : 설정된 interval 함수를 종료
```javascript
const timer = setTimeout (() => {
 console.log ('Heropy');
}, 3000) // 3초 뒤 콘솔 실행

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
 clearTimeout(timer); // h1을 클릭하면 타임아웃 종료
})
```

## 콜백
* 함수를 인수로 넣어 함수 내부에서 호출시켜주는 것 (함수의 인수로 사용되는 함수)
* 타임아웃이나 로직이 복잡해서 처리하는데 시간이 오래 걸리는 경우 콜백함수 사용하여 `실행 위치를 보장`해줄 수 있다.
```javascript
function timeout(callback){
 setTimeout(() = > {
  console.log('Helopy')
  callback()
 }, 3000)
}

timeout(() => {
 console.log('done!');
})
```

# ✅ JS 클래스

## 생성자 함수
* 객체데이터 내 속성과 매소드를 통틀어서 멤버라고도 한다.
* 아래와 같이 중복되는 코드를 하나하나 작성하면 코드가 길어지고 비효율적이다.
```javascript
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
```javascript
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

## this
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
```javascript
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
