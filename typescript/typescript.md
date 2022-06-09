# Type System

## Primitives Type

number, string, boolean

```ts
let age: number = 30;
let userName: string = 'inhwa';
let isHungry: boolean = true;
```

## Complex Type

array, object

```ts
let hobbies: string[] = ['sports', 'cooking'];
let person: {
  name: string;
  age: number;
} = {
  name: 'inhwa',
  age: 30,
};
let peaple: {
  name: string;
  age: number;
}[];
```

## Type Inference(타입 추론)

타입을 정의하지 않아도 자체적으로 추론하여 이전 값과 타입이 다르면 에러 처리

```ts
let course = 'React - The Complete Guid';
// course = 1234; 타입 추론에 의해 에러
```

## Union Type

```ts
let twin: string | number = '유니온 타입';
twin = 123;
```

## Type Alias

중복되는 타입을 하나로 묶어서 사용 가능하게 도와줌

```ts
type Person = {
  name: string;
  age: number;
};
let family: Person[] = [
  {
    name: 'mom',
    age: 50,
  },
  {
    name: 'dad',
    age: 50,
  },
];
```

* Function and Type

```ts
function add(a: number, b: number) {
  return a + b;
}

function printValue(value: any) {
  console.log(value);
}
```

* Generics
* 타입이 오염되서 전파되는 것을 막아줌 (T 대신 다른 글자 가능)

```ts
function insertAtBegging<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBegging(demoArray, -1); // [-1, 1, 2, 3]

// updatedArray[0].spit(''); 제너릭으로 인해 정확한 타입이 추론되어 에러 발생
```
