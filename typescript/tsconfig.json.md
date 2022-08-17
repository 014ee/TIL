# tsconfig.json

## [Compilation Context](https://radlohead.gitbook.io/typescript-deep-dive/project/compilation-context)

{% hint style="info" %}
타입스크립트를 자바스크립트로 변환하는 과정에서 어떤 설정을 가지고 어떤 파일을 어디에 컴파일할지 등 tsconfig.json 파일에 적혀있는 적혀있는 옵션을 사용한다.
{% endhint %}

## [tsconfig.json schema](https://json.schemastore.org/tsconfig)

### compileOnSave

{% hint style="info" %}
파일을 저장하면 컴파일하겠다는 설정으로 기본 값은 false이다. 에디터에서 저장을 인지해야 하므로 아무 에디터에서나 되는 설정은 아니고 Visual sTUDIO 2015 이상 with TypeScript 1.8.4 이상 또는 atom-typescript 플러그을 설치한 경우 사용할 수 있다. VS Code의 경우 에디터 내부 설정에서 등록 가능하다.
{% endhint %}

```json
// tsconfig.json
"compileOnSave": true
```

```json
// tsconfig.json schema
"compileOnSaveDefinition": {
  "properties": {
    "compileOnSave": {
      "description": "Enable Compile-on-Save for this project.",
      "type": "boolean"
     }
  }
},
```

### extends

{% hint style="info" %}
다른 설정 파일로부터 옵션 값을 상속받을 수 있다. 최근에는 타입스크립트에서 공식적으로 상속받을 수 있는 다양 설정 파일들을 모아둔 [레포지토리](https://github.com/tsconfig/bases)를 오픈하였다.
{% endhint %}

```bash
npm install --save-dev @tsconfig/create-react-app
```

```json
// tscofig.json
"extends": "@tsconfig/create-react-app/tsconfig.json"
```

<pre class="language-json"><code class="lang-json"><strong>// tsconfig.json schema
</strong>extendsDefinition": {
  "properties": {
    "extends": {
      "description": "Path to base configuration file to inherit from. Requires TypeScript version 2.1 or later.",
      "type": "string"
    }
  }
},</code></pre>

### files

{% hint style="info" %}
어떤 파일을 컴파일 할 지에 대한 옵션으로, 별도의 설정을 하지 않으면 모든 파일을 컴파일한다. exclude에 정의된 경로보다 높은 우선순위를 갖으며, 상대 혹은 절대 경로의 리스트 배열 형태로 입력한다.
{% endhint %}

```json
// tsconfig.json schema
"filesDefinition": {
  "properties": {
    "files": {
      "description": "If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. When a 'files' property is specified, only those files and those specified by 'include' are included.",
      "type": "array",
        "uniqueItems": true,
        "items": {
          "type": "string"
      }
    }
  }
},
```

### include

{% hint style="info" %}
어떤 파를컴파일 할 지에 대한 옵션으로, 별도의 설정을 하지 않으면 모든 폴더를 컴파일한다. exclude보다 낮은 우선순위를 갖으며 \*를 사용해서 .ts, .tsx, .d.ts 등 특정 파일만 컴파일 되도록 할 수 있다.
{% endhint %}

```json
// tsconfig.json schema
"includeDefinition": {
   "properties": {
     "include": {
       "description": "Specifies a list of glob patterns that match files to be included in compilation. If no 'files' or 'include' property is present in a tsconfig.json, the compiler defaults to including all files in the containing directory and subdirectories except those specified by 'exclude'. Requires TypeScript version 2.0 or later.",
       "type": "array",
       "uniqueItems": true,
        "items": {
          "type": "string"
      }
    }
  }
},
```

### exclude

{% hint style="info" %}
어떤 파일을 컴파일에서 제외 할 지에 대한 옵션으로, 별도의 설정이 없을 경우 기본으로 node\__module, bower_components, jspm\_packages, \<outDir> 4가지 경로만 컴파일에서 제외한다.
{% endhint %}

```json
// tsconfig.json schema
"excludeDefinition": {
  "properties": {
     "exclude": {
       "description": "Specifies a list of files to be excluded from compilation. The 'exclude' property only affects the files included via the 'include' property and not the 'files' property. Glob patterns require TypeScript version 2.0 or later.",
       "type": "array",
       "uniqueItems": true,
       "items": {
         "type": "string"
      }
    }
  }
},
```

### CompileOptions - typeRoots, types

{% hint style="info" %}
TypeScript 2.0에서 추가된 내장 type definition을 지원하는 패키지를 사용할 경우, node\_modules/@types/\[패키지] 경로 내에 타입이 지정된 파일(index.d.ts)이 들어가게 되고 별도의 설정을 하지 않아도 이 경로에서 타입을 찾아서 컴파일 한다. 라이브러리에서 type definition을 지원하지 않는 등의 이유로 직접 별도의 타입을 추가해서 사용해야 할 때는 typeRoots 옵션에 타입을 정의한 파일들을 배열 형태로 등록하면 된다. 참고로 typeRoots와 types는 같이 사용할 수 없다.
{% endhint %}





### CompileOptions - target, lib

{% hint style="info" %}
&#x20;내가 작성한 타입스크립트 코드가 어떤 실행 환경에서 작동할 수 있는지에대한 설
{% endhint %}



### CompileOptions -outDir, outFile, rootDir





### CompileOptions - strict

