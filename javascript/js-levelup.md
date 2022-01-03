# ✅ 구조 분해 할당 (비구조화 할당)
`객체` 및 `배열` 내 각각의 값을 변수로 출력할 수 있다. (ex. 점표기법`user.name`, 인덱싱`user['name']`)
## 객체 구조분해
* 객체 구조분해 단계에서는 불러오는 객체의 속성명을 정확하게 입력해 주어야 한다.
* 이후 `:` 기호를 통해 원하는 이름으로 수정하여 사용할 수 있다. `name:heropy`
* 속성값이 없을 경우 `=` 기호를 통해 기본으로 출력될 값을 지정해줄 수 있다. `address='Korea'`
* 필요한 속성만 구조분해할 수 있고, 객체의 변수명이 변경될 경우 수정이 용이하여 속성이 많을 경우 편리하게 사용할 수 있다.
```js
const user = {
 name: 'Heropy',
 age: 85,
 email: 'email@naver.com'
}
```
```js
function displayPerson(user){
 const {name:nickname, age, email, address='Korea'} = user
 console.log(`사용자의 닉네임은 ${nickname}입니다.`) // 사용자의 닉네임은 Heropy입니다.
 console.log(address) // undefined
}
```
## 배열 구조분해
* 배열의 구조분해는 배열된 데이터 순서대로 이루어진다.
```js
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d) // Apple Banana Cherry undefined
```
* 따라서 특정 데이터만 가져오고 싶으면 앞의 데이터는 변수명 없이 `,` 처리해주어야 한다. (ex. 바나나만 가져오고 싶은 경우)
```js
const fruits = ['Apple', 'Banana', 'Cherry']
cosnt [, b] = fruits
console.log(b) // Banana
```

# ✅ 전개 연산자
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

# ✅ 내보내기, 가져오기
## 내보내기
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
## 가져오기
* `Default import` default 또는 아무 이름으로 받아올 수 있음
```js
import defalt from './getType.js'
import getType from './getType.js'
import _ from 'lodash' // From 'node modules'
```
* `Named import` 중괄호 사이에 지정한 이름을 입력하여 받아올 수 있음
```js
import {random} from './getRandom.js'
```
* 실행할 이름 바꾸고 싶으면 {이름 as 바꾸고 싶은 이름}
```js
import {random as getRandom} from './getRandom.js'
```
* 한 파일에서 이름이 지정된 여러 export 데이터를 가져올 경우 {이름, 이름}
 ```js
import {getType, random} from './export.js'
```
* 한 파일에 있는 모든 export 데이터를 가져와 하나의 이름으로 실행하고 싶을 때
```js
import * as 이름 from './export.js'
```
