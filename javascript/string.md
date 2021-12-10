# STRING (문자열)

---
# 문자열 매소드
## .indexOf()
* 문자열 내에서 찾고자 하는 문자값을 입력하면 문자열 내 `문자값의 첫번째 인덱스를 반환`해줍니다.
* 문자열 내에 찾고자 하는 문자값이 없으면 `-1`을 반환합니다.
* 공백은 문자로 포함하지 않습니다.
```javascript
const str = 'Hello world!'.indexOf('world') // 6
const str = 'Hello world!'.indexOf('earth') // -1
```
* 내가 찾고자 하는 문자가 있는지 없는지 불린데이터 형식으로 확인할 수 있습니다.
```javascript
console.log(str.indexOf('earth') !== -1) // false
```
## .length()
* 문자의 갯수를 출력해줍니다.
* `공백도 하나의 문자`로 인식합니다.
```javascript
const str = '0123'
console.log(str.length) // 4
console.log('01 23'.length) // 5 
```
## .slide()
* 문자의 일부를 추출하여 반환합니다.
* `몇 번째 인덱스에서 시작`해서 `몇 번째 직전 인덱스`에서 잘라낼 것 인지 적어줍니다.
```javascript
const str = 'Hello world!'
console.log(str.slide(6, 11)); // world 
```
## .replace()
* 문자열 내 특정 문자를 다른 문자로 교체할 수 있습니다.
* 빈 문자를 통해 문자 자체를 삭제해 줄 수도 있습니다.
```javascript
const str = 'Hello world!'
console.log(str.replace('world', 'earth')); // Hello earth!
console.log(str.replace(' world!', '')); // Hello
```
## .match()
* 아래 난해한 문자는 정규표현식이라는 건데, 나중에 배울 예정 (@앞에 있는 내용들을 모두 추출해달라고 한 것임)
* 배열 데이터로 반환됩니다.
```javascript
const str = 'hello@naver.com'
console.log(str.match(/.+(?=@)/)[0]); // hello 
```
## .trim() 
* 공백 문자를 잘라줍니다.
* 보통 비밀번호에서 실수로 입력한 공백을 없애는데 사용합니다.
```javascript
const str = '  Hello world!  '
console.log(str.trim());// Hello world!
```
