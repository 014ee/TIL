# Functional-Programming

## 🐇 함수형 프로그래밍이란?

{% hint style="info" %}
&#x20;자바스크립트는 함수형 프로그래밍 언어는 아니지만 함수를 객체처럼 조작할 수 있으므로 함수형 프로그래밍 기법을 사용할 수 있다.&#x20;
{% endhint %}

## 🐇 함수로 배열처리

{% hint style="info" %}
&#x20;map과 reduce 같은 배열 메서드는 특히 함수형 프로그해밍 스타일에 알맞다.
{% endhint %}

```
// 평균과 표준 편차 구하
let data [1, 1, 3, 5, 5];

// 평균은 요소의 합을 요소 개수로 나눈 값이다.
let total = 0;
for(let i = 0; i < data.length; i+=) total == data[i];
let mean = total/data.length; // 3

// 표준 편차는 각 요소와 평균 간 편차의 제곱을 모두 합한 값이다.
total = 0;
for(let i = 0; i < data.length; i++) {
  let deviation = data[i] - mean;
  total += deviation * deviation;
}
let stddev = Math.sqrt(total/(data.length-1)); // 2
```

```
// 함수형 프로그래밍 예
const map = function(a, ..args) {return a.map(...args);}
const reduce = function(a. ...args) {return a.reduce(...args);}
const sum = (x, y) => x + y;
const square = x => x * x;

let data [1, 1, 3, 5, 5];
let mean = reduce(data, sum)/data.length;
let deviations = map(data, x =< x - mean);
let stddev = Math.sqrt(reduce(map(deviations, square), sum)/(data.length - 1));
stddev; // 2
```

## 🐇 고계 함수

{% hint style="info" %}
&#x20;고계 함수란 하나 이상의 함수를 인자로 받아 새 함수를 반환하는 함수를 말한다.&#x20;
{% endhint %}

```
function not(f) {
  return function(...args) {
    let result = f.apply(this, args);
    return !result;
  }
}
const even = x => x % 2 === 0;
const odd = not(even);
[1, 1, 3, 5, 5].every(odd); // true
```

```
const compose(f, g) {
  return runction(...args) {
    return f.call(this, g.apply(this, args));
  }
}

const sum = (x, y) => x + y;
const square = x => x * x;
compose(square, sum)(2, 3) // 25
```

## 🐇 함수의 부분 적용

{% hint style="info" %}
&#x20;bind() 메서드는 왼쪽에 있는 인자르 부분적으로 적용한다. bind()에 전달하는 인자는 원래 함수에 전달되는 인자 리스트의 시작 부부에 위치한다. 반대로 오른쪽에 있는 인자를 부분적으로 적용하는 것도 가능하다.&#x20;
{% endhint %}

```
// 이 함수의 인자는 왼쪽에 전달된다.
function partialLeft(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...outerArgs, ...innerArgs];
    return f.apply(this, args);
  }
}
```

```
// 이 함수의 인자는 오른쪽에 전달된다.
function partialRight(f, ...outerArgs) {
  return function(...innerArgs) {
    let args = [...innerArgs, ...outerArgs];
    return f.apply(this, args);
  }
}
```

```
const f = function(x, y, z) {return x * (y - z);}
partialLeft(f, 2)(3, 4);        // -2
partialRight(f, 2)(3, 4);       // 6
partial(f, undefined, 2)(3, 4); // -6
```

{% hint style="info" %}
부분함수를 사용하면 이미 정의한 함수를 활용해서 더 흥미로운 함수를 쉽게 정의할 수있다.
{% endhint %}

```
// Some code
```

## 🐇 메모이제이션

{% hint style="info" %}
이전에 계산한 결과를 캐시하는 것을 함수형 프로그래밍에서는 메모이제이션이라고 부른다.
{% endhint %}

```
// f를 캐시를 활용하도록 수정해 반환한다.
// f의 인자가 모두 고유한 문자열 표현일 때만 동작한다.
function memoize(f) {
  const cache = new Map(); // 값 캐시는 클로저에 저장된다.
  return function(...args) {
    let key = args.length + args.join('+'); // 인자를 캐시 키로 사용할 문자열로 변환
    if(cache.has(key)) {
      return cache.get(key);
    }else {
      let result = f.apply(this, args);
      cache.set(key, result);
      return result;
    }
  }
  
}
```

memoize 함수는 캐시로 사용할 새 객체를 생성하고 이 객체를 로컬 변수에 할당하므로, 반환된 함수 외에는 이 객체를 볼 수 있다. 반환된 함수는 인자 배열을 문자열로 변환하고 그 문자열을 캐시 객체의 프로퍼티 이름으로 사용한다. 값이 캐시에 존재하면 바로 반환하고, 그렇지 않다면 인자를 넘기면서 지정된 함수를 호출해 값을 계산하도 캐시에 저장한 다음 반환한다.

```
function gcd(a, b) {
  if(a < b) {          // a는 b보다 크거나 같아야 한다.
    [a, b] = [b, a];   // 그렇지 않으면 분해 할당을 통해 변수를 스왑한다.
  }
  while(b !== 0) {     // 최대 공약수를 구하는 유클리드 알고리
    [a, b] = [b, a%b];
  }
  return a;
}

const gcdmemo = memoize(gcd);
gcdmemo(85, 187); // 17
```
