# ✅ Promise
* 비동기적인 것을 수행할 때 콜백함수 대신 간편하게 실행시켜주는 자바스크립트 내장 객체
* 상태: `pending` > `fulfilled` or `rejected`
* `Producer` vs `Consumer`
## Producer
* 새로운 promise를 만들면, 전달한 executor라는 콜백 함수가 자동적으로 바로 실행이 된다.
```js
const promise = new Promise(resoleve, reject){
  // doing some heavy work(network, read files..)
  console.log('doing something')
  setTimeout(() => {
    // resolve('ellie')
    reject(new Error('no network'))
  }, 200)
}
```
## Consumer: then, catch, finally
```js
promise
  .then((value) => {
   console.log(value)
  })
  .catch(error => {
   console.log(error)
  })
  .finally(() => {
    console.log('finally')
  })
```
## 프로미스 체이닝
```js
const fetchNumber = new Promise((resoleve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000)
  })
})
.then(num => console.log(num)) // 5
```
## 에러 핸들링
```js
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resoleve('🐓'), 1000)
})

const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
})

const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resoleve(`${egg} => 🍳`), 1000)
})
```
```js
getHen()
.then(getEgg) // 값을 하나만 받아올 때는 다음과 같이 축약할 수 있음
.catch(error => {
  return '🥓'
})
.then(egg => cook(egg))
.then(meal => console.log(meal ))
.catch(console.log())
```
