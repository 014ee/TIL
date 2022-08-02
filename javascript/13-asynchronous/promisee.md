# promises

## 🐇 프라미스란?

{% hint style="info" %}
프라미스란 비동기 작업 결과를 나타내는 객체로, 이 결과는 준비됐을 수도 준비되지 않았을 수도 있다. 프라미스 객체에는 then()이라는 메서드가 있는데, 프라미스를 반환하는 함수 호출에 then()을 이어 붙이는 형태로 콜백을 등록할 수 있으며 이를 프라미스 체인이라고 한다. 각 콜백은 비동기 작업이 완료되었을 때 단 한번만 비동기적으로 호출된다. 즉 프라미스는 콜백을 들여쓰기가 아닌 선형에 가까운 읽기 쉬운 형태로 사용하는 새로운 방법이라고도 할 수 있으며 프라미스 체인을 통해 에러를 정확히 전달할 수 있다. 프라미스를 반환하는 함수와 프라미스 결과를 사용하는 함수 모두 이름을 동사 형태로 짓는 관행이 있다.
{% endhint %}

```javascript
function displayUserProfile(profile) { /* 이하 생략 */ }
getJSON('/api/user/profile').then(displayUserProfile);
```

#### promise 내부 프로퍼

#### 🐇 state 프라미스 상태

`pending(대기)` → `fulfilled(이행)` or `rejected(거부)`

> **이행(fullfill)과 거부(reject)**
>
> 비동기 코드가 정상적으로 실행되면 그 값은 then()의 첫번째 인자로 등록된 콜백 함수에 전달되며 그 프라미스는 이행(fullfill)됐다고 한다. 비동기 코드가 정상적으로 완료되지 못하면 그 값은 catch()에 등록되었거나 then()의 두번째 인자로 등록된 콜백 함수에 전달되는 일종의 에러이며 그 프라미스는 거부(reject)됐다고 한다. 프라미스의 excutor는 둘 중 하나를 반드시 호출해야 하며 이 때 변경된 상태는 더이상 변하지 않는다.

> **대기(pending)와 완료(settled)**
>
> 프라미스가 이행되지도 거부되지도 않았다면 대기(pending) **** 중이라고 하며, 이행 또는 거부된 상태 프라미스는 완료(settled)됐다고 한다. 일단 완료된 프라미스는 절대 이행이나 거부 상태로 바뀔 수 없다.&#x20;

> **해석(resolve)**
>
> 프라미스는 해석(resolve)되기도 하는데 해석된 상태를 이행 또는 완료 상태로 혼동하기 쉽지만 엄밀히 말해 이들은 다른 상태이며 해석된 상태를 이해하는 것이 프라이스를 깊게 이해하는데 매우 중요하다.

#### 🐇 result 프라미스 결과

## 🐇 제작자: executor 함수

```javascript
let promise = new Promise(function(resolve, reject) {
  // executor (제작 코드, '가수')
});
```

#### 🐇 프라미스 해석

{% hint style="info" %}
&#x20;fetch는&#x20;
{% endhint %}

## 🐇 소비자: then, catch, finally

#### 프라미스 체인

{% hint style="info" %}
&#x20;프라미스의 가장 중요한 장점 중 하나는 비동기 작업 시퀀스를 then()의 체인으로 이어서 콜백 헬을 방지한다는 점이다.&#x20;
{% endhint %}

```javascript
fetch(documentURL)                    // HTTP 요청을 보낸다.
  .then(response => response.json())  // 응답의 JSON 바디를 가져온다.
  .then(document => {                 // JSON 분석이 끝나면 
    return render(document);          // 문서를 사용자에게 표시한다.
  })
  .then(reundered => {                // 문서 렌더링이 끝나면
    cacheInDatabase(rendered);        // 로컬 데이터베이스에 캐시한다.
  })
  .catch(error => handle(error));     // 에러를 처리한다.
```

{% hint style="info" %}
다음 예제에서 쓰인 fetch() 함수는 오래되고 다루기 힘든 API를 사용하는 XMLHttpRequest를 대신해서 사용할 수 있는 Fetch API로, URL을 받고 프라미스를 반환한다. 그 프라미스는 HTTP 응답이 도착하기 시작하여 HTTP 상태와 헤더를 읽으면 이행된다. fetch()가 반환하는 프라미스가 이행되면 프라미스는 then() 메서드에 전달한 함수에 응답 객체를 전달한다. 이 응답 객체는 요청 상태와 헤더에 접근을 허용하며, 응답 바디에 각각 텍스트와 JSON 형태로 접근할 수 있는 text()와 json() 메서드도 가지고 있다.&#x20;
{% endhint %}

```javascript
fetch('api/user/profile').then(response => {
  // 프라미스가 해석되면 상태와 헤더가 존재한다.
  if(response.ok &&
     response.headers.get('Content-Type') === 'application/json') {
     // 아직 응답 바디는 받지 못한 상태에서 뭘 할 수 있을까?
  }
})
```

{% hint style="info" %}
초기 프라미스가 이행되긴 했지만 응답 바디는 아직 도착하지 않았을 수도 있으며, 따라서 응답 바디에 접근하는 text()와 json() 메서드는 프라미스를 반환한다. 다음과 같이 프라미스를 연속적인 체인으로 사용하는 것을 메서드 체인이라고 한다. fetch() 함수는 프라미스 객체를 반환하고 첫번째 .then()은 반환된 프라미스 객체의 메서드를 호출한다. 하지만 이 체인에는 두번째 .then()도 있으므로 첫번째 .then() 메서드는 반드시 프라미스를 반환해야 한다.&#x20;
{% endhint %}

```javascript
fetch('/api/user/profile')
  .then(response => {
    return response.json()
  })
  .then(profile => {
    displayUserProfile(profile);
  });
```

{% hint style="info" %}
일반적으로 메서드 체인을 사용하도록 설계된 API는 객체 하나만 존재하고 그 객체의 메서드는 해당 객체 자체를 반환한다. 하지만 프라미스는 then() 메서드를 호출할 때마다 새 프라미스 객체를 반환한다. 새 프라미스 객체는 then()에 전달된 함수가 완료되기 전에는 이행되지 않는다.&#x20;
{% endhint %}

#### 🐇 에러 핸들

{% hint style="info" %}
비동기 작업, 특히 네트워크와 관련된 작업은 매우 다양한 원인으로 실패하기 때문에 불가피하게 발생할 에러를 처리하려면 코드를 빈틈없이 작성해야 한다. 프라미스에서는 then() 메서드에 두번째 함수를 전달해 에러를 처리할 수 있다. 프라미스 기반 비동기 작업은 정상적으로 완료되면 then()의 첫번째 인자에 그 결과를 전달하고, 뭔가 잘못되면 두번째 인자에 예외를 전달한다.
{% endhint %}

```javascript
getJSON('/api/user/profile').then(displayUserProfile, handleProfileError);
```

{% hint style="info" %}
현실적으로 then()에 두가지 함수를 전달하는 경우는 별로 없다. 예를 들어 displayUserProfile()에서 에러가 일어나게 되었을 때를 생각해 보면, 콜백함수는 getJSON()이 완료될 때 비동기적으로 호출되므로 예외를 처리할 코드가 콜스택에 존재하지 않기 때문이다. 따라서 다음과 같이 에러 처리 코드를 만드는 경우가 더 일반적이다.
{% endhint %}

```javascript
getJSON('/api/user/profile').then(displayUserProfile).catch(handleProfileError);
// 위 코드는 아래 코드의 축약형이다.
getJSON('/api/user/profile').then(displayUserProfile).then(null, handleProfileError);
```

## 🐇 병렬 프라미스



## 🐇 프라미스 생성



## 🐇 프라미스 시퀀스



##



#### Producer: promise

* promise는 `만들어진 순간 바로 실행`되므로, 불필요한 통신을 하지 않기 위해서는 주의해야 한다.

```javascript
const promise = new Promise(resolve, reject){
  // doing some heavy work(network, read files..)
  console.log('doing something')
  setTimeout(() => {
    // resolve('ellie')
    reject(new Error('no network'))
  }, 200)
}
```

#### Consumer: then, catch, finally

```javascript
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

#### **프로미스 체이닝**

```javascript
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

#### 에러 핸들링

```javascript
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
