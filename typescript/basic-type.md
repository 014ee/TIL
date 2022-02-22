# ✅ Basic Type
## Boolean
```ts
let isDone: boolean = true;
console.log(typeof isDone); // boolean
```

## Number
```ts
let decimal: number = 6; // 10진수
let hex: number = 0xf00d; // 16진수
let binary: number = 0b1010; // 2진수
let octal: number = 0o744; // 8진수
let notAnumber: number = NaN; // Not a Number
let underscoreNum: number = 1_000_000; // 100만(읽기 편하라고)
```

## String
```ts
let firstName = 'Mark';
let lastName = 'Lee';

let fullName: string = `안녕하세요,
제 이름은 ${lastName}${firstName}입니다.`; 
```

## Symbol
* 함수일 때에는 대문자 `Symbol`, 타입일 때에는 소문자 `symbol`로 사용해야 한다.
```ts
console.log(Symbol('foo') === Symbol('foo')); // false
```
* 필요한 경우에만 접근이 가능하도록 하기 위해 symbol을 사용할 수 있다.
```ts
const sym = Symbol(); // 고유한 형태의 값
const obj = {
  [sym]: 'value', // []로 감싸면 위에서 정의한 sym이 들어온다.
};

obj[sym];
```

## null&undefined
* null에는 null만, undefined에는 undefined만 들어올 수 있다. (유용성이 낮음)
```ts
let un: undefined = undefined;
let nu: null = null;

console.log(typeof un); // undefined
console.log(typeof nu); // object
```
* null과 undefined를 다른 타입의 서브타입으로 사용하고 싶으면 union type을 이용해야 한다.
```ts
let union: string | null = null;
union = 'union type';
```

## Object
* number, string, boolean, symbol, null, undefined, bigint를 제외한 모든 타입을 object 타입이라고 한다.
* 즉, object 타입은 객체 타입뿐만 아니라, primitive type이 아닌 것을 나타내고 싶을 때 사용할 수 있다.
```ts
let obj: object = {}; // object
obj = { name: 'Mark' }; // object
obj = [{ name: 'Mark' }]; // object

// obj = 39 // 에러
// obj = 'Mark' // 에러
// obj = true // 에러
// obj = Symbol() // 에러
// obj = null // 에러
// obj = undefined // 에러
```
```ts
obj = Object.create({ name: 'Mark', age: 39 }); // object | null
```
* primitive type을 막기 위해 다음과 같이 사용할 수 있다.
```ts
declare function create(o: object | null): void;
create({ prop: 0 });
create(null);
```

## Array
* array 타입은 2가지 방법을 사용하여 표현할 수 있다.
```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // jsx 나 tsx에서 충돌날 수 있으므로 자제

let unionList: (number | string)[] = [1, 2, 3, '문자']; // 유니온 타입
```

## Tuple
* 배열에 들어올 타입들이 정해져 있고 그것을 알고 있다면 tuple을 사용한다. (순서, 타입, 길이 모두 일치해야함)
```ts
let tupleList: [string, number];
tupleList = ['tuple', 3];
tupleList = [3, 'tuple'] // 에러
```
```ts
const [text, num] = tupleList; // 구조분해할당하면 text: string, num: number로 들어온다.
```

## Any
* 어떤 값이든 들어올 수 있다.
* 무심코 쓴 any가 전파되어 전체적인 타입 시스템이 무너질 수 있으므로 최대한 쓰지 않는 것이 중요하다.
* console.log('') 같이 정말 어느 타입이 들어와도 상관 없을 때 사용할 수 있다.
```ts
function returnAny(message: any): any {
  console.log(message);
}

const result = returnAny('리턴은 아무거나');
parseInt(result); // 문자가 들어와도 parseInt 작성 가능하다.
```
* any를 사용한 경우 누수를 막는 작업이 필요하다.
```ts
function leakingAny(obj: any) {
  const a: number = obj.num; // number 타입으로 바꿔서 누수 막아줌
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
```

## Unknown
* 타입스크립트 3.0부터 사용 가능
* any와 같이 아무 타입이나 할당할 수 있지만, 값을 사용할 때에는 타입을 확정해 주어야 한다.
* if문을 통해 값이 들어왔을 때 타입을 새로 정의해줄 수 있다. (타입 가드)
```ts
declare const maybe: unknown;
// const aNumber: number = maybe; // any로 설정하면 에러 안뜸

if (maybe === true) {
  const aBoolean: boolean = maybe;
}

if (typeof maybe === 'string') {
  const aString: string = maybe;
}
```
## Never
* 보통 함수에서 어떠한 값도 리턴하지 않을 때 사용할 수 있다.
* 모든 타입의 서브타입이므로 모든 타입에 할당할 수 있다.
* 하지만 never에는 어떤 것도 할당할 수 없다. (any도 할당 못함)
```ts
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error('failed');
}
function infiniteLoop(): never {
  while (true) {}
}

declare const a: string;
if (typeof a !== 'string') {
  a; // never => string 타입이 아니면 할당할 수 없는 상태인 never가 되는 것을 이용하여, a변수에 어떠한 것도 할 수 없도록 처리
}

declare const b: string | number;
if (typeof b !== 'string') {
  b; // number => 타입 가드
}
```

## void
* 어떤 타입도 아닌 빈 상태, 값은 없고 타입만 있으므로 값을 쓸 수는 없다.
* void에는 예외로 undefined도 할당 가능하다. (void랑 undefined는 역할이 비슷함)
```ts
let voidType: void = undefined;
```
```ts
function returnVoid(message: string): void {
  console.log(message);
  return; // 리턴 타입이 void면 유일하게 undefined 만 입력 가능
}

const result = returnVoid('입력해도 리턴되는 값이 없다.');
```
