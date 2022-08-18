# Class

## Class

{% hint style="info" %}
타입스크립트에서는 class도 하나의 타입이다. class 문법은 es6에서 도입되었으므로 타입스크립트 설정파일에서 target을 es5로 입력하면 es5에서는 class 문법을 사용할 수 없으므로 함수 형태로 컴파일된다.
{% endhint %}

* `!` class 내부에서 값을 할당하지 않고, 외부에서 나중에 처리할 경우 `!`를 붙여 위험을 표시한다.
* `?` 값을 받아도, 안 받아도 되는 경우 `?`를 붙여 표시한다.

## 접근 제어자

{% hint style="info" %}
타입스크립트 class 속성들은 기본적으로 public이며 외부에서 접근 가능하다. 클래스 내부의 모든 곳(생성자, 프로퍼티, 메서드)에 설정 가능하다.
{% endhint %}

* `public` : class의 기본 값으로, class 내부에서든 외부에서든 접근할 수 있다.
* `protected` : class 외부에서는 접근 불가능하지만, 상속 관계가 있는 곳에서는 접근 가능하다.
* `private` : 오직 class 내부에서만 접근 가능하다.\
  참고) 자바스크립트에서는 public, private을 기본 스펙으로 제공하지 않아 private한 값에는 언더바를 붙여 표기한다. (바벨 사용시 private 사용 가능) (construct에 private 속서을 주면 외부에서 접근 불가능하므로 싱글톤 패턴에서 활용할 수 있다.)

```typescript
class Person {
  private _country: string;

  constructor(public name: string, private _age: number) {
    this.name = name;
    this._age = _age; // private한 키워드에는 언더바를 붙이는 컨벤션이 있다.
    this._country = = "Korea";
  }
}

const teacher = new Person('Mark', 30);
```

## Getter\&Setter

{% hint style="info" %}
getter나 setter를 사용해서 값을 읽기 전용 또는 쓰기 전용으로 만들 수 있다. 값을 원하는 형태로 안전하게 세팅하거나 가져올 수 있다.
{% endhint %}

* `getter` : 값을 가져오는 함수 (함수 내에서 뭔가 처리를 한 후 값을 반환할 수 있다.)
* `setter` : 값을 세팅하는 함수 (인자로 뭔가 받아 값을 설정할 수 있다.)

```typescript
class Person {
  private _country: string;

 constructor(public name: string, private _age: number) {
    this.name = name;
    this._age = _age; // private한 키워드에는 언더바를 붙이는 컨벤션이 있다.
    this._country = = "Korea";
  }
  
  get age(){
    return this._age;
  }
  
  set age(age: number){
    this._age = age + 1;
  }
}

const teacher = new Person('Mark', 30);
```

## Readonly

{% hint style="info" %}
readonly를 붙 읽기 전용 속성으로 만들면, 초기화 이후 외부에서든 내부에서든 절대 값을 변경 할 수 없다.
{% endhint %}

```typescript
class Person {
  private readonly _country: string;
  
  constructor(public readonly name: string, private _age: number) {
    this.name = name;
    this._age = _age; // private한 키워드에는 언더바를 붙이는 컨벤션이 있다.
    this._country = 'Korea'
  }
  
  hello(){
    this.country = 'Japan'; // 에러 (readonly 이므로 값을 바꿀 수 없음)
  }
}

const teacher = new Person('Mark', 30);
teacher.name = 'Woongjae'; // 에러 (readonly 이므로 값을 바꿀 수 없음)
```

## Index Signature

{% hint style="info" %}
class 객체 내 속성이 동적으로 변하는 경우 사용할 수 있다. index는 지정한 타입에만 충족되면 어떠한 내용도 입력할 수 있다.
{% endhint %}

```typescript
class Students {
  // 어떤 속성이든 문자열 타입여야 하고, 값은 'male' 또는 'female'이다.
  [index: string]: 'male' | 'female';
}
```

```typescript
const classA = new Students();
classA.mark = 'male';
classA.jade = 'male'

console.log(classA); // {mark: 'male', jade: 'male'}
```

```typescript
const classB = new Students();
classB.chloe = 'female';
classB.alex = 'male'
classB.anna = 'female'

console.log(classB); // {chloe: 'female', alex: 'male', anna: 'female'}
```

## Static

{% hint style="info" %}
static이 설정된 속성은 class에서만 존재하고 instance 생성시 포함되지 않는다. 따라서 사용할 때 this.속성명으로 접근하는 것이 아니라 클래스명.속성명으로 접근할 수 있다. 여러 instance에서 공통적으로 사용해야 하는 데이터의 경우 유용하며, 속성이 무엇을 의미하는지 좀 더 명확히 파악해 볼 수도 있다는 장점이 있다.
{% endhint %}

```typescript
class Person {
  private static food: string = '밥';

  public eat() {
    return `${Person.food}을 먹는다.`
  }

  public changeFood(food) {
    Person.food = food
  }
}
```

```typescript
const teacher = new Person();
const student = new Person();

teacher.eat(); // 밥을 먹는다.
teacher.changeFood('삼겹살');
teacher.eat(); // 삼겹살을 먹는다.
student.eat(); // 삼겹살을 먹는다.
```

#### static을 활용한 Singleton Pattern 예시

{% hint style="info" %}
private과 static 키워드를 활용하 단class로부터 단 하나의 객체만을 만들어내는 싱글톤 패턴을 만들 수 있다.
{% endhint %}

```typescript
class Singleton {
  private constructor(){}
  
  private static instance: Singleton | null = null;
  
  public static getInstance(): Singleton {
    if(Singleton.instance === null){
      Singleton.instance = new SingleObj(); // 생성된 instance가 없으면 만든다.
    }
    return Singleton.instance; // 생성된 instance가 있으면 그 값을 리턴한다.
  }
}

new SingleObj(); // 에러 (생성자 함수 private이므로 외부에서 호출 불가)

const a = Singleton.getInstance(); // 새로운 instance를 만들어서 리턴
const b = Singleton.getInstance(); // 만들어진 instance를 리턴
console.log(a === b); // true
```

## 상속

{% hint style="info" %}
이미 작성된 class를 상속받은 후, 기능을 추가하거나 접근 제어자를 오버라이딩 할 수 있다. 생성자 함수를 상속받아 오버라이딩 할 때는 super()를 먼저 실행해야 한다.
{% endhint %}

<pre class="language-typescript"><code class="lang-typescript">class Person {
<strong>  protected name: string;
</strong><strong>  private _age: number;
</strong><strong> 
</strong>  constructor(name: string, _age: number) {
    this.name = name;
    this._age = _age;
  }
  
  introduce(): void {
    console.log(`이름은 ${this.name}이고, ${this._age} 입니다.`)
  }
  
  protected printProteted(): void {
    console.log('proteted는 private과 달리 instance에서 접근 가능하다.');
  }
}

const person = new Person('Mark', 30);
person.introduce(); // 이름은 Mark이고, 30살 입니다.
console.log(person.name) // 에러 (protected는 외부에서 접근 불가능)</code></pre>

```typescript
class Teacher extends Person {
  job: string;  
  
  constructor(name: string, age: number, job: string) {
    super(name, age);
    this.job = job;
    this.printProteted(); // proteted는 private과 달리 instance에서 접근 가능하다
  }
}

const teacher = new Teacher('Mark', 30, 'teacher');
teacher.introduce(); // 이름은 Mark이고, 30살 입니다.
```

## Abstract

{% hint style="info" %}
class 내부에 완전하지 않은 기능이 있어도 해당 class 앞에 `abstract`라는 키워드를 붙이면 에러처리 되지 않는다. 완전하지 않은 class는 new를 이용해서 오브젝트를 생성할 수 없다. 따라서 상속을 통해 완전하게 만든 후 오브젝트를 생성해야 한다.
{% endhint %}

```typescript
abstract class Message {
  protected name: string;

  constructor(name: string) {
    this.name;
  }

  abstract render(name: string): void; // 미완성 기능이지만 에러 처리 안됨
}


new Message(); // 에러
```

```typescript
class WelcomeMessage extends Message {
  constructor(name: string) {
    super(name);
  }
  render(): void {
    console.log(`안녕하세요, ${..name}님! `);
  }
}

const welcomeMessage = new WelcomeMessage("Mark"); // 정상 작동
welcomeMessage.render(); // 정상 작동
```
