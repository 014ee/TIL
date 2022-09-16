# Component

## React

{% hint style="info" %}
컴포넌트를 만들 때 사용하는 모듈이다.
{% endhint %}

```javascript
import React from 'react' 

const FunctionComponent = () => {
  return <div>Hello</div>
}

class ClassComponent extends React.Component{
  render(){
    return <div>Hello</div>
  }
}
```

## ReactDom

{% hint style="info" %}
컴포넌트 파일을 HTML 엘리먼트에 연결할 때 사용하는 모듈이다.
{% endhint %}

```javascript
import ReactDom from 'react-dom' 

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root') 
);
```

## React.createElement

```javascript
React.createElement(
  type,          // html 태그 || 리액트 컴포넌트 || React.Fragment
  [props],       // 리액트 컴포넌트에 넣어주는 데이터 객체
  [...children]  // 자식 요소
);
```

```javascript
ReactDOM.render(
  React.createElement('h1', null, `type이 "태그 이름 문자열" 입니다.`),
  document.querySelector('#root')
)
```

```javascript
const Component = () => {
  return React.createElement('h1', null, `type이 "리액트 컴포넌트" 입니다.`)
}

ReactDOM.render(
  React.createElement(Component, null, null), 
  document.querySelector('#root')
)
```

<pre class="language-javascript"><code class="lang-javascript"><strong>// 복잡한 리액트 엘리먼트가 들어갈 경우 가독성이 떨어진다.
</strong><strong>
</strong><strong>ReactDOM.render(
</strong>  React.createElement(
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
)</code></pre>

## JSX with [Babel](https://babeljs.io/)

{% hint style="info" %}
코드의 가독성을 높이기 위해 위와 같은 방식이 아니라 JSX 문법을 사용한다. Babel과 함께 하용하면 React.CreacteElement() 문법으로 자동 변환된다.
{% endhint %}

* 최상위 요소는 하나여야 한다. 여러 요소를 부모태그없이 랜더링하고 싶으면 빈 태그로 감싸준다.
* 최상위 요소를 리턴하는 경우 `()`로 감싸야 한다.&#x20;
* 자바스크립트 ${표현식}은 `{표현식}`로 사용한다.
* 자바스크립트 class는 `className`로 사용한다.
* if문은 사용할 수 없으므로 `삼항 연산자` 혹은 `&&`를 사용한다.
* 자식요소가 있으면 꼭 닫아야 하고, 자식요소가 없으면 열면서 닫아야 한다. `<br/>`
* `boolean`, `null`, `undefined` 값은 무시된다.



## Props

{% hint style="info" %}
컴포넌트 외부로부터 전달받는 읽기 전용 데이터로 객체 형식으로 들어온다. 속성 뿐만 아니라 내 컴포넌트의 자식 컴포넌드도 { child } 로 받아올 수 있다.&#x20;
{% endhint %}

```javascript
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

## State

{% hint style="info" %}
컴포넌트 내부에서 사용 및 변경할 수 있는 데이터로 원래는 class에서만 사용 가능했으나, hooks 이후 함수에서도 useState로 상태 관리가 가능해졌다. class 컴포넌트에서 state는 객체 형태로만 사용 가능하다.
{% endhint %}

```javascript
const Component = () => {
  const [count, setCount ] = useState(0)
  
  return (
    <div>
      <p>{ count }</p>
      <button onClick = { () => {setCount(count+1)} }>+</button>
    <div>
  )
}
```

```javascript
class Component extends React.Component{
  state = {  
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
      this.setState((state) => { 
       const newState = {count: state.count + 1}
        return newState
      })
    }, 1000)
    
  }
}
```

## Event Handling

{% hint style="info" %}
이벤트명은 camelCase로 작성한다. 실제 DOM 엘리먼트에만 사용 가능하며, 리액트 컴포넌트에 사용시 props로 전달된다.
{% endhint %}

```javascript
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

```javascript
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
