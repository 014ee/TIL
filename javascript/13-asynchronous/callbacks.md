# Callbacks

## 🐇 비동기 프로그래밍과 콜백

{% hint style="info" %}
비동기적이라는 말은 데이터가 들어오거나 특정 이벤트가 일어날 때까지 계산을 멈추고 대기하는 일이 잦다는 의미이다. 자바스크립트에서도 비동기 코드를 다루는 기능들을 제공하는데, 가장 기본적인 비동기 프로그래밍은 콜백을 통해 이루어진다. 콜백은 다른 함수에 전달하는 함수로, 콜백을 전달받은 함수는 어떤 조건을 만족하거나 비동기 이벤트가 일어나면 전달받은 콜백 함수를 호출한다.&#x20;
{% endhint %}

## 🐇 타이머와 콜백

{% hint style="info" %}
일정 시간이 지나면 코드를 실행하는 타이머도 단순한 비동기 프로그램 중 하나이다.&#x20;
{% endhint %}

```
setTimeout(checkForUpdates, 1000 * 60);  // 1분 뒤 딱 1번만 호출되는 콜백 함수
setInterval(checkForUpdates, 1000 * 60); // 1분 간격으로 계속 호출되는 콜백 함수
```

## 🐇 이벤트와 콜백

{% hint style="info" %}
클라이언트 사이드 자바스크립트는 미리 지정된 계산을 실행하기보다는 사용자가 뭔가 하길 기다렸다가 그 행동에 반응하는 이벤트 주도적으로 실행된다. 지정된 컨텍스트에 이벤트 타입과 이벤트를 처리할 콜백 함수를 등록하면 웹 브라우저는 해당 이벤트가 일어날 때마다 함수를 호출한다. 이런 콜백 함수를 이벤트 핸들러, 이벤트 리스너라고 부른다.
{% endhint %}

```
button.addEventListener('click', applyUpdate);
```

{% hint style="info" %}
대부분의 웹 API는 위 예제와 같이 이벤트를 발생시키는 객체에서 addEventListner()를 호출하는 방식으로 이벤트 핸들러를 정의하지만, 이벤트를 발생시키는 객체의 프로퍼티에 이벤트 리스너를 직접 할당하는 방식으로도 등록할 수 있다. 이런 형태의 이벤트 리스터 프로퍼티 이름은 관습적으로 on으로 시작한다.
{% endhint %}

```
button.onclick = applyUpdate;
```

## 🐇 네트워크 이벤트와 콜백

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

## 🐇 노드의 콜백과 이벤트

{% hint style="info" %}
노드는 비동기적으로 만들어져 있으며 많은 API가 콜백과 이벤트를 사용한다. 예를 들어 파일 콘텐츠를 읽는 기본 API도 비동기적이며 파일 콘텐츠를 읽으면 콜백 함수를 호출한다.
{% endhint %}

```
const fs = require('fs');  // fs 모듈은 파일 시스템 관련 API이다.
let options = {            // 프로그램에서 사용할 옵션 객체
  // 기본 옵션
}

// fs.readFile은 지정된 파일을 비동기적으로 읽고 콜백을 호출한다.
fs.readFile('config.json', 'utf-8', (err, text) => {
  if(err) {
    // 에러가 있으면 경고를 표시하고 계속 진행한다.
    console.warn('config 파일을 읽을 수 없습니다.', err);
  } else {
    // 에러가 없으면 파일 컨텐츠를 분석하고 options 객체에 할당한다.
    Object.assgin(options, JSON.parse(text));
  }
  
  startProgram(options);
})
```

{% hint style="info" %}
노드에는 이벤트 기반 API도 다양한데, 다음 함수는 노드에서 URL에 HTTP 요청을 보내는 방법이다. 노드는 addEventListener() 대신 on() 메서드를 사용해 이벤트 리스너를 등록한다.
{% endhint %}

```
const https = require('https');

function getText(url, callback) {
  // URL에 HTTP GET 요청을 시작한다.
  request = https.get(url);
  
  // 응답 이벤트를 처리할 함수를 등록한다.
  request.on('response', response => {
    // 응답 이벤트가 있다는 것은 응답 헤더를 받았다는 의미이다.
    let httpStatus = response.statusCode;
    
    // HTTP 응답 바디는 아직 받지 못했으므로
    // 바디를 받았을 때 호출할 이벤트 핸들러를 등록한다.
    response.setEncoding('utf-8');
    let body = '';
    
    // 바디의 텍스트 덩어리를 사용할 수 있게 되면 이 이벤트 핸들러를 호출한다.
    response.on('data', chunk => {body += chunk});
    
    // 응답이 완료되면 이 이벤트 핸들러를 호출한다.
    response.on('end', () => {
      if(httpStatus === 200) {
        callback(null, body);
      } else {
        callback(httpStatus, null);
      }
    });
  });
  
  // 저수준 네트워크 에러를 처리할 이벤트 핸들러도 등록한다.
  request.on('error', (err) => {
    callback(err, null);
  })
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

```javascript
class UserStorage {
  return new Promise((resolve, reject) => {
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
