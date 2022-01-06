# ✅ React 맛보기
* 자바스크립트로 컴포넌트를 만들면 상태가 변경될 때마다 함수를 다시 호출해줘야 한다.
```js
const component = { // 컴포넌트 생성
  message: 'init',
  count: 0,
  render(){
    return `<p>${this.message} : ${this.count}</p>`
  }
}

function render(rootElement, component){
  rootElement.innerHTML = component.render()
}
render(document.querySelector('#root'), component) // html에 컴포넌트 랜더

document.querySelector('#btn_plus').addEventListener('click', function(){
  component.message = 'update'
  component.count = component.count + 1
  render(document.querySelector('#root'), component) // 이벤트 적용 후 다시 랜더
})
```
* 리액트는 컴포넌트의 변경된 상태를 비교하여 해당 부분만 자동으로 수정해준다.
* 기본적으로 함수의 인수로는 props가 들어온다.
* 리액트의 엘리먼트로 리턴을 꼭 해주어야 한다.
```js
const Component = props => {
  return React.createElement('p', null, `${props.message} : ${props.count}`) // (태그, 속성, 내용)
}

ReactDOM.render(
  React.createElement(Component, {message: 'init', count: 0}, null),
  document.querySelector('#root')
) // ReactDOM.render(어떤 리액트 컴포넌트를, 어느 html에 태그 안에 넣을지)

document.querySelector('#btn_plus').addEventListener('click', () => {
  ReactDOM.render(
    React.createElement(Component, {message: 'update', count: 10}, null),
    document.querySelector('#root')
  ) // 이벤트 발생시 다시 랜더
}) 
```
# ✅ 컴포넌트 정의/사용
## 컴포넌트 정의
### `function` 
```js
export const FunctionComponent = () => { // props 없이 요소 정도만 출력하는 경우 화살표 함수로 하면 깔끔해보임
  return <div>Hello</div>
}
```
```js
function FunctionComponent(){
  return <div>Hello</div>
}
```
### `class`
```js
class ClassComponent extends React.Component{
  render(){
    return <div>Hello</div>
  }
}
```
## 컴포넌트 사용
### `import`
```js
import { FunctionComponent } from "./render";

export default function App() { 
  return (
    <div className="App">
      <render /> // import로 가져온 컴포넌트
    </div>
  );
}
```
### `ReactDOM.render()`
```js
ReactDOM.render(
  <ClassComponent/>, // // 어떤 리액트 컴포넌트를
  document.querySelector('#root') // 어느 태그 안에 넣을지
)
```
