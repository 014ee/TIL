# Body

## \<body>

{% hint style="info" %}
우리는 문서를 작성할 때 보통 제목, 목차, 순서 등을 고려한다. HTML도 하나의 문서이다. 따라서 의미있는 방식으로 작성되어야 한다. 의미있는 태그와 구조로 작성된 HTML 문서는 보기 좋을 뿐 아니라 접근성 면에서도 뛰어나고 결과적으로 높은 검색 순위를 차지할 수 있다. 요약하자면 디자인적인 위치와는 별개로 문서만 봤을 때도 흐름이 이해가 가도록 선형적인 구조로 작성되어야 한다.&#x20;
{% endhint %}

## 콘텐츠 모델로 구조 유효성 판단  <a href="#undefined" id="undefined"></a>

{% hint style="info" %}
예전에는 요소를 block, inline으로 구분했었는데, HTML5 부터는 콘텐츠 모델로 구분한다. 콘텐츠 모델의 종류는 다음과 같으며, 하나의 요소는 여러 모델을 가질 수 있다. whatwg에 각 요소별 콘텐츠 모델들이 잘 정의되어 있으므로 긴가민가 하다면 확인하는 습관을 들이도록 하자.
{% endhint %}

* [metadata content](https://html.spec.whatwg.org/multipage/dom.html#metadata-content): 화면에 출력하는 용도가 아니라 정보를 제공하는 용도의 요소
* [flow content](https://html.spec.whatwg.org/multipage/dom.html#flow-content): body 태그에 포함할 수 있는 모든 요소
* [sectioning content](https://html.spec.whatwg.org/multipage/dom.html#sectioning-content): article, aside, nav, section
* [heading content](https://html.spec.whatwg.org/multipage/dom.html#heading-content): h1, h2, h3, h4, h5, h6. hgroup
* [phrasing content](https://html.spec.whatwg.org/multipage/rendering.html#phrasing-content-3): 구문과 단락을 형성하는 요소
* [embedded content](https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content): img, video, iframe 같이 외부 자원을 참조하는 요소
* [interactive content](https://html.spec.whatwg.org/multipage/dom.html#interactive-content): a, audio 같이 사용자가 키보드, 마우스로 조작할 수 있는 요소
* [palpable content](https://html.spec.whatwg.org/multipage/dom.html#palpable-content): 비어있지 않고 사용자가 만져볼 수 있는 요소
* [script-supporting element](https://html.spec.whatwg.org/multipage/dom.html#script-supporting-elements): template 같이 화면에 렌더되지 않지만 기능을 제공하는 요소
* [transparent content models](https://html.spec.whatwg.org/multipage/dom.html#transparent-content-models): 부모의 콘텐츠 모델을 따르는 요소

**예시**

다음은 각 요소의 콘텐츠 모델을 통해 유효하지 않은 마크업을 판단하는 예이다. `a` 태그는 transparent content models 이므로 부모인 `p` 태그 의 콘텐츠 모델 phrasing content를 따르게 된다. phrasing content 요소에는 단락을 형성하는 컨텐츠만 담을 수 있으므로 `div` 태그는 유효하지 않다.

```html
<p> // content model: phrasing
  <a> // content model : flow, pharasing, interactive, palpable, transparent
    <div> // content model: flow, palpable
    </div>
  </a>
</p>
```

## 메타태그 작성 <a href="#undefined" id="undefined"></a>

{% hint style="info" %}
메타태그 중에서도 title과 description이 검색 노출에 가장 영향을 많이 끼치며, keyword의 경우 작성해서 나쁠 것은 없지만 어뷰징 문제가 많이 발생해 구글에서는 참고하지 않는다고 한다. 참고로 최근 검색 엔진은 자바스크립트로 동적으로 생성한 페이지 타이틀도 잘 크롤링 한다.
{% endhint %}



**SEO에 영향을 주는 요인**

* 백링크: 질 좋은 다른 페이지로부터 링크된 횟수
* HTTPS: SSL 적용 여부
* 웹페이지에 대한 정보: 타이틀, 메타 디스크립션
* 콘텐츠의 양, 질, 개연성
* 노출대비 클릭률
* 사용자 경험: 로딩 속도, LCP(최대 콘텐츠 블럭 그리기), CLS(누적 배치 변경)
* 도메인 권력: 검색 결과 페이지 순위 예측 점수

**노출 잘되는 title 태그 작성법**

* 본문을 가장 잘 설명하는 키워드 중심으로 가능한 짧게 작성하기
* 페이지마다 구체적이고 고유한 키워드 사용하기
* 페이지마다 반복하는 키워드 최소화하기
* 중요한 키워드는 앞으로 배치하기

**참고**

* [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing)
* [페이스북 공유 디버거](https://developers.facebook.com/tools/debug/)
* [트위터 공유 디버거](https://cards-dev.twitter.com/validator)
* [네이버 연관채널 등록(SNS)](https://searchadvisor.naver.com/guide/structured-data-channel)

## 문서를 구조화 (feat. outline) <a href="#feat-outline" id="feat-outline"></a>

{% hint style="info" %}
outline 알고리즘은 명세에 적혀있긴 하지만 사실 브라우저에서 제대로 구현되지 않았다. 명세대로라면 섹셔닝 루트는 헤딩 태그 순위와 상관 없이 부모의 하위 목차로 들어가야 하는데, 실제로는 명시적으로 순위가 낮은 헤딩을 입력해주어야 한다. 따라서 html5의 개요 알고리즘에 의존하지 말고 헤딩과 섹션을 1:1로 매핑하여 구조화된 문서를 만들도록 하자.
{% endhint %}

* 헤딩 태그는 문서의 골격을 구성하는 가장 중요한 태그이다.
* 문서 최상위에 헤딩 h1이 하나 있어야 흐름이 어색하지 않다.
* section, article, blockquote 같은 섹셔닝 콘텐츠 또한 헤딩을 넣어줘야 어색하지 않다.
* 헤딩 태그는 순위가 높은 순서에서 낮은 순서로 작성되어야 한다. (뒤죽박죽 no)

```html
/**
루트
 ㄴ섹션
  ㄴ 아티클1
  ㄴ 아티클2
**/

<main>
  <h1>루트</h1>
    <section>
      <h2>섹션</h2>
        <acticle>
          <h3>아티클1</h3>
        </article>
      	<acticle>
          <h3>아티클2</h3>
        </article>
    </section>
</main>
```

**참고**

* [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi)
* [HTML5 outliner](https://gsnedders.html5.org/outliner/)

## 시맨틱한 태그 사용 <a href="#undefined" id="undefined"></a>

{% hint style="info" %}
별의미 없는 div와 span 태그 보다는 자신만의 의미를 지닌 시맨틱 태그를 활용하여 문서에 의미를 부여하자.
{% endhint %}

**div 대신 사용할 수 있는 태그**

{% hint style="info" %}
main은 문서 하나에 하나만 작성 가능하다. 반면 header과 footer는 문서 하나에 하나 이상 작성 가능하다. 또한 main은 section이나 article 안에 포함시킬 수 없다.
{% endhint %}

* `header`: 제목, 로고, 검색 폼과 같이 사이트 소개 및 탐색에 도움을 주는 콘텐츠
* `footer` 작성자, 저작권 정보, 관련 문서 등의 콘텐츠
* `nav`: 현재 사이트의 주요 탐색 콘텐츠
* `section`: 페이지 내 주제별 콘텐츠 그룹 (헤딩 태그 포함 권장)
* `article`: 뉴스, 기사, 댓글처럼 독립적으로 배포 가능한 콘텐츠 (헤딩 태그 포함 권장)
* `aside` 배너나 광고와 같이 페이지와 관련성이 약한 콘텐츠 (헤딩 태그 포함 권장)
* `main` 문서의 핵심 주제가 담긴 콘텐츠 (페이지마다 반복되는 헤딩, 푸터는 포함 X)
* `dialog` 팝업같이 사용자와 상호작용하는 대화상자 (탭 접근 시 초점이 맞춰지도록 주의)
* `figure`, `figcaption`: 이미지, 도표, 코드와 같은 독립적이면서 완결된 참조 콘텐츠
* `details`,`summary`: open 속성을 사용해서 탭을 열고 닫을 수 있도록 해주는 콘텐츠

**span 대신 사용할 수 있는 태그**

* `mark`: 독자의 주의를 끌기 위한 하이라이트
* `address`: 저작권 정보, 저자의 연락처 등 저작권과 관련된 태그 (p 태그 안에 담을 수 없다.)
* `ins`,`del`: 가격 할인율 표기 등으로 사용
* `progress`: 웹페이지 로딩 바 등의 계산 또는 사용자 진척도

**기타 대체 가능한 태그**

* `b` => `strong`
* `i` => `em`
* `s` => `del`
* `u` => `ins`

## 올바른 인터렉티브 콘텐츠 사용 <a href="#undefined" id="undefined"></a>

{% hint style="info" %}
사용자와 상호작용하는 태그에는 a, qudio, button, details, embed, iframe, img, input, label, select, textarea, video 등이 있다. 유사해 보이는 태그들의 차이점을 알고 적절히 구분하여 사용하도록 하자.
{% endhint %}

**a vs button**

`a` : 고유한 url이 있는 경우 a 태그를 사용한다.\
target 속성을 이용해서 페이지를 새창으로 열면 새창으로 열린 외부 페이지에서 `window.opener`라는 객체를 통해 자신을 연 부모 페이지의 제어권을 획득할 수 있다. 즉 사용자는 탭 가로채기 공격(부모 페이지를 가로채는 공격)에 노출되므로 `rel='noopener noreferrer'` 속성을 추가해서 이를 방지해줘야 한다. (최신 브라우저는 암시적으로 적용하고 있음)

`button`: 고유한 url을 알 수 없으면 button 태그를 사용한다.\
button 태그에 hover 시 포인터가 나타나도록 스타일링하는 경우가 많은데, 포인터 모양에는 링크 이동, 주소 복사와 같은 의미가 있으므로 커서를 포인터로 변경하지 않는 것을 권장한다.

**input type**

input 태그에는 `date`, `search`, `email`, `url`, `tel`, `range`, `color` 등 여러 타입이 있다. 브라우저마다 제공되는 인터페이스가 다르므로 이를 고려해서 작업해야 한다.

`required`: 필수로 입력해야 하는 속성\
`placeholder`: 사용자에게 입력 힌트를 제공하기 위한 자리표시값 (label과는 별도)\
`datalist`: 미리 정의된 옵션 세트 (검색어 입력시 뜨는 연관 검색어 등으로 활용)

## 이미지 소스를 최적화하자 <a href="#undefined" id="undefined"></a>

{% hint style="info" %}
브라우저는 사용자 기기를 판별하여 사용 가능한 이미지 확장자를 알아내고, picture 태그 내 있는 이미지 소스 중 하나만 가져와 보여주는 기능을 지원한다. source나 picture 태그는 화면에 출력되지 않는다. 따라서 가장 용량이 적고 품질은 높은 avif를 제공하고 이를 지원하지 않는 기기에서는 webp 또는 jpg나 png를 보여주도록 하자. 이를 통해 더 좋은 도구를 선택한 사용자에게 더 좋은 경험을 제공해줄 수 있다.
{% endhint %}



**이미지 포맷 비교**

* `jpg`, `png`: 모든 브라우저에서 지원하는 폴백 이미지 (과거의 유산)
* `webp`: jpg, png 대비 30\~70% 수준의 용량 (IE 미지원)
* `avif`: 저용량/고품질 (크롬과 삼성인터넷에서만 지원)

**picture, source, img 활용**

```html
// 타입으로 분기
<picture>
 <source srcset='logo.avif' type='image/avif'> 
 <source srcset='logo.webp' type='image/webp'> 
 <img src='logo.jpg' alt='로고'>
</picture>
```

```html
// 디바이스 사이즈로 분기
<picture>
<source srcset='small.webp' media='(max-width: 760px)'> 
 <img src='large.webp' alt='이미지'>
</piture>
```

```html
// 해상력으로 분기
// 레티나 디스플레이면 2x 이미지 출력 아니면 1x 이미지 출력
<picture>
<source srcset='2x.webp 2x, 1x.webp' type='image/webp'>
 <img srcset='2x.jpg 2x' src='1x.jpg' alt='이미지'>
</piture>
```

**img 속성을 이용한 성능 개선**

* `loading='lazy'`: 뷰포트 밖의 이미지 로딩 지연
* `decoding='async'`: 이미지 디코딩을 병렬 처리해서 이미지 외 컨텐츠를 빠르게 출력
