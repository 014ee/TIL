# Loader

## 🐇 Loader (module)

{% hint style="info" %}
[loader](https://webpack.kr/configuration/module/)를 사용하면 다른 유형의 파일(html, css, images, font 등)도 유효한 모듈로 변환할 수 있다.&#x20;
{% endhint %}

* `test` : 로더를 적용할 파일 유형 (일반적으로 정규 표현식 사용)
* `use` : 해당 파일에 적용할 로더의 이름

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
    { test: /\.ts$/, use: 'ts-loader' },
    ]
  }
}
```

{% hint style="info" %}
특정 파일에 여러개의 로더를 사용하는 경우 로더가 적용되는 순서에 주의해야 하는데, 로더는 기본적으로 오른쪽에서 왼쪽 순으로 적용된다. ex. sass-loader => css-loader => style-loader
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
    { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
    ]
  }
}
```

{% hint style="info" %}
로더는 아래와 같이 옵션을 포함한 형태로도 입력할 수 있다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { modules: true }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
```

## 🐇 자주 사용는 로더

* [Babel loader](https://webpack.js.org/loaders/babel-loader/#root)
* [Sass loader](https://webpack.js.org/loaders/sass-loader/#root)
* [File loader](https://v4.webpack.js.org/loaders/file-loader/)
* [TS Loader](https://webpack.js.org/guides/typescript/#loader)
