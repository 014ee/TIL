# ✅ 조건문
* 예시) Math의 랜덤함수와 내림처리를 통해 랜덤 숫자 추출하기
```js
export default function random() {
 return Math.floor(Math.random() * 10)
}

import random from './getRandom'
const a = random();
```
##  `If Else`
```javascript
if (a === 0){
 console.log('a is 0'); 
} else if (a === 2){
 console.log('a is 2')
}else {
 console.log('rest...')
}
```

##  `Switch`
* 조건을 여러 분기로 나누어 작성할 수 있다. `타입스크립트에서 정해진 타입을 검사하는데 유용`
* 조건이 끝나면 뒤에 `break`를 넣어야 한다. (나머지를 처리하는 `default`에서는 생략 가능)
```js
switch (a) {
 case 0:
 case -0:
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
## `삼항 연산자`
* (조건 ? '참일 때 반환하는 값' : '거짓일 때 반환하는 값')
```javascript
console.log( true === true ? '참' : '거짓') // 참
```

# ✅ 반복문
* 반복문을 동작시킬 때 통상적으로 `i` 변수를 사용한다.
* `i`는 조건 내에서 변수에 할당 할 수도 있고, 외부에서 할당 후 사용할 수도 있다.
## `while`
* 값이 `false`가 나올 때 까지 계속해서 반복한다.
* 보통 조건이 맞을 때만 실행하고 싶을 때 사용한다.
```js
let i = 3
while (i > 0) {
 console.log(`while ${i}`) // while:3 / while:2 / while:1
 i--
}
```
## `do while`
* 조건보다 블록 안의 명령을 먼저 실행하고 싶을 때 사용한다.
```js
do {
 console.log(`do whild: ${i}`) // do while: 0
} while (i > 0)
```
## `For`
* (`시작조건`; `종료조건`; `변화조건`)
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
* `nested loops` (중첩 루프는 CPU에 좋지 않으므로 가급적 자제)
```js
for (let i = 0; i < 10; i ++) {
 for (let j = 0; j < 10; j ++) {
  console.log(i, j)
 }
}
```
