# Basic Types

## Boolean

```typescript
let isDone: boolean = true;
```

## Number

```typescript
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
```

## String

```typescript
let name: string = 'Inhwa';
let message: string = `안녕하세요,
제 이름은 ${name}입니다.`; 
```

## Array

```typescript
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; 
```

## Tuple

```typescript
// 타입, 갯수, 순서가 정해진 배열
let tuple: [string, number];
tuple = ['tuple', 3];
tuple = [3, 'tuple'] // 에러
```

## Enum

```typescript
// 자료의 집합으로 값을 할당하지 않으면 0부터 시작하여 번호를 할당한다.
enum Color {
  black = '#111',
  white = '#fff'
}
let color: Color = Color.black;
```

## Any

```typescript
// 아무 타입의 값이나 들어올 수 있다.
function notSure(x: any): any {
  console.log(x);
}
parseInt(notSure('아무거나')); // 어떤 타입의 메서드를 호출해도 에러를 발생시키지 않는다.
```

## Unknown

```typescript
// any와 같이 아무 타입이나 할당할 수 있지만, 값을 사용할 때에는 타입을 확정해 주어야 한다.
declare const maybe: unknown;

if (maybe === true) const b: boolean = maybe;
if (typeof maybe === 'string') const s: string = maybe;
```

## Void

```typescript
// undefined와 null만 할당 가능하며, 보통 함수에서 반환값이 없을 때 사용된다.
function sayHi(): void {
  console.log('hi')
};
```

## Null and Undefined

```typescript
// null에는 null만, undefined에는 undefined만 들어올 수 있다.
const u: undefined = undefined;
const n: null = null;
```

## Never

```typescript
// 절대 발생할 수 없는 타입을 나타내며 모든 타입의 서브 타입으로 존재한다.
function error(message: string): never {
  throw new Error(message);
}
function fail() {
  return error('failed');  // never
} 

declare const a: string;
if (typeof a !== 'string') {
  a; // never
}
```

## Object

```typescript
// 원시 타입을 제외한 모든 타입은 object 타입이다.
const obj: object = {};
```

## Type Assertions <a href="#type-assertions" id="type-assertions"></a>

```typescript
// 개발자가 해당 값에 대해 컴파일러보다 더 잘 알고 일을 때, 타입을 단언해줄 수 있다.
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```
