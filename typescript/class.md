# ✅ Class Basic
* class 문법은 es6 부터 사용 가능하고, `tsconfig` 의 기본 설정은 `target: es5`로 되어있다.  
따라서 target을 es6로 수정하지 않으면 class 문법을 사용할 수 없으므로, 함수 형태로 대체되어 컴파일 된다.
* `!` class 내부에서 값을 할당하지 않고, 외부에서 나중에 처리할 경우 `!`를 붙여 위험을 표시한다.
* `?` 값을 받아도, 안 받아도 되는 경우 `?`를 붙여 표시한다.
* `public` class 외부에서 접근 가능하도록 해준다. (default 설정이므로 생략 가능)
* `private` class 내부에서만 접근 가능하도록 해준다. (과거 컨벤션이 유지되어 private한 키워드에는 언더바를 붙이는 경우도 있다.)  
참고) 자바스크립트에서는 public, private을 기본 스펙으로 제공하지 않아 private한 값에는 언더바를 붙여 표기했었다. (바벨 있으면 가능)
* `protected` private처럼 class 외부에서는 접근 불가능 하지만, 상속 관계가 있는 곳에서는 접근 가능하다.
```ts
class Person {
  public name: string;
  private age: number;
  
  constuctor(name: string, age: number){ 
    this.name = name;
    this.age = age;
  }
}

const teacher = new Person('Mark', 30);
```
* 단순히 값을 받아 설정하는 용도라면 아래와 같이 축약해서 많이 사용한다. (위와 동일한 코드)
```ts
class Person {
  public constuctor(public name: string, private age: number){}
}

const teacher = new Person('Mark', 30);
```

# ✅ Getter&Setter
* `getter` 값을 가져오는 함수 (함수 내에서 뭔가 처리를 한 후 값을 반환할 수 있다.)
* `setter` 값을 세팅하는 함수 (무언가 인자로 받아 값을 설정할 수 있다.)
* getter나 setter 둘중에 하나만 사용해서 읽기 전용 또는 쓰기 전용 값으로 설정할 수 있다.
```ts
class Person {
  public constuctor(private name: string, private age: number){}
  
  get personName(){
    return this.name + 'Lee';
  }
  
  set personName(nickName: string){
    this.name = nickName;
  }
}

const teacher = new Person('Mark', 30);
```
```ts
console.log(teacher.personName); // Mark Lee (getter)
teacher.personName = 'Woongjae'; // setter
console.log(teacher.personName); // Woongjae Lee (getter)
```

# ✅ Readonly
* readonly 처리를 하면 초기화되는 영역을 제외하고는 class 외부든 내부든 값을 재설정할 수 없다.
```ts
class Person {
  public readonly personName: string = 'Mark'
  private readonly country: string = 'Korea'
  
  public constuctor(private name: string, private age: number){
    this.country = 'Korea' // 초기화 영역이므로 값 세팅 가능
  }
  
  hello(){
    this.country = 'Japan'; // 에러 => country는 readonly이므로 값을 세팅할 수 없다. 
  }
}

const teacher = new Person('Mark', 30);
```
```ts
console.log(teacher.personName); // Mark Lee
teacher.personName = 'Woongjae'; // 에러 => personName은 readonly이므로 값을 세팅할 수 없다. 
```

# ✅ Index Signature
* class 객체 내 속성이 고정된 형태가 아니라 동적으로 변화되는 경우 사용할 수 있다.
* `index`는 지정한 타입에만 충족되면 어떠한 내용도 입력할 수 있다.
```ts
class Students {
  [index: string]: 'male' | 'female'; // 어떤 속성이든 문자열 타입이고, 값은 'male' 또는 'female' 이다.
}
```
```ts
const classA = new Students();
classA.mark = 'male';
classA.jade = 'male'

console.log(classA); // {mark: 'male', jade: 'male'}
```
```ts
const classB = new Students();
classB.chloe = 'female';
classB.alex = 'male'
classB.anna = 'female'

console.log(classB); // {chloe: 'female', alex: 'male', anna: 'female'}
```

# ✅ Static Properties&Methods
* class 내부에서 `static`이 설정된 데이터는 공통적으로 공유된다.
* ex) woongjae에서 CITY 값을 바꾸면, inhwa에서도 바뀐 값으로 보인다. 
```ts
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
```ts
const woongjae = new Person();
woongjae.hello(); // Welcome Seoul
woongjae.change(); // CITY 값을 변경함

const inhwa = new Person();
inhwa.hello(); // Welcome LA 
```

## Singletons
* private과 static 키워드를 가지고 단일 오브젝트를 공유하는 싱글톤 패턴을 만들 수 있다.
```ts
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

# ✅ Class 상속
* 이미 작성된 class를 상속받은 후, 기존 기능에 자신만의 기능을 추가할 수 있다.
(+ 접근 제어자를 오버라이딩해서 외부에서 접근 가능하도록 수정 할 수 있다.)
* constuctor 생성자 함수를 상속받아 오버라이딩 할 때는 super를 먼저 실행해줘야 한다.
* 부모의 영역에서 할 수 있는 것 , 자식의 영역에서 할 수 있는 것을 구분해서 사용해야 할 때 유용
```ts
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
```ts
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

## Abstract Class
* class 내부에 완전하지 않은 기능이 있어도 해당 class 앞에 `abstract`라는 키워드를 붙이면 에러처리 되지 않는다.
* 완전하지 않은 class는 new를 이용해서 오브젝트를 생성할 수 없다.
* 따라서 상속을 통해 완전하게 만든 후 오브젝트를 생성해야 한다.
```ts
abstract class AbstractPerson {
  protected _name: string = 'Mark';
  
  abstract setName(name: string): void; // 미완성 기능이지만 에러 처리 안됨
}

new AbstractPerson(); // 에러
```
```ts
class Person extends AbstractPerson {
  setName(name: string): void {
    this._name = name
  }
}

const person = new Person(); // 정상 작동 
person.setName(); // 정상 작동
```
