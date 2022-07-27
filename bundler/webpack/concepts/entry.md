# Entry

## 🐇 Entry

{% hint style="info" %}
[entry](https://webpack.kr/concepts/entry-points/) 속성은 웹팩이 웹 자원을 변환하기 위해 최초로 진입하는 자바스크립트 파일로, 해당 파일을 기준으로 모듈의 의존 관계를 분석하고 번들링한다. 때문에 엔트리 파일 안에는 대게 웹 애플리케이션의 전반적인 구조와 내용이 담겨있어야 한다. 별도의 설정을 하지 않을 경우 기본 값은 `./src/index.js` 이며 다른 또는 여러 엔트리 포인트를 지정할 수 있다.
{% endhint %}

## 🐇 Single Entry

{% hint style="info" %}
단일 엔트리 구문은 SPA 같이 하나의 엔트리 포인트가 있는 애플리케이션을 구축하거나 웹팩 설정을 빠르게 진행하려는 경우 유용한 유형다. 값으로 문자열 또는 문자열 배열이 전달될 수 있으며, 축약 표현으로 작성할 경 청크 이름은 main이 된다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  // entry: {
  //  main: './src/index.js', 위 단일 엔트리 구문은 해당 코드가 축약된 표현이다.
  // },
}
```

{% hint style="info" %}
기본적으로 Node.js의 현재 작업 디렉터리가 사용되지만, context 속성을 통해 엔트리 포인트와 로더를 확인하기 위한 절대경로의 기본 디렉터리 값을 지정하는 것이 좋다. 이렇게 하면 CWD(현재 작업 디렉터리)와 독립적인 설정이 가능하다.
{% endhint %}

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
}
```

## 🐇 Object Entry

{% hint style="info" %}
객체 형태의 다중 엔트리 구문은 특정 페이지로 진입했을 때 서버에서 해당 정보를 내려주는 MPA에서 유용한 유형이다. 객체의 키는 청크의 이름이 되고, 그 값은 청크의 엔트리 포인트를 설명한다. 값으로 문자열, 문자열 배열, 디스크립터가 전달될 수 있으며 디스크립터를 사용하여 추가 옵션을 엔트리 포인트에 전달할 수 있으므로 확장성이 좋은 편이다.&#x20;
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  entry: {
    home: './src/index.js',
    shared: ['react', 'react-dom', 'redux', 'react-redux'],
    login: {
      import: './src/pages/LoginView.js', // 시작시 로드되는 모듈
      filename: 'pages/[name].js',  // 출력 파일 이름 커스텀
      dependOn: 'shared', // 해당 엔트리 포인트가 의존하고 있는 엔트리 포인트
    },
  }
}
```
