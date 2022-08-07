# Head

## \<head>&#x20;

{% hint style="info" %}
\<head>요소는 기계가 식별할 수 있는 문서 정보(메타데이터)를 담는다. 메타데이터는 스타일, 스크립트, 각종 소프트웨어(검색 엔진, 브라우저 등)의 탐색 및 렌더링을 도와줄 데이터 등 페이지에 대한 정보를 말한다.  HTML5 호환 브라우저는 \<head>가 없는 경우 자동으로 생성한다.
{% endhint %}

```html
<!doctype html>
<html>
  <head>
    <title>문서 제목</title>
  </head>
</html>
```

#### **\<head> 안에 배치할 수 있는 요소**

* [\<title>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/title)
* [\<base>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/base)
* [\<link>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/link)
* [\<style>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/style)
* [\<meta>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta)
* [\<script>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/script)
* [\<noscript>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/noscript)
* [\<template>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/template)

## \<title>

{% hint style="info" %}
브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의하며 텍스트만 포함할 수 있다. 검색 엔진이 결과 페이지의 순서를 구성하는데 활용하는 요소 중 하나이며, 제목을 통해 사용자의 유입을 유도할 수 있으므로 SEO를 위해 필수적이다. 보통 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 보여준다.
{% endhint %}

```javascript
<title>title: 문서 제목 요소 - HTML</title>
<title>화산송이 모공 바하 클렌징 폼 150g | innisfree</title>
```

* 하나 혹은 두 개의 단어로만 제목을 구성하는걸 피하세요. 콘텐츠를 설명하는 문장을 넣거나, 사전과 참고 문서의 경우 용어와 정의를 짝지어 사용하세요.
* 검색 결과는 보통 페이지 제목의 첫 55\~60글자만 노출합니다. 이후 텍스트는 보이지 않을 수도 있으므로 글자 수를 제한하세요. 긴 제목을 반드시 사용해야 하는 경우, 중요한 부분을 앞에 배치해서 뒷부분이 없어지더라도 내용을 잃지 않도록 주의하세요.
* "키워드 뭉치" 스타일의 제목은 피하세요. 제목이 단순한 단어 나열에 불과하다면 검색 알고리즘이 결과에서 순서를 내리곤 합니다.
* 웹 사이트 내에서 제목을 최대한 겹치지 않도록 하세요. 중복, 혹은 유사한 제목은 검색 결과의 정확도를 떨어트리는 요인입니다.

## \<base>

{% hint style="info" %}
&#x20;문서 앞의 모든 상대 URL이 사용할 기준 URL을 지정해주는 요소 문서에는 하나의 \<base>요소만 존재할 수 있다. document.baseURL을 사용하여 스크립트에서 접근할 수 있으며 문서에 \<base> 요소를 따로 지정하지 않을 경우 기본값은 location.href 이다. 오픈그래프는 \<base>요소를 인식하지 않으므로 항상 온전한 형태의 절대경로 URL을 값으로 입력해야 한다.
{% endhint %}

<pre class="language-html"><code class="lang-html"><strong>&#x3C;head>
</strong>  &#x3C;base target="_self" href="http://www.example.com">
  &#x3C;a href="#anchor">Anker&#x3C;/a> // http://www.example.com#anchor
&#x3C;/head></code></pre>

## \<link>

{% hint style="info" %}
현재 문서와 외부 리소스의 관계를 명시하여 외부 리소스를 연결해주는 역할을 한다. 스타일 시트를 연결할 때 제일 많이 사용하지만, 파비콘 연결 등으로도 쓸 수 있다.&#x20;
{% endhint %}

* `rel` : 연결한 아이템이 현재 문서와 어떤 관계인지를 설명하는 속성으로 다양한 종류의 관계 있다.

```html
<head>
  <link href="main.css" rel="stylesheet">
  <link href="favicon.ico" rel="icon">
  <!-- <link rel="apple-touch-icon-precomposed" sizes="114x114"
        href="apple-icon-114.png" type="image/png"> -->
</head>
```

* `media` : 미디어 유형이나 쿼리를 지정하여 해당 미디어 조건을 만족할 때만 리소스를 불러올 수 있다.

```html
<head>
  <link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
</head>
```

* 그외 성능 및 보안 관련 기능도 있다. 다음 예시에 `preload` 값은 브라우저가 이 리소스를 미리 불러와야 한다는 것을 나타내고, `as` 속성은 가져오는 리소스가 어떤 리소스인지 나타낸다. `type` 속성은 연결한 리소스의 MIME을 포함하며,`crossorigin`은 리소스를 CORS 요청으로 불러와야 하는지에 대한 값이다.

```html
<head>
  <link rel="preload" href="myFont.woff2" as="font"
        type="font/woff2" crossorigin="anonymous">
</head>
```

## \<style>

{% hint style="info" %}
\<style> 태그로 문서에 대한 스타일 정보를 포함할 수 있다. 또한 \<link>와 동일하게 media 속성을 포함할 수 있다. 하지만 일반적으로 스타일은 외부 스타일 시트에 작성하고, 요소로 연결하는 편이 좋다.
{% endhint %}

```html
<head>
  <style media="all and (max-width: 500px)">
    p {
      color: blue;
      background-color: yellow;
    }
  </style>
</head>
```

## \<meta>

{% hint style="info" %}
\<base>, \<title>, \<link>, \<style>, \<script> 과 같은 다른 메타관련 요소로 나타낼 수 없는 문서 레벨 메타데이터를 나타낸다.
{% endhint %}

* [`charset`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta#attr-charset) : 해당 문서의 문자 인코딩 방식을 명시하는 속성으로, 값은 "utf-8"의 대소문자 구분 없는 ASCII 표현이다.

```html
<meta charset="utf-8">
```

* [`http-equiv`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta#attr-http-equiv) : 프래그마 지시문으로, `content` 속성에 명시된 값에 대한 HTTP 헤더를 제공한다.

```html
<!-- 3초 후 리다이렉트 -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
```

* [`name`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name) :  `content` 속성과 함께 문서의 메타데이터를 이름-값 쌍으로 제공한다.

```html
<meta name='application-name' content='웹 페이지에서 구동 중인 애플리케이션 이름'>
<meta name='author' content='문서 저작자'>
<meta name='description' content='페이지에 대한 짧고 정확한 요약'>
<meta name='generator' content='페이지를 생성한 소프트웨어의 식별자'>
<meta name='keywords' content='페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록>
<meta name='referrer' content='문서에서 시작하는 요청의 HTTP Referer 헤더를 통제하는 방'>
<meta name='theme-color' content="사용자 에이전트가 UI를 나타낼 때 사용하는 유효한 CSS 색상">
<meta name="color-scheme" content="문서와 호환되는 하나 이상의 색채 조합">
<meta name='viewport' content='모바일 장치에서의 뷰포트의 초기 사이즈에 대한 힌트'>
```

* [`itemprop`](https://developer.mozilla.org/ko/docs/Web/HTML/Global\_attributes#attr-itemprop) : 사용자 정의 메타데이터로, 아이템에 속성을 추가할 때 사용한다. 모든 HTML 요소에는 이름과 값의 쌍으로 구성된 `itemprop` 속성을 명시할 수 있다. 그러나 `itemprop` 을 `name`, `http-equiv` , `charset` 과 함께 설정할 수는 없다.

## \<script>

{% hint style="info" %}
데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 쓴다. WebGL의 GLSL 셰이더 프로그래밍 언어, JSON 등 다른 언어와도 사용할 수 있다.&#x20;
{% endhint %}

```html
<!--
모듈 미지원 브라우저를 위한 대체 스크립트를 nomodule로 표시해 제공할 수 있다.
module을 지원하는 브라우저는 nomodule 속성을 가진 모든 <script>를 무시한다.
-->
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

```html
<!--
유효한 MIME 유형을 사용하면 서버사이드 렌더링을 통해 HTML에 데이터를 삽입할 수 있다.
-->

<!-- Generated by the server -->
<script id="data" type="application/json">
  {
    "userId":1234,
    "userName":"John Doe",
    "memberSince":"2000-01-01T00:00:00.000Z"
  }
</script>

<!-- Static -->
<script>
  const userInfo = JSON.parse(document.getElementById("data").text);
  console.log("User information:", userInfo);
</script>
```

## \<noscript>

{% hint style="info" %}
페이지의 스크립트 유형을 지원하지 않거나, 브라우저가 스크립트를 비활성화한 경우 화면에 표시할 HTML 구획을 정의한다.
{% endhint %}

```html
<noscript>
    현재 사용 중인 브라우저는 스크립트를 지원하지 않거나, 해당 기능이 활성화되어 있지 않습니다.
</noscript>
```

## \<template>

{% hint style="info" %}
페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공한다.
{% endhint %}

```html
<head>
  <template id="template">
    <li>과일</li>
  </template>
</head>
<body>
  <ul id='container'>
    <!-- 템플릿이 들어가는 자리 -->
  </ul>
  <script type='text/javascript'>
    // 브라우저가 HTML 템플릿 엘리먼트를 지원하는지 확인
    if ('content' in document.createElement('template')) {
      const template = document.getElementById('template');
      const container = document.getElementById("container");
      const clone = document.importNode(template.content, true);
      let li = clone.querySelector("li");
      li.textContent = '사과'
      container.appendChild(clone);
    }
  </script>
</body>
```
