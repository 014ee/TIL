# Iterable-Objects

## 🐇 이터러블 객체 만들기

{% hint style="info" %}
&#x20;이터러블 객체는 아주 편리하므로, 어떤 형태로든 순회할 수 있는 데이터 타입이라면 이터러블로 만드는 것을 고려해봐야 한다.&#x20;
{% endhint %}

### 이터러블 기반의 Range 클래스

클래스를 이터러블로 만들기 위해서는 반드시 이름이 Symbol.iterator인 메서드를 만들어야 하며, 이 메서드는 반드시 next() 메서드가 있는 이터레이터 객체를 반한해야 한다. next() 메서드는 반드시 순회 결과 객체를 반환해야 하며, 순회 결과 객체에는 value 프로퍼티와 done 프로퍼티 중 하나는 반드시 존재해야 한다.

```
class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  
  has(x) {return typeof x === 'number' && this.from <= x && x <= this.to;}
  toString() {return `{x | ${this.from} <= x <= ${this.to}}`;}
  [Symbol.iterator]() {
    let next = Math.ceil(this.from);
    let last = this.to;
    return {
      next() {
        return (next <= last)
          ? {value: next++}
          : {done: true};
      },
      [Symbol.iterator]() {return this;}
    }
  }
}

for(let x of new Range(1, 10)) console.log(x);
[...new Range(-2, 2);]  // [-2, -1, 0, 1, 2]
```

### 이터러블 기반의 map() 함

```
function map(iterable, func) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {return this;},
    next() {
      let v = iterator.next();
      if(v.done) {
        return v;
      } else {
        return {value: func(v.value)}
      }
    }
  }
}

[...map([1, 2, 3], x => x+1)]; // [2, 3, 4]
```

### 이터러블 기반의 filter() 함

```
function filter(iterable, predicate) {
  let iterator = iterable[Symbol.iterator]();
  return {
    [Symbol.iterator]() {return this;},
    next() {
      for(;;) {
        let v = iterator.next();
        if(v.done || predicate(v.value)) {
          return v;
        }
      }
    }
  }
}

[...filter([1, 2, 3, 4], x => x%2 === 0)];  // [2, 4]
```

### 느긋하게 순회하기

{% hint style="info" %}
이터러블 객체와 이터레이터의 핵심 특징 중 하나는 이들이 본직적으로 느긋하다는 것이다. 다음 값을 얻기 위해 계산이 필요하다면 그 값이 실제로 필요할 때까지 계산을 늦출 수 있다. 이를 활용하면 불필요한 계산 또는 메모리 낭비를 방지할 수 있다. 다음은 문자열을 메모리에 한번에 담지 않고 느긋하게 순회하는 함수이다.
{% endhint %}

```
function words(s) {
  var r = /\s+|$/g;                    // 하나 이상의 스페이스와 일치
  r.lastIndex = s.match(/[^ ]/).index; // 스페이스가 아닌 첫번째 위치에서 검색을 시작
  return {
    [Symbol.iterator]() {return this;},
    next() {
      let start = r.lastIndex;
      if(start < s.length) {
        let match = r.exec(s);
        if(match) {
          return {value: s.substring(start, match.index)};
        }
      }
      return {done: true};
    }
  };
}

[words(' abc def ghi ')]; // ['abc', 'def', 'ghi']
```

## 🐇 이터레이터 종료: return 메서

{% hint style="info" %}
&#x20;이터레이터는 항상 끝까지 실행되지 않는다 for/of 문의 경우 break, return 문을 만나거나 예외가 일어났을 때 종료되며, 이터레이터를 분해 할당과 함께 사용하면 next() 메서드는 지정된 변수 각각의 값을 얻을 만큼만 호출된다. 이터레이터가 반환할 수 있는 값이 훨씬 만더라도 필요 이상으로 호출되지 않는다. 따라서 이터레이터가 끝까지 실행되지 않더라도 실행을 중단(파일 종료 등)할 방법이 있어야 하는데, 이는 return() 메서드로 해결할 수 있다.&#x20;

next()가 done 프로퍼티가 true인 결과를 반환하기 전에 순회를 마처야 한다면 인터프리터는 이터레이터 객체에 return() 메서드가 있는지 확인한 후 return() 메서드가 존재한다면 인자 엇이 해당 메서드를 호출해서 파일을 닫고 메모리를 반환하는 등의 작업을 한다.

return() 메서드는 반드시 순회 결과 객체를 반환해야 하며, 객체의 프로퍼티는 무시되지만 객체가 아닌 값을 반환하면 에러가 일어난다. &#x20;
{% endhint %}
