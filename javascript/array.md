# ARRAY (배열)


# 배열 메서드
## .find()
* 입력한 판별 함수를 만족하는 `첫번째 요소를 반환`합니다.
```js
const array = [5, 12, 8, 130, 44]
const found = array.find(el => el > 10)
console.log(found) // 12
```

## .length()
* `배열 내 요소(아이템)의 갯수`를 반환해준다.
```js
const numbers = [1,2,3,4]
console.log(numbers.length) // 4
```
* 이 속성을 이용하여 배열 데이터에 값이 있는지 없는지 확인할 수 있다.
```js
console.log([].length) // 0
```

## .concat()
* `2개의 배열 데이터를 병합`해서 `새로운 배열 데이터를 반환`해준다.
* 원본의 데이터는 영향을 받지 않는다.
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(number.concat(fruits)) // [1, 2, 3, 4, 'Apple', 'Banana', 'Cherry']
```

## .forEach()
* 배열 내 요소마다 한 번씩 주어진 함수(콜백)를 실행한다.
* 밖으로 `값을 반환(return)하지 못한다.` (undefined 출력)
```js
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
```
```js
const a = fruits.forEach((fuit, index) => {console.log(`${fruit}-${index}`)}) // Apple-0 / Banana-1 / Cherry-2
console.log(a) // undefined
```

## .map()
* forEach()와 같이 콜백 함수가 각 요소마다 한번씩 반복해서 실행된다.
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
## .filter()
* `조건에 부합하는 데이터만 필터링하여 새로운 배열로 반환`받을 수 있다.
```js
const numbers = [1, 2, 3, 4]
const fruits = [Apple, Banana, Cherry]
```
```js
const c = numbers.filter(number => number < 3)
console.log(c) // [1,2]
```
## .find(), .findIndex()
* 원하는 특정한 조건의 값을 찾아주며, 값을 찾아 반환하면 찾는 행위를 멈춘다.
```js
const numbers = [1, 2, 3, 4]
const fruits = [Apple, Banana, Cherry]
```
```js
const a = fruit.find(fruit => /^B/.test(fruit))
console.log(a) // Banana
```
* `.findeIndex()`를 통해 인덱스 값을 반환받아 특정 아이템을 삭제하거나, 앞이나 뒤에 새로운 아이템을 넣을 수 있다.
```js
const b = fruit.findIndex(fruit => /^B/.test(fruit))
console.log(b) // 1
```

## .includes()
* 배열 안에 특정한 `데이터가 포함되어 있는지에 대해 true나 false로 값을 반환`해준다.
```js
const numbers = [1, 2, 3, 4]
const a = numbers.includes(3)
console.log(a) // true
```

## .push(), .unshift()
* `원본이 수정`될 수 있으니 주의
```js
const numbers = [1, 2, 3, 4]
```
* 배열의 `맨 뒤에 입력한 인수값을 아이템으로 추가`해준다.
```js
number.push(5)
console.log(numbers) // [1, 2, 3, 4, 5]
```
* 배열의 `맨 앞에 입력한 인수값을 아이템으로 추가`해준다.
```js
numbers.unshift(0)
console.log(numbers) // [0, 1, 2, 3, 4]
```

## .reverse()
* `원본이 수정`될 수 있으니 주의
* 배열 아이템의 순서를 뒤집어서 출력해준다.
```js
const numbers = [1, 2, 3, 4]
numbers.reverse()
console.log(numbers) // [4, 3, 2, 1]
```

## .splice()
* `원본이 수정`될 수 있으니 주의
* 원하는 index부분의 `아이템을 제거하거나 끼워 넣을 수 있다.`
```js
const numbers = [1, 2, 3, 4]
numbers.splice(2, 2) // index[2]에서 아이템을 2개 지워라
console.log(numbers) // [1, 2]
```
```js
const numbers = [1, 2, 3, 4]
numbers.splice(2, 1, 999) // index[2]에서 아이템을 0개 지우고 숫자 999를 추가해라
console.log(numbers) // [1, 2, 999, 3, 4]
```
## .pop(), .push()
* 맨 뒤의 아이템 제거 및 추가
## .sort()
* 아이템을 문자화 한 사전식 정렬
## .join()
* 아이템 사이에 join의 인수를 넣어 하나의 문자로 합쳐줌
*
