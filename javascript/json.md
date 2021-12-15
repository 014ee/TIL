# JSON (Javascript Object Notation)
비동기 브라우저/서버통신(AJAX)을 위해 자바스크립트의 데이터를 사람이 읽을 수 있는 형태로 표현하는 개방형 표준 포맷.  
특히, 인터넷에서 데이터를 주고 받을 때 그 를 표현하는 방법  

JSON은 경량화가 중요하기 때문에 하나의 메모리만 참조할 수 있는 `{큰 덩어리}에 속성:값 형태의 문자 데이터로 관리`가 되며,  
JSON 데이터를 JS파일에 import 키워드로 가져오면, JSON 포맷에 의해 객체 데이터처럼 불러와 진다.  
  
*(하나의 json 파일은 하나의 데이터를 의미?)*

## 자료형
* `number`
* `string`  0개 이상의 유니코드 문자 `큰 따옴표로만 인식됨`
* `boolean`  true, false
* `array`  0 이상의 값으로 이어진 순서가 있는 리스트
* `object`  순서가 없는 key:value의 집합
* `null`  빈 값으로 null을 사용한다.

## 문법
* JSON 파일 작성 예시
```js
{
 "name":"Heropy",
 "age":85,
 "emails":["email@naver.com", "newemial@naver.com"]
}
```
* json 파일을 js에 가져오는 방법
```
import myData from './myData.json'
```
* js에 문자 형태로 가져와진 json 데이터를 js에서 활용할 수 있는 객체 데이터로 재조립해주는 방법
```js
const obj = JSON.parse(myData)
console.log(typeof obj) // object
```
* js 데이터를 json의 포맷에 맞춰 문자화시켜주는 방법
```js
const user = {
 name: 'Heropy',
 age: 85,
 emils: [
  'email@naver.com',
  'newemail@naver.com'
 ]
}

const str = JSON.stringify(user)
console.log(typeof str) // string
```

# STORAGE
`개발자도구` > `Application` > `Storage`
## js과 json으로 storage에 접근
* js에서 특정한 데이터를 브라우저 storage에 저장하는 방법
```js
const user = {
 name: 'Heropy',
 age: 85,
 emils: [
  'email@naver.com',
  'newemail@naver.com'
 ]
}

localStorage.setItem('user', JSON.stringify(user));
```
* storage에 있는 특정 데이터를 js에 객체 데이터로 가져오는 방법
```js
const obj = JSON.parse(localStoryge.getItem('user'))
```
* storage에 있는 특정 데이터를 js에 객체 데이터로 가져온 후 수정하는 방법
```js
const str = localStorage.getItem('user') // string으로 가져와짐
const obj = JSON.parse(str) // object 데이터로 변환 
obj.age = 22 // 데이터 속성값 수정
localStorage.setItem('user', JSON.stringify(obj)); // json 포맷으로 변환 후, storage에 저장
```
* 데이터 삭제하는 방법 (로컬 스토리지는 반영구적이므로 삭제하기 전까지는 코드를 지워도 남아있다.)
```js
localStorage.removeItem('user')
```
## lowdb로 storage에 접근
[lowdb](https://github.com/typicode/lowdb)란?   
웹브라우저에서 사용할 수 있는 json 기반의 작은 데이터베이스 (lodash를 기반으로 동작)  
