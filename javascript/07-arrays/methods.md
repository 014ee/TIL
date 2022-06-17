# Methods

{% hint style="info" %}
Array 클래스에 정의된 메서드는 배열을 다룰 때 자주 사용된다. **배열 메서드 중 일부는 원래 배열을 그대로 둔 채 새 배열을 반환하며, 나머지 메서드는 원래 배열을 수정하고 그 참조를 반환**하므로 이 둘의 차이를 숙지하고 있어야 한다.
{% endhint %}

## 🐇 배열 이터레이터 메서드

{% hint style="info" %}

{% endhint %}

## 🐇 배열 평탄화

{% hint style="info" %}

{% endhint %}

## 🐇 배열 병합

{% hint style="info" %}

{% endhint %}

## 🐇 스택과 큐 메서드

{% hint style="info" %}

{% endhint %}

## 🐇 하위 배열

{% hint style="info" %}

{% endhint %}

## 🐇 배열 검색과 정렬 메서드

{% hint style="info" %}

{% endhint %}

## 🐇 배열을 문자열로 변환

{% hint style="info" %}

{% endhint %}

## 🐇 정적 배열 함수

{% hint style="info" %}

{% endhint %}

## 🐇배열을 문자열로 변환

{% hint style="info" %}

{% endhint %}

## ✅ 아이템 정렬

### .reverse()

* 아이템을 반대로 정렬해준다. `원본 수정`

```js
const arr = [1, 2, 3, 4]
arr.reverse() // [4, 3, 2, 1]
```

### .sort()

* 아이템을 문자화하여 사전식으로 정렬해준다.

```js
const arr = [1, 2, 3, 4, 1000]
console.log(arr.sort()) // [1, 1000, 2, 3, 4]
```

```js
const arr = [1, 2, 3, 4, 1000]
arr.sort(function (a,b){return a-b}) // [1, 2, 3, 4, 1000]
```

## ✅ 아이템 검색

### .length

* `아이템의 갯수`를 반환해준다.

```js
const arr = [1,2,3,4]
console.log(arr.length) // 4
```

### .includes()

* 특정 `아이템이 포함되어 있으면 true`, 아니면 `false`로 값을 반환해준다.

```js
const arr = [1, 2, 3, 4]
const includeItem = arr.includes(3)
console.log(a) // true
```

### .find()

* `조건에 만족하는 첫번째 아이템만 찾아`주며, 다음 아이템에 대해서는 찾는 행위를 멈춘다.

```js
const arr = [1, 2, 3, 4, 12, 20, 30]
const findItem = arr.find(el => el > 10) // 12
```

```js
const fruits = [Apple, Banana, Cherry]
const findItem = fruit.find(fruit => /^B/.test(fruit)) // Banana
```

### .findIndex()

* `조건에 만족하는 아이템의 인덱스 값을 반환`받아 삭제하거나, 앞이나 뒤에 새로운 아이템을 넣을 수 있다.

```js
const banana = fruit.findIndex(fruit => /^B/.test(fruit))
console.log(banana) // 1
```

### .filter()

* `조건에 만족하는 모든 아이템을 필터링`하여 새로운 배열로 반환받을 수 있다.

```js
const arr = [1, 2, 3, 4]
const filterItem = arr.filter(number => number < 3) // [1,2]
```

### .map()

* 콜백으로 만들어진 새로운 `데이터를 새로운 배열로 만들어 반환`해준다.

```js
const numbers = [1, 2, 3, 4]
const fruits = [Apple, Banana, Cherry]
```

```js
const a = fruits.map(function(fruit, index){
 `${fruit}-${index}`
})
console.log(a) // [Apple-0, Banana-1, Cherry-2]
```

* `아이템들을 객체 데이터로 바꾼 후 새로운 배열`로 만들어 사용할 수도 있다.

```js
const b = fruits.map((fruit, index) => ({
  id:'index',
  name:'fruit'
 }))
console.log(b) // [{id:0, name:Apple}, {id:1, name:Banana}, {id:2, name:Cherry}]
```

* 조건에 대한 boolean 데이터값을 반환받을 수 도 있다.
* 실행된 요소와 새로 반환된 배열의 요소 갯수는 일치한다.

```js
const c = numbers.map(number => number < 3)
console.log(c) // [true, true, false, false]
```

## ✅ 아이템 수정

### .join()

* 아이템을 `문자열로 반환`해줍니다.

```js
const arr = [1, 2, 3, 4]
arr.join() // 1, 2, 3, 4
arr.join('') // 1234
```

### .splice()

* `원하는 index로부터 원하는 갯수만큼 아이템을 제거하거나 추가` 할 수 있다. `원본 수정`

```js
const arr = [1, 2, 3, 4]
numbers.splice(2, 2) // index[2]에서 아이템을 2개 지워라
console.log(arr) // [1, 2]
```

```js
const numbers = [1, 2, 3, 4]
numbers.splice(2, 0, 999) // index[2]에서 아이템을 0개 지우고 숫자 999를 추가해라
console.log(numbers) // [1, 2, 999, 3, 4]
```

### .concat()

* `2개의 배열 데이터를 병합`해서 새로운 배열 데이터를 반환해준다. `원본 유지`

```js
const arr = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(arr.concat(fruits)) // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
```

### .push(), .pop()

* `.push()` 배열 맨 뒤에 아이템 추가
* `.pop()` 배열 맨 뒤의 아이템 제거

```js
const arr = [1, 2, 3, 4]
```

```js
arr.push(5) // [1, 2, 3, 4, 5]
arr.pop() // [1, 2, 3]
```

### .shift(), .unshift()

* `.shift()` 배열 맨 앞의 아이템 제거
* `.unshift()` 배열 맨 앞에 아이템 추가

```js
const arr = [1, 2, 3, 4]
```

```js
arr.shift() // [2, 3, 4]
arr.unshift(0) // [0, 1, 2, 3, 4]
```
