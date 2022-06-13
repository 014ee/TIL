# operator

## ✅ 전개 연산자

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

## ✅ 옵셔널 체이닝

* `?.`을 사용하면 속성값이 없는 중첩 객체에 에러 없이 안전하게 접근할 수 있다.
* `?.` 앞의 평가 대상이 `undefined`나 `null`이면 평가를 멈추고 `undefined`를 반환한다.

```js
const Amy = {
 name: 'Amy',
 age: 20,
 job: {title:}
}

function displayJob(person){
 if(person.job?.title){
  console.log(person.job.title)
 }

```

## ✅ 할당 연산자

* `const` : 재할당 불가능
* `let` : 재할당 가능

### 변수 스코프(유효범위)

* 변수는 자신이 동작할 수 있는 유효한 범위를 갖는다.
* `let`, `const`는 변수가 선언되어 있는 `{블럭 내부}`가 유효 범위이다. (블록레벨)
* `var`는 변수가 선언되어 있는 `함수 범위 내부`가 유효 범위이다. (함수레벨)
* `var`는 의도하지 않은 범위에서 사용될 수도 있고, 개발자가 인식하지 못하는 메모리 누수로 이어질 수 있으니 자제하는 것이 좋다.

## ✅ 산술 연산자

```js
console.log(1 + 1) // 2 (더하기)
console.log(1 - 1) // 0 (빼기)
console.log(1 / 1) // 1 (나누기)
console.log(1 * 1) // 1 (곱하기)
console.log(5 & 2) // 1 (나머지)
console.log(2 ** 3) // 8 (2의 3승)
```

* `++a` 더하고 할당한다.

```js
let a = 2
const preIncrement = ++a
console.log(preIncrement, a) // 3, 3

// a = a + 1
// preIncreament = a
```

* `a++` 할당하고 더한다.

```js
let a = 2
const postIncrement = a++
console.log(postIncrement, a) // 3, 4

// postIncrement = a
// a = a + 1
```

## ✅ 비교 연산자

* `===` (일치 연산자): 값, 데이터타입 모두 일치해야 함
* `!==` (불일치 연산자): 다르면 true, 같으면 true를 반환함
* `==` (동등 연산자): 형변환이 일어나 값만 같으면 true

```
const a = 1 === '1' // false
const b = false !== true // true
const c = 'AB' == AB // true
```

### 형변환

* `==` : 동등 연산자를 사용하면 형변환이 일어난다. (자바스크립트에서만 일어나는 특수한 케이스)
* 때문에 의도치 않게 다른 값이 나올 수 있으므로 사용을 자제하는 것이 좋다.

```js
const a = 8
const b = '8'

console.log(a == b) // true
console.log(a + b) // '88'
console.log(a - b) // 0
```

### 명시적인 형변환

* 형변환을 할 때에는 명시적으로 해주어야 한다.

```js
Boolean('문자열') // true
Boolean('') // false
Number('11') // 11
```

### 형변환 더 알아보기

* truthy (참같은 값)

```js
true, 문자 데이터 ex 'false', {}, [], 1, 2, -12, 3.14 ...
```

* falsy (거짓 같은 값)

```js
false,  0, -0, NaN, null, undefined, ''
```

## ✅ 논리 연산자

* `||` (또는) : 여러 조건중 하나만 true여도 실행을 멈추고 값을 반환하므로, 가벼운 연산을 앞에 놓는게 효율적이다.
* `&&` (그리고) : 마찬가지로 앞에서 false가 나오면 나머지 조건은 실행하지 않으므로, 무거운 연산자는 뒤에 놓는다.
* `!` (부정 연산자) : 반대값을 반환한다.

```js
console.log(`or: ${a || b || check()}`)
```

```js
console.log(`and: ${a && b && check()}`)
```

```javascript
console.log('!:', !a) // !: true
```

* `번외` : null이 false임을 활용해 조건문 작성한 예시

```js
if (nullObj != null){nullObj.something}
```

## ✅ 연산 우선순위

* 연산의 우선순의는 아래와 같다.
* 괄호를 사용하여 먼저 계산되게 할 수 있다. (가독성도 향상됨)

1. `++` `--`
2. `!`
3. `*` `/` `%`
4. `+` `-`
5. `>` `<` `<=` `>=`
6. `==` `!=`
7. `&&`
8. `||`

```js
2 * 3 > 4 + 5 && 6 / 3 == 2 || !false
```

```js
2 * 3 > 4 + 5 && 6 / 3 == 2 || true
```

```js
6 > 9 && 2 == 2 || true
```

```js
false && true || true
```

```js
false || true
```

```js
true
```

## ✅ 단락회로 평가

### && 논리 연산자

* if문과 유사한 역할을 하며, 값이 있을 때만 뒤의 코드를 실행하도록 하여 값이 없을 때 에러가 발생하는 것을 방지할 때 유용하다.

```js
const obj
obj && console.log(obj) // obj가 true일 때만 && 뒤의 코드를 실행하므로 콘솔에 아무 것도 찍히지 않는다.
```

### || 논리 연산자

* if문과 유사한 역할을 하며, 값이 있을 때만 뒤의 코드를 실행하도록 하여 값이 없을 때 에러가 발생하는 것을 방지할 때 유용하다.

```js
const obj = 'cup'
obj || console.log(obj) // obj가 false일 때만 || 뒤의 코드를 실행하므로 콘솔에 아무 것도 찍히지 않는다.
```

## ✅ nullish 병합 연산자

* `a ?? b` a가 null 또는 undefined가 아니면 a, 그 외의 경우는 b 실행

```js
function pintMessage(text){
  const message = text ?? 'Nothing to display'
  console.log(message)
}
printMessage('Hello') // Hello
printMessage(null) // Nothing to display
```

* `default parameter`과 다른 점 : defalt parmeter는 값이 null인건 null로 출력한다.

```js
function pintMessage(text = Nothing to display){
  const message = text
  console.log(message)
}
printMessage(undefined) // Nothing to display
printMessage(null) // null
```

## ✅ 삼항 연산자

* (조건 ? '참일 때 반환하는 값' : '거짓일 때 반환하는 값')

```js
console.log( true === true ? '참' : '거짓') // 참
```
