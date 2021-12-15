# OBJECT (객체)

---

# 정적 메서드
## Object.assign()
* 대상 객체(첫번째 인수)에 하나 이상의 출처 객체 데이터를 병합시켜준다.
* 속성명이 같으면 값을 덮어쓴다.
```js
const target = {a:1, b:2}
const source = {b:4, c:5}
const returndTarget = Object.assign(target, source)

console.log(target) // {a:1, :4, c:5}
console.log(returnedTarget) // {a:1, b:4, c:5}

console.log(target === returnedTarget) // true (단순히 값이 같아서가 아니라 같은 메모리 주소를 바라보고 있다.)
```
* 대상 객체 부분에 새로운 빈 객체를 만들어서 기존 객체 데이터의 원본을 유지할 수 있다.
```js
const newTarget = Object.assign({}, target, source)
```

## Object.keys()
* 객체 데이터의 속성들(key)을 문자로 변환하여 배열 데이터로 만들어준다.
```js
const user = {
 name: 'Heropy',
 age: 85,
 email: 'email@naver.com'
}
```
```js
const keys = Object.keys(user)
console.log(keys) // ['name', 'age', 'email']
```
* .map() 메서드를 이용해서 속성에 대한 값들을 배열로 가져올 수 있다.
```js
const values = keys.map(key => user[key])
console.log(value) // ['Heropy', 85, 'email@naver.com']
```
