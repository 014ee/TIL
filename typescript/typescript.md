# Type System

## &#x20;타입 추론 (Type Inference)

{% hint style="info" %}
타입을 명시적으로 지정하지 않았을 경우 컴파일러가 자동으로 타입을 추론해다.
{% endhint %}

```typescript
function sum(num) { // num의 타입 any로 추론되어 어떤 타입이든 들어올 수 있게 된다.
  return nume + 40
}
console.log(sum(2)); // 42
console.log(sum('Mark')); // Mark40
```

> `"noImplicitAny": true`
>
> 하지만 타입 추론 중 `any` 타입이라고 판단하게 되면 의도하지 않은 결과라도 에러를 발생시키지 않을 수 있으므로 해당 옵션을 추가해 any 타입으로 추론될 경우 컴파일 에러를 발생시켜 개발자가 명시적으로 타입을 지정하도록 유도하는 것이 좋다.

```typescript
function sum(num) { 
  return nume + 40
}
console.log(sum(2)); // 42
console.log(sum('Mark')); // 에러 대신 Mark40 리턴
```

> `"strictNullChecks": true`
>
> 또한 모든 타입에 서브 타입으로 포함되어 있는 `null`과 `undefined`를 해당 옵션을 통해 제거하여 유니온 타입 등 명시적으로 작성하지 않을 경우 `null`, `undefined`를 할당 받을 수 없도록 설정하는 것이 좋다.&#x20;

```typescript
function sum(num: number): number {
  if(num > 0) nume + 40;
}
console.log(sum(2) + 2); // 44
console.log(sum(-2) + 2); // undefined가 아닌 number로 타입 추론되어 에러 대신 NaN 발생 
```

> `"noImplicitReturns": true`
>
> 해당 옵션을 통해 함수 내에서 무엇을 하든 값을 리턴하지 않으면 컴파일 에러를 발생시켜 `undefined`가 반환되지 않도록 할 수 있다.

```typescript
function sum(num: number): number {
  if(num > 0) return nume + 40;
  else return num;
}
```

## 타입 단언 (Type Assertions) <a href="#type-assertions" id="type-assertions"></a>

{% hint style="info" %}
개발자가 해당 값에 대해 컴파일러보다 더 잘 알고 일을 때, 타입을 단언해줄 수 있다.
{% endhint %}

```typescript
const x: any = "this is a string";
const xLength: number = (x as string).length;
```

## Structural Type System

{% hint style="info" %}
구조가 같으면 같은 타입으로 취급하는 타입 시스템을 Structural Type System이라고 한다.
{% endhint %}

```typescript
interface IPerson {
  name: string;
}

type PersonType = {
  name: string;
}

let personInterface: IPerson = {} as any;
let personType: PersonType = {} as any;

personInterface = personType;
personType = personInterface;
```

## Nominal Type System

{% hint style="info" %}
구조가 같아도 구조의 이름이 다르면 다른 타입 시스템을 Nominal Type System이라고 한다.
{% endhint %}

```typescript
type PersonID = string & {readonly brand: unique symbol};

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-1234'));
getPersonById('id-1234'); // 에러
```

## 타입 호환성 (Type Compatibility)

{% hint style="info" %}
기본적으로 타입이 같거나 서브 타입인 경우 할당이 가능하다. 함수의 경우 매개변수가 지정한 타입과 같거나, 지정한 타입의 슈퍼타입인 경우에만 할당이 가능하지만 "strictFunctionType": true 옵션이 꺼져있으면 딱히 에러를 발생시키지는 않는다. 따라서 켜는 것을 권장한다.
{% endhint %}

```typescript
const subType: 1 = 1;
const superType: number = subType;
```

```typescript
const subType: number[] = [1];
const superType: object = subType;
```

<pre class="language-typescript"><code class="lang-typescript"><strong>const subType: [number, number] = [1, 2];
</strong>const superType: number[] = subType;</code></pre>

<pre class="language-typescript"><code class="lang-typescript"><strong>const subType: number = 1;
</strong>const superType: any = subType;
subType = superType; </code></pre>

<pre class="language-typescript"><code class="lang-typescript"><strong>const subType: never = 0 as never;
</strong>const superType: number = subType;</code></pre>

<pre class="language-typescript"><code class="lang-typescript"><strong>class Animal {}
</strong>class Dog extends Animal {// ...}

const subType: Dog = new Dog();
const superType: Animal = subType;</code></pre>

<pre class="language-typescript"><code class="lang-typescript"><strong>const subType: never = 0 as never;
</strong>const superType: number = subType;</code></pre>

## 유니온 타입 (Union Type )

```typescript
let twin: string | number = '유니온 타입';
twin = 123;
```

## 타입 별칭 (Type Alias)&#x20;

{% hint style="info" %}
타입 별칭을 통해 타입에 다른 이름을 지정할해줄 수 있다. 중복되는 타입을 하나로 묶어서 사용 할 때 유용하다. 컴파일 타임에 해당 값이 들어갔는지 안들어갔는지 확인하는 용
{% endhint %}

```typescript
type YesOrNo = 'Y' | 'N'
type DayOfWeek = '월' | '화' | '수' | '목' | '금' | '토' | '일'
enum DayOfTheWeek { '월' | '화' | '수' | '목' | '금' | '토' | '일' }
// enum은 실제 데이터이므로 런타임에 실제도 값이 들어간다.
```

```typescript
type PersonType = {
  name: string;
  age: number;
};
```

```typescript
type CalcType = (num: number) => number;
```

