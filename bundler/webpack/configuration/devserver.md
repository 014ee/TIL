# DevServer

## 🐇 DevServer

{% hint style="info" %}
[devServer](https://webpack.kr/configuration/dev-server/)는 코드를 변경한 후 저장만 하면 자동으로 빌드한 후 브라우저를 새로고침 해준다. 이때 빌드한 결과물은 파일로 생성되는 것이 아니라 메모리에만 저장되기 때문에 컴퓨터 내부적으로 접근할 수는 있지만 파일 탐색기나 프로젝트 빌드 폴더에서 직접 보거나 조작할 수는 없다. 이러한 동작은 파일 입출력보다 메모리 입출력이 더 빠르므로 컴퓨터 구조 관점에서 컴퓨터 자원이 덜 소모된다는 장점이 있으며 매번 번거롭게 웹팩 명령어를 실행하지 않아도 되기 때문에 개발시 유용하게 사용된다.  &#x20;
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
```

## 🐇 devServer.proxy

{% hint style="info" %}
[proxy](https://webpack.kr/configuration/dev-server/#devserverproxy) 설정은 실무에서 가장 흔하게 사용하는 속성으로 다음과 같은 설정을 통해 개발 중 API를 요청했을 때 발생하는 CORS 오류를 해결할 수 있다. 실제로는 localhost로 요청하지만 중간에 프록시 서버로 인해 domain.com 서버는 같은 도메인에서 온 요청으로 인식하여 CORS 에러를 일으키지 않는다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    proxy: {
     '/api': {
        target: 'domain.com',
        changeOrigin: true
      }
    }
  }
};
```

## 🐇 devServer.hot

{% hint style="info" %}
[Hot Module Replacement](https://webpack.kr/configuration/dev-server/#devserverhot) 기능을 활성화시키면 브라우저를 새로고침하지 않고도 빌드한 결과물이 웹 애플리케이션에 실시간으로 반영될 수 있게 할 수 있다. 기본값은 true이므로 값이 true일 때는 별도의 설정을 하지 않아도 된다.
{% endhint %}

```javascript
// webpack.config.js
module.exports = {
  devServer: {
    hot: true
  }
}
```

## 🐇 devServer.host

{% hint style="info" %}
[host](https://webpack.kr/configuration/dev-server/#devserverhost) 설정을 통해 사용할 호스트를 지정할 수 있다. 외부에서 서버에 접근할 수 있도록 하려면 다음과 같이 지정하면 된다.
{% endhint %}

```javascript
 // webpack.config.js
module.exports = {
  devServer: {
    host: '0.0.0.0',
  }
};
```
