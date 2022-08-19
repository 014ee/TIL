# Iterators

## 🐇 이터레이터의 동작 방법

{% hint style="info" %}
&#x20;이터레이터 객체를 반환하는 이터레이터 메서드를 가진 객체는 모두 이터러블 객체이다.이터레이터 객체에는 순회 결과 객체를 반환하는 next() 메서드를 가지고 있으며 순회 결과 객체는 value와 done 프로퍼티로 구성되어 있다. 내장된 이터러블 데이터 타입의 이터레이터 객체는 그 자체가 이터러블이다. 즉 자기 자신을 반한하는 Symbol.iterator 메서드를 갖는다.
{% endhint %}

* 이터러블 객체를 순회할 때는 먼저 이터레이터 메서드를 호출해 이터레이터 객체를 얻는다.
* 이후 이터레이터 객체의 next() 메서드를 반복적으로 호출한다.
* next() 메서드의 반환 값 중 done 프로퍼티가 true가 되면 반복을 멈춘다.

```
let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for(let result = iterator.next(); !result.done; result = iterator.next();) {
  console.log(result.value);  // 99
}
```

```
let list = [1, 2, 3, 4, 5];
let iter = list[Symbol.iterator]();  // 이터레이터 객체 반환
let head = iter.next().value; // 1
let tail = [...iter];         // [2, 3, 4, 5]

```
