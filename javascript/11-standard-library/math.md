# Math



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
