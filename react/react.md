# ✅ React 맛보기
```html
<body>
  <div id="root"></div>
  <button id='btn_plus'>+</button>
</body>
```
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
```js
const Component = props => {
  return React.createElement('p', null, `${props.message} : ${props.count}`) // (태그, 속성, 내용)
}

ReactDOM.render(
  React.createElement(Component, {message: 'init', count: 0}, null),
  document.querySelector('#root')
)

document.querySelector('#btn_plus').addEventListener('click', () => {
  ReactDOM.render(
    React.createElement(Component, {message: 'update', count: 10}, null),
    document.querySelector('#root')
  ) // 이벤트 발생시 다시 랜더
}) 
```
