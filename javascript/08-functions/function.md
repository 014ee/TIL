# function

## 🐇 This

* this의 대상은 this를 사용하는 함수를 어떻게 실행하느냐에 따라 바뀐다.
* `일반함수에서 this는 window` `'use strict' 모드의 일반함수에서 this는 undefined`

#### 일반 함수의 this

* 일반 함수는 `함수가 호출된 위치`에 따라 this를 정의한다.



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





### Early return

* 함수 내에서 `return`을 사용하면, 밖으로 반환해줌과 동시에 해당 함수를 종료한다.
* 이를 활용해 함수 내에 조건문을 만들어 특정 조건에 만족하면 함수가 종료되게 만들 수 있다.
* `나쁜 함수` : 블럭 안에 로직이 많으면 가독성이 떨어진다.

```js
function upgradeUser(user){
 if(user.point > 10) {
  long upgrade logic...
 }
}
```

* `좋은 함수` 조건이 맞지 않으면 빠르게 리턴된다.

```js
function upgradeUser(user){
 if(user.point <= 10) {
  return
 }
 long upgrade logic...
}
```

### 매개변수 설정

* 매개변수에 기본값 넣어주기 `구식`

```js
function showMessage(message, from) {
 if (from === undefined) {
  from = 'unknown'
 }
 consle.log(`${message} by ${from}`)
}
shoMessage('Hi!') // Hi! by unknown
```

* 매개변수에 기본값 넣어주기 `최신식`

```js
function showMessage(message, from = 'unknown') {
 consle.log(`${message} by ${from}`)
}
shoMessage('Hi!') // Hi! by unknown
```

* 매개변수 없이, 함수 내에서 `arguments`라는 객체로 인수를 받을 수도 있다. `권장 사항은 아님`

```js
function sum (){
 return arguments[0] + arguments[1];
}
console.log(sum(7,3)); // 10
```

### 나머지 매개변수 (ES 6)

* 배열형태로 값을 전달해준다.

```js
function printAll(...args){
  args.forEach((arg) => console.log(arg))
}
printAll('dream', 'codeing', 'ellie')
```

## ✅ 화살표 함수

* `return` 키워드 앞에 실행문이 있다면 사용할 수 없다.

```js
const double = function(x) {
 return x * 2
}
```

```js
const double = (x) => {return x * 2}
```

* 매개변수가 하나일 때는 소괄호도 삭제할 수 있다.
* 축약형으로 `중괄호`과 `return` 키워드를 함께 삭제할 수 있다. (이 둘은 세트)

```js
const double = x => x * 2
```

* 화살표 함수에서 객체데이터 사용시 소괄호로 감싸줘야 한다.

```js
const douoble = x => ({name:'Hello'})
```

## ✅ 호이스팅

* var과 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
* 함수가 너무 길어질 경우, 어떤 함수인지 로직을 확인하기 전 쉽게 해석하기 위해 호이스팅을 사용할 수 있다.
* `함수 표현일 때는 함수 호이스팅이 안된다.`

```js
const a = 7
double();

function double(){
 console.log(a*2)
}
```

## ✅ 즉시실행 함수 (IIFE)

* 함수를 만들자마자 즉시 실행해서 동작시키는 방법
* 소괄호 2개를 사용해서 쓴다. `(함수)()` or `(함수 ())`
* 다른 함수와 분리되어 인식이 잘 안되므로, 즉시 실행 함수 끝에는 `;` 을 붙여줘야 한다.

```js
(function (){
 console.log('Hello')
})();
```

```js
(function (){
 console.log('Hello')
}());
```

## ✅ 콜백

* 함수를 인수로 넣어 함수 내부에서 호출시켜주는 것 (함수의 인수로 사용되는 함수)
* 타임아웃이나 로직이 복잡해서 처리하는데 시간이 오래 걸리는 경우 콜백함수 사용하여 `실행 위치를 보장`해줄 수 있다.

```js
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

```js
function randomQuiz(answer, printYes, printNo) {
 if (answer === 'love you') {
  printYes();
 }else {
  printNo()
 }
}
```

## ✅ 타이머 함수

* `setTimeout(함수, 시간)` : 일정 시간 후 함수 실행
* `setInterval(함수, 시간)` : 시간 간격마다 함수 실행
* `clearTimeout()` : 설정된 timeout 함수를 종료
* `clearInterval()` : 설정된 interval 함수를 종료

```js
const timer = setTimeout (() => {
 console.log ('Heropy');
}, 3000) // 3초 뒤 콘솔 실행

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
 clearTimeout(timer); // h1을 클릭하면 타임아웃 종료
})
```
