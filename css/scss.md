# scss

[css to scss](https://www.sassmeister.com/)

## 상위(부모) 선택자 참조

```scss
.container {
 ul {
  li {
   font-size:52px;
   .name {
    color:orange;
   }
   .age {
    color:blue;
   }
  }
 }
}
```

```scss
.container ul li {font-size: 52px}
.container ul li .name {color: orange}
.container ul li .age {color: blue}
```

## 중접된 속성

* 동일한 네임스페이스를 갖는 속성에서 사용할 수 있다.

```scss
.box {
 font: {
  weight: bold;
  size: 10px;
  family: sans-serif;
 }
}
```

```scss
.box {
 font-weight: bold;
 font-size: 10px;
 font-family: sans-serif;
}
```

## 변수

* 자바스크립트처럼 변수가 {선언된 위치}에 따라 유효한 범위를 갖는다.
* 변수의 값은 let과 같이 재할당이 가능하다.

```scss
.box {
 $size = 100px;
 width: $size; // 100px
 .item {
 $size = 50px; 
 height: $size; // 50px
 }
 top: $size; // 50px
}
```

## 산술연산

* `+`, `-`, `*`, `%` 기호를 사용할 수 있다.
* `/`는 단축속성을 의미하는 기호와 동일하므로 `()`로 감싸거나, `변수`를 사용하거나 `다른 연산자와 함께 작성`해야 한다.
* 산술연산을 할 때에는 동일한 단위의 기호끼리 사용해야 한다.
* calc함수를 사용하면, 다른 단위의 기호도 사용할 수 있다.

```scss
div {
 $size: 40px;
 width: 10px + 10px;
 height: 40px - 10px;
 font-size: 10px * 2
 margin: (40px/2) or $size/2 or 20px + 40px / 2
 padding: 20px % 4;
 font: 10px / 10px; 폰트사이즈 / 라인하이트
}
```

## 재활용

* `@mixin` 키워드로 재활용할 속성을 등록하고, `@include`를 통해 사용할 수 있다.
* 인수를 받을 수 있는 매개변수를 만들어 원하는 값으로 변경하여 재활용 할 수도 있다.
* `:` 기호를 통해 매개변수에 별도의 값을 지정하지 않았을 경우 사용할 기본 값을 설정할 수 있다.
* 여러 매개변수 중 하나만 수정해서 사용하고 싶으면, 키워드 인수를 사용해야 한다.

```scss
@mixin box($size:100px, $color: tomato) {
  width: $size;
  height: $size;
  background: $color;
}

.container {
 @include box(200px);
 .box {
  @include box($color:orange);
 }
}
```

## 반복문

* 자바스크립트와 다르게 `1`부터 시작된다.

```scss
@for $i from 1 through 10 {
 .box:nth-chld(#{i}) {
  width: 100px * $i;
 }
}
```

## 함수

```scss
@function ratio($size, $ratio) {
 @return $size * $ratio
}
.box {
$width: 160px;
height: ratio($width, 9/16)
}
```

## 색상 내장 함수

```scss
.box {
  $color: orange;
  width:200px;
  height:100px;
  background: $color;
  &:hover{
    background: mix($color, red); // 컬러 믹스
    background: lignten($color, 50%); // 높은 명도
    background: darken($color, 50%); // 낮은 명도
    background: saturate($color, 50%); // 높은 채도
    background: desaturate($color, 50%); // 낮은 채도
    background: grayscale($color); // 회색
    background: invert($color); // 반전
    background: rgba($color, 50%); // 투명도
  }
}
```

## 외부에서 scss 파일 가져오기

```scss
@import url('./sub.scss')
@import './sub.scss'
@import './sub','./sub2' 
```

## 데이터 종류

```scss
$number: 1; / .5, 100px, 1em
$string: bold; // relative, '../ima/a.png'
$color: red; // #fff, rgba(0,0,0,.1)
$boolean: true; // false
$null: null;
$list: orange, roalblue, yellow;
$map : (sa
 o: orange,
 r: royalblue,
 y: yellow
);
```

## 반복문 @each

```scss
@each  $color in $list {
 .box {color: $c}
}
```

```scss
@each  $key, $value in $map {
 .box-#{$key} {color: $value}
}
```

## 재활용 @content

```scss
@mixin left-top{
 position: absolute;
 left: 0;
 top:0;
 @content;
}
.box {
 width:200px;
 @include left-top {
  bottom:0;
  right:0;
 }
}
```
