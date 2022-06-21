# Classes

## 🐇 클래스란?

{% hint style="info" %}
자바스크립트는 처음부터 클래스 정의를 허용했으며 ES6부터는 기존 스타일의 클래스와 같은 방법으로 동작하는 class 키워드를 사용하여 더 쉽게 클래스를 만들 수 있다. 자바스크립트 클래스는 프로토타입 기반 상속을 사용한다. 즉 두 객체가 같은 프로토타입에서 프로퍼티를 상속받는다면 이들을 같은 클래스의 인스턴스라고 부른다.
{% endhint %}

## 🐇 ES6 이전의 클래스

> **클래스와 프로토타입**&#x20;
>
> 프로토타입 객체는 자바스크립트 클래스의 핵심 기능이다. 다음은 생성자를 정의하지 않았기에 널리 쓰이는 방법은 아니나, 클래스를 정의하는 가장 단순한 방법의 예시이다.

```
// range 객체를 반환하는 팩토리 함
function range(from, to) {
  let r = Object.create(range.methods); // 프로토타입 객체 상속
  r.from = from;  // 이 객체의 고유한 프로퍼티(상속x)
  r.to = to;      // 이 객체의 고유한 프로퍼티(상속x)
  return r;
}

// range 객체가 상속받 메서드 정의 (프로토타입 객체)
range.methods = {
  includes(x) {return this.from <= x && x <= this.to},
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield;
  },
  toString() {return `${this.from}~${this.to}`};
}

let r = range(1, 3);
r.includes(2);  // true
r.toString();   // '1~3'
[...r];         // [1, 2, 3]
```

> **생성자와 prototype 프로퍼티**
>
> 생성자는 새로 생성된 객체를 초기화하도록 설계된 함수이다. new 키워드를 사용해 생성자를 호출하면 자동으로 새 객체가 생성되므로 생성자 자체에서 할 일은 새 객체의 상태를 초기화하는 것뿐이다.
>
> 생성자 호출에서 중요한 특징은 생성자의 prototype 프로퍼티가 새 객체의 프로토타입으로 사용된자는 것이다. 모든 객체에 프로토타입이 있지만 prototype 프로퍼티를 가진 객체는 그 중 일부인데, 명확히 말하자면 prototype 프로퍼티를 가지는 것은 함수 객체이다. 생성자 함수를 공유하는 객체는 모두 같은 객체를 상속하며 따라서 같은 클래스의 멤버이다.

```
// 생성자를 사용한 클래스
function Range(from, to) {
  this.from = from;
  this.to = to;
}

Range.prototype = {
  includes(x) {return this.from <= x && x <= this.to},
  *[Symbol.iterator]() {
    for(let x = Math.ceil(this.from); x <= this.to; x++) yield;
  },
  toString() {return `${this.from}~${this.to}`};
}

let r = new Range(1, 3);
r.includes(2);  // true
r.toString();   // '1~3'
[...r];         // [1, 2, 3]
```

{% hint style="info" %}
**생성자와 new.target**

함수 바디 안에서 new.target을 사용하면 함수가 생성자로 호출되었는지 알 수 있다.

값이 undefined가 아니라면 해당 함수는 new 키워드와 함께 호출된 생성자 함수이다. new.target가 항상 생성자를 참조하는 건 아니며, 서브클래스의 생성자 함수를 참조할 수도 있다.

new.target이 undefined라면 이 함수는 new 키워드 없이 함수로 호출된 것이다. 자바스크립트 에러 생성자는 new 없이 호출될 수 있으며 이런 특징을 직접 작성한 생성자에도 적용하고 싶다면 아래와 같이 만들면 된다.
{% endhint %}

```
function C() {
  if(!new.target) return new C();  // new 키워드 없이 호출해도 생성자로 호출 해
  // 초기화 코드
}
```

## 🐇 instanceof

{% hint style="info" %}
프로토타입 객체는 클래스의 본질이다. 두 객체가 같은 프로토타입 객체를 상속받지 않는다면 같은 클래스의 인스턴스가 아니다. 반면 생성자 함수는 서로 다른 생성자 함수의 prototype 프로퍼티가 같은 프로토타입 객체를 참조할 수도 있다. 그리고 두 생성자가 같은 클래스의 인스턴스를 초기화 할 수 있다. 엄밀히 말해 instanof 연산자는 r이 실제로 Range 생성자를 통해 초기화 됐는지는 체크하지 않는다. 이 연산자는 r이 Range.prototype을 상속하는지만 체크한다. 따라서 instanceof를 가지고 실제로 생성자를 사용했는지 판단할 수는 없지만, 생성자가 클래스의 공개적인 부분을 담당하는 것은 사실이므로 instanceof 는 오른쪽 피연산자로 생성자 함수를 받는다.&#x20;
{% endhint %}

```
r instanceof Range; // true
```

{% hint style="info" %}
&#x20;객체의 프로토타입 체인에 특정 프로토타입이 존재하는지 테스트하고 싶지만 생성자 함수를 기준으로 하지 않으려면 isPrototypeOf() 메서드를 사용하면 된다.&#x20;
{% endhint %}

```
range.methods.isPrototypeOf(r); // true
```

## 🐇 생성자 프로퍼티

{% hint style="info" %}
&#x20;
{% endhint %}



## 🐇 class 를 사용하는 클래스



## 🐇 기존 클래스에 메서드 추





