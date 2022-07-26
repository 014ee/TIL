# Output

## 🐇 Output

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

## 🐇 output.path

* `__dirname` : file 명을 제외한 절대 경로
* `__filename` : file 명을 포함한 절대경로
* `process.cwd()` : node명령을 호출한 작업디렉터리의 절대경로

```
output: {
  path: path.resolve(__dirname, './dist')
}
```

## 🐇 output.filename

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
