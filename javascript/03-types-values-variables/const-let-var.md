# 05-Const-Let-Var



## ✅ 할당연산자

* `const` : 재할당 불가능
* `let` : 재할당 가능

### 변수 스코프(유효범위)

* 변수는 자신이 동작할 수 있는 유효한 범위를 갖는다.
* `let`, `const`는 변수가 선언되어 있는 `{블럭 내부}`가 유효 범위이다. (블록레벨)
* `var`는 변수가 선언되어 있는 `함수 범위 내부`가 유효 범위이다. (함수레벨)
* `var`는 의도하지 않은 범위에서 사용될 수도 있고, 개발자가 인식하지 못하는 메모리 누수로 이어질 수 있으니 자제하는 것이 좋다.

## ✅ 구조 분해 할당

`객체` 및 `배열` 내 각각의 값을 변수로 출력할 수 있다. (ex. 점표기법`user.name`, 인덱싱`user['name']`)

### 객체 구조분해

* 객체 구조분해 단계에서는 불러오는 객체의 속성명을 정확하게 입력해 주어야 한다.
* 이후 `:` 기호를 통해 원하는 이름으로 수정하여 사용할 수 있다. `name:heropy`
* 속성값이 없을 경우 `=` 기호를 통해 기본으로 출력될 값을 지정해줄 수 있다. `address='Korea'`
* 필요한 속성만 구조분해할 수 있고, 객체의 변수명이 변경될 경우 수정이 용이하여 속성이 많을 경우 편리하게 사용할 수 있다.

```js
const user = {
 name: 'Heropy',
 age: 85,
 email: 'email@naver.com'
}
```

```js
function displayPerson(user){
 const {name:nickname, age, email, address='Korea'} = user
 console.log(`사용자의 닉네임은 ${nickname}입니다.`) // 사용자의 닉네임은 Heropy입니다.
 console.log(address) // undefined
}
```

### 배열 구조분해

* 배열의 구조분해는 배열된 데이터 순서대로 이루어진다.

```js
const fruits = ['Apple', 'Banana', 'Cherry']
const [a, b, c, d] = fruits
console.log(a, b, c, d) // Apple Banana Cherry undefined
```

* 따라서 특정 데이터만 가져오고 싶으면 앞의 데이터는 변수명 없이 `,` 처리해주어야 한다. (ex. 바나나만 가져오고 싶은 경우)

```js
const fruits = ['Apple', 'Banana', 'Cherry']
cosnt [, b] = fruits
console.log(b) // Banana
```

##
