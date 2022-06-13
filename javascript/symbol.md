# Symbol

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
