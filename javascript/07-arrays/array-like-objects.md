# Array-Like-Objects

## 🐇 특별한 객체인 배열

{% hint style="info" %}
자바스크립트 배열에는 다음과 같이 다른 객체에는 없는 특별한 기능이 있으며, 이들은 자바스크립트 배열을 일반적인 객체와 구분하는 특징이다.
{% endhint %}

* 배열에 새 요소를 추가할 때마다 length 프로퍼티가 자동으로 업데이트 된다.
* length를 더 작은 값으로 변경하면 배열 요소를 그에 맞게 버린다.
* 배열은 Array.prototype에서 유용한 메서드들을 상속받는다.
* Array.isArray()는 배열을 받으면 true를 반환한다.

## 🐇 배열 비슷한 객체

{% hint style="info" %}
하지만 이들이 배열을 정의하는 핵심 특징은 아니며, **숫자가 값인 length 프로퍼티가 있고 음이 아닌 정수 프로퍼티가 있는 객체라면 모두 일종의 배열로 간주하**더라도 전혀 문제가 없다. 이를 '배열 비슷한 객체'라고 부르며, 비록 배열 메서드를 직접적으로 호출하거나 length 프로퍼티가 특별하게 동작하진 않지만 실제 배열에 적용하는 알고리즘을 배열 비슷한 객체에도 적용할 수 있다.&#x20;

특히 알고리즘이 배열을 읽기 전용인 것 처럼 다루거나, 최소한 배열 길이는 건드리지 않는다면 더욱 배열과의 차이가 없는 것 처럼 보일 수 있으며 자바스크립트 배열 메서드는 대부분 배열 비슷한 객체에서도 정확히 동작할 수 있도록 범용으로 설계되었다.
{% endhint %}

```
let likeArray = {};
let i = 0;
while(i < 10) {
 likeArray[i] = i * i;
 i++;
}
a.length = i;

// 위에서 만든 객체는 실제 배열인 것 처럼 순회한다.
let total = 0;
for(let j = 0; j < likeArray.length; j++) {
  total += likeArray[j];
}
```

{% hint style="info" %}
실제 클라이언트 사이드 자바스크립트에는 document.querySelectorAll() 처럼 HTML 문서에서 배열 비슷한 객체를 반환하는 메서드가 많이 있는데, 다음 함수를 통해 해당 객체를 배열처럼 쓸 수 있는지 체크할 수 있다.
{% endhint %}

```
function isArrayLike(obj) {
  if(obj &&                         // obj가 null, undefined 등이 아니고 
    typeof obj === 'object' &&      // 객체이며
    Number.isFinite(obj.length) &&  // o.length가 유한한 숫자이고
    obj.length >= 0 &&              // 음이 아니며,
    Number.isInteger(obj.length) && // 정수이고 
    obj.length < 4294967295) {      // 2의 32승 -1 미만이면
    return true;                    // obj는 배열 비슷한 객체이다.
  } else {
    return false;
  }
}

isArrayLike({0: 'zero' 'length': 1}); // true
isArrayLike('hello world');           // false: 문자열을 받으면 false를 반환한다.  
```

{% hint style="info" %}
&#x20;배열 비슷한 객체에는 Array.prototype을 상속받지 않으므로 배열 메서드를 직접 호출할 수는 없다. 하지만 Function.call 메서드를 통해 간접적으로 호출할 수는 있다.
{% endhint %}

```
let a = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3,
}

Array.prototype.join.call(a, '+');                 // zero + one + two
Array.prototype.map.call(a, x => x.toUpperCase()); // ['ZERO', 'ONE', 'TWO']
Array.prototype.slice.call(a, 0); // ['zero', 'one', 'two']: 정확한 배열 복사
Array.from(a);                    // ['zero', 'one', 'two']: 더 쉬운 복사
```
