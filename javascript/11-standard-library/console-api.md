# Console-API

## console.log/info

{% hint style="info" %}
어떤 값을 확인하고 싶을 때 사용할 수 있다. 출력하는 행위는 성능에 영향을 줄 수 있으므로 배포 단계에서는 왠만하면 지우는 것이 좋다. 참고로 배포할 때 자동으로 제거되도록 설정하거나, 로그 서비스를 통해 네트워크 요청이 발생하지 않도록 할 수 있다.&#x20;
{% endhint %}

```javascript
console.info('hello world'); // hello world
```

## console.warn/error

{% hint style="info" %}
warn은 심각한 에러는 아니지만 신경을 써야하는 경고 단계일 때, error은 예상하지 못한 에러나 시스템 에러일 때 사용한다. 각기 다른 색으로 표현된다.&#x20;
{% endhint %}

```javascript
 console.warn('경고');a
 console.error('에러');
```

## console.table

{% hint style="info" %}
객체를 표로 출력하여 시각적으로 보기 쉽게 해준다.
{% endhint %}

```javascript
const apple = {
  name: 'apple',
  color: ['red', 'green'],
  price: 1000,
}
console.table(apple);
```

## cosole.time

{% hint style="info" %}
뭔가를 수행하는데 걸리는 시간을 계산해준다.
{% endhint %}

```javascript
console.time('start');
for(let i = 0; i < 100; i++) {
  i = i
}
console.timeEnd('start');  // start: 0.01611328125 ms
```

## console.count

{% hint style="info" %}
특정 함수가 몇번 호출되었는지 카운트 해준다.&#x20;
{% endhint %}

```javascript
function sum(x, y) {
  console.count('sum function');
  return x + y;
}
sum(4, 8);  // sum function: 1
sum(9, 6);  // sum function: 2
sum(7, 1);  // sum function: 3
console.countReset('sum function');  // 중간에 횟수를 초기화할 수 있다.
sum(8, 2);  // sum function: 1
```

## console.trace

{% hint style="info" %}
특정 함수가 어디서 호출되었는지 추적해준다. 이벤트 리스너나 비동기적으로 수행되는 함수에서 유용하게 사용할 수 있다.  &#x20;
{% endhint %}

```javascript
function f1() {
  f2(); 
}
function f2() {
  f3();
}
function f3() {
  console.trace('f3 trace');
}
f1();
```
