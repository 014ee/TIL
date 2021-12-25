# ✅ JS 함수
* 주로 하나의 고유한 역할을 하므로 서브 프로그램이라고도 불린다.
* 재사용이 가능한 특징을 가지고 있다.
* 함수명은 역할을 예측할 수 있도록 작성해, 넣어야 할 인수값과 받을 결과값을 예측할 수 있어야 한다. (ex. createCard, doSomthing)
* js는 함수에서 object이다. (때문에 변수에 할당, 인수로 전달, 리턴 가능한 것)
* js는 다이나믹 타이핑이기 때문에 함수의 인수로 어떤 데이터 타입을 넣어야 하는지 함수를 통해 알기 어려울 수 있다.
* 때문에 규모있는 프로젝트나 협업, 개발 라이브러화를 위해서는 타입스크립트를 사용하는 것이 유용하다.
* 리턴타입이 없는 함수는 기본적으로 `return undefined`가 들어가 있는 것과 같고, 이는 생략이 가능하다.
* 함수는 선언만 해서는 실행되지 않고, ()를 통해 호출해야 작동한다. 
```js
function name(param1, param2) {body... return} // 함수 선언식 (호이스팅 가능)
let name = function (param1, param2) {body... return} // 함수 표현식 
```
## 매개변수 기본값 설정
* `구식` 매개변수에 인수가 들어오지 않을 경우 기본값 넣어주기
```js
function showMessage(message, from) {
 if (from === undefined) {
  from = 'unknown'
 }
 consle.log(`${message} by ${from}`)
}
shoMessage('Hi!') // Hi! by unknown
```
* `최신식` 매개변수에 인수가 들어오지 않을 경우 기본값 넣어주기
```js
function showMessage(message, from = 'unknown') {
 consle.log(`${message} by ${from}`)
}
shoMessage('Hi!') // Hi! by unknown
```

## 나머지 매개변수 (ES 6)
* 배열형태로 전달
```js
function printAll(...args){
 for (let i = 0; i < args.length; i++) {
  console.log(arg[i])
 } 
}
printAll('dream', 'codeing', 'ellie')
```
* 배열 인자 넣는거 좀 더 간단하게 아래처럼 할 수 있음
```js
function printAll(...args){
 for (const arg of args) {
  console.log(arg)
 } 
}
printAll('dream', 'codeing', 'ellie')
```
* 더 간단하게 하려면 아래
```js
function printAll(...args){
 args.forEach((arg) => console.log(arg))
}
printAll('dream', 'codeing', 'ellie')
```
## Early return
* 나쁜 함수: 블럭 안에 로직이 많으면 가독성이 떨어짐
```js
function upgradeUser(user){
 if(user.point > 10) {
  long upgrade logic...
 }
}
```
* 좋은 함수: 조건이 맞이 않으면 빠르게 리턴
```js
function upgradeUser(user){
 if(user.point <= 10) {
  return
 }
 long upgrade logic...
}
```

## first-class function
* 함수 표현 (변수에 이름없는 함수를 할당하는 것) / 할당된 이후부터 호출이 가능(호이스팅 불가능)


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

# ✅ 화살표 함수
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
# ✅ 즉시실행 함수 (IIFE)
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

# ✅ 호이스팅
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

# ✅ 타이머 함수
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

# ✅ 콜백
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
``` js
function randomQuiz(answer, printYes, printNo) {
 if (answer === 'love you') {
  printYes();
 }else {
  printNo()
 }
}
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
