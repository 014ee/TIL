# Mode

## 🐇 Mode

{% hint style="info" %}
[mode](https://webpack.kr/configuration/mode/) 속성은 웹팩 버전 4.0.0 에서 추가되었으며 빌드 실행 모드를 지정하여 웹팩에 내장된 최적화 기능을 사용할 수 있다. CLI는 각 mode에 유효한 NODE\_ENV 값을 사용하며 mode 옵션을 지정하지 않을 경우 production이 기본값이 된다. (ex. mode를 development로 지정시 process.env.NODE\_ENV 또한 development로 설정된다.)
{% endhint %}

* `none` : 기본 최적화 옵션에서 제외된다.
* `development` : 개발자가 보기 편하게 웹팩 로그나 결과물이 보여진다.
* `production` : 성능 최적화를 위해 기본적인 파일 압축 등의 빌드 과정이 추가된다.

```javascript
// webpack.config.js
module.exports = {
  mode: 'none',
}
```

## 🐇 모드별 설정 분기

{% hint style="info" %}
빌드 시점에 mode를 지정하여 지정한 모드에 따라 동적으로 설정 파일이 만들어지도록 할 수 있다. [--mode](https://webpack.kr/configuration/mode/) 또는 [--node-env](https://webpack.kr/api/cli/#env) 옵션을 사용하면 process.env.NODE\_ENV와 mode를 모두 설정할 수 있다. 이때 webpack.config.js 파일에서 객체 대신 함수를 export 해야 한다.
{% endhint %}

```javascript
// webpack.config.js
const config = {
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.entry = './src/index.js';
    config.devtool = 'source-map';
  }
  
  if (argv.mode === 'production') {
    config.entry = './plublic/index.js';
  }

  return config;
}
```

```json
// package.json
"build:dev": "webpack --mode=development",
"build:prod": "webpack --mode=production"

// 또는 아래와 같이 등록해도 동일하게 동작
"build:dev": "webpack --node-env development",
"build:prod": "webpack --node-env production"
```
