# lodash\_



[Lodash](https://lodash.com/docs/4.17.15)

```js
import _ from 'lodash'
```

## \_.uniq

* 인수로 입력된 배열 요소 중 중복되는 데이터는 제거하고 고유한 요소만 반환함

```js
_.uniq([2, 1, 2]) // [2, 1]
```

## \_.uniqBy

```js
const usersA = [
 {userId: '1', name: 'Heropy'},
 {userId: '2', name: 'Neo'}
]

const usersB = [
 {userId: '1', name: 'Heropy'},
 {userId: '3', name: 'Amy'}
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC) // usersA의 userID 1과 usersB의 userID 1이 중복됨
```

* 하나의 배열 데이터에서 중복된 속성을 제거하는 방법

```js
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // _.uniqBy (중복된 데이터가 있는 배열, '중복을 판단할 고유한 속성')
```

## \_.unionBy

* 여러개의 배열 데이터에서 미리 중복되는 속성을 제거한 후 하나의 배열로 합쳐주는 방법

```js
const usersD = _unionBy(usersA, usersB, 'userId') // _.unionBy(합칠 배열, 합칠 배열, '중복을 판단할 고유한 속성')
```

## \_.find(), \_.findIndex()

```js
const users = {
 {userId: '1', name: 'Heropoy'},
 {userId: '2', name: 'Neo'},
 {userId: '3', name: 'Amy'}
}
```

```js
const foundUser = _.find(users, {name:'Amy'})
console.log(foundUser) // {userId: '3', name: 'Amy'}
```

```js
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUserIndex) // 2
```

## \_.remove()

```js
_.remove(users, {name: 'Heropy'})
console.log(users) // {userId: '2', name: 'Neo'}, {userId: '3', name: 'Amy'}
```
