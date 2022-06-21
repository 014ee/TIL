# CommonJS

## 🐇 노드 모듈이란?

{% hint style="info" %}
&#x20;노드 프로그래밍에서는 일반적으로 프로그램을 여러개의 파일로 나눈다. 이 파일은 빠른 파일 시스템에 존재한다고 가정하므로, 비교적 느린 네트워크 연결을 통해 자바스크립트 파일을 불러오는 웹 브라우저와는 달리 노드 프로그램 파일 하나로 모을 필요가 없다. 노드에서 각 파일은 비공개 네임스페이스를 가진 독립적인 모듈이다. 파일에서 정의한 상수, 변수, 함수, 클래스는  파일에서 내보내지 않는 한 모두 비공개이며 모듈에서 명시적으로 내보내야만 다른 모듈에서 그 값을 가져올 수 있다. 노드 모듈은 require() 함수를 통해 다른 모듈을 가져오고, Exports 객체의 프로퍼티를 수정하거나 module.exports 객체 자체를 바꾸는 방법으로 공개 API를 내보낼 수 있다.
{% endhint %}

## 🐇 노드 내보내기

{% hint style="info" %}
&#x20;노드의 전역 객체 exports는 항상 정의되어 있다. 여러가지 값을 내보내는 노드 모듈을 만들 때 다음과 같이 이 객체의 프로퍼티로 할당하면 된다.&#x20;
{% endhint %}

```
const sum = (x, y) => x + y;
const square = x => x * x;
exports.mean = data => data.reduce(sum)/data.length;
export.stddev = function(d) {
  let m = exports.mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
}
```

{% hint style="info" %}
함수나 클래스 하나만 내보내지 않고, 함수와 클래스로 구성된 객체를 내보내고 싶은 경우 내보낼 값을 module.exports에 할당하면 된다.
{% endhint %}

```
modulce.exports = class BitSet extends AbstractWritableSet {
  // 클래스 바
}
```

{% hint style="info" %}
&#x20;module.exports의 기본 값은 exprots가 참조하는 것과 같은 객체이다. 앞에서 사용한 통계 모듈에서도 평균을 계산하는 함수를 exports.mean를 이용해 하나씩 내보내기 보다 module.exports.mean 과 같이 모듈 마지막에서 객체 하나로 내보내는 경우가 많다.
{% endhint %}

```
const sum = (x, y) => x + y;
const square = x => x * x;
exports.mean = data => data.reduce(sum)/data.length;
export.stddev = function(d) {
  let m = mean(d);
  return Math.sqrt(d.map(x => x - m).map(square).reduce(sum)/(d.length-1));
}

module.exports = {mean, stddev};
```

## 🐇 노드 가져오기

{% hint style="info" %}
&#x20;노드 모듈은 require() 함수를 호출해 다른 모듈을 가져온다. 이 함수의 인자는 가져올 모듈 이름이며 반환 값은 모듈이 내보내는 값(보통 함수, 클래스, 객체)이다. 노드에 내장된 시스템 모듀이나 패키지 매니저로 설치한 모듈을 가져올 때는 /를 쓰지 않고 다음과 같이 모듈 이름만 쓴다. (/를 쓰면 파일 시스템 경로로 바뀐다.)
{% endhint %}

```
const fs = require('fs');            // 노드에 내장된 파일 시스템 모듈
const http = require('http');        // 노드에 내장된 http 모듈
const express = require('express');  // 따로 설치한 서드 파티 모듈
```

{% hint style="info" %}
&#x20;직접 만든 모듈을 가져올 때는 모듈 이름에 그 파일의 경로를 현재 모듈 기준 상대 경로로 적어야 한다. /로 시작하는 절 경로를 쓰면 안되는건 아니지만 프로그램의 일부분인 모듈을 가져올 때는 일반적으로 ./나 ../로 시작하는 이름을 써서 현재 디렉터리에 상대적임을 나타낸다. .js 확장자는 생략해도 되지만 명시적으로 쓰는 경우가 더 많다.&#x20;
{% endhint %}

```
const stats = require('./stats.js');
const BitSet = require('./utils/bitset.js');
```

{% hint style="info" %}
모듈이 함수나 클래스 하나만 내보낸다면 require()를 쓰면 되지만, 모듈에서 여러 프로퍼티가 있는 객체를 내보낸다면 전체를 가져올 수도 있고 분해 할당을 통해 원하는 프로퍼티만 가져올 수도 있다.
{% endhint %}

```
const {stddev} = require('./stats.js')
```

## 🐇 웹의 노드 스타일 모듈

{% hint style="info" %}
Exports 객체와 require() 함수는 노드 모듈에서 사용하며, 웹팩 같은 번들링 도구로 코드를 처리한다면 웹 브라우저에서도 이런 스타일의 모듈을 사용할 수 있다. 하지만 ES6 부터 자바스크립트에도 모듈 문법 표준이 추가되었으므로 공식 자바스크립트 모듈 import와 export로도 처리 할 수 있게 되었다.
{% endhint %}
