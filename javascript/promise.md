# ✅ Promise
* 비동기적인 것을 수행할 때 콜백함수 대신 간편하게 실행시켜주는 자바스크립트 내장 객체
* 상태: `pending(실행중)` → `fulfilled(완료)` or `rejected(실패)`
* 역할: `Producer(데이저 제공)` vs `Consumer(데이터 사용)`
## Producer: promise
* promise는 `만들어진 순간 바로 실행`되므로, 불필요한 통신을 하지 않기 위해서는 주의해야 한다.
```js
const promise = new Promise(resolve, reject){
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
  .then((value) => { // promise가 정상적으로 수행되면 값을 받아와서 다음 작업 진행
   console.log(value)
  })
  .catch(error => {  // promise에 에러가 발생했을 경우 실행
   console.log(error)
  })
  .finally(() => { // 성공, 에러 관계없이 무조건 마지막에 호출
    console.log('finally')
  })
```
## 프로미스 체이닝
```js
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000)
})
fetchNumber
.then(num => num * 2) // 2
.then(num => num * 3) // 6
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000) // 5
  })
})
.then(num => console.log(num)) // 5
```
## 에러 핸들링
```js
const getHen = () => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000)
})

const getEgg = hen => 
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000)
})

const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000)
})
```
```js
getHen()
.then(getEgg) // 값을 하나만 받아서 그대로 전달할 때는 하나로 축약할 수 있음
.catch(error => {
  return '🥓'
})
.then(egg => cook(egg))
.then(meal => console.log(meal))
.catch(console.log()) // 🥓 => 🍳
```

