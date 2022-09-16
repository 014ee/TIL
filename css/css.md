# CSS

## CSS

{% hint style="info" %}
CSS를 비교적 쉽게 생각하는 경우가 많은데, 이것 저것 만져보다 스타일을 완성시키고 있다면 CSS를 잘 모르고 있는 것이다. 정확하게 어떻게 동작하는지 알고 작성하도록 하자.
{% endhint %}

#### reset.css <a href="#resetcss" id="resetcss"></a>

습관적으로 이미 만들어진 reset.css 파일을 적용함으로서 사용하지도 않는 태그를 미리 스타일링 하거나 굳이 리셋하지 않아도 되는데 덮어쓰기하는 경우가 있다. 개발자 도구의 covarage를 통해 사용되지 않는 css 코드를 확인해볼 수 있는데, 이를 점검하고 내 프로젝트를 위한 reset.css를 만들어보자.

* [Reset by \[class\]](https://codepen.io/naradesign/pen/JjEPbER)
* [Reset by \[class\]:where()](https://codepen.io/naradesign/pen/XWpvZBB)

## CSS 코드 최적화 <a href="#css" id="css"></a>

* 사용하지 않는 렌더 차단 CSS 리소스 제거하기 > 라이트하우스 & 커버리지
* 반응형 웹인 경우 해상도 구간별로 CSS 파일을 분리하고 link 태그에 미디어쿼리 속성 적용해서 특정 해상도에서만 불러올 수 있도록 하기
* 필수 스타일을 head 태그 안에 내부 스타일시트로 작성하여 렌더 차단이 되지 않도록 하기
* 지연해도 되는 스타일은 rel='preload' 속성으로 병렬 로딩 후 지연 적용하기

```html
<style>
  // 필수 스타일
  </style>

### 덩어리 콘텐츠 빨리 그리기
-  LCP: Largest Contentful Paint => 2.5 이내로 가장 큰 컨텐츠 페인트 해야함
- FID: First Input Delay


<link rel='preload' as='style' href='preload.css'
onload='this.onload=null; this.rel='stylesheet''>V
```

* 픽쳐 태그로 이미지 분기처리해서 가져오기
* 빨리 불러와야 하는 이미지는 헤드 태그에 넣어서 rel='preload' 하기
* 이미지 태그에 로딩, 디코딩 속성 추가하기 (뷰표트에 들어왔을 대 로딩, )

```html
<img src='image.jpg' loading='lazy' decoding='async'>
```

* CLS: Cumulative Layout Shift => 첫 페인팅 이후 배치가 변경되는 상황/ 0.1 이내로 단축\
  \=> 치수를 알 수 없는 이미지 로딩
* 동적으로 추가된 돔
* 웹폰트가 나중에 적용되는 경우
* 이미지/영상 요소에 비율 힌트(width, height) 제공
* DOM에 자리표시자 제공
* 웹 폰트와 유사한 시스템 대체 글꼴 제공
