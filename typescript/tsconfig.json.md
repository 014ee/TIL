# tsconfig.json

```bash
npx tsc --init // 기본 설정값이 입력된 tsconfig.json 파일 생성
```

## [Compilation Context](https://radlohead.gitbook.io/typescript-deep-dive/project/compilation-context)

{% hint style="info" %}
타입스크립트를 자바스크립트로 변환하는 과정에서 어떤 설정을 가지고 어떤 파일을 어디에 컴파일할지 등 tsconfig.json 파일에 적혀있는 적혀있는 옵션을 사용한다.
{% endhint %}

## [tsconfig.json schema](https://json.schemastore.org/tsconfig)

### compileOnSave

{% hint style="info" %}
파일을 저장하면 컴파일하겠다는 설정으로 기본 값은 false이다. 에디터에서 저장을 인지해야 하므로 아무 에디터에서나 되는 설정은 아니고 Visual sTUDIO 2015 이상 with TypeScript 1.8.4 이상 또는 atom-typescript 플러그을 설치한 경우 사용할 수 있다. VS Code의 경우 에디터 내부 설정에서 등록 가능하다.
{% endhint %}

<pre class="language-json"><code class="lang-json"><strong>// tsconfig.json
</strong><strong>{
</strong>  "compileOnSave": true // false, true
}</code></pre>

### extends

{% hint style="info" %}
다른 설정 파일로부터 옵션 값을 상속받을 수 있다. 최근에는 타입스크립트에서 공식적으로 상속받을 수 있는 다양 설정 파일들을 모아둔 [레포지토리](https://github.com/tsconfig/bases)를 오픈하였다.
{% endhint %}

```bash
npm install --save-dev @tsconfig/create-react-app
```

```json
// tscofig.json
{
  "extends": "@tsconfig/create-react-app/tsconfig.json"
}
```

### files, include, exclude

{% hint style="info" %}
어떤 파일을 컴파일 할 지에 대한 옵션으로, 별도의 설정을 하지 않으면 모든 파일을 컴파일한다. exclude에 정의된 경로보다 높은 우선순위를 갖으며, 상대 혹은 절대 경로의 리스트 배열 형태로 입력한다.
{% endhint %}

{% hint style="info" %}
어떤 파를컴파일 할 지에 대한 옵션으로, 별도의 설정을 하지 않으면 모든 폴더를 컴파일한다. exclude보다 낮은 우선순위를 갖으며 \*를 사용해서 .ts, .tsx, .d.ts 등 특정 파일만 컴파일 되도록 할 수 있다.
{% endhint %}

{% hint style="info" %}
어떤 파일을 컴파일에서 제외 할 지에 대한 옵션으로, 별도의 설정이 없을 경우 기본으로 node\__module, bower_components, jspm\_packages, \<outDir> 4가지 경로만 컴파일에서 제외한다.
{% endhint %}

```json
// tscofig.json
{
  "files": ,
  "exclude": ["node_modules", "dist"],
  "include": ["./src/**/*"] ,
}
```

### CompileOptions - typeRoots, types

{% hint style="info" %}
TypeScript 2.0에서 추가된 내장 type definition을 지원하는 패키지를 사용할 경우, node\_modules/@types/\[패키지] 경로 내에 타입이 지정된 파일(index.d.ts)이 들어가게 되고 별도의 설정을 하지 않아도 이 경로에서 타입을 찾아서 컴파일 한다. 라이브러리에서 type definition을 지원하지 않는 등의 이유로 직접 별도의 타입을 추가해서 사용해야 할 때는 typeRoots 옵션에 타입을 정의한 파일들을 배열 형태로 등록하면 된다. 참고로 typeRoots와 types는 같이 사용할 수 없다.
{% endhint %}

```json
// tscofig.json
{
  "compilerOptions": {
    "typeRoots": []
    "types": []
  }
}
```

### CompileOptions - target, lib

{% hint style="info" %}
타입스크립트 코드를 어떤 버전의 자바스크립트로 컴파일 할건지에 대한 설정으로 별도의 지정을 하지 않을 경우 기본값은 "ES3" 이다. 보통은 브라우저에서 동작되도록 하기 위해 "ES5"로 지정한다.
{% endhint %}

```json
// tscofig.json
{
  "compilerOptions": {
    "target": "ES5", // "ES3", "ES5", "ES6", "ES2015"..."ES2020", "ESNext"
  }
}
```

{% hint style="info" %}
기본 type definition 라이브러리를 어떤 것을 사용할지에 대한 설정으로, 컴파일된 결과물에서 코드를 실행을 할 때 필요한 기타 라이브러리를 등록하는 배열이라고 할 수 있다. 별도의 지정을 하지 않아도 taget 값에 따라 기본으로 설정되는 값이 있으며 빈 배열을 입력하면 아무 라이브러리도 사용하지 않는다.

* "target": "ES3" => "lib": \["lib.d.ts"]
* "target": "ES5" => "lib": \["ES5", "DOM, "scripthost"]
* "target": "ES6" => "lib": \["ES2015", "DOM", "DOM.iterable", "scripthost"]
{% endhint %}

```typescript
// tscofig.json
{
  "compilerOptions": {
    "lib": ["ES2015", "DOM", "DOM.Iterable"]
  }
}
```

### CompileOptions - outFile, outDir, rootDir

{% hint style="info" %}
&#x20;AMD, requireJS, systemJS를 사용할 때 하나의 파일로 만들어준다.
{% endhint %}

```json
// tscofig.json
{
  "compilerOptions": {
    "outFile": "",

  }
}
```

{% hint style="info" %}
&#x20;컴파일된 결과물을 저장 폴더 경로를 지정한다.
{% endhint %}

```json
// tscofig.json
{
  "compilerOptions": {
    "outDir": "./dist",
  }
}
```

{% hint style="info" %}
컴파일할 폴더의 루트 경로를 지정할 수 있다. 별도로 지정하지 않을 경우 가장 최상위 루트 경로를 기준으로 컴파일 된다.
{% endhint %}

```typescript
// tscofig.json
{
  "compilerOptions": {
    "rootDir": "./src",
  }
}
```

### CompileOptions - strict

{% hint style="info" %}
엄격하게 타입을 체크해주는 옵션들을 전부 켜준다. 마이그레이션 등 특별한 이유가 있지 않은 한 필수로 체크하고 작업하는 것이 좋다.

* noImplicitAny: 명시적으로 작성하지 않은 any에 대해 에러 발
* noImplicitThis: this에 대한 타입을 명시하지 않으면 에러 발
* strictNullChecks: 디폴트로 모든 타입의 서브타입으로 존재하는 null과 undefined를 제거
* strictFunctionTypes: 함수의 매개변수 타입이 일치하거나 슈퍼타입이 아니면 에러 발생
* strictPropertyInitializion: 클래스 속성이 생성자에서 초기화되지 않으면 에러 발생 &#x20;
* strictBindCallApply: bind, call, apply 사용시 엄격한 검사 수
* alwaysStrict: 컴파일된 javascript 파일에 'use strict' 추가
{% endhint %}

```json
// Some code
```
