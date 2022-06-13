# 04-Type-Conversions



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
