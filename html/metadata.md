# Metadata

{% hint style="info" %}
메타데이터는 스타일, 스크립트, 각종 소프트웨어(검색 엔진, 브라우저 등)의 탐색 및 렌더링을 도와줄 데이터 등 페이지에 대한 정보를 말한다.&#x20;
{% endhint %}

## [\<base>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/base)

{% hint style="info" %}
&#x20;문서 앞의 모든 상대 URL이 사용할 기준 URL을 지정해주는 요소로, 문서에는 하나의 \<base>요소만 존재할 수 있다. document.daseURL을 사용하여 스크립트에서 접근할 수 있으며 문서에 \<base> 요소를 따로 지정하지 않을 경우 기본값은 location.href 이다. 오픈그래프 태그는 \<base>를 인식하지 않으므로 항상 온전한 형태의 절대경로 URL을 지정해야 한다.
{% endhint %}

```javascript
<base target="_self" href="http://www.example.com">
```

## [\<title>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/title)

{% hint style="info" %}
브라우저의 제목 표시줄이나 페이지 탭에 보이는 문서 제목을 정의하며 텍스트만 포함할 수 있다. 검색 엔진이 결과 페이지의 순서를 구성하는데 활용하는 요소 중 하나이며, 제목을 통해 사용자의 유입을 유도할 수 있으므로 SEO를 위해 필수적이라고 볼 수 있다. 보통 짧고 일반적인 이름보다 길고 상세한 제목이 더 좋은 성과를 보여준다.
{% endhint %}

```javascript
<title>title: 문서 제목 요소 - HTML</title>
<title>화산송이 모공 바하 클렌징 폼 150g | innisfree</title>
```

* 하나 혹은 두 개의 단어로만 제목을 구성하는걸 피하세요. 콘텐츠를 설명하는 문장을 넣거나, 사전과 참고 문서의 경우 용어와 정의를 짝지어 사용하세요.
* 검색 결과는 보통 페이지 제목의 첫 55\~60글자만 노출합니다. 이후 텍스트는 보이지 않을 수도 있으므로 글자 수를 제한하세요. 긴 제목을 반드시 사용해야 하는 경우, 중요한 부분을 앞에 배치해서 뒷부분이 없어지더라도 내용을 잃지 않도록 주의하세요.
* "키워드 뭉치" 스타일의 제목은 피하세요. 제목이 단순한 단어 나열에 불과하다면 검색 알고리즘이 결과에서 순서를 내리곤 합니다.
* 웹 사이트 내에서 제목을 최대한 겹치지 않도록 하세요. 중복, 혹은 유사한 제목은 검색 결과의 정확도를 떨어트리는 요인입니다.

## [\<link>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/link)

{% hint style="info" %}
현재 문서와 외부 리소스의 관계를 명시하여 외부 리소스를 연결해주는 역할을 한다. 스타일 시트를 연결할 때 제일 많이 사용하지만, 파비콘 연결 등으로도 쓸 수 있다.&#x20;
{% endhint %}

* `rel` : 연결한 아이템이 현재 문서와 어떤 관계인지를 설명하는 속성으로 다양한 종류의 관계 있다.

```javascript
<link href="main.css" rel="stylesheet">
<link href="favicon.ico" rel="icon">
<link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png">  
```

* `media` : 미디어 유형이나 쿼리를 지정하여 해당 미디어 조건을 만족할 때만 리소스를 불러올 수 있다.

```
<link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)">
```

* 성능 및 보안 관련 기능도 있는데, 다음 예시에 `preload` 값은 브라우저가 이 리소스를 미리 불러와야 한다는 것을 나타내고, `as` 속성은 가져오는 리소스가 어떤 리소스인지 나타낸다. `type` 속성은 연결한 리소스의 MIME을 포함하며,`crossorigin`은 리소스를 CORS 요청으로 불러와야 하는지에 대한 값이다.

```
<link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous">
```

## [\<style>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/style)

{% hint style="info" %}
\<style> 태그로 문서에 대한 스타일 정보를 포함할 수 있다. 또한 \<link>와 동일하게 media 속성을 포함할 수 있다. 하지만 일반적으로 스타일은 외부 스타일 시트에 작성하고, 요소로 연결하는 편이 좋다.
{% endhint %}

```javascript
<style media="all and (max-width: 500px)">
  p {
    color: blue;
    background-color: yellow;
  }
</style>
```

## [\<meta>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta)

{% hint style="info" %}
\<base>, \<title>, \<link>, \<style>, \<script> 과 같은 다른 메타관련 요소로 나타낼 수 없는 문서 레벨 메타데이터를 나타낸다.
{% endhint %}

* [`charset`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta#attr-charset) : 해당 문서의 문자 인코딩 방식을 명시하는 속성으로, 값은 "utf-8"의 대소문자 구분 없는 ASCII 표현이다.

```
<meta charset="utf-8">
```

* [`http-equiv`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta#attr-http-equiv) : 프래그마 지시문으로, `content` 속성에 명시된 값에 대한 HTTP 헤더를 제공한다.

```
<!-- 3초 후 리다이렉트 -->
<meta http-equiv="refresh" content="3;url=https://www.mozilla.org">
```

* [`name`](https://developer.mozilla.org/ko/docs/Web/HTML/Element/meta/name) :  `content` 속성과 함께 문서의 메타데이터를 이름-값 쌍으로 제공한다.

```
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
