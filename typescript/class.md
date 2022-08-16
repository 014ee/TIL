# Class

## Class

{% hint style="info" %}
타입스크립트에서 class는 하나의 타입이다. class 문법은 es6에서 도입되었으므로 타입스크립트 설정파일에서 target을 es5로 입력하면 es5에서는 class 문법을 사용할 수 없으므로 함수 형태로 컴파일된다.
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
  private address: string = "Seoul";

  constructor(public name: string, private _age: number, address?: string) {
    this.name = name;
    this._age = _age; // private한 키워드에는 언더바를 붙이는 컨벤션이 있다.
  }
}

const teacher = new Person("Inhwa", 30);
```

## Getter\&Setter

{% hint style="info" %}
getter나 setter를 사용해서 값을 읽기 전용 또는 쓰기 전용으로 만들 수 있다. 값을 원하는 형태로 안전하게 세팅하거나 가져올 수 있다.
{% endhint %}

* `getter` : 값을 가져오는 함수 (함수 내에서 뭔가 처리를 한 후 값을 반환할 수 있다.)
* `setter` : 값을 세팅하는 함수 (인자로 뭔가 받아 값을 설정할 수 있다.)

```typescript
class Person {
  private address: string = "Seoul";

 constructor(public name: string, private _age: number, address?: string) {
    this.name = name;
    this._age = _age; // private한 키워드에는 언더바를 붙이는 컨벤션이 있다.
  }
  
  get age(){
    return `${this._age}세 (한국나)`;
  }
  
  set age(age: number){
    this._age = age + 1;
  }
}

const teacher = new Person('Mark', 29);
```

## Readonly

{% hint style="info" %}
readonly 로 읽기 전용 속성으로 만들면 초기화 이후 절대 값을 재설정할 수 없다.
{% endhint %}

```typescript
class Person {
  public readonly name: string = 'Mark'
  private readonly country: string = 'Korea'
  
  public constuctor(private name: string){
    this.country = 'Korea' 
  }
  
  hello(){
    this.country = 'Japan'; // 에러 => country는 readonly이므로 값을 세팅할 수 없다. 
  }
}

const teacher = new Person('Mark');
teacher.personName = 'Woongjae'; // 에러 
```

## Index Signature

* class 객체 내 속성이 고정된 형태가 아니라 동적으로 변화되는 경우 사용할 수 있다.
* `index`는 지정한 타입에만 충족되면 어떠한 내용도 입력할 수 있다.

```typescript
class Students {
  [index: string]: 'male' | 'female'; // 어떤 속성이든 문자열 타입이고, 값은 'male' 또는 'female' 이다.
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

## Static Properties\&Methods

* class 내부에서 `static`이 설정된 데이터는 공통적으로 공유된다.
* ex) woongjae에서 CITY 값을 바꾸면, inhwa에서도 바뀐 값으로 보인다.

```typescript
class Person {
  private static CITY = 'Seoul' // Person 클래스로 생성한 모든 오브젝트에서 공유되는 값
  
  public hello() {
    console.log('Welcome' Person.CITY)
  }
  public change() {
    Person.CITY = 'LA'
  }
  
}
```

```typescript
const woongjae = new Person();
woongjae.hello(); // Welcome Seoul
woongjae.change(); // CITY 값을 변경함

const inhwa = new Person();
inhwa.hello(); // Welcome LA 
```

### Singletons

* private과 static 키워드를 가지고 단일 오브젝트를 공유하는 싱글톤 패턴을 만들 수 있다.

```typescript
class SingleObj {
  private static instance: SingleObj | null = null;
  
  public static getInstance(): SingleObj {
    // SingleObj으로부터 생성된 object가 없으면 만든다.
    if(ClassName.instance === null){
      ClassName.instance = new ClassName();
    }
    // SingleObj으로부터 만든 object가 있으면 그걸 리턴한다.
    return ClassName.instance;
  }
  
  private constructor(){} // 외부에서 new 키워드로 object 생성 불가
}

const a = new SingleObj(); // 에러 => private 설정을 했으므로 외부에서 호출 불가

const b = SingleObj.getInstance(); // object를 만들어서 리턴
const c = SingleObj.getInstance(); // b 가 만들어 놓은 object를 리턴
console.log(b === c); // true
```

## Class 상속

* 이미 작성된 class를 상속받은 후, 기존 기능에 자신만의 기능을 추가할 수 있다. (+ 접근 제어자를 오버라이딩해서 외부에서 접근 가능하도록 수정 할 수 있다.)
* constuctor 생성자 함수를 상속받아 오버라이딩 할 때는 super를 먼저 실행해줘야 한다.
* 부모의 영역에서 할 수 있는 것 , 자식의 영역에서 할 수 있는 것을 구분해서 사용해야 할 때 유용

```typescript
class Parent {
  constuctor(protected _name: string, private _age: number) {}
  
  public print(): void {
    console.log(`이름은 ${this._name}이고, 나이는 ${this._age} 입니다.`)
  }
  
  protected printInfo(): void {
    console.log(this._name, this._age);
  }
}

const parent = new Parent('Mark', 30);
console.log(parent._name) // 에러 => protected는 private와 동일하게 외부에서 접근 불가능하다.
parent.print(); // 이름은 Mark 이고, 나이는 30 입니다.
```

```typescript
class Child extends Parent {
  public gender = 'male';  
  
  constuctor(age: number) {
    super('Mark Jr.', age);
    this.printInfo(); // Mark Jr. 1 
  }
}

const child = new Child(1); // Parent의 constuctor를 상속받음
child.print(); // 이름은 Mark Jr. 이고, 나이는 1 입니다.
```

### Abstract Class

* class 내부에 완전하지 않은 기능이 있어도 해당 class 앞에 `abstract`라는 키워드를 붙이면 에러처리 되지 않는다.
* 완전하지 않은 class는 new를 이용해서 오브젝트를 생성할 수 없다.
* 따라서 상속을 통해 완전하게 만든 후 오브젝트를 생성해야 한다.

```typescript
abstract class AbstractPerson {
  protected _name: string = 'Mark';
  
  abstract setName(name: string): void; // 미완성 기능이지만 에러 처리 안됨
}

new AbstractPerson(); // 에러
```

```typescript
class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name
  }
}

const person = new Person(); // 정상 작동 
person.setName(); // 정상 작동
```
