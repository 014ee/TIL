# 03-Mutable-Object-References

## ✅참조형 데이터

`Object`, `Array`, `Funtion`

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
