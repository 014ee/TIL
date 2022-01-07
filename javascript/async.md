# ✅ asynce·await
* 프로미스를 좀 더 간결하고 동기적으로 실행되는 것 처럼 보이게 만들어준다.  
* (그렇다고 프로미스보다 더 좋은건 아니고 상황에 따라 선택)

## asynce
```js
function fetchUser(){
  return new Promise((resolve, reject) => {
    // 사용자의 정보를 백앤드에서 받아오는데 10초 정도 걸린다고 가정
    resolve('ellie')
  })
}

const user = fetchUser(); 
user.then(console.log)
console.log(user)
```
* `async`라는 키워드를 함수 앞에 쓰면 `자동으로 Promise로 변환`해준다.
```js
async function fetchUser(){
  // 사용자의 정보를 백앤드에서 받아오는데 10초 정도 걸린다고 가정
  return 'ellie'
}

const user = fetchUser(); 
user.then(console.log)
console.log(user)
```
## await
```js
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple(){
  await delay(1000)
  return '🍎'
}

async function getBanana(){
  await delay(1000)
  return '🍌'
}

async function pickFruits(){
  // 병렬적으로 실행(1초 후 실행)
  const applePromise = await getApple(); 
  const bananaPromise = await getBanana() 
  const apple = await applePromise;
  const banana = await bananaPromise;

  
  return `${apple} + ${banana}` // 리턴 실행
}
```
* 아래는 프로미스 방식인데, 프로미스도 너무 중첩적으로 체이닝을 하면 콜백 지옥과 다를 것이 없다.
```js
function pickFruits(){
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`)
  })
}

pickFruits().then(console.log)
```
## Promise.all api
* 값을 병렬적으로 가져와준다.
```js
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruist => fruits.join('+'))
}

pickAllFruits().then(console.log)
```
## Promise.race api
* 제일 먼저 리턴되는 하나의 값만 실행해준다.
```js
function pickOnlyOne(){
  turn Promise.race([getApple(), getBanana()])
}

pickOnlyOn().then(console.log)
```
