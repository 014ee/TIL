# Accessibility

## 적절한 대체 텍스트 제공 (장식적인 이미지 제외)

```css
.sound-only {
 position: absolute;
 opacity: 0;
 
 // 아래와 같이 스타일링 해버리면 화면 낭독기에 전달되지 않음
 // display: none; x
 // visibility: hidden; x
 // width | height: 0; x
 // fonr-size: 0; x
}
```

## 반복 컨텐츠 건너뛰기 (메뉴 건너뛰기)

```css
@media (max-width: 960px;) {.skip-to-main {display:none}}
@media (min-width: 961px) {
  .skip-top-main {
    display: block;
    height :1px;
    margin-bottom: -1;
    overflow: hidden;
    text-align: center;
    line-height: 48px;
  }
  .skip-to-main: focus {
   height: auto;
   margin-bottom: 0;
  }
}
```

* 표는 이해하기 쉽게 구성되어야 한다. (ex. caption, th + scope 속성)
* 사용자 입력을 요구할 때 레이블 또는 설명 제공 (ex. label, aria-label)
* 녹음된 음성 콘텐츠에 자막, 대본, 수화 제공 (ex. track 태그)
* 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다. (hx, aria-label)
* 자동으로 변경되는 컨텐츠는 움직임을 제어할 수 있어야 한다. (ex. 슬라이드, 동영상)
* 모든 기능은 키보드만으로도 사용할 수 있어야 한다. (ex. 장치 독립적 이벤트 핸들러 사용 권장)
* 키보드에 의한 초점은 논리적으로 이동해야 하며 시각적으로 구별할 수 있어야 한다.
* 텍스트 콘텐츠와 배경 간의 명도 대비는 4.5:1 이상이여야 한다.
* 모든 웹페이지에는 주로 사용하는 언어를 명시해야 한다. (ex. lang='ko')
* 입력 오류가 감지되면 사용자에게 오류를 정정할 수 있는 방법을 제공해야 한다. (ex. 회원가입)

## HTML을 풍부하게 하는 aria 명세 <a href="#html-aria" id="html-aria"></a>

#### aria 역할 <a href="#aria" id="aria"></a>

accessible rich internet application : 접근 가능한 고기능 인터넷 애플리케이션\
즉, HTML 에 역할, 상태, 속성 정보를 부여하여 보조기기의 웹 문서 접근을 지원\
aria를 적용하기 전 적절한 태그를 사용했는지를 먼저 체크해야 한다.

```html
// 색인을 제공하는 구조 (탭)
<element role='tablist'> // 탭 전체를 감싸는 태그
<element role='tab'> // 탭 버튼
<element role='tabpanel'> // 탭 내용

// 초점을 받으면 설명을 표시하는 문맥의 팝업 (초점이 툴팁 안으로 들어가면 안됨)
<input id='tes' type='tel' aria-describedby='tootip-tel'>
<p id='tootip-tel' role='tooltip' hidden>하이픈(-) 없이 숫자만 입력</p>

// 현재 상태에 대한 정보, aria-live='polite', aria-atomic='true' 속성 자동 할당
<p role='status'>10개의 검색 결과</p>
  
// 시간에 민감하고 중요한 실시간 콘텐츠
// aria-live='assertive', aria-atomic='true' 속성 자동 할당
<p role='alert'>정찬명님께 1,000,000,000원 송금 실패!</p>
```

#### aria 상태 <a href="#aria" id="aria"></a>

```html
// 현재 맥락과 일치하는 항목을 의미
<a aria-current='page | step | location | date | time | true | false'>
  
// 단일 또는 다중 선택이 가능한 요소에서 선택 상태를 명시하는 의미 (ex. 탭)
<a aria-selected='false | true | undefined'>
  
// 요소에 연결되어 있는 팝업 정보를 제공
<a aria-haspopup='true | menu | dialog | listobox | tree | grid | false'>
<button aria-haspopup='dialog'>
  로그인
</button>
<section role='dialog' aria-labelledby='login-heading' aria-modal='true' hidden>
  <h2 id='login-heading'>로그인</h2>
  // ...
</section>

// 제어 대상의 확장 또는 축소 상태 (ex. 토글 형식의 FAQ 제목)
<button aria-expanded='true | false | undefined'>
  
// 보조기기에 정보를 제공하지 않는다는 의미 (ex. 모달이 열렸을 때 뒤의 배경)
<div aria-hidden='true | false | undefined'>

// 사용자가 입력한 값에 오류가 있는지 여부를 나타냄
<input aria-invalid='false | true | grammar | spelling'>
<input id='emain' type='email' aria-invalid='true' aria-errormessage='email-error-msg'>
<p id='email-error-msg' aria-role='alert'>이메일 형식이 유효하지 않습니다. 앳(@)과 마침표(.)를 포함해주세요.</p>
```

#### Aria 속성 <a href="#aria" id="aria"></a>

```html
// 현재 요소가 제어하는 명상을 명시
<button aria-controls ='id값 여러개 등록 가능'>
  
// 실시간으로 내용을 갱신하는 영역
<p aria-live ='police | assertive | off'>
  
// 간결한 설명 참조, aria-label과 유사한 역할이므로 대체 가능하나 더 권장되는 방식
<section aria-labelledby ='HTML-PATH'>
  <h2 id='HTML-PATH'>HTML이란?</h2>
</section>

// 상세한 설명을 참조
<button aria-describedby ='TIP-DEL'>게시물 삭제</button>
<p id='TIP-DEL' role='tooltip' hidden>게시물 삭제 후 복원할 수 없습니다. 그래도 삭제하시겠습니까?</p>
 
// 오류 메세지 참조, 오류 메시지는 오류 원인과 해결 방법 포함
<input aria-invalid='false | true | grammar | spelling'>
<input id='emain' type='email' aria-invalid='true' aria-errormessage='email-error-msg'>
<p id='email-error-msg' aria-role='alert'>이메일 형식이 유효하지 않습니다. 앳(@)과 마침표(.)를 포함해주세요.</p>
  
  
// 요소가 모달인지 여부를 보조기기에 전달
<section role='alertdialog' aria-modal ='false | true'>
```

## 마무리 <a href="#undefined" id="undefined"></a>

* 메타태그, 오픈그래프를 꼼꼼히 작성할 것
* 문서를 흐름에 따라 작성하고 섹셔닝 콘텐츠와 헤딩을 활용해 구조화할 것
* 시맨틱한 태그를 사용할 것
* 요소의 속성을 적절히 활용할 것
* 사용자 환경에 맞는 이미지 소스를 제공할 것
