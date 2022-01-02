# ✅ Ajax (Asynchronous Js and XML)
브라우저에서 페이지를 이동하지 않고, 자바스크립트를 통해 HTTP Request를 보내고, 그 응답을 받아 처리할 수 있는 기술  
[AJAX MDN](https://developer.mozilla.org/ko/docs/Web/Guide/AJAX/Getting_Started)
## Request 보내기
```js
const reqUrl = "https://jsonplaceholder.typicode.com/photos" // 받아올 데이터 경로
const reqObj = new XMLHttpRequest(); // XMLHttprequest 객체 생성
```
```js
reqObj.open('GET', reqUrl); // 1
requestObj.responseType = 'json';
reqObj.send() // 4

requestObj.onload = () => {
  console.log(requestObj.response)
  start(requestObj.response);
 }
```
## Response 받아서 처리하기
#### `readyState` AJAX 요청에 따라 0~4까지 변화함
readyState | 의미
:--: | :--
0 | open 메드 호출 전
1 | open 메소드 호출 후, send 메소드 호출 전
2 | 보낸 요청에 대해 응답 헤더가 수신된 후
3 | 응답의 바디 부분이 수신중일 때
4 | 모든 응답이 수신되었을 때

#### `onreadystatechange` readyState가 변할 때마다 호출되는 콜백 함수
```js
reqObj.onreadystatechange = function a(){
  console.log(this.readyState, this.status);
  if(this.readyState == 4 && this.status == 200){
    console.log('정상적인 수신 확인!')
  }
}

// 기타 콜백 함수 활용 가능한 속성
// onloadstart, onprogress, onabort, onerror, onload, ontimeout, onloadend
```

#### `status` HTTP response의 응답 헤더에 기록된 코드
Response Code | 의미
:--: | :--
200 | OK
404 | Not Found
500 | Internal Error
... | ...

