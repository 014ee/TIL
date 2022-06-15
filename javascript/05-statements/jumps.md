# Jumps

{% hint style="info" %}
자바스크립트 **인터프리터가 소스 코드의 다른 위치로 이동**하게 하는 문이다.
{% endhint %}

## 🐇 라벨이 붙은 문

{% hint style="info" %}
어떤 문이든 그 앞에 식별자와 콜론을 붙여서 라벨을 만들 수 있다. 라벨에 사용하는 식별자는 예약어를 제외한 무엇이든 사용할 수 있다. 또한 라벨의 네임 스페이스는 변수나 함수의 네임스페이스와는 다르므로 같은 문 라벨에 쓴 식별자를 변수와 함수의 이름에 쓸 수 있다.

\*\*문 라벨이 정의되는 영역은 해당 라벨이 적용되는 문 뿐이다. 자신을 포함한 문과 같은 라벨을 붙일 수 없지만, 중첩되지 않은 두 문에는 같은 라벨을 붙일 수 있다.
{% endhint %}

```
mainloop: while(token !== null) {
  // 코드 생략
  continue mainloop  // 이 루프의 다음 반복으로 건너뛴다.
  // 코드 생략
}
```

## 🐇 break

{% hint style="info" %}
인터프리터를 루프를 비롯한 다른 문의 끝으로 이동시킨다. 단독으로 사용하면 자신을 포함하고 있는 가장 가까운 루프 또는 switch문을 즉시 빠져나간다. 어떤 이유로든 루프를 더 진행할 필요가 없을 때 일찍 끝내는 용도로 사용한다. 가령 탈출하려는 문이 가장 가까운 루프나 switch문이 아닐 때 문 라벨을 사용해서 해당 라벨의 문을 종료할 수 있다. (하지만 라벨 여부와 관계 없이 함수 바깥으로 제어권을 넘길 수는 없다.)
{% endhint %}

```
let matrix = getDate();
let sum = 0, success = false;
computeSum: if(matrix) {
  for(let x = 0; x < matrix.length; x++) {
    let row = matrix[x];
    if(!row) break computeSum;
    for(let y = 0; y < row.length; y++) {
      let cell = row[y];
      if(isNaN(cell) break computeSum;
      sum += cell
    }
  }
   success = true;
}
// break문은 여기로 점프한다.
```

## 🐇 continue

{% hint style="info" %}
루프 바디의 나머지를 생략하고 루프 맨 위로 돌아가 다 반복을 시작한다. continue 문 또한 라벨을 붙여서 중첩된 루프에서 가장 가까운 루프가 아닌 다른 루프를 재시작할 수 있다.
{% endhint %}

> **while**
>
> while문 위로 올라가 표현식을 다시 평가하고, true면 루프 바디를 맨 위부터 실행

> **do/while**
>
> 루프 맨 아래까지 건너뛴 다음, 루프 조건을 다시 평가한 후 맨 위부터 재시작

> **for**
>
> 변화조건을 평가한 후 종료조건을 평가해 반복을 재개할지 결절

> **for/of, for/in**
>
> 다음 값 또는 프로퍼티 이름이 변수에 할

```
for(let i = 0; i < data.length; i++) {
  if(!data[i]) continue;  // 정의되지 않은 데이터는 처리하지 않고 건너뛴다.
  total += data[i];
}
```

## 🐇 return

{% hint style="info" %}
return 문은 함수 바디 안에서만 사용할 수 있으며, 인터프리터가 함수에서 즉시 빠져나와 호출자에게 함수 호출 값을 전달하게 한다. return 문이 없는 함수 호출은 함수 바디의 각 문을 차례대로 실행한 다음 호출자에게 돌아가며, 호출 표현식은 undefined로 평가된다.
{% endhint %}

```
function sum(num1, num2) {
  if(typeof num1 !== number && typeof num2 !== number) return;
  return num1 + num2;
}
```

## 🐇 yield

{% hint style="info" %}
yield은 return과 비슷한 문으로, 제너레이터에서 제어권은 넘기지 않고 다음 값만 넘길 때 사용한다. 엄밀히 말하면 문 보다는 연산자에 가깝다.
{% endhint %}

```
function* range(from, to) {
  for(let i = from; i <= to; i++) {
    yield i;
  }
}
```

## 🐇 throw

{% hint style="info" %}
자바스크립트에서 예외는 런타임 에러가 일어났을 때, 프로그램에서 직접 throw 문을 통해 에러나 예외 신호를 보낼 때 발생한다. throw문으로 전달하는 값은 숫자나 문자열 등 어떤 타입으로든 평가될 수 있으며, 인터프리터는 에러를 일으킬 때 Error 클래스와 그 서브 클래스를 사용한다. Error 객체에는 에러 타입을 나타내는 name 프로퍼티와 생성자 함수에 전달될 문자열을 담을 message 프로퍼티가 있다.&#x20;
{% endhint %}

```
function factorial(x) {
  if(x < 0) throw new Error('x에는 음수가 들어올 수 없습니다.');
  let f;
  for(f = 1; x > 1; f *= x, x--) /* 의도적으로 비움 */
  return f;
}
```

{% hint style="info" %}
이렇게 발생한 예외는 예외 처리를 담당하는 try/catch/finally와 함께 사용하여 처리할 수 있다. 예외가 일어나면 인터프리터는 즉시 프로그램 실행을 멈추고 가장 가까운 예외 핸들러로 점프한다. 예외를 일으킨 코드 블록에 연결된 catch 절이 없다면 인터프리터는 다음으로 가장 가가운 코드 블록에 예외 핸들러가 있는지 검색하며 이 과정을 핸들러를 찾을 때까지 반복하며 올라간다. 스택을 거슬러 올라가 함수를 호출한 코드에서까지 예외 핸들러를 찾지 못하면 예외를 에러로 간주하고 사용자게 보고한다.
{% endhint %}

## 🐇 try/catch/finally

{% hint style="info" %}
catch 와 finally 블록은 선택 사항이지만 try 블록 뒤에 둘 중 하나는 반드시 써야 한다. 또한 try/catch/finally 문에서 중괄호는 필수사항이다.
{% endhint %}

> **try**
>
> 처리하려 하는 예외가 담긴 코드 블록이다.&#x20;

> **catch**
>
> try 블록에서 예외가 일어나면 catch절이 호출된다. **** catch 키워드 뒤에는 일반적으로 괄호 안에 식별자를 쓰는데, 이 식별자는 예외를 캐치해서 그 예외와 연관된 값을 매개변수에 할당한다. 예외를 처리할 catch 블록이 없다면 인터프리터는 먼저 try 다음 finally 블록을 실행하고, 이후 가장 가까운 catch 절로 점프한다.

> **finally**
>
> try 블록에서 무슨 일이 있어났든 관계 없이 실행되는 일종의 정리 코드이다. continu, break, return 문으로 인해 try 블록을 중단하는 경우에도 다음 목적지로 이동하기 전에 finally 문을 실행한다. finally 블록 자체에 return, continu, break, throw 문이 있거나 예외를 일으키는 함수를 호출하면 인터프리터는 대기시켜 둔 점프를 취소하고 finally 블록을 따라 점프한다. 즉, finally 절에서 예외를 일으키면 그 예외는 처리 중이던 예외를 모두 무시하고 우선권을 갖는다.

```
try {
  // 문제가 없을 경우 블록 위에서 아래로 실행된다.
  // throw 문을 통해 예외를 직접 일으키거나
  // 예외를 일으키는 메서드를 호출해서 간접적으로 일으킨다. 
}
catch(error) {
  // 이 블록은 try 에서 예외를 일으켰을 때만 실행된다.
  // 로컬 변수 error을 사용할 수있으며, 이 변수는 Error 객체 또는 전달받은 값을 참조한다.
  // 이 블록은 예외를 처리할 수도 있고, 아무일도 하지 않고 무시할 수도 있으며
  // throw를 통해 다시 예외를 일으킬 수도 있다.
}
finally {
  // 이 블록은 try 블록에서 무슨 일이 있었든 항상 실행된다.
}
```

> **단순 catch 절 (ES2019)**
>
> 예외의 타입이나 값이 무엇이든 상관 없이 예외를 감지하고 전파를 막을 목적으로만 catch 절을 사용하고 싶을 때, 괄호와 식별자를 생략하고 catch 키워드만 쓸 수 있다.

```
function parseJSON(data) {
  try {
    return JSON.parse(data);
  } catch {
    // 문제가 발생해도 신경 쓰지 않는다.
    return undefined;
  }
}
```

> **try/finally를 이용해 while 문로 for 문 흉내내기**
>
> continue 문의 동작 방식 차이 때문에 일반적으로 while 루프로 for 루프를 완전히 흉내 낼 수는 없으나, try/finally 문을 사용하면 for 루프처럼 동작하며 continue 문 도 정확하게 처리하는 while 루프를 만들 수 있다. (하지만 body 에 break 문이 들어있다면 종료 전에 i++가 한번 더 실행되므로 다르게 동작한다.)

```
// for(let i = 0; i < 10; i++)
let i = 0;
while(i < 10) {
  try {
    body;
  }
  finally {
    i++;
  }
}
```
