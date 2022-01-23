# ☕ STARBUSKS
패스트캠퍼스 강의를 들으면서 따라 만든 스타벅스 랜딩 페이지입니다.  
아래는 강의를 들으면서 배운 내용을 정리하였습니다.

[메인 페이지](https://thirsty-pare-b9e90b.netlify.app/)  
[로그인 페이지](https://thirsty-pare-b9e90b.netlify.app/signin/)

---
## BEM(Block Element Modifier) - HTML 클래스 속성 작명법
* `요소__일부분` `contents__menu` : Lodash 기호로 요소의 일부분임을 표시
* `요소--상태` `button--blue` : Dash 기호로 요소의 상태를 표시

## 아이콘
[getting starter](https://fonts.google.com/icons?selected=Material+Icons)  
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```
[구글 머테리얼 아이콘](https://fonts.google.com/icons?selected=Material+Icons)
```html
<div class="material-icons">upload</div>
```

## 파비콘
대부분 프로젝트 루트 경로에 `favicon.ico` 파일이 있으면 자동으로 로딩하기 때문에 따로 작성하지 않아도 됩니다.  
더 좋은 화질을 제공하기 위해 `favicon.png` 파일을 만들었다면 아래와 같이 코드를 작성할 수 있습니다.
```
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```
[.icon 파일 제작](https://iconifier.net/)

## 헤더 - SEARCH
```html
<div class="search">
  <input type="text">
  <div class="material-icons">search</div>
</div>
```
```css
header .sub-menu .search {position:relative;}
header .sub-menu .search input {width:36px; height:34px; padding:4px 10px; border:1px solid #ddd; box-sizing:border-box; border-radius:4px;
outline: none; background: #fff;font-size: 12px; color: #777; transition: width .4s}
header .sub-menu .search input:focus {width:190px; border-color:#669900}
header .sub-menu .search .material-icons {position:absolute; right:5px; top:0; bottom:0; margin: auto; height:24px; transition:.2s;}
header .sub-menu .search.focused .material-icons {opacity:0;}
```
```javascript
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
```

## 헤더 - SUBMENU
`top`이나 `bottom` 속성을 사용하지 않아 수직 위치값이 없다면, 요소의 원래 위치를 그대로 사용한다.  
만약 `position: absolute;`를 사용했다면 (위치상) 부모 요소를 기준으로 하므로, 화면의 뷰포트 좌우 끝까지 늘어날 수 없게 된다.
```css
header .main-menu .item .item__contents {display:none; position:fixed; left:0; width:100%; }
header .main-menu .item:hover .item__contents {display:block;}
```

## 헤더 - BADGES, TOP
* [lodash](https://lodash.com/) 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리
* [lodash throttle](https://lodash.com/docs/4.17.15#throttle): 호출되는 횟수를 조절해주는 lodash 내 기능으로, 주로 스크롤 이벤트에서 사용
* [gsap](https://greensock.com/gsap/): 자바스크립 애니메이션 라이브러리
* [ScrollToPlugin](https://greensock.com/scrolltoplugin/): 스크롤 애니메이션을 지원하는 GSAP 플러그인
```javascript
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function (){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //top 버튼 보이기
    gsap.to('toTopEl' , .2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display:  'block'
    });
    //top 버튼 숨기기
    gsap.to('toTopEl' , .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)

// GO TO TOP (탑 버튼 클릭하면 상단으로 올라가기)
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
})
```

## 비쥬얼 - FADE IN
```css
.visual .fade-in {opacity:0;}
```
```javascript
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //.7, 1.4, 2.1, 2.7
    opacity: 1,
  })
});
```
 
## 유튜브 영상 
```
<section class="youtube">
  <div class="youtube__area">
    <div id="player"></div> 
  </div>
  <div class="youtube__cover"></div>
</section>
```
```css
.youtube .youtube__area{width:1920px; position: absolute; left:50px; margin-left:calc(1920px-2); top:50%; margin-top: calc(1920px * 9 / 16 / -2 );}
.youtube .youtube__area::before {contetn:''; display:block; width:100%; height:0; padding-top:56.25% // 16:9 비율} 
```
[iframe api](https://developers.google.com/youtube/iframe_api_reference?hl=ko)  
[플레이어 매개변수](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters)
```javascript
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
  videoId: 'fBVtXuA-xB8', // 최초 재생할 유튜브 영상 ID
  playerVars: { // 제어 명령어
  autoplay: true, // 자동 재생 유무
  loop: true, // 반복 재생 유무
  playlist: 'fBVtXuA-xB8' // loop를 추가하면 반듯이 다음에 재생할 유튜브 영상 ID를 입력해야함
  },
  events:{
    onReady: function (event) {
    event.target.mute() // 음소거
    }
  } 
  });
}
```
