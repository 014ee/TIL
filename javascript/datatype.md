
# 데이터 타입 확인
* `typeof`를 통해 특정 데이터 타입을 확인할 수 있다.
* null, 배열, 객체의 경우 object로 뭉뚱그려 반환되는 문제가 있다.
```javascript
console.log(typeof 'Hello world!') // string
console.log(typeof 1234) // number
console.log(typeof true) // boolean
console.log(typeof undefined) //undefined

console.log(typeof null) // object
console.log(typeof {}) // object
console.log(typeof []) // object
```
* 아래 코드를 통해 정확한 데이터 타입을 출력할 수 있다.
* `slice`를 하지 않으면 `[object 데이터타입]`으로 출력된다.
```javascript
export default function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```
* 위에서 작성한 코드를 다른 파일에서도 `import`하여 사용할 수 있다.
```javascript
import getType from './getType'
```


# 형변환
* `==` : 동등 연산자를 사용하면 형변환이 일어난다. (자바스크립트에서만 일어나는 특수한 케이스)
* 때문에 의도치 않게 다른 값이 나올 수 있으므로 사용을 자제하는 것이 좋다.
```javascript
console.log(1 == '1') // true
```
* truthy (참같은 값)
```javascript
true, 문자 데이터 ex 'false', {}, [], 1, 2, -12, 3.14 ...
```
* falsy (거짓 같은 값)
```javascript
false, '', null, undefined, 0, -0, NaN
```

