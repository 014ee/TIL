# ✅ 조건문
##  If Else
* 예시) Math의 랜덤함수와 내림처리를 통해 랜덤 숫자 추출하기
```js
export default function random() {
 return Math.floor(Math.random() * 10)
}

import random from './getRandom'
const number = random();
```
```js
if (number === 0){
 console.log('number is 0'); 
} else if (number === 2){
 console.log('number is 2')
}else {
 console.log('rest...')
}
```

##  Switch
* 조건을 여러 분기로 나누어 작성할 수 있다. `타입스크립트에서 정해진 타입을 검사하는데 유용`
* `break`를 넣어야 조건이 만족될 시 실행을 멈추고 빠져나온다. (`default`에서는 생략 가능)
```js
const color = 'red'
```
```js
switch (color) {
 case orange:
 case tangerine:
 console.log('color is orange')
 break
 case green:
 console.log('color is green')
 break
 case red:
 console.log('color is red')
 break
 default:
 console.log('what color is it?')
}
```
## 삼항 연산자
* (조건 ? '참일 때 반환하는 값' : '거짓일 때 반환하는 값')
```js
console.log( true === true ? '참' : '거짓') // 참
```

# ✅ 반복문
* 반복문을 동작시킬 때 통상적으로 `i` 변수를 사용한다.
* `while문에서 continue` : 반복문을 빠져나온 후 다시 조건식으로 올라가 조건이 맞으면 실행한다.
* `for문에서 continue` : 반복문을 빠져나온 후 `업데이트 구문을 먼저 실행`하고, 조건이 맞으면 실행한다.
* `break` : `while문`, `for문` 모두 즉시 실행을 종료하고 반복문에서 빠져나온다.
## while
* 조건이 맞는다면, 값이 `false`가 나올 때 까지 계속해서 반복한다.
```js
let i = 3
while (i > 0) {
 console.log(`while ${i}`) // while:3 / while:2 / while:1
 i--
}
```
## do while
* 블록 안의 명령을 일단 1번 이상은 실행하고 싶을 때 사용한다.
```js
do {
 console.log(`do whild: ${i}`) // do while: 0
} while (i > 0)
```
## For
* (`시작조건`; `종료조건`; `변화조건`)
```js
const arr = [1, 2, 3, 4]

for (let i = 0; i < arr.length; i += 1){
 console.log(arr[i]) // 1 / 2 / 3 / 4
}
```
## For in for
* `nested loops` (중첩 루프는 CPU에 좋지 않으므로 가급적 자제)
```js
for (let i = 0; i < 10; i ++) {
 for (let j = 0; j < 10; j ++) {
  console.log(i, j)
 }
}
```
## ...배열
```js
function printAll(...args){
 for (let i = 0; i < args.length; i++) {
  console.log(arg[i])
 } 
 // for문은 아래와 같이 간략하게 쓸 수 있다.
 for (const arg of args) {
  console.log(arg)
 } 
 // .forEach()를 쓰면 더 간략하게 가능하다.
  args.forEach((arg) => console.log(arg))
}
printAll('dream', 'codeing', 'ellie')
```
## For in
* 객체의 각 속성에 접근 가능한 반복문
```js
var person = {
name : 'Amy',
age: 28,
address: 'Seoul'
}
```
```js
for (let keys in person){
 console.log(person[keys]) // 'Amy' / 28 / 'Seoul'
}
```
```js
console.log('age' in person) // true
console.log('job' in person) // false
```
* Object 속성을 통해서도 key값을 배열로 받을 수 있긴 하다. (대신 추가 작업을 진행하려면 for문 써야되서 복잡)
```js
Object.keys(person) // ['name', 'age', address]
```
