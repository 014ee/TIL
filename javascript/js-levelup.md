# ✅ JS 데이터
## 구조 분해 할당 (비구조화 할당)
`객체` 및 `배열` 데이터 값을 구조 분해하여 각각의 값을 변수로 출력할 수 있다. (ex. 점표기법`user.name`, 인덱싱`user['name']`)
  
* 객체 구조분해 단계에서는 불러오는 객체의 속성명을 정확하게 입력해 주어야 한다.
* 이후 `:` 기호를 통해 원하는 이름으로 수정하여 사용할 수 있다. `name:heropy`
* 속성값이 없을 경우 `=` 기호를 통해 기본으로 출력될 값을 지정해줄 수 있다. `address='Korea'`
* 필요한 속성만 구조 분해할 수 있고, 객체의 변수명이 변경될 경우 수정이 용이하여 속성이 많을 경우 편리하게 사용할 수 있다.
```js
const user = {
 name: 'Heropy',
 age: 85,
 email: 'email@naver.com'
}
```
```js
const {name:heropy, age, email, address='Korea'} = user // user.name or user[name]
console.log(`사용자의 이름은 ${heropy}입니다.`) // 사용자의 이름은 Heropy입니다.
console.log(address) // undefined
```
* 배열의 구조분해는 배열된 데이터 순서대로 이루어진다.
```js
const fruits = ['Apple', 'Banana', 'Cherry']
cosnt [a, b, c, d] = fruits
console.log(a, b, c, d) // Apple Banana Cherry undefined
```
* 따라서 특정 데이터만 가져오고 싶으면 앞의 데이터는 변수명 없이 `,` 처리해주어야 한다. (ex. 바나나만 가져오고 싶은 경우)
```js
const fruits = ['Apple', 'Banana', 'Cherry']
cosnt [, b] = fruits
console.log(b) // Banana
```

## 전개 연산자
* 배열 데이터가 `,`로 구분된 `각각의 문자 데이터`로 전개되어 출력된다. 
```js
const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(...fruits) // Apple Banana Cherry Orange
```
* 매개변수에 전개 연산자를 사용하면 나머지 값을 전부 받아내는 용도로 사용할 수 있으며, 이를 `나머지 매개변수`라고 한다.
```js
function toObject(a, b, ...c) {
 return {
 a: a,
 b: b,
 c: c
 }
}
console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: [Cherry', 'Orange']}
```
* 객체 데이터에서 속성의 이름과 변수의 이름이 같으면 축약해서 사용할 수 있다.
```js
const toObject(a, b, ...c) => ({a, b, c})
console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: ['Cherry', 'Orange']}
```

## 데이터 불변성
### 원시 데이터 `String`, `Number`, `Boolean`, `undefined`, `null`
* 원시 데이터는 입력한 값이 기존의 메모리 주소에 있는 값과 동일하면, 새로운 메모리를 만들지 않고 기존의 메모리 주소를 바라보도록 지정해준다.
* 따라서 원시 데이터는 한번 메모리에 만들어지면 불변한다. (생긴게 같으면 같은 데이터, 다르면 다른 데이터)
```js
let a = 1
let b = 4

console.log(a, b, a === b) // 1, 4, false  (a와 b는 다른 메모리를 바라봄)
b = a
console.log(a, b, a === b) // 1, 1, true (a와 b는 같은 메모리를 바라봄)
a = 7
console.log(a, b, a === b) // 7, 1, false (a와 b는 다른 메모리를 바라봄)
let c = 1
console.log(b, c, b === c) // 1, 1, true (b와 c는 같은 메모리를 바라봄)
```
### 참조형 데이터 `Object`, `Array`, `Funtion`
* 원시 데이터와 달리 새로운 값을 만들 때마다 새로운 메모리 주소에 할당되는 구조를 가지고 있으므로 생긴게 같아도 서로 다른 데이터일 수 있다.
```js
let a = {k:1}
let b = {k:1}
console.log (a, b, a === b) // {k:1}, {k:1}, false
```
* 변수에 다른 `변수 값을 할당하면` 새로운 메모리를 만들거나 복사하는 것이 아니라, `할당한 변수 값의 메모리를 참조`한다.
* 즉, 여러 변수들이 같은 메모리 주소를 바라보고 있을 경우, 하나의 변수에서만 값을 수정해도 다른 변수들의 값이 함께 변경된다.
* 때문에 메모리 주소의 이동 없이 참조형 데이터 변수 값을 다른 변수에 지정하고 싶으면 바로 할당하지 말고 복사 과정을 거쳐야 한다.
```js
a.k = 7
b = a
console.log(a, b, a === b) // {k:7}, {k:7}, true

a.k = 2
console.log(a, b, a === b) // {k:2}, {k:2}, true
```

## 얕은 복사와 깊은 복사
### 얕은복사
```js
const user = {
 name: 'Heropy'
 age: 85,
 emails: ['email@naver.com']
}
```
* Object.assign() 메서드를 통한 복사
```js
const copyUser = Object.assign({}, user)
console.log(copyUser === user) // false
```
* 전개 연산자를 통한 복사
```js
const copyUser = {...user}
console.log(copyUser === user) // false
```
* 객체 데이터만 복사하였으므로 내부의 또다른 참조형 데이터인 `배열 데이터는 메모리 주소를 공유`하고 있다.
```js
user.emails.push('newemail@naver.com')
console.log(user.emails === copyUser.emails) // true
```
### 깊은 복사
* lodash의 [cloneDeep](https://lodash.com/docs/4.17.15#cloneDeep)을 이용한 깊은 복사를 통해 모든 데이터에 `별도의 메모리 주소`를 만들어줄 수 있다.
```js
// $ npm lodash i 설치 후

import _ from 'lodash'
const coopyUser = _.cloneDeep(user)
```
```js
user.emails.push('newemail@naver.com')
console.log(user.emails === copyUser.emails) // false
```

# ✅ JS 데이터 실습
## 내보내기, 가져오기
### 내보내기
* 하나의 파일에서 여러 데이터를 내보낼 수 있다. (default, named를 한 파일에 작성 가능)
* `Default export` 이름을 따로 지정하지 않아도 기본 통로로 빠져나감
```js
export default function(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```
```js
export default function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```
* `Named export` 이름을 지정해서 내보내야 함
```js
export function random() {
 return Math.floor(Math.random() * 10)
}
```
### 가져오기
* `Default import` default 또는 아무 이름으로 받아올 수 있음
```js
import defalt from './getType' // getType.js
import getType from './getType' // getType.js
import checkType from './getType' // getType.js
```
* `Named import` 중괄호 사이에 지정한 이름을 입력하여 받아올 수 있음
* 실행할 이름 바꾸고 싶으면 {이름 as 바꾸고 싶은 이름}
```js
import _ from 'lodash' // From 'node modules'
import {random as getRandom} from './getRandom' // getRandom.js
```
* 한 파일에서 이름이 지정된 여러 export 데이터를 가져올 경우 {이름, 이름}
 ```js
import {getType, random} from './export' // export.js
```
* 한 파일에 있는 모든 export 데이터를 가져와 하나의 이름으로 실행하고 싶을 때
```js
import * as 이름 from './export' // export.js
```
