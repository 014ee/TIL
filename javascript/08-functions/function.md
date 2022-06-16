# function



## ✅ JS 함수 베이직

* `서브 프로그램` `재사용 가능` `반복되는 코드 감소` `수정 용이`
* js에서 `함수는 object`이다. (때문에 변수에 할당, 인수로 전달, 리턴 가능한 것)
* js는 `다이나믹 타이핑`이기 때문에 함수의 인수로 어떤 데이터 타입을 넣어야 하는지 함수를 통해 알기 어려울 수 있다.
* 때문에 예측 가능한 함수명(ex.createCard)으로 작성해주어야 하며, 규모있는 프로젝트나 협업, 개발 라이브러화를 위해서는 타입스크립트를 사용하는 것이 유용하다.
* 리턴타입이 없는 함수는 기본적으로 `return undefined`가 들어가 있는 것과 같고, 이는 생략이 가능하다.
* 함수는 선언만 해서는 실행되지 않고, ()를 통해 `호출해야 작동`한다.

```js
function name(param1, param2) {body... return} // 함수 선언식 (호이스팅 가능)
let name = function (param1, param2) {body... return} // 함수 표현식 = 일급 함수 (할당된 이후부터 호출 가능)
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
