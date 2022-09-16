# After-ES6

## ES6 이후 클래스

{% hint style="info" %}
ES6부터는 class 키워드를 도입해 클래스를 쉽게 정의할 수 있게 되었지만 내부에 있는 생성자와 프로토타입 메커니즘은 그대로이다. 스트릭트 모드를 설정하지 않아도 class 선언의 바디는 모두 묵시적으로 스트릭트 모드로 동작한다.
{% endhint %}

## class

{% hint style="info" %}
클래스 바디는 피상적으로 보면 객체 리터럴과 비슷해 보이지만 다르며, 특히 이름-값으로 프로퍼티를 정의하는 것을 허용하지 않는다. constructor 키워드는 클래스의 생성자 함수를 정의하는데, 정의된 함수에 실제로 constructor이라는 이름을 쓰지는 않는다. class 선언문은 새 변수 Range를 정의하고, constuctor 함수의 값을 그 변수에 할당한다. 클래스 초기화가 전혀 필요하지 않다면 constructor 키워드와 그 바디를 생략할 수 있으며, 이럴 경우 빈 생성자 함수가 묵시적으로 생성된다.
{% endhint %}

```javascript
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  
  includes(x) {return this.from <= x && x <= this.to}
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield;
  }
  toString() {return `${this.from}~${this.to}`}
  
}

let obj = new Range(1, 3);
obj.includes(2);  // true
obj.toString();   // '1~3'
[...obj];         // [1, 2, 3]
```

> **class 선언**
>
> 함수 선언과 마찬가지로 클래스 선언에도 문 형태와 표현식 형태가 있다. 또한 함수 표현식과 마찬가지로 클래스 정의 표현식에도 선택 사항으로 클래스 이름을 쓸 수 있으며 해당 클래스 이름은 클래스 바디 안에서만 볼 수 있다. 함수 표현식은 널리 쓰이지만, 클래스 표현식은 클래스를 인자로 받고 서브클래스를 반환하는 함수를 작성하는 경우 외에는 자주 사용되지 않는다. 또한 함수 선언과 달리 클래스 선언은 끌어올려지지 않는다.&#x20;

```javascript
class Range {constructor(from, to){...}}        // 클래스 선언문
let Range = class {constructor(from, to){...}}  // 클래스 표현식
```

> **정적 메서드**
>
> 메서드 선언 앞에 static 키워드를 붙여 정적 메서드를 정의할 수 있다. 정적 메서드는 프로토타입 객체의 프로퍼티가 아니라 생성자 함수의 프로퍼티로 정의된다. 때문에 인스턴스를 통해서는 호출할 수 없고 반드시 생성자를 통해 호출해야 하며 this 키워드를 사용하는 경우는 거의 없다.

> **게터, 세터, 기타 메서드 형태**
>
> 클래스 바디 안에서도 객체 리터럴과 마찬가지로 게터나 세터를 정의할 수 있다. 단축 메서드 정의 문법 또한 허용되며 \*를 쓰는 제너레이터 메서드와 대괄호 안에 표현식을 쓴 형태 역시 허용된다.

> **공개, 비공개, 정적 필드**
>
> 클래스 인스턴스에서 필드(프로퍼티)를 정의하려면 반드시 생성자 함수 안에서 정의하거나 메서드를 통해 정의해야 한다. 또한 클래스에 정적 필드를 정의하려면 반드시 클래스 바디 외부에서, 클래스 정의가 끝난 이후 정의해야 한다.&#x20;
>
> 필드 초기화 코드를 생성자에서 꺼내 클래스 바디에 직접 포함할 수 다. 생성자를 정의하지 않으면 필드는 묵시적으로 생성된 생성자의 일부분으로 초기화된다. this가 사라졌지만 이 필드를 참조하기 위해 반드시 this를 사용해야 하는 것은 마찬가지이며, 초기화 표현ㄴ식 할당의 오른쪽에도 this를 사용해야 한다. 이 필드 문법을 도입하기 전, 클래스 바디는 객체 리터럴과 거의 비슷하게 보였으며 다른 점은 콤마가 사라졌다는 것 뿐이였다. 이렇게 콜론과 콤마 대신 등호와 세미콜론을 쓰는 필드 문법을 쓰면 클래스 바디를 객체 리터럴과 구별하기 쉬워진다.
>
> 또한 이름이 #으로 시작하는 필드를 정의하면 그 필드는 클래스 바디 안에서는 사용할 수 있지만 클래스 바디 외부에서는 볼수 없고 접근할 수도 없는 불변의 비공개 인스턴스 필드가 된다.
>
> 공개 필드나 비공개 필드 선언 앞에 static을 추가하면 그 필드는 인스턴스 프로퍼티가 아니라 생성자 함수의 프로퍼티로 생성된다.&#x20;

```javascript
class Buffer {
  #size = 0;
  get size(){return this.#size;}
}
```

> **기존 클래스에 메서드 추가**
>
> 자바스크립트의 프로토타입 기반 상속 메커니즘은 동적이다. 객체를 생성한 후에 프로토타입의 프로퍼티가 바뀌더라도 상속 관계는 끊어지지 않으며, 이를 이용해 프로토타입 객체에 새 메서드를 추가하는 것만으로 자바스크립트 클래스를 확장할 수 있다. 심지어 자바스크립트에 내장된 클래스의 프로토타입 객체에도 이와 같은 일을 할 수 있지만 나중에 호환성 문제를 야기할 수 있으므로 내장 타입의 프로토타입에 메서드를 추가하는 건 일반적으로 좋은 방법이 아니다.

## 예제: 복소수 클래스

{% hint style="info" %}
이 클래스는 비교적 단순하지만 게터를 포함한 인스턴스 메서드, 정적 메서드 인스턴스 필드, 정적 필드가 모두 포함되어 있다.
{% endhint %}

```javascript
class Complex {
  #r = 0;
  #i = 0;
  
  constructor(real, imaginary) {
    this.#r = real;      // 실수
    this.#i = imaginary; // 허수
  }
  
  plus(that) {
    return new Complex(this.r + thar.r, this.i + that.i); 
  }
  times(that) {
    return new Complex(this.r * that.r - this.i * that.i,
                       this.r * that.r + this.i * that.i,)
  }
  
  static sum(c, d) {return c.plus(d);}
  static product(c, d) {return c.times(d);}
  
  get real() {return this.r;}
  get imaginary() {return this.i;}
  get magnitude() {return Math.hypot(this.r, this.i);}
  
  toString() {return `${this.r}, ${this.i}`;}
  equals(that) {
    return that instanceof Complex &&
      this.r === that.r &&
      this.i === that.i;
  }
  
  static ZERO = new Complex(0, 0);
}
Complex.ONE = new Complex(1, 0);

let c = new Complex(2, 3); // 새 객체 생성
c.imaginary;               // 3
Complex.ZERO.toString();   // '0, 0'
```
