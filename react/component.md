# ✅ React 핵심 라이브러리
## [react](https://ko.reactjs.org/docs/react-api.html)
```js
import React from 'react' // 컴포넌트를 만들 때 사용
```
#### `function component`
```js
const FunctionComponent = () => {
  return <div>Hello</div>
}
```
```js
function FunctionComponent(){
  return <div>Hello</div>
}
```
#### `class component`
```js
class ClassComponent extends React.Component{
  render(){
    return <div>Hello</div>
  }
}
```
## [react-dom](https://ko.reactjs.org/docs/react-dom.html)
```js
import ReactDom from 'react-dom' // 컴포넌트 파일을 HTML 엘리먼트에 연결할 때 사용
```
```js
ReactDOM.render(어떤 리액트 컴포넌트를, 어느 HTML 엘리먼트에 놓을지)
```
```js
ReactDOM.render(
  <FunctionComponent />,
  document.getElementById('root') 
);
```
# ✅ 컴포넌트 만들기
```js
React.createElement(
  type, // 첫번째 인자: html 태그 || 리액트 컴포넌트 || React.Fragment
  [props], // 두번째 인자: 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children] // 세번째 인자: 자식으로 넣어주는 요소들(여러개 가능)
);
```
### html 태그
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
### 리액트 컴포넌트 정의
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
### React.Fragment
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
### 번외) 복잡한 리액트 엘리먼트가 들어갈 경우
아래와 같이 구조가 복잡할 경우 `React.createElement`로 컴퍼넌트를 생성하면 가독성이 좋지 않으므로, `JSX 문법`을 이용한다.
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
* 최상위 요소를 리턴하는 경우 `()`로 감싸야 한다. (필수는 아닌데, 간혹 리턴 안될 경우)
* 최상위 요소는 하나여야 한다.
* 자식들을 바로 랜더링 하고 싶으면 빈 태그 `<>내용</>`을 사용한다. (= Fragment)
* 자바스크립트 ${표현식}은 `{표현식}`로 사용한다.
* 자바스크립트 class는 `className`로 사용한다.
* if문은 사용할 수 없으므로 `삼항 연산자` 혹은 `&&`를 사용한다.
* 인라인 스타일링이 가능하다.
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
# ✅ Props
* 컴포넌트 외부로부터 전달받는 데이터
* `객체 형식`으로 들어온다. {message = "안녕하세요,"}
* 구조분해 할당으로 간결하게 값을 사용할 수 있다.
* 속성 뿐만 아니라 내 컴포넌트의 자식 컴포넌드도 `{child}` 로 받아올 수 있다.
## function
```js
function Component ({message}){
  return (
    <div><h1>{message}이것은 함수로 만든 컴포넌트 입니다.</h1></div>
  )
}

Component.defaultProps = {
   message: "함수, class 모두에서 사용 가능한 기본값 작성 방법"
}

ReactDOM.render(<Component message = "안녕하세요,"/>, document.querySelector('#root'))
```
## class
```js
class Component extends React.Component{
  render(){
    return (
      <div><h1>{this.props.message}이것은 클래스로 만든 컴포넌트 입니다.</h1></div>
    )
  }
  static defaultProps = {
     message: "class에서만 사용 가능한 기본값 작성 방법"
  }
}

ReactDOM.render(<Component message = "안녕하세요,"/>, document.querySelector('#root'))
```
# ✅ State
* 컴포넌트 내부에서 사용 및 변경할 수 있는 데이터
* 원래는 class에서만 사용 가능했으나, hooks 이후 함수에서도 [useState](https://github.com/014ee/TIL/blob/main/react/hooks.md)로 사용 가능해짐
## function
```js
const Component = () => {
  const [count, setCount ] = useState(0)
  
  return (
    <div>
      <p>{count}</p>
      <button onClick = { () => {setCount(count+1)} }>+</button>
    <div>
  )
}
```

## class
* class 컴포넌트에서 state는 객체 형태로만 사용 가능
```js
class Component extends React.Component{

  state = {   // state 값 설정 방법 1
    count: 0,
  }
  
  render(){
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    )
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({ // state 값 변경 방법 1 (객체를 통째로 새로 넣는 방식)
        count: this.state.count + 1,
      })
    }, 1000)
    
  }
}
```
```js
class Component extends React.Component{

  constructor(props){ // state 값 설정 방법 2 (잘 안씀)
    super(props)
    this.state = {count: 0}
  }
  
  render(){
    return (
      <div>
        <p>{this.state.count}</p>
      </div>
    )
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState((previousState) => { // state 값 변경 방법 2 (이전 값을 활용하는 방식)
       const newState = {count: previousState.count + 1}
        return newState
      })
    }, 1000)
    
  }
}
```
# ✅ 이벤트 핸들링
* `onClick = {함수}` (이벤트명은 `camelCase`로만 작성 가능)
* 실제 DOM 엘리먼트에만 사용 가능하며, 리액트 컴포넌트에 사용시 props로 전달된다.
## function
```js
function Component(){
  const [count, setCount] = useCount(0)
  return (
    <div>
      <p>{ count }</p>
      <button onClick={ () => {setCount(count+1)} }>+</button>
    </div>
  )
}
```
## class
```js
class Component extends React.Component{
  state = {
    count: 0,
  }
  
  return (
    <div>
      <p>{this.state.count}</p>
      <button onClick={this.click}>+</button>
    </div>
  )
  
  click = () => {
    this.setState((state) => ({
      ...state,
      count: state.count + 1,
    }))
  }
}
```
