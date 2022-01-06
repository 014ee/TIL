# ✅ React.createElment
```js
React.createElement(
  type, // 첫번째 인자: html 태그 || 리액트 컴포넌트 || React.Fragment
  [props], // 두번째 인자: 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children] // 세번째 인자: 자식으로 넣어주는 요소들(여러개 가능)
);
```
## Type
### 1. html 태그
```js
ReactDOM.render(
  React.createElement('h1', null, `type이 "태그 이름 문자열" 입니다.`),
  document.querySelector('#root')
)
```
```html
<div id="root">
  <h1>type이 "태그 이름 문자열" 입니다.</h1>
</div>
```
### 2. 리액트 컴포넌트
```js
const Component = () => {
  return React.createElement('p', null, `type이 "리액트 컴포넌트" 입니다.`)
}

ReactDOM.render(
  React.createElement(Component, null, null), // <component></component> = </component> 
  document.querySelector('#root')
)
```
```html
<div id="root">
   <p>type이 "리액트 컴포넌트" 입니다.</p>
</div>
```
### 3. React.Fragment
```js
ReactDOM.render(
  React.createElement(
    React.Fragment,
    null,
    `type이 "리액트 프레그먼트" 입니다.`,
    `type이 "리액트 프레그먼트" 입니다.`,
    `type이 "리액트 프레그먼트" 입니다.`), // 별도의 태그 없이 바로 배열처럼 요소를 넣고 싶을 때
  document.querySelector('#root')
)
```
```html
<div id="root">
   type이 "리액트 프레그먼트" 입니다.type이 "리액트 프레그먼트" 입니다.type이 "리액트 프레그먼트" 입니다.
</div>
```
### 번외) 복잡한 리액트 엘리먼트가 들어갈 경우 (width 순수 JS)
* 아래와 같이 구조가 복잡할 경우 가독성이 좋지 않으므로, JSX 문법과 Babel을 이용한다.
```js
ReactDOM.render(
  React.createElement(
   'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement('h1', null, '주제'),
      React.createElement(
        'ul',
        null,
        React.createElement('li', null, 'React'),
        React.createElement('li', null, 'Vue')
      )
    )
  ),
  document.querySelector('#root')
)
```
```html
<div id="root">
  <div>
    <div>
      <h1>주제</h1>
      <ul>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </div>
  </div>
</div>
```
# ✅ JSX with [Babel](https://babeljs.io/)
### JSX 문법
* 최상위 요소는 하나여야 한다.
* 최상위 요소를 리턴하는 경우 `()`로 감싸야 한다. (필수는 아닌데, 간혹 리턴 안될 경우)
* 자식들을 바로 랜더링 하고 싶으면 빈 태그 `<>내용</>`을 사용한다. (= Fragment)
* 자바스크립트 표현식을 사용하려면, `{표현식}`을 이용한다.
* if문은 사용할 수 없습니다. `삼항 연산자` 혹은 `&&`를 사용한다.
* 인라인 스타일링이 가능하다.
* class는 자바스크립트 예약어이기 때문에 사용이 어렵고, 대신 `className`을 이용해 class를 적용할 수 있다.
* 자식요소가 있으면 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다. `<br/>`
* `boolean`, `null`, `undefined` 값은 무시된다.
### Babel이란?
* 기본적으로 바벨은 최신 자바스크립트 문법을 예전 브라우저에서도 인식할 수 있도록 변환해주는 역할을 한다.
* 또한 `JSX 문법을 순수한 자바스크립트로도 컴파일` 해주는데, 이를 활용해 리액트 컴포넌트를 보다 심플하게 만들 수 있다.  
* 즉, HTML 처럼 생긴 JSX 문법으로 작성하면 React.CreacteElement() 문법으로 변환준다.  
* 또한 문법에 엄격하기 때문에 컴파일 과정에서 문법적 오류를 인지하기 쉽다.
```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
```js
<script text="babel">
  const title = "주제"
  ReactDOM.render(
    <div>
      <div>
        <h1 class="title">{title}</h1>
        <ul>
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>
    </div>,
    document.querySelector('#root')
  )
</script> 
```
```html
<div id="root">
  <div>
    <div>
      <h1 class="title">주제</h1>
      <ul>
        <li>React</li>
        <li>Vue</li>
      </ul>
    </div>
  </div>
</div>
```
