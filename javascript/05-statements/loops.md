# Loops

## 🐇 반복문이란?

{% hint style="info" %}
**경로를 자기 자신 쪽으로 구부려 코드 일부를 반복하는 문**이며 배열 요소를 순회할 때 사용할 수 있다.
{% endhint %}

## 🐇 while

{% hint style="info" %}
while문은 자바스크립트 기본 루프이다. while문을 실행하면 **먼저 표현식을 평가한 후 true같은 값일 때만 실행문을 수행하며, 실행이 끝나면 다시 맨 위로 올라가 평가하길 반복**한다. while(true)같은 무한 루프를 만들 수도 있다.
{% endhint %}

```javascript
let count = 0;
while (i < 10) {
  console.log(count);
  i++;
}
```

## 🐇 do/while

{% hint style="info" %}
while문과 비슷하지만 루프 표현식이 위가 아니라 아래에서 평가된다는 점이 다르다. 따라서 **루프 바디는 항상 최소 한 번은 실행**된다.
{% endhint %}

```javascript
let count = 10;
do {
  console.log(i);   // 10: 일단 실행된다.
  i++;
} while (i < 10);   // while과 달리 항상 세미콜론으로 끝나야 한다.
```

## 🐇 for

{% hint style="info" %}
반복문에서 널리 쓰이는 초기화, 테스트, 업데이트 이 **3가지 동작 패턴을 표현식 하나로 묶고, 문법에 명시적으로 표현함으로써 루프를 단순화한 문법**이다.

for(변수초기화; 종료조건; 변화조건;)&#x20;
{% endhint %}

> 표현식 내에서 콤마로 구분하여 여러 변수와 변화조건을 등록할 수 있다.

```javascript
for (let i=0, j=0; i < 10; i++, j++){
  console.log(i*j);
}
```

> for 루프의 세가지 표현식은 전부 생략할 수 있다. 다 세미콜론은 필수이다. 종료조건을 생략하면 루프는 무한히 반복하며 for(;;)는 while(true)처럼 무한 루프를 만든다.

```javascript
function tail(obj) {                       // obj의 마지막 리스트를 반환
  for(; obj.next; obj=obj.next) /* 비움 */  // obj.next가 true같은 값이면 반복
  return obj;
}
```

## 🐇 for/of (ES6)

{% hint style="info" %}
for 키워드를 사용하지만 일반적인 for 루프와는 완전히 다르며, **이터러블 객체(배열, 문자열, 세트, 맵)를 '동적으로 순회'**한다. 즉, 반복 중간에 배열 자체에 변화가 생기면 반복 결과가 바뀌기도 하며 루프 바디에서 배열을 추가하면 절대 배열의 마지막 요소에 도달할 수 없으므로 무한 루프가 만들어진다.&#x20;
{% endhint %}

```javascript
let data = [1, 2, 3, 4, 5], sum = 0;
for (let item of data){ // 이터러블 객체인 data의 iterator 메서드를 실행시켜 value와 done이 담긴 이터러블 객체를 반환받은 후, done이 false 일 때까지 순회하며 value를 꺼내 item에 넣음
 sum += item;
}
```

> **for/of와 Object.keys()를 이용한** **객체 순회**
>
> 객체는 이터러블이 아니므로, 일반적인 객체에 for/of를 사용하면 런타임에 TypeError가 발생한다.\
> 객체의 프로퍼티를 순회하고 싶다면 for/in루프를 사용하거나 Object.keys()에 for/of를 사용해야 한다. Object.keys()는 객체의 프로퍼티 이름으로 이루어진 배열을 반환하며, 객체의 키를 순회하는 것은 동적이지 않다. 때문에 루프 안에서 obj 객체를 변경해도 이터러블 객체를 다룰 때와 달리 결과는 달라지지 않는다.

```javascript
let obj = {a: 1, b: 2, c: 3};
let keys = [];
for(let key of Object.keys(obj)) {
  keys.push(key);
}
keys // [a, b, c]
```

> **for/of와 Object.values()를 이용한** **객체 순회**
>
> 객체의 키가 필요한 것이 아니라면 다음과 같이 Object.values()를 사용하여 값을 순회할 수도 있다.

```javascript
let obj = {a: 1, b: 2, c: 3};
let sum = 0;
for(let value of Object.values(obj)) {
  sume += value;
}
value // 6
```

> **for/of와 Object.entries()를 이용한** **객체 순회**
>
> 객체 프로퍼티의 키와 값이 모두 필요하다면 다음과 같이 배열의 배열을 반환하는 Object.entries()와 분해 할당을 통해 for/of를 사용할 수 있다.

```javascript
let obj = {a: 1, b: 2, c: 3};
let array = [];
for(let [key, value] of Object.entries(obj)) {    // [['a', 1], ['b', 2]...]
  array.push(`${key} ${value}`);
}
array // ['a 1', 'b 2', 'c 3']
```

> **for/of와 문자열**
>
> 문자열은 UTF-16 문자가 아니라 유니코드 코드 포인트로 순회한다.&#x20;

```javascript
'I💙🐈'.length // 5: 💙와 🐈는 UTF-16 문자 두개로 이루어져 있다.

let lenth = 0;
for(let char of 'I💙🐈') { // 코드 포인트로 순회되어 총 3번 실행된다.
  lenth += 1;
}
length // 3
```

> **for/of 와 세트, 맵**
>
> ES6에 추가된 Set와 Map 클래스는 이터러블이므로 for/of로 순회하면 각 요소에 한번씩 실행된다.이를 사용해 문자열에서 각 단어를 중복 없이 출력할 수 있다.

```javascript
const text = 'hello hello hello world wide web';
const wordSet = new Set(text.split(' '));  // ['hello', 'world', 'wide', 'web']
let unique = [];
for(let word of wordSet) {
  unique.push(`${word}💙`);
}
unique // ['hello💙', 'world💙', 'wide💙', 'web💙']
```

> Map 객체의 이터레이터는 키-값 쌍을 순회한다.&#x20;

```javascript
const map = new Map(['a', 1]);
for(let [key, value] of map) {
  console.log(key);    // 'a'
  console.log(value);  // 1
}
```

> **for/await를 사용한 비동기 순회**
>
> ES2018은 비동기 이터레이터라는 새로운 이터레이터를 도입하면서 비동기 이터레이터와 함께 동작하도록 for/of 루프를 변형한 for/await 루프를 도입했다.

```javascript
async function printStream(stream) {
  for await(let chunk of stream) {
    console.log(chunk);
  }
}
```

## 🐇 for/in

{% hint style="info" %}
for/in 루프는 for/of와 달리 자바스크립트 초창기부터 존재했으며, 어떤 객체든 사용할 수 있다**.** for/in 문은 먼저 지정된 **객체의 값을 평가하며 그 값이 null이나 undefined가 아닐 때 변수에 열거 가능한 프로퍼티를 하나 할당하고 루프 바디를 실행하는 과정을 반복한**다. for/in 루프 바디에서 아직 열거되지 않는 프로퍼티를 삭제하면 그 프로퍼티는 순회 대상에서 제외된다. 또한 루프 바디에서 새 프로퍼티를 정의하면 그 프로퍼티는 순회 대상에 있을 수도, 있고 없을 수도 있다.
{% endhint %}

```javascript
for(let key in obj){
  console.log(obj[key]);  // obj의 key에 해당하는 value를 보여준다.
}
```

> **변수는 어떤 표현식도 가능하다.**
>
> 변수는 값으로 평가될 수만 있다면 어떤 표현식을 써도 되므로 다음과 같은 코드로 객체 프로퍼티 이름을 배열에 복사할 수도 있다.

```javascript
const obj = {a: 1, b: 2, c: 3};
let array = [], i = 0;
for(array[i++] in obj) /* 비움 */
array  // ['a', 'b', 'c'] 
```

{% hint style="info" %}
\*\*이름이 심벌인 프로퍼티, 자바스크립트에서 정의하는 내장 메서드는 열거 대상이 아니다.\
반면 상속받 프로퍼티는 순회 대상에 속한다. 이로 인해 결과가 예상과 다른 경우가 종종 있어 많은 프로그래머가 for/in 루프 대신 Object.keys()와 for/of 루프를 선호한다.
{% endhint %}

## 🐇 .forEach()

{% hint style="info" %}
배열의 아이템마다 한 번씩 주어진 함수(콜백)를 실행하며 map이나 reduce와 달리 undefined를 반환하기 때문에 break, continue, return 구문을 사용해서 함수를 벗어날 수 없다.
{% endhint %}

```javascript
const fruits = ['Apple', 'Banana']
const a = fruits.forEach((fruit, index) => {console.log(`${fruit}-${index}`)})
a  // undefined
```
