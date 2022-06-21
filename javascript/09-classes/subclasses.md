# Subclasses

## 🐇 서브 클래스

{% hint style="info" %}
다른 클래스를 상속받는 서브클래스를 정의할 때는 class 키워드와 함께 extends 키워드를 사용한다.
{% endhint %}

## 🐇 ES6 이전 서브클래스

{% hint style="info" %}
다음과 같이 Object.create()를 통해 직접 상속받고 일부를 덮어쓰는 쓰는 방식으로 확장할 수 있다. 하지만 슈퍼클래스가 어떻게 만들어졌는지 자세히 알고 있어야 서브클래스 메커니즘을 빈틈없이 만들 수 있다는 번거로움이 있다.
{% endhint %}

```
function Span(start, span) {
  if(span >= 0) {
    this.from = start;
    this.to = start + span;
  } else {
    this.to = start;
    this.from = start + span
  }
}

// Span 객체 Span.prototype과 Range.prototype을 모두 상속받는다.
Span.prototype = Object.create(Range.prototype); 
Span.prototype.constructor = Span;
Span.prototype.toString = function() {
  return `(${this.from}~${thi.to = this.from})`
}
```



## 🐇 ES6 이후 서브클래스

{% hint style="info" %}
ES6에서는 class 문법에 super 키워드를 도입해 확장을 단순하게 처리할 수 있도록 하였다.ES6 이후에는 클래스 선언에 extends 를 추가하기만 해도 서브클래스를 만들 수 있으며 내장 클래스에도 이런 동작이 허용된다.
{% endhint %}

```
// 키와 값 타입을 체크하는 맵의 서브클래
class TypeMap extends Map {
  cosntructor(keyType, valueType, entries) {
    if(entries) {
      for(let [k, v] of entries) {
        if(typeof k !== keyType || typeof v !== valueType) {
          throw new Error(`Wrong type form entry [${k}, ${v}]`);
        }
      }
    }
    super(entries);             // 타입을 체크한 entries로 슈퍼클래스 초기화
    this.#keyType = keyType;     // 타입 저장하면서 서브클래스 초기화
    this.#valueType = valueType; // 타입 저장하면서 서브클래스 초기화
  }
 
  set(key, value) {             // 추가되는 새 항목마다 타입 체크하도록 재정
    if(this.#keyType && typeof key !== this.#keyType) {
      throw new TypeError(`${key} is not of type ${this.#keyType}`);
    }
    if(this.#valueType && typeof value !== this.#valueType) {
      throw new TypeError(`${value} is not of type ${this.#valueType}`);
    }
    return super.set(key, value); // 타입이 일치하면 슈퍼클래스의 set() 실
  }
  
}
```

## 🐇 super() 사용 규칙

* extends 키워드로 클래스를 정의하면 클래스 생성자는 슈퍼클래스 생성자를 호출할 때 반드시 super()을 사용해야 한다.
* 서브클래스에 생성자를 정의하지 않으면 자동으로 생성되며, 묵시적으로 정의된 생성자는 전달된 값을 그대로 super()에 전달한다.
* super()을 써서 슈퍼클래스 생성자를 호출하기 전에는 생성자 안에서 this 키워드를 사용하지 말아야 한다.&#x20;
* new 키워드 없이 호출한 함수에서는 표현식 new.target의 값이 undefined이다. 반면 생성자 함수에서 new.target은 호출된 생성자를 참조한다. 서브클래스 생성자를 호출하고 super()로 슈퍼클래스 생성자를 호출하면 슈퍼클래스 생성자는 new.target()을 통해 서브클래스 생성자를 참조할 수 있다.

## 🐇 위임과 상속

{% hint style="info" %}
&#x20;다른 클래스의 동작을 공유하는 클래스를 원한다면 서브클래스를 만들어 동작을 상속받을 수도 있지만, 클래스에서 다른 클래스의 인스턴스를 만들고 그 인스턴스에 원하는 동작을 위임하는 것이 더 쉽고 유연한 방법일 때도 있다. 이 때 다른 클래스의 래퍼를 만들거나 합성을 통해서도 새 클래스를 만들 수 있으며, 동작을 위임하는 방식을 합성이라고 부른다. 객체 지향 프로그래밍에서는 '상속보다 합성을 우선하라' 라는 격언이 자주 인용된다.
{% endhint %}

```
// 세트와 비슷하지만 각 값이 몇번 추가되었는지 추적하는 기능이 추가된 클래스


```



## 🐇 클래스 계층 구조와 추상 클래스

&#x20;
