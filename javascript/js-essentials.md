# ✅ JS의 역사
* `1993년` UI요소가 더해진 최초의 대중적 웹 브라우저 모자이크가 시장에 나옴
* `1994년` 모자이크 웹 브라우저 개발을 이끌던 마크 앤더슨이 졸업 후 넷스케이프라는 회사를 설립 / 이후 모자이크에서 UI요소를 업그레이드한 넷스케이프 내비게이터 출시(HTML,CSS)
* `1994년` 동적인 웹으로의 발전을 위해 브랜든을 영입 후 SCHEME 스크립트 언어를 변형시킨 새로운 언어 모카(내부적 이름) 탄생(10일 안에 프로토타입을 베이스로 만들어진 유연한 언어)
* `1994년 9월` 공식적으로 라이브스크립트로로 이름 변경 후 넷스케이프 내비게이터 2에 라이브스크립트 엔진 인터프리터를 탑재하여 출시
* `1995년` 당시의 자바 인기에 편승하기 위해 자바스크립트로 이름 변경
* `1995년` MS에서 위기감을 느끼고 자바스크립트 언어를 리버스 엔지니어링(거의 카피)하여 J스크립트를 만든 후 IE에 탑재 (이후 두 회사의 기능 경쟁으로 크로스브라우징 이슈)
* `1996년 11월` 넷스케이프가 컴퓨터 시스템 표준을 관리하는 비영리 표준화 기구 ECMA 인터내셔널에 자바스크립트 표준화 요청
* `1997년 7월` 지켜야 할 문법적인 사항을 정리한 첫번째 ECMA 스크립트 문서 완성 (원래 ECMA-262였는데, 상표권 문제로 ECMA스크립트로 명명됨)
* `1998년` ES 2
* `1999년` ES 3 (정규표현식, try...catch 예외 처리) 
* `2000년` ES 4 이후 MS가 IE 인기에 건방져저서 더이상 ECMA 스크립트 표준에 참가하지 않음 (+ 다른 브라우저들도 생겨나는 등의 이유로 오랫동안 다시 크로스브라우징 이슈 > 덕분에 개발 인력이 많이 필요해졌고, 커뮤니티가 크게 형성됨에 따라 제이쿼리 같은 라이브러리, 프레임워크 등이 생겨나기도 함)
* `2004년` 모질라에서 파이어폭스 출시 / 제시 제임스가 비동기적으로 데이터를 서버에서 받아오고 처리해주는 AJAX 기술 명세서 작성 
* `2008년` 구글에서 크롬 브라우저 출시 (JIT이라는 강력한 자바스크립트 엔진 포함) > 드디어 브라우저 회사들 정신차리고 서로 협력하기로 함
* `2009년` HTML 5와 함께 ES 5 
* `2015년` ES 6 (let, const, class, 화살표함수, 템플릿 리터럴, 디스트럭처링 할당, spread 문법, rest 파라미터, symbor, promise, Map/Set, iterator/generator, module import/export) / 최근 JS기준이라고 할 수 있지만 IE에서는 지원 안함
* `2016년` ES 7 (지수연산자, Array.prototype.includes, String.prototype.includes)
* `2017년` ES 8 (async/await, Object 정적 메소드)
* `2018년` ES 9 (Object Rest/Spread 프로퍼티)

# ✅ JS 시작하기
* 개발자가 별도의 컴파일 작업을 수행하지 않는 `인터프리터 언어`이다.
* `명령형`, `함수형`, `프로토타입 기반 객체지향 프로그래밍`을 지원하는 멀티 패러다임 프로그래밍 언어이다.
* C나 Java와는 다르게 변수를 선언할 때 데이터 타입을 미리 지정하지 않으며, 할당된 값에 따라 타입이 변하는 `동적 타이핑`이다.
* 모든 브라우저는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있다.
* node.js는 v8 자바스크립트 엔진을 이용하여 브라우저 이외의 환경에서 JS를 동작시키는 런타임 환경  
(서버 개발환경을 제공하는 것이 주된 목적이므로 DOM API 등의 클라이언트 사이드 WEB API는 제공하지 않고 대신 모듈, 파일 시스템, HTTP 등 빌트인 API를 제공)


# ✅ 조건문 (If, Switch, 삼항 연산자)
* Math의 랜덤함수와 내림처리를 통해 랜덤 숫자 추출하기
```javascript
export default function random() {
 return Math.floor(Math.random() * 10)
}

import random from './getRandom'
const a = random();
```
##  `If Else`
```javascript
if (a === 0){
 console.log('a is 0'); 
} else if (a === 2){
 console.log('a is 2')
}else {
 console.log('rest...')
}
```

##  `Switch`
* 조건을 여러 분기로 나누어 작성할 수 있다.
* 조건이 끝나면 뒤에 `break`를 넣어야 한다. (나머지를 처리하는 `default`에서는 생략 가능)
* 딱 떨어지는 조건을 갖은 조건문에서 사용하면 코드를 깔끔하게 작성할 수 있다.
* 타입스크립트에서 정해진 타입을 검사하는데 유용
```javascript
switch (a) {
 case 0:
 case -0:
 console.log('a is 0')
 break
 case 2:
 console.log('a is 2')
 break
 case 4:
 console.log('a is 4')
 break
 default:
 console.log('rest...')
}
```
## `(조건 ? 참 : 거짓)` 삼항 연산자
* (조건 ? '참일 때 반환하는 값' : '거짓일 때 반환하는 값')
```javascript
console.log( true === true ? '참' : '거짓') // 참
```

# ✅ 반복문
## while
* 값이 false가 나올 때 까지 계속해서 반복
* 조건이 맞을 때만 실행하고 싶을 때 사용
```js
let i = 3
while (i > 0) {
console.log(`while ${i}`) // while:3 / while:2 / while:1
i--
}
```
## do while
* 블록을 먼저 실행하고 싶을 때 사용
```js
do {
console.log(`do whild: ${i}`) // do while: 0
} while (i > 0)
```
## For
* (시작조건; 종료조건; 변화조건)
* 반복문을 동작시킬 때 통상적으로 `i` 변수를 사용한다.
```javascript
const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1){
 const li = document.createElement('li');
 li.textContent = `list-${i + 1}`
 
 if ((i+1) % 2 === 0){
  li.addEventListener('click', function(){
   console.log(li.textContent)
  })
 }
 ulEl.appendChild(li);
}
```
* nested loops (cpu에 좋지 않으므로 가급적 자제)
```js
for (let i = 0; i < 10; i ++) {
 for (let j = 0; j < 10; j ++) {
  console.log(i, j)
 }
}
```
