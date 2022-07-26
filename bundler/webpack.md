# Webpack

## 🐇 웹팩이란?

{% hint style="info" %}
&#x20;웹팩은 모던 자바스크립트 애플리케이션을 위한 정적 모듈 번들러이다. 웹팩이 애플리케이션을 처리할 때, 내부적으로는 프로젝트에 필요한 모든 모듈을 매핑하고 하나 이상의 번들을 생성하는 [디펜던시 그래프](https://webpack.kr/concepts/dependency-graph/)를 만든다.
{% endhint %}

* [공식 사이트](https://webpack.kr/)
* [웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)

## 01. NPM 설치

```bash
// webpack
npm i webpack webpack-cli webpack-dev-server -D

// babel
npm i @babel/core @babel/preset-env babel-loader -D

// plugin
npm i html-webpack-plugin css-loader mini-css-extract-plugin -D
```

## 02. 웹팩 설정

{% hint style="info" %}
&#x20;웹팩 버전 4.0.0 이후로는 별도의 설정 파일 없이도 번들할 수 있다. 하지만 webpack.config.js를 통해 사용자 요구에 따라 유연 설정이 가능하다.
{% endhint %}

```javascript
// webpack.config.js

// 인자로 넘어온 경로를 조합하여 유효한 파일 경로를 지정해주는 core Node.js 모듈
var path = require('path');
// 번들링시 css를 별도 파일로 뽑아주는 플러그인
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // 'none', 'development', 'production'
  entry: './src/index.js',
  output: {
    filename: 'main.js', // [name].[hash].bundle.js, [chunkhash].bundle.js
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader },
          "css-loader"] // 로더는 오른쪽에서 왼쪽 순서로 읽힌다.
      },
    ]
  }, 
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html', // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
    }),
  ],
  devServer: {
    port: 9000,
    // ...
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
```

{% tabs %}
{% tab title="mode" %}
### mode

{% hint style="info" %}

{% endhint %}
{% endtab %}

{% tab title="entry" %}
### [entry](https://webpack.kr/concepts/entry-points/)

{% hint style="info" %}
웹팩이 웹 자원을 변환하기 위한 최초 진입점 자바스크립트 파일로, 해당 파일을 기준으로 웹 애플리케이션에서 사용되는 모듈의 의존 관계를 분석하고 번들링하기 때문에 대게 이 파일 안에는 웹 애플리케이션의 전반적인 구조와 내용이 담겨있어야 한다. 기본 값은 './src/index.js' 이지만 다른 또는 여러 엔트리 포인트를 지정할 수도 있다.
{% endhint %}



### single entry (단일 엔트)

{% hint style="info" %}
단일 entry 구문은 다음과 같이 축약해 표현 수 있다.
{% endhint %}

```javascript
// 기본
entry: {
  main: './src/index.js',
},

// 축약
entry: './src/index.js',
```



### object entry (다중 엔트리)

{% hint style="info" %}
싱글 페이지가 아닌 특정 페이지로 진입했을 때 서버에서 해당 정보를 내려주는 형태의 멀티 페이지 애플리케이션일 경우 다음과 같이 엔트리 포인트를 분리하여 사용할 수 있다.
{% endhint %}

```javascript
entry: {
  main: './src/MainView.js'
  login: './src/LoginView.js',
}
```
{% endtab %}

{% tab title="output" %}
### [output](https://webpack.kr/configuration/output)

{% hint style="info" %}
output 속성은 번들링된 결과물을 내보낼 파일명과 경로를 웹팩에게 알려주는 역할을 한다. 별도의 설정이 없을 경우 기본 경로 및 파일명은 './dist/main.js'이다.
{% endhint %}

```javascript
const path = require('path'); 

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.bundle.js',
  },
};
```



### output.path

* `__dirname` : file 명을 제외한 절대 경로
* `__filename` : file 명을 포함한 절대경로
* `process.cwd()` : node명령을 호출한 작업디렉터리의 절대경로

```
output: {
  path: path.resolve(__dirname, './dist')
}
```



### output.filename

{% hint style="info" %}
단일 엔트리 포인트의 경우 정적인 이름으로 설정해도 괜찮지만, 둘 이상의 엔트리 포인트, 코드 분할, 다양한 플러그인을 통해 여러 번들을 생성할 때는 다음 substitution 중 하나를 사용하여 각 번들에 고유한 이름을 부여해주어야 한다.&#x20;
{% endhint %}

* `[name]` : 청크의 이름, 설정되지 않은 경우 청크의 ID
* `[id]` : 웹팩 내부적으로 사용하는 모듈 id
* `[hash]` : 웹팩 내부적으로 사용하는 모듈의 해시
* `[chunkhash]` : 청크의 모든 요소를 포함한 청크의 해시
* `() => {...}` : 함수를 통해 특정 조건에 따라 이름을 지정

```
output: {
  filename: (pathData) => {
    return pathData.chunk.name === 'main'
    ? '[name].js'
    : '[name]/[name].js';
  },
}
```
{% endtab %}

{% tab title="module (loaders)" %}

{% endtab %}

{% tab title="plugins" %}
&#x20;
{% endtab %}
{% endtabs %}

## 03. 명령어 추가

```json
// package.json
"scripts": {
  "dev": "webpack-dev-server"
  "build": "webpack"
}
```
