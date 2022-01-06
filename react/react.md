# ✅ React
* 자바스크립트로 컴포넌트를 만들면 상태가 변경될 때마다 reder 함수를 다시 호출해줘야 한다.
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
render(document.querySelector('#root'), component) // html에 컴포넌트 렌더

document.querySelector('#btn_plus').addEventListener('click', function(){
  component.message = 'update'
  component.count = component.count + 1
  render(document.querySelector('#root'), component) // 이벤트 적용 후 다시 렌더
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
  ) // 이벤트 발생시 다시 렌더
}) 
```
# ✅ 리액트 컴포넌트
## `class` 컴포넌트 기본 구조
* 정의법
```js
class ClassComponent extends React.Component{
  render(){
    return <div>Hello</div>
  }
}
```
* 사용법
```js
ReactDOM.render(
  <ClassComponent/>,
  document.querySelector('#root')
)
```
## `function` 컴포넌트 기본 구조
* 정의법 1
```js
function FunctionComponent(){
  return <div>Hello</div>
}
```
* 정의법 2
```js
const FunctionComponent = () => return <div>Hello</div>
// props 없이 요소 정도만 출력하는 경우 화살표 함수로 하면 깔끔해보임
```
* 사용법
```js
ReactDOM.render(
  <FunctionComponent/>,
  document.querySelector('#root')
)
```
