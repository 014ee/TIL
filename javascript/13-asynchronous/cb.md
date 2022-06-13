# cb



## 동기적 콜백

```js
console.log(1) // 첫번째
setTimeoust(() => console.log('2'), 1000) // 네번째
console.log(3) // 두번째

function printImmediately(print){ // 동기
  print()
}
printImmediately(() => console.log('hello')) // 세번째
```

## 비동기적 콜백

```js
console.log(1) // 첫번째
setTimeoust(() => console.log('2'), 1000) // 네번째
console.log(3) // 두번째

function printImmediately(print){ // 동기
  print()
}
printImmediately(() => console.log('hello')) // 세번째

function printWithDelay(print, timeout){ // 비동기
  setTimeout(print, timeout)
}
printWithDelay(() => console.log('async callback'), 2000) // 다섯번째
```

## 콜백지옥 예제

* 가독성, 문제분석, 유지보수, 수정 등이 어렵다.

```js
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => { // 임의로 설정한 데이터 전송 딜레이
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id)
      } else{
        onError(new Error('not found'))
      }
    }, 2000)
  }
  
  getRoles(user, onSuccess, onError){
    setTimeout(() => { // 임의로 설정한 데이터 전송 딜레이
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'})
      } else{
        onError(new Error('no access'))
      }
    }, 1000)
    
  }
}
```

```js
const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')

userStorage.loginUser(id, password, (user) => {
  id,
  password,
  user => {
    userStorage.getRolse(
      user,
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`)
      },
      error => {}
    )
  },
  error => {
    console.log(error)
  }
})
```

## 콜배지옥 → 프로미스

```js
class UserStorage {
  return new Promise((resoleve, reject) => {
  setTimeout(() => { // 임의로 설정한 데이터 전송 딜레이
      if(
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ){
        resolve(id)
      } else{
        reject(new Error('not found'))
      }
    }, 2000)
  })
}
  
getRoles(user){
  return new Promise((resolve, reject) => {
   setTimeout(() => { // 임의로 설정한 데이터 전송 딜레이
      if(user === 'ellie'){
        resolve({name: 'ellie', role: 'admin'})
      } else{
        reject(new Error('no access'))
      }
    }, 1000)
   })
  }
}
```

```js
const userStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password')
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`))
  .catch(console.log)
```
