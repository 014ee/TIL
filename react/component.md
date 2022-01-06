# ✅ 컴포넌트 만들기
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
### 번외) 복잡한 리액트 엘리먼트가 들어갈 경우 (width JSX and [Babel](https://babeljs.io/))
* 기본적으로 바벨은 최신 자바스크립트 문법을 예전 브라우저에서도 인식할 수 있도록 변환해주는 역할을 한다.
* 또한 `JSX 문법을 순수한 자바스크립트로도 컴파일` 해주는데, 이를 활용해 리액트 컴포넌트를 보다 심플하게 만들 수 있다.  
* 즉, HTML 처럼 생긴 JSX 문법으로 작성하면 React.CreacteElement() 문법으로 변환준다.  
* JSX 쓰는 이유? 가독성 최고, babel과 같은 컴파일 과정(문법에 엄격)에서 문법적 오류를 인지하기 쉬움
```js
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```
```js
<script text="babel">
  ReactDOM.render(
    <div>
      <div>
        <h1 class="title">주제</h1>
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
