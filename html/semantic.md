# Semantic

SEO를 고려한 HTML 구조기본 구조

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div id="app"></div>
  <script src="cart.ts"></script>
</body>

</html>
```

```
<!DOCTYPE html> // 현재 문서가 html5로 제작된 웹 문서라고 알려주는 요소
// 이제부터 처리할 문서는 html 문서이고 어떤 유형을 사용했으니
// 그 버전에 맞는 방법으로 해석하라고 알려주는 역할을 한다.
// 대소문자 구별이 없지만 강조하기 위해 대문자로 사용하기도 한다.
// xhtml은 아래↓와 같이 작성했음
<DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 TRANS...">
```

<pre><code>&#x3C;html lang="en">
// 문서가 어디에서 시작하고, 어디에서 끝나는지 알려주는 범위
<strong>// lang 속성을 사용해 문서에서 사용할 언어를 지정할 수 있다.
</strong>// &#x3C;head>화면에는 보이지 않는 웹 문서에 대한 정보를 입력하는 범위</code></pre>

```
<title> // 해당 문서의 제목
```

```
<meta> // 해당 문서의 인코딩 언어, 키워드, 요약 정보
```

```
<body> // 웹 페이지에 표시할 내용을 작성하는 범위페이지의
// 구조적인 의미를 담은 시맨틱 태그로 작성하면 좀 더 최적화시킬 수 있다.
```



* 메타태그시맨틱 태그접근성을 위해서는 문서만 봣을 때도 흐름이 이해가 가도록 선형적인 구조로 작성되어야 한다. (이후 css를 이용해 배치시키면 됨)
* z 축에 대한 이해\
  노멀플로우: 바닥에 붙어있는 일반적인 부분 /주변 환경에 따라 자동으로 배치된다.\
  노멀, 플롯층에서는 위아래 margin auto 안되는데, position 층에서는 가능
* 새로 알게된 기\
  태그 내 속성 중 모든 태그에 사용할 수 있는 것을 전역속성이라고 한다. (속성을 통해 태그의 역할을 확장할 수 있음)
* &#x20;전역속성에는 title, class, id 등이 있으며, 여기에 요소의 정보나 설명을 넣으면 된다. <태그 date-이름="데이터" > : 요소에 데이터를 저장\

* ※ 시멘틱html, CSS section, nav, article은 의미구조를 같기 때문에 신경써서 작업 필요 [https://gsnedders.html5.org/outliner/](https://gsnedders.html5.org/outliner/)
* bfc > block format\~ // 렌더링 과정에서 자리를 잡아주는?
* &#x20;html, css 가져온 후, 레이아웃 틀만 렌더링&#x20;
* 이후 재 렌더링(display overfow, float 등..)
* &#x20;이후에 화면에 보임
*
* 적절한 태그 사용 팁
* p를 div에 감싼 이유: p가 여러개일 수도 있기 때문에단어면 span, strong 등내가 작성한 코드의 이유를 설명할 줄 아는 개발자가 되자! SCSS 기본적인 CSS 구조화 실력이 있는 사람이 써야한다.
