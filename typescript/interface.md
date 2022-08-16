# Interface

## Interface

```typescript
interface Person {
  name: string;
  age?: number | undefined;
  [index: string]: any; // 어떤 내용도 string 타입으로만 입력하면 프로퍼티로 지정됨 ex. teacher['brothers'] = 'Alex'
  hello(): void;
}

const teacher: Person = {
  name: 'Mark',
  sisters: ['Amy', 'Sophia'],
  hello(): void {
    console.log(`안녕하세요, ${this.name} 입니다.`);
  },
};

teacher.hello(); // 안녕하세요, Mark 입니다.
```

## Implements

{% hint style="info" %}
implements 키워드를 통해 interface를 class로 구현할 수 있다. (컴파일시 js에서도 보임)
{% endhint %}

```typescript
interface IPerson {
  name: string;
  hello(): void;
}

class Person implements IPerson {
  name: string;
  age?: number | undefined;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요, ${this.name} 입니다.`);
  }
}

const teacher: IPerson = new Person('Mark');
teacher.hello(); // 안녕하세요, Mark 입니다.
```

## Extends

* `extends` 키워드를 통해 인터페이스끼리도 상속할 수 있다. ex. interface HTMLDivElement extends HTMLElement

```typescript
interface IPerson {
  name: string;
  age?: number;
}

interface IKorean extends IPerson {
  city: string;
}

const teacher: IKorean = {
  name: '이웅재',
  city: '서울',
};
```

## Function Interface

{% hint style="info" %}
함수의 인터페이스 타입을 지정해줄 수 있다.
{% endhint %}

```typescript
interface HelloPerson {
  (name: string, age?: number): void;
}

const helloPerson: HelloPerson = function (name: string) {
  console.log(`안녕하세요, ${name} 입니다.`);
};

helloPerson('Mark'); // 안녕하세요, Mark 입니다.
```

## Readonly Interface

{% hint style="info" %}
readonly 키워드를 이용해서 읽기 전용으로 만들 수 있다.
{% endhint %}

```typescript
interface Person {
  name: string;
  readonly gender: string;
}

const teacher: Person = {
  name: 'Mark',
  gender: 'male',
};

// teacher.genger ='female' // 에러 => readnly이기 때문에 수정 안됨
```
