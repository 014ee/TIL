# 01-Immutable-Primitive-Values

## ✅원시 데이터

`String`, `Number`, `Boolean`, `Undefined`, `Null`, `Symbol`

* 원시 데이터는 `할당된 값 자체가 메모리에 저장`된다.
* 새로 입력한 값이 메모리 주소 이미 있으면, 새로운 메모리를 만들지 않고 기존의 메모리 주소를 바라보도록 지정해준다.
* 따라서 원시 데이터는 한번 메모리에 만들어지면 불변한다. (생긴게 같으면 같은 데이터, 다르면 다른 데이터)

```js
let a = 1
let b = 4

console.log(a, b, a === b) // 1, 4, false  (a와 b는 다른 메모리를 바라봄)
b = a
console.log(a, b, a === b) // 1, 1, true (a와 b는 같은 메모리를 바라봄)
a = 7
console.log(a, b, a === b) // 7, 1, false (a와 b는 다른 메모리를 바라봄)
let c = 1
console.log(b, c, b === c) // 1, 1, true (b와 c는 같은 메모리를 바라봄)
```

## ✅ Number

정수 및 부동소수점 숫자를 나타낸다.

### 숫자 → 문자

* `.toFixed()` 소수점을 지정한 갯수 만큼만 남기고 자른 후, `문자 데이터로 반환`한다.

```js
const pi = 3.14159265358979
```

```js
const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string
```

### 문자 → 숫자

* `parseInt()` 문자열로 작성된 숫자를 `숫자 데이터(정수)로 반환`할 수 있다.

```js
const integer = parseInt(str, 10); // (문자, 10진수) 
console.log(integer) // 3
consloe.log (typeof integer); // number
```

* `parseFloat()` 문자열로 작성된 숫자를 `숫자 데이터(실수)로 반환`할 수 있다.

```js
const float = parseFloat(str);
console.log(float) // 3.14
consloe.log (typeof float); // number
```

## ✅ Mach 객체

수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체 (함수 객체 x)\
[Math mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global\_Objects/Math)

### Math.abs()

```js
console.log('abs: ', Math.abs(-12)); // abs: 12 (숫자의 음수를 제거한 절대값만 출력)
```

### Math.min(), Math.max()

```js
console.log('min: ', Math.min(2, 8)); // min: 2 (인수로 들어간 숫자 중 가장 작은 값을 출력)
console.log('max: ' Math.max(2,8)); // max: 8 (인수로 들어간 숫자 중 가장 큰 값을 출력)
```

### Math.ceil(), Math.floor(), Math.round()

```js
console.log('ceil: ', Math.ceil(3.14)); // ceil: 4 (인수로 들어간 숫자를 정수 단위로 올림처리)
console.log('floor: ', Math.floor(3.14)); // floor: 3 (인수로 들어간 숫자를 정수 단위로 내림처리)
console.log('roung: ', Math.round(3.5)); // round: 4 (인수로 들어간 숫자를 정수 단위로 반올림처리)
```

### Math.random()

* 0\~1 사이의 난수 반환 (0.nnnnnnn)

```js
console.log('random: ', Math.random());
```

* 아래와 같은 방법으로 0\~9 사이의 랜덤 숫자를 생성할 수 있다.

```javascript
export default function random() {
 return Math.floor(Math.random() * 10)
}
```

* 위 코드를 getRandom.js 파일에 작성한 후 다른 파일에서 아래와 같이 import하여 사용할 수 있다.

```javascript
import random from './getRandom'
const a = random();
```

## ✅ 문자열 검색

### .indexOf() .lastIndexOf()

* 문자열 내에서 `찾고자 하는 문자의 첫번째 또는 마지막 등장 인덱스`를 반환해줍니다.
* 입력한 문자를 찾을 수 없으면 `-1`을 반환합니다.

```js
const str = 'Hello world!'.indexOf('world') // 6
const str = 'Hello world!'.indexOf('earth') // -1
```

* 내가 찾고자 하는 문자가 있는지 없는지 불린데이터 형식으로 확인할 수 있습니다.

```js
console.log(str.indexOf('moon') !== -1) // false
```

### .length

* 문자의 갯수를 출력해줍니다.
* `공백도 하나의 문자`로 인식합니다.

```javascript
const str = '0123'
console.log(str.length) // 4
console.log('01 23'.length) // 5 
```

## ✅ 부분 문자 반환

### .charAt()

* 입력한 인덱스의 문자

```js
cont text = 'hello'
console.log(text.charAt(0)) // h
```

### .slice(), .substring()

* 문자의 일부를 추출하여 반환합니다.
* `몇 번째 인덱스에서 시작`해서 `몇 번째 직전 인덱스`에서 잘라낼 것 인지 적어줍니다.

```javascript
const str = 'Hello world!'
console.log(str.slice(6, 11)); // world 
console.log(text.substring(6, 11)) // world 
```

### .substr()

* 2번째 인덱스 문자에서 시작해서 4개의 문자 반환

```js
const tex = 'hello'
console.log(text.substring(2,4)) // llo
```

### .match()

* 정규 표현식을 통해 문자중 일부를 배열 데이터로 출력할 수 있습니다.

```javascript
const str = 'hello@naver.com'
console.log(str.match(/.+(?=@)/)[0]); // hello 
```

## ✅ 문자열 수정

### .split()

* 문자열을 배열로 쪼개줍니다.

```js
const str = '1, 2, 3, 4'
str.split(',') // [1, 2, 3, 4]
```

### .replace()

* 문자열 내 특정 문자를 다른 문자로 교체할 수 있습니다.
* 빈 문자를 통해 문자 자체를 삭제해 줄 수도 있습니다.

```javascript
const str = 'Hello world!'
console.log(str.replace('world', 'earth')); // Hello earth!
console.log(str.replace(' world!', '')); // Hello
```

### .trim()

* 공백 문자를 잘라줍니다.
* 보통 아이디나 비밀번호에서 실수로 입력한 공백을 없애는데 사용합니다.

```javascript
const str = '  Hello world!  '
console.log(str.trim());// Hello world!
```

## Boolean



## Null and Undefined



## Symbols



* map 이나 자료구조에서 고유한 식별자가 필요하거나, 동시에 다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 유용

```js
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
console.log(symbol1 === symbol2) // false
```

```js
const symbol1 = Symbol.for('id')
const symbol2 = Symbol.for('id')
console.log(symbol1 === symbol2) // true
```

* 출력할 때는 .descript을 통해 string으로 변환해야 에러 안뜸

```js
console.log(`${symbol1.description}, ${symbol2.description}`)
```
