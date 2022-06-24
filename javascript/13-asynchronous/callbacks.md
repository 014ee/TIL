# Callbacks

## 🐇 비동기 프로그래밍과 콜백

{% hint style="info" %}
비동기적이라는 말은 데이터가 들어오거나 어떤 이벤트가 일어날 때까지 계산을 멈추고 대기하는 일이 잦다는 의미이다. 자바스크립트에서도 비동기 코드를 다루는 기능들을 제공하는데, 가장 기본적인 비동기 프로그래밍은 콜백을 통해 이루어진다. 콜백은 다른 함수에 전달하는 함수로, 콜백을 전달받은 함수는 어떤 조건을 만족하거나 비동기 이벤트가 일어나면 전달받은 콜백 함수를 호출한다.&#x20;
{% endhint %}

## 🐇 타이머

{% hint style="info" %}
일정 시간이 지나면 코드를 실행하는 것도 단순한 비동기 프로그램 유형 중 하나이다. setTimeout() 함수로 타이머를 설정할 수 있다.
{% endhint %}

```
setInterval(checkForUpdates, 1000 * 60); // 1분 간격으로 호출되는 콜백 함수
```

## 🐇 이벤트

{% hint style="info" %}
클라이언트 사이드 자바스크립트는 미리 지정된 계산을 실행하기보다는 사용자가 뭔가 하길 기다렸다가 그 행동에 반응하는 이벤트 주도적으로 실행된다. 이벤트 주도 프로그램은 지정된 컨텍스트에 지정된 타입의 이벤트를 처리한 콜백 함수를 등록하고, 웹 브라우저는 지정된 이벤트가 일어날 때마다 함수를 호출한다. 이런 콜백 함수를 이벤트 핸들러, 이벤트 리스너라고 부른다.
{% endhint %}

```
button.addEventListener('click', applyUpdate);
```

{% hint style="info" %}
대부분의 웹 API는 위 예제와 같이 이벤트를 발생시키는 객체에서 addEventListner()를 호출하는 방식으로 이벤트 핸들러를 정의하지만, 이벤트를 발생시키는 객체의 프로퍼티에 이벤트 리스너를 직접 할당하는 방식으로도 등록할 수 있다. 이런 형태의 이벤트 리스터 프로퍼티 이름은 관습적으로 항상 on으로 시작한다.
{% endhint %}

```
button.onclick = applyUpdate;
```



## 🐇 네트워크 이벤트

{% hint style="info" %}
네트워크 요청 역시 자바스크립트 프로그래밍의 대표적인 비동기 유형 중 하나이다. 브라우저에서 실행되는 자바스크립트는 다음과 같이 웹 서버에서 데이터를 가져올 수 있다.&#x20;
{% endhint %}

```
function getCurrentVersionNumber(versionCallback) {
  // 백엔드 버전 API에 HTTP 요청 
  let request = new XMLHttpRequest();
  request.open('GET', 'http://www.example.com/api/version');
  request.send();
  
  // 응답을 받았을 때 호출할 콜백 등록 
  request.onload = function() {
    if(request.status === 200) {
      let currentVersion = parseFloat(request.responseText);
      versionCallback(null, currentVersion);
    } else {
      versionCallback(response.statusText, null);
    }
  };
  
  // 네트워크 에러시 호출할 다른 콜백 등록 
  request.onerror = request.ontimeout = function(e) {
    versionCallback(e.type, null);
  }
}
```

## 🐇 콜백지옥 예제

{% hint style="info" %}
콜백을 여러번 중첩해서 사용하면 가독성, 문제분석, 유지보수, 수정 등이 어려워진다.
{% endhint %}

```js
class UserStorage {
  loginUser(id, password, onSuccess, onError){
    setTimeout(() => {
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
    setTimeout(() => { 
      if(user === 'ellie'){
        onSuccess({name: 'ellie', role: 'admin'})
      } else{
        onError(new Error('no access'))
      }
    }, 1000)
    
  }
}

const userStorage = new UserStorage();
const id = prompt('id를 입력하세요.');
const password = prompt('password를 입력하세요.');

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

## 🐇 콜백지옥 → 프로미스

```js
class UserStorage {
  return new Promise((resoleve, reject) => {
  setTimeout(() => {
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
   setTimeout(() => { 
      if(user === 'ellie'){
        resolve({name: 'ellie', role: 'admin'})
      } else{
        reject(new Error('no access'))
      }
    }, 1000)
   })
  }
}

const userStorage = new UserStorage();
const id = prompt('id를 입력하세요.');
const password = prompt('password를 입력하세요.');

userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then(user => alert(`Hello ${userWithRole.name}, you hava a ${userWithRole.role} role`))
  .catch(console.log)
```
