// HEADER (badges)
//lodash cdn을 이용
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

// VISUAL (fade-in)
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //.7, 1.4, 2.1, 2.7
    opacity: 1,

  })
});


// NOTICE (swiper) 
new Swiper('.notice-line .swiper', {
  // Optional parameters
  direction: 'vertical', // 수직 슬라이드
  autoplay: 'true', // 자동재생
  loop: true // 무한반복
});


// PROMOTION (swiper)
new Swiper('.promotion .swiper', {
  // Optional parameters
  slidesPerView: 3, // 한번에 보여줄 슬라이드 수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데에서 보이기
  autoplay: {delay: 5000}, // 0.5초에 한번씩 딜레이
  loop: true, // 무한반복
  pagination : {
    el: '.promotion .swiper-pagination', // 슬라이드 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


// AWARDS
new Swiper('.awards .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


// PROMOTION (toggle)
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion // 값을 반대로 만들어줌(true)
  if (isHidePromotion) {
    // 프로모션 숨김처리
    promotionEl.classList.add('hide');
  } else {
    // 프로모션 보여줌
    promotionEl.classList.remove('hide');
  }
});


// YOUTUBE (floating random) 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};


// YOUTUBE (floating animation)
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to( // gsap 매소드
    selector, // 선택자 인수
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 기타 옵션
    y: size, // y 값
    repeat: -1, // 무한 반복 설정(자바스크립트 라이브러리에서 지원하는 기능)
    yoyo: true,
    ease: Power3.easeInOut, // https://greensock.com/docs/v2/Easing
    delay: random(0, delay)
   }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


// SCROLL MASIC (스크롤 할 때 애니메이션)
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 추가
    triggerHook: .8,

  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});