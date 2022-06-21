# ESM

## 🐇 ESM이란?

{% hint style="info" %}
&#x20;ES6에서 import와 export 키워드를 자바스크립트에 추가하면서 마침내 언어 코어에서 모듈을 지원하기 시작했다. ES6의 모듈은 노드 모듈과 같은 개념이다. 각 파일이 하나의 모듈이며 파일에서 정의한 상수, 변수, 함수, 클래스는 명시적으로 내보내지 않는 한 해당 모듈에서만 사용된다. 하지만 ES6 모듈의 문법은 노드 모듈과 내보내기/가져오기 문법에 차이가 있고 웹 브라우저에서 모듈을 정의하는 방법도 다르다.
{% endhint %}

## 🐇 ESM과 스크립트의 차이

{% hint style="info" %}
&#x20;일반 스크립트에서는 최상위에서 선언한 변수, 함수, 클래스는 모두 모든 스크랩트가 공유하는 전역 컨텍스트에 들어간다. 반면 모듈에서는 각 파일에 비공개 컨텍스트가 있으며 import, export 문을 사용할 수 있다. 또한 ES6 모듈의 코드는 ES6 class 문에 있는 코드와 마찬가지로 자동으로 스트릭트 모드에 들어간다. ES6 모듈은 스트릭트 모드보다 좀 더 엄격한데, 스트릭트 모드에서 함수로 호출된 함수의 this가 undefined라면, 모듈에서는 최상위 코드에서도 this가 undefined이며, 이는 웹 브라우저와 노드의 스크립트에서 this가 전역 객체인 것과 다르다.
{% endhint %}

## 🐇 웹과 노드의 모듈

{% hint style="info" %}
IE를 제외한 모든 웹 브라우저에서 ES6를 정식으로 지원하기 시작하면서 네이티브로 지원하는 브라우저에서는 \<script type='module'>태그를 사용해 ES6 모듈을  HTML 페이지에 삽입할 수 있게 되었다. 노드가 자바스크립트의 모듈화를 도왔다고 볼 수 있지만, 그 때문에 완전히 호환되지 않는 두 가지 모듈 시스템을 지원해야하는 상황에 처했다. 노드 13은 ES6 모듈을 지원하지만, 아직은 노드 프로그램 대다수가 노드 모듈을 사용한다.
{% endhint %}

## 🐇 ESM 내보내기

{% hint style="info" %}
&#x20;ES6 모듈에서 상수, 변수, 함수, 클래스를 내보낼 때 다음과 같이 선언 앞에 export 키워드를 추가한다. export 키워드는 자바스크립트 코드의 최상위 레벨에만 존재할 수 있다. 이는 ES6 모듈 시스템의 중요한 특징이며 이 때문에 정적 분석이 가능한 것이다. 모듈은 항상 같은 값을 내보내며 내보낸 심벌은 모듈을 실제로 실행하기 전에 평가할 수 있다.
{% endhint %}

```
export cosnt PI = Math.PI;
export function sum(x, y) {return x + y;}
```

{% hint style="info" %}
기존과 같이 상수, 변수, 함수, 클래스를 정의하고, export 문을 하나만 써서 무엇을 내보낼지 정확히 선언하는 방법도 있다. 이는 객체 리터럴 처럼 보일 수 있으나 내보니기 문법으로 중괄호 안에 콤마로 구분된 식별자 리스트를 쓰도록 정했을 뿐이다.
{% endhint %}

```
export {PI, sum};
```

{% hint style="info" %}
함수나 클래스 하나만 내보내는 모듈을 만드는 경우에는 보통 export 뒤에 default를 붙여서 사용한다. export를 사용하는 일반 내보내기 이름이 있는 선언에서만 사용할 수 있다면 export default를 사용하는 디폴트 내보내기는 익명 함수 표현식과 익명 클래스 표현식을 포함해 어떤 표현식이든 내보낼 수 있다. 대신 디폴트 내보내기는 한 파일에 하나만 쓸 수 있으며 값을 가져오는 모듈에서 이름을 지정해야 한다.
{% endhint %}

```
export defualt class BitSet {
  // 클래스 바
}
```

## 🐇 ESM 가져오기

{% hint style="info" %}
다른 모듈에서 내보낸 값을 import 키워드로 가져올 수 있다. 가져온 값이 할당된 식별자는 const 키워드를 사용한 것처럼 상수로 선언된다. 내보내기와 마찬가지로 가져오기 역시 모듈의 최상위 레벨에만 존재할 수 있다. 거의 대부분의 개발자가 모듈에 필요한 가져오기를 할 때 모듈 맨 위에 작성하는데, 함수 선언과 마찬가지로 가져오기는 모듈 맨 위로 끌어올려지므로 가져온 값은 모듈 어디에서든 사용할 수 있다. 모듈 지정자 문자열은 반드시 /로 시작하는 정대 경로, ./나 ../로 시작하는 상대 경로, 프로토콜과 호스트 이름을 포함한 완전한 URL 중 하나여야 하며, 웹팩 같은 코드 번들링 도구는 라이브러리 디텍터리를 지정할 수 있으므로 이런 제한을 지키지 않는다.
{% endhint %}

```
import BitSet from './bitset.js';  // 디폴트 내보내기로 정의한 모
```

{% hint style="info" %}
&#x20;여러 값을 내보내는 모에서  가져올 때는  다음과 같다. default를 사용하지 않는 내보내기에서는 내보내는 값에 이름이 있고, 가져오는 모듈에서는 그 이름으로 값을 참조한다. 내보내는 모듈에서 이름 붙은 값의 개수는 제한이 없으며, 해당 모듈을 참조하는 import 문은 중괄호 안에 원하는 이름을 써서 원하는 값만 가져올 수 있다. 이는 분해 할당과 비슷하게 보이며 실제로 비슷하게 동작한다. 중괄호 안에 있는 식별자는 모두 가져오는 모듈의 맨 위로 끌어올려지며 상수처럼 동작한다.
{% endhint %}

```
import {mean, stddev} from './stats.js'; // 원하는 값만 가져올 수 있다.
improt * as stats from './stats.js'; // default 제외 내보내기 값을 모두 가져올 수 있다.
```

{% hint style="info" %}
&#x20;import 문은 내보내기가 전혀 없는 모듈도 가져올 수 있다. 이런 모듈은 처음 가져올 때 실행되며, 이어지는 가져오기는 아무 일도 하지 않는다. 함수를 정의하는 모듈은 함수를 최소 하나는 내보내야 의미가 있다. 하지만 모듈이 어떤 코드를 실행한다면 특별한 이름 없이 가져오기만 해도 의미가 있을 수 있다. 예를 들어 웹 애플리케이션 분석 모듈에서 이벤트 핸들러를 등록하고 이벤트 핸들러에서 필요한 데이터를 필요한 시간에 서버에 전송한다고 하면 ,이 모듈은 독립적이며 아무 것도 내보낼 필요가 없지만 프로그램의 일부로 실행되려면  import 문으로 가져와야 한다.
{% endhint %}

```
import './analytics.js';
```

## 🐇 이름 바꾸기

{% hint style="info" %}
&#x20;가져오기나 내보내기 시 기존 이름을 바꿔야 할 때 다음과 같이 할 수 있다.
{% endhint %}

```
import {render as renderImage} from './imageutils.js';
import {render as renderUI} from './ui.js';
import {default as Histogram, mean, stddev} from './histogram-stats.js';
```

```
export {
  layout as calculateLayout,
  render as renderLayout
}
```

## 🐇 다시 내보내기

{% hint style="info" %}
다른 모듈의 여러 값을 하나로 묶어서 단지 내보내기만 하고 싶은 경우 ES6 모듈에서 만든 특별한 문법인 '다시 내보내기' 문을 사용할 수 있다.&#x20;
{% endhint %}

```
export {mean} from './stats/mean.js';
export {stddev} from './stats/stddev.js';
```

{% hint style="info" %}
&#x20;다시 내보내기 할 대 필요한 것만 선택하지 않고 모듈에서 사용하는 값 전체를 내보낼 때는 와일드 카드를 쓸 수 있으며 다시 내보내기 문법은 일반적인 import, export 문과 마찬가지로 as 키워드를 허용한다.
{% endhint %}

```
export * from './stats/mean.js';
export * from './stats/stddev.js';

export {mean as default} from './stats/mean.js';
export {default as stddev} from './stats/stddev.js';
```

## 🐇 웹의 자바스크립트 모듈

{% hint style="info" %}

{% endhint %}



## 🐇 import()의 동적 가져오기

{% hint style="info" %}

{% endhint %}



## 🐇 import.meto.url

{% hint style="info" %}

{% endhint %}

