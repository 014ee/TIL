# NUMBER (숫자)
정수 및 부동소수점 숫자를 나타낸다.

## .toFixed()
* 소수점을 지정한 갯수 만큼만 남기고 자른 후, `문자 데이터로 반환`한다.
```javascript
const pi = 3.14159265358979
```
```javascript
const str = pi.toFixed(2);
console.log(str); // 3.14
console.log(typeof str); // string
```
* `parseInt()` 전역함수를 통해 문자 데이터로 작성된 숫자를 `정수인 숫자 데이터로 반환`할 수 있다.
```javascript
const integer = parseInt(str); 
console.log(integer) // 3
consloe.log (typeof integer); // number
```
* `parseFloat()` 전역함수를 통해 문자 데이터로 작성된 숫자를 `소숫점 자리를 유지하면서 숫자 데이터로 반환`할 수 있다.
```javascript
const float = parseFloat(str);
console.log(float) // 3.14
consloe.log (typeof float); // number
```
---
# Mach 객체
수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체 (함수 객체 x)  
[Math mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)
## Math.abs()
```javascript
console.log('abs: ', Math.abs(-12)); // abs: 12 (숫자의 음수를 제거한 절대값만 출력)
```
## Math.min(), Math.max()
```javascript
console.log('min: ', Math.min(2, 8)); // min: 2 (인수로 들어간 숫자 중 가장 작은 값을 출력)
console.log('max: ' Math.max(2,8)); // max: 8 (인수로 들어간 숫자 중 가장 큰 값을 출력)
```
## Math.ceil(), Math.floor(), Math.round()
```javascript
console.log('ceil: ', Math.ceil(3.14)); // ceil: 4 (인수로 들어간 숫자를 정수 단위로 올림처리)
console.log('floor: ', Math.floor(3.14)); // floor: 3 (인수로 들어간 숫자를 정수 단위로 내림처리)
console.log('roung: ', Math.round(3.5)); // round: 4 (인수로 들어간 숫자를 정수 단위로 반올림처리)

```
## Math.random()
```javascript
console.log('random: ', Math.random()); // 0.nnnnnnn (정수 0으로 시작하고 소수점이 랜덤인 난수 반환)
```
* 아래와 같은 방법으로 0~9 사이의 랜덤 숫자를 생성할 수 있다.
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