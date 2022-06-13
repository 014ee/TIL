# datatype

## ✅ 데이터 타입

### typeof (+ instanceof, Number.isNaN(), Array.isArray())

* `typeof`를 통해 특정 데이터 타입을 확인할 수 있다.

```js
console.log(typeof 'Hello world!') // string
console.log(typeof 1234) // number
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
```

* `null`, `object`, `array` 참조형 데이터의 경우 `object`로 뭉뚱그려 반환되는 문제가 있다.

```js
console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object
```

### 정확한 데이터 타입 출력

* 아래 코드를 통해 `정확한 데이터 타입을 출력`할 수 있다.

```js
export default function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1) // slice를 하지 않으면 [object 데이터타입]으로 출력
} 
```

* 위에서 작성한 코드를 다른 파일에서 `import`하여 사용할 수 있다.

```js
import getType from './getType'
```

### 번외: 숫자 같은데 숫자가 아닌 값

```js
const infinity = 1 / 0 // infinity
const negativeInfiity = -1 / 0 // -infinity
const nAn = 'not a number' / 2 // NaN
const bigInt = 1234567890123456789012345678900n // bigint (크롬이랑 파폭에서만 지원 / 잘은 안쓰일 듯)
```

## ✅ 데이터 불변성

### 원시 데이터 `String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`

* 원시 데이터는 `할당된 값 자체가 메모리에 저장`된다.
* 새로 입력한 값이 메모리 주소 이미 있으면, 새로운 메모리를 만들지 않고 기존의 메모리 주소를 바라보도록 지정해준다.
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

* 참조형 데이터는 그 안에 어떤 값이 담기든, 새로운 값을 만들 때마다 `새로운 메모리 주소에 할당`된다.
* 즉 각각의 참조형 데이터 박스가, 그 안에 담겨있는 각각의 데이터를 바라보고 있는 구조이다. (2중으로 바라봄)
* `가령 각각의 참조형 데이터 안에 동일한 원시형 데이터가 있다면, 서로 다른 위치에서 같은 원시 데이터를 바라보고 있는 것`이다.

```js
let a = {k:1}
let b = {k:1}
console.log (a === b) // false
console.log (a.k === b.k) // true
```

* 변수에 `참조형 데이터가 할당된 변수를 할당하면` 새로운 메모리를 만들지 않고, 할당된 변수가 바라보고 있는 동일한 참조형 데이터 박스를 바라본다.
* 즉, 같은 메모리 주소를 바라보고 있으므로 하나의 변수에서만 값을 수정해도 다른 변수 값이 함께 변경된다.
* 때문에 참조형 데이터 변수 값을 다른 변수에 새롭게 복사하고 싶으면, 바로 할당하지 말고 복사 과정을 거쳐야 한다.

```js
a.k = 7
b = a
console.log(a, b, a === b) // {k:7}, {k:7}, true

a.k = 2
console.log(a, b, a === b) // {k:2}, {k:2}, true
```

## ✅ 얕은 복사와 깊은 복사

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
