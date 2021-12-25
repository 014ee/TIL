# ✅ JS의 역사
* `1993년` UI요소가 더해진 최초의 대중적 웹 브라우저 모자이크가 시장에 나옴
* `1994년` 모자이크 웹 브라우저 개발을 이끌던 마크 앤더슨이 졸업 후 넷스케이프라는 회사를 설립 / 이후 모자이크에서 UI요소를 업그레이드한 넷스케이프 내비게이터 출시(HTML,CSS)
* `1994년` 동적인 웹으로의 발전을 위해 브랜든을 영입 후 SCHEME 스크립트 언어를 변형시킨 새로운 언어 모카(내부적 이름) 탄생(10일 안에 프로토타입을 베이스로 만들어진 유연한 언어)
* `1994년 9월` 공식적으로 라이브스크립트로로 이름 변경 후 넷스케이프 내비게이터 2에 라이브스크립트 엔진 인터프리터를 탑재하여 출시
* `1995년` 당시의 자바 인기에 편승하기 위해 자바스크립트로 이름 변경
* `1995년` MS에서 위기감을 느끼고 자바스크립트 언어를 리버스 엔지니어링(거의 카피)하여 J스크립트를 만든 후 IE에 탑재 (이후 두 회사의 기능 경쟁으로 크로스브라우징 이슈)
* `1996년 11월` 넷스케이프가 컴퓨터 시스템 표준을 관리하는 비영리 표준화 기구 ECMA 인터내셔널에 자바스크립트 표준화 요청
* `1997년 7월` 지켜야 할 문법적인 사항을 정리한 첫번째 ECMA 스크립트 문서 완성 (원래 ECMA-262였는데, 상표권 문제로 ECMA스크립트로 명명됨)
* `1998년` ES 2
* `1999년` ES 3 (정규표현식, try...catch 예외 처리) 
* `2000년` ES 4 이후 MS가 IE 인기에 건방져저서 더이상 ECMA 스크립트 표준에 참가하지 않음 (+ 다른 브라우저들도 생겨나는 등의 이유로 오랫동안 다시 크로스브라우징 이슈 > 덕분에 개발 인력이 많이 필요해졌고, 커뮤니티가 크게 형성됨에 따라 제이쿼리 같은 라이브러리, 프레임워크 등이 생겨나기도 함)
* `2004년` 모질라에서 파이어폭스 출시 / 제시 제임스가 비동기적으로 데이터를 서버에서 받아오고 처리해주는 AJAX 기술 명세서 작성 
* `2008년` 구글에서 크롬 브라우저 출시 (JIT이라는 강력한 자바스크립트 엔진 포함) > 드디어 브라우저 회사들 정신차리고 서로 협력하기로 함
* `2009년` HTML 5와 함께 ES 5 
* `2015년` ES 6 (let, const, class, 화살표함수, 템플릿 리터럴, 디스트럭처링 할당, spread 문법, rest 파라미터, symbor, promise, Map/Set, iterator/generator, module import/export) / 최근 JS기준이라고 할 수 있지만 IE에서는 지원 안함
* `2016년` ES 7 (지수연산자, Array.prototype.includes, String.prototype.includes)
* `2017년` ES 8 (async/await, Object 정적 메소드)
* `2018년` ES 9 (Object Rest/Spread 프로퍼티)

# ✅ JS 시작하기
* 개발자가 별도의 컴파일 작업을 수행하지 않는 `인터프리터 언어`이다.
* `명령형`, `함수형`, `프로토타입 기반 객체지향 프로그래밍`을 지원하는 멀티 패러다임 프로그래밍 언어이다.
* C나 Java와는 다르게 변수를 선언할 때 데이터 타입을 미리 지정하지 않으며, 할당된 값에 따라 타입이 변하는 `동적 타이핑`이다.
* 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
* node.js는 v8 자바스크립트 엔진을 이용하여 브라우저 이외의 환경에서 JS를 동작시키는 런타임 환경  
(서버 개발환경을 제공하는 것이 주된 목적이므로 DOM API 등의 클라이언트 사이드 WEB API는 제공하지 않고 대신 모듈, 파일 시스템, HTTP 등 빌트인 API를 제공)
```JS
// valina JS에서 변수 타입, 선언 등이 의도한 것과 다르게 사용되는 것을 예방하기 위해 아래와 같이 선언하고 사용할 것을 권장!
// ES 5 부터 지원)
'use strict';
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
