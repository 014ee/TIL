# Declarations

## 🐇 선언이란?

{% hint style="info" %}
새 값을 정의하고 이름을 부여해서 나중에 참조할 수 있도록 한다. 엄밀히 말해 문은 아니지만 프로그램에 속한 문의 의미가 바뀐다는 의미에서 중요하다.
{% endhint %}

## 🐇 const, let, var

{% hint style="info" %}
ES6 이후 const는 상수를, let은 변수를 선언한다. ES6 이전에는 var가 유일한 변수였는데 블록이 아닌 함수 스코프이며 이 때문에 버그가 많이 발생하여 최근에는 사용을 제한한다.
{% endhint %}

## 🐇 function

{% hint style="info" %}
함수를 정의할 때 사용하는 키워드로, 함수 객체를 생성하고 이를 지정된 이름에 할당한다. 이후 프로그램의 다른 곳에서 이 이름을 사용해 함수를 참조하고 코드를 실행시킬 수 있다. 함수 선언은 어떤 블록의 코드보다 먼저 처리되며, 함수 이름은 그 블록을 통틀어 함수 객체에 묶는다.

\*\*함수 선언은 어떤 스코프에서 정의되었든 항상 맨 위에 있는 것 처럼 처리기 때문에 함수를 선언하는 코드 앞에서 그 함수를 먼저 호출할 수 있으며 이를 **'함수 호이스팅'**이라고 한다.
{% endhint %}

## 🐇 class

{% hint style="info" %}
ES6 이후에는 class 선언으로 새 클래스를 생성하고 이름을 붙여 객체를 생성할 수 있다. 함수와 달리 클래스 선언은 끌여올려지지 않으며, 때문에 선언하기 전 클래스를 먼저 사용할 수 없다.
{% endhint %}

## 🐇 import/export

{% hint style="info" %}
import 와 export 선언은 다른 모듈에서 정의한 값을 사용할 수 있게 한다. 모듈은 자바스크립트 코드로 구성된 파일이며 독자적인 전역 네임스페이스를 갖고, 다른 모듈에 완전히 독립적이다.&#x20;
{% endhint %}

> **import 지시**
>
> 다른 모듈에서 하나 이의 값을 가져오고, 현재 모듈에서 사용할 이름을 부여한다.&#x20;

```javascript
import Circle from './circle.js';
import {PI, TAU} from './constants.js';
import {magnitude as hypotenuse} from './utils.js'
```

> **export 지시자**
>
> 모듈에 있는 값은 비공개이며 명시적으로 내보내지는 한 다른 모듈에서 가져올 수 없다.\
> export 지시자는 현재 모듈에서 정의한 하나 이상의 값을 내보낼 수 있다.

```javascript
const PI = Math.PI;
const TAU = 2 * PI;
export {PI, TAU};

export const username = 'Lee';
export default function sum(x, y){return x+y} 
```
