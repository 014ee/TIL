# json

## ✅ JSON (Javascript Object Notation)

AJAX를 위해 `자바스크립트의 데이터(객체)를 사람이 읽을 수 있는 형태(문자열)로 표현`하는 개방형 표준 포맷\
JSON 데이터를 JS파일에 import 키워드로 가져오면, JSON 포맷에 의해 객체 데이터처럼 불러와진다.\
하나의 json 파일은 하나의 메모리만 참조하고 있어 데이터가 `가볍고 가독성이 좋다는 장점`이 있다.\
또한 자바스크립트 뿐만 아니라 대부분의 프로그래밍 언어와 플랫폼에서 변환하여 활용 가능하다. (XML은 불필요한 태그가 많아 파일이 클 뿐만 아니라 가독성도 좋지 않아 많이 쓰지 않는 추세)

[JSON Diff](http://www.jsondiff.com/)\
[JSON Beautifier](https://jsonbeautifier.org/)\
[Json Parser](https://jsonparser.org/)\
[JSON Validator](https://tools.learningcontainer.com/json-validator/)

```js
{"user" : [ 
  {
    "name":"Heropy",
    "age":85,
    "email":["email@naver.com", "newemial@naver.com"]
  }, ...
 ]
}
```

**자료형**

* `number`
* `string` 0개 이상의 유니코드 문자 `큰 따옴표로만 인식됨`
* `boolean` true, false
* `array` 0 이상의 값으로 이어진 순서가 있는 리스트
* `object` 순서가 없는 key:value의 집합
* `null` 빈 값으로 null을 사용한다.

### parse

* 인자로 받은 문자열을 자바스크립트 `객체로 반환`

```js
const obj = JSON.parse(str)
console.log(typeof str) // object
```

* import 방식으로 가져오면 객체로 불러와짐

```
import myData from './myData.json'
```

### stringify

* 인자로 받은 객체를 JSON `문자열로 반환`

```js
const str = JSON.stringify(obj)
console.log(typeof obj) // string
```

## ✅ STORAGE

`개발자도구` > `Application` > `Storage`

### js과 json으로 storage에 접근

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

### lowdb로 storage에 접근

[lowdb](https://github.com/typicode/lowdb)란?\
웹브라우저에서 사용할 수 있는 json 기반의 작은 데이터베이스 (lodash를 기반으로 동작)
