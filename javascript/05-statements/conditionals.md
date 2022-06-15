# Conditionals

## 🐇 조건문이란?

{% hint style="info" %}
조건문은 지정된 표현식의 값에 따라 자바스크립트 인터프리터가 다른 문을 실행하기도, 실행하지 않기도 한다. 이런 문은 **코드에서 어떤 것을 결정하는 부분이며 '분기점'이라고 부르기도 한다.**&#x20;
{% endhint %}

## 🐇 If/esle

{% hint style="info" %}
if 키워드 뒤의 괄호 안 표현식을 평가하여, true 같은 값이면 다음 문을 행하고 , fasle 같은 값이면 실행하지 않는다. 자바스크립트는 표현식 뒤에 문 하나 있어야 한다고 규정하지만, 문 블록을 써서 여러 문을 하나로 모을 수 있다. (중괄호를 써야 코드를 더 명확하게 이해하기 쉽다.)
{% endhint %}

```
if(num%2 === 0)        // true 같은 값이
  console.log('짝');   // console로 출력한다.
  if(num === 0)        // if문을 중첩해서 사용할 때는
    console.log('0');  // else절이 적절한 if문과 연결되도록 주의해야 한다.
else if(num%2 === 1)   // else if문 통해 
  console.log('홀');   // 조건을 추가할 수 있다.
else                   // username이 false같은 값이면
  console.log('소');   // 새로운 이름을 할당한다.
```

> 자바스크립트는 기본적으로 else절을 가장 가까운 if 문의 일부로 해석하므로, **if문을 중첩해서 사용할 때는 명확하게 작성**하여 이해하고 관리하게 쉽게 해야한다. 위 예제는 의도와 달리 아래와 같이 생각과는 다르게 출력된다.

```
if(num%2 === 0){       
  console.log('짝');   
  if(num === 0){      
    console.log('0');
  } 
  else if(num%2 === 1){   
    console.log('홀');
  }
  else{                  
    console.log('소');
  }
}  
```

## 🐇 Switch

{% hint style="info" %}
똑같은 표현식을 esle if문을 통해 반복해서 평가하는 것은 낭비이며, switch문으로 한번만 평가하도록 대체할 수 있다. 같은 값은 === 연산자를 기준으로 판단하며, 일치하는 case: 를 찾지 못할 경우 defalut: 라벨을 찾고, defalut: 라벨조차 없으면 switch문은 코드 블록 전체를 건너뛴다. switch문은 출발점을 지정할 뿐 끝나는 곳은 지정하지 않으므로, 블록 끝에 다다를 때까지 실행을 계속할 것이 아니라면 break 또는 return을 넣어 문을 종료해야 한다.
{% endhint %}

```js
switch (color) {
  case orange:
   console.log('오렌지색');
   break;
  case green:
   console.log('초록');
   break;
  default:
   console.log('?');
}
```
