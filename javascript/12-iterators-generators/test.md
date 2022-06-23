# Generators

## 🐇 제너레이터란?

{% hint style="info" %}
&#x20;제너레이터는 ES6부터 사용 가능한 일종의 이터레이터이다. 제너레이터는 순회할 값이 데이터 구조의 요소가 아니라 계산 결과일 때 특히 유용하다. 제너레이터를 만들기 위해서는 반드시 먼저 제너레이터 함수를 정의해야 하는데 제너레이터 함수는 function 뒤에 \*를 붙인 function\* 키워드를 사용하며 함수 선언식과 표현식 어느걸로든 정의 가능하지만 화살표 함수 문법으로는 정의할 수 없다. 제너레이터 함수를 호출하면 함수 바디를 실행하는 것이 아니라 제너레이터를 반환하는데 이 제너레이터 객체는 이터레이터이다. 따라서 제너레이터 객체에는 Symbol.iterator 메서드가 있으며, 다른 이터러블 타입처럼 사용할 수 있다. 또한 제너레이터 객체에 next() 메서드를 호출하면 제너레이터 함수의 바디가 처음 또는 현재 위치에서 실행되며 yield문을 만나면 멈춘다. yield는 ES6에서 처음 등장했으며 return 문과 비슷하다. 이터레이터에서 next()를 호출하면 yield문의 값을 반환한다.
{% endhint %}

```
// 한자리 소수를 전달하는 제너레이터 함수
function* onDigitPrimes() {
  yield 2;
  yield 3;
  yield 4;
}

let primes = oneDigitPrimes();
primes.next().value; // 2
primes.next().value; // 3
primes.next().value; // 4
primes.next().done;  // true

primes[Symbol.iterator]();
[...onDigitPrimes()];   // [2, 3, 4]
for(let prime of onDigitPrimes()) sum += prime;  // sume: 9
```

{% hint style="info" %}
메서드 정의할 때는 functin 키워드를 생략한 단축 프로퍼티 표기법을 쓸 수 있다.
{% endhint %}

```
let o = {
  x: 1, y: 2, z: 3,
  *g() {
    for(let key of Object.keys(this)) {
      yield key;
    }
  }
}

[...o.g()]; // ['x', 'y', 'z', 'g']
```

{% hint style="info" %}
제너레이터를 사용하면 이터러블 클래스를 만들기 쉽ㄴ다.
{% endhint %}

```
*[Symbol.iterator]() {
  for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
}
```

## 🐇 제너레이터 예제

{% hint style="info" %}
&#x20;제너레이터는 계산을 통해 전달할 값을 생성할 때 더욱 유용하다. 다음은 주어진 숫자의 횟수만큼의 피보나치 수열을 전달하는 제너레이터 함수의 예시이다.&#x20;
{% endhint %}

```
function* fibonacciSequence() {
  let x = 0, y = 1;
  for(;;) {
    yield y;
    [x, y] = [y, x+y];
  }
}

function fibonacci(n) {
  for(let f of fibonacciSequence()) {
    if(n-- <= 0) return f;
  }
}

fibonacci(4);  // 5: 1 => 1 => 2 => 3 => 5
```

{% hint style="info" %}
&#x20;fibonacciSequence 같은 무제한 제너레이터는 다음과 같은 take() 제너레이터와 함께 사용하면 더욱 유용하다.
{% endhint %}

```
function* take(n, iterable) {
  let it = iterable[Symbol.iterator]();
  while(n-- >= 0) {
    let next = it.next();
    if(next.done) reutn;
    else yield next.value;
  }
}

[...take(4, fibonacciSequence())]; // [1, 1, 2, 3, 5]
```

{% hint style="info" %}
&#x20;다음은 여러가지 이터러블 객체의 요소를 번갈아 끼워 넣는 유용한 제너레이터 함수이다.
{% endhint %}

```
function* zip(...iterables) {
  let iteratos = iterables.map(it => it[Symbol.iterator]());
  let indext = 0;
  while(iterators.length > 0) {
    if(index >= iterators.length) {
      index = 0;
    }
    let item = iterators[index].next();
    if(item.done) {
      iterators.splice(index, 1)
    }
    else {
      yield item.value;
      index++;
    }
  }
}

[...zip(onDigitPrimes(), 'ab', [0])];  // [2, 'a', 0, 3, 'b', 5]
```

{% hint style="info" %}
&#x20;여러가지 이터러블 객체를 섞지 않고 순서대로 전달하는 제너레이터 함수도 만들어 두면 편리하다.
{% endhint %}

```
function* sequence(...iterables) {
  for(let iterable of iterables) {
    for(let item of iterable) {
      yield item;
    }
  }
}

[...sequence(onDigitPrimes(), 'ab', [0])];  // [2, 3, 5, 'a', 'b', 0]
```

## 🐇 yield\*와 재귀 제너레이터

{% hint style="info" %}
&#x20;위와 같이 다른 이터러블 객체으 요소를 전달하는 제너레이터 함수는 자주 사용되는데 ES6부터는 yield\* 키워드를 통해 이를 간단히 구현할 수 있다. yield\*는 yield와 비슷하지만 값 하나를 전달하는 것이 아니라 이터러블  객체를 순회하면서 각각의 값을 전달한다는 특징이 있다.
{% endhint %}

```
function sequence(...iterables) {
  for(let iterable of iterables) {
    yield* iterable;
  }
}

[...sequence(onDigitPrimes(), 'ab', [0])];  // [2, 3, 5, 'a', 'b', 0]
```

{% hint style="info" %}
&#x20;forEach() 메서드는 배열 요소를 순회하기 좋은 방법이므로 sequence() 함수를 다음과 같이 작성할 수 있다고 생각하기 쉬운데, yield와 yield\*는 제너레이터 함수 안에서만 사용할 수 있으므로 다음과 같은 일반적인 함수(중첩된 화살표 함수) 안에서는 동작하지 않는다.&#x20;
{% endhint %}

```
function sequence(...iterables) {
  iterables.forEach(iterable => yield* iterable);  // 에
}
```

## 🐇 고급 제너레이터 기능

{% hint style="info" %}
&#x20;제너레이터 함수는 가장 흔하게는 이터레이터를 만드는데 사용되지만, 기본적으로 계산을 잠시 멈추고 중간 값을 전달한 다음 계산을 재개할 수 있다는 특징이 있다.
{% endhint %}

### 제너레이터 함수의 반환

{% hint style="info" %}
&#x20;지금까지의 제너레이터 함수에서는 return 문이 없었고 있다 하더라고 일찍 종료하기 위한 것일 뿐 반환할 목적으로 쓰이지 않았다. 하지만 제너레이터 함수도 다른 함수와 마찬가지로 값을 반환할 수 있다. 이를 이해하기 위해서 순회가 어떻게 이루어지는지 알고 있어야 하는데, 일반적인 이터레이터와 제너레이터에서는 value 프로퍼티가 있다면 done 프로퍼티는 정의죄기 않았거나 값이 false이다. 그리고 done이 true 이면 value는 정의되지 않는다. 값을 반환하는 제너레이터에서 next()를 마지막으로 호출했을 때 반환하는 객체헤는 value 와 done이 모두 존재한다. value 프로퍼티는 제너레이터 함수의 반환 값을 담고 있고 done 프로퍼티가 true 이므로 순회할 값이 더는 남아있지 않는다. for/of 루프와 분해연산자는 이 값을 무시하지만 next)를 명시적으로 호출해서 순회하는 코드를 직접 만들 수 있다.
{% endhint %}

```
function* oneAndDone() {
  yield 1;
  return 'done';
}

[...onAndDone()];  // 1

let generator = onAndDone();
generator.next();  // {value: 1, done: false}
generator.next();  // {value: 'done', done: true}
generator.next();  // {value: undefined, done: true}
```

### yield 표현식의 값

{% hint style="info" %}
yield는 표현식이기 때문에 값을 받을 뿐만 아니라 값을 가질 수도 있다. 제너레이터의 next() 메서드를 호출하면 제너레이커 함수는 yield 표현식을 만날때까지 실행되는데, yield 키워드 다음에 있는 표현식을 평가한 값이 next()의 반환값이 되고, 이 시점에서 제너레이터 함수는 실행을 즉시 멈춘다.  제너레이터의 next() 메서드를 다음에 호출할 때 next()에 전달된 인자는 멈췄던 yield 표현식의 값이 된다. 제너레이터는 yield로 호출자에게 값을 반환하며 호출자는 next()를 통해 제너레이터에 값을 전달한다. 즉 제너레이터와 호출자는 값과 실행 권한을 주고받는 별도의 실행 스트림이다.&#x20;
{% endhint %}

```
function* smallNumbers() {
  console.log('next()가 처음 호출었으며 인자는 무시됩니다.');
  let y1 = yield 1;
  console.log(`next()가 두번째로 호출되었으며 인자는 ${y1}입니다.`);
  let y2 = yield 2;
  console.log(`next()가 세번째로 호출되었으며 인자는 ${y2}입니다.`);
  let y3 = yield 3;
  console.log(`next()가 네번째로 호출되었으며 인자는 ${y3}입니다.`);
  return 4;
}

let g = smallNumbers();
console.log('제너레이터가 생성되었습니다. 아직 실행된 코드는 없습니다.')
let n1 = g.next('a'); // n1.value == 1
console.log(`제너레이터가 전달한 값은 ${n1.value}입니다.`)
let n2 = g.next('b'); // n2.value == 2
console.log(`제너레이터가 전달한 값은 ${n2.value}입니다.`)
let n3 = g.next('c'); // n3.value == 3
console.log(`제너레이터가 전달한 값은 ${n3.value}입니다.`)
let n4 = g.next('d'); // n4 == {value: 4, done: true}
console.log(`제너레이터는 ${n4.value}를 넘기고 종료되었니다.`)

/* console
* 제너레이터가 생성되었습니다. 아직 실행된 코드는 없습니다.
* next()가 처음 호출었으며 인자는 무시됩니다.
* 제너레이터가 전달한 값은 1입니다.
* next()가 두번째로 호출되었으며 인자는 b입니다. 
* 제너레이터가 전달한 값은 2입니다.
* next()가 세번째로 호출되었으며 인자는 c입니다. 
* 제너레이터가 전달한 값은 3입니다.
* next()가 네번째로 호출되었으며 인자는 d입니다. 
* 제너레이터는 4를 넘기고 종료되었습니다.`
*/
```

### return()과 throw() 메서드&#x20;

{% hint style="info" %}
&#x20;제너레이터가 전달(yield)하거나 반환(return)하는 값을 받을 수 있다. 그리고 제너레이터의 next() 메서드를 호출할 때 이 값을 넘겨 실행 중인 제너레이터에 전달할 수 있다.&#x20;

next()를 통ㅇ해 제너레이터에 값을 전달하는 것 이외에도 rturn()과 throw() 메서드를 호출해서 제너레이터의 실행 흐름을 제어할 수 있다.&#x20;
{% endhint %}

> return()
>
> 제너레이터에서 정리 작업을 수행하기 위한 커스텀 return() 메서드를 만들 수는 없지만 try/finally 문을 통해 제너레이터가 종료될 때 finally 블록에서 필요한 정리 작업을 수행하게 만들 수 있다. 제너레이터를 강제 종료하면 내장된 return() 메서드는 제너레이터가 더이상 사용되지 않을 때 정리 코드가 실행되도록 한다.

> throw()
>
> &#x20;제너레이터의 next() 메서드를 통해 실행 중인 제너레이터에 임의의 값을 전달할 수 있는 것과 마찬가지로 throw() 메서드를 쓰면 임의의 신호를 예외의 형태로 제너레이터에 보낼 수 있다. throw() 메서드를 호출하면 항상 제너레이터에서 예외가 발생하며 제너레이터 함수에 적절한 예외처리 코드가 있다면 예외가 심각할 결과를 초래할리 없으므로 이를 활용해 제너레이터의 동작을 제어할 수 있다.&#x20;

{% hint style="info" %}
&#x20;제너레이터가 yield\*를 통해 다른 이터러블 객체에 값을 전달하면 제너레이터의 next() 메서드를 호출할 때 이터러블 객체의 next() 메서드가 호출되는데 이는 return()과 throw()도 마찬가지 이다. 제너레이터가 return()과 throw() 메서드가 정의된 이터러블 객체에 yield\*를 사용하면, 제너레이터에서 return()이나 throw()를 호출할 때 이터레이터의 return()이나 throw() 메서드가 이어서 호출된다.&#x20;
{% endhint %}
