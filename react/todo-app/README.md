# 벨로퍼트와 함께하는 모던 리액트 실습

![이미지](https://i.imgur.com/lJUCoQ5.png)

## 라이브러리

#### 스타일

```js
npm i styled-components
```

#### 아이콘

```js
npm i react-icons
```

## 날짜 표기

```js
const today = new Date();

const dateString = today.toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})

const dayName = today.toLocaleString('ko-KR', {weekday: 'long'})
```
