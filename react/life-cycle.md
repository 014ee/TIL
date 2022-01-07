# ✅ 컴포넌트 라이프사이클
* 컴포넌트가 브라우저 어딘가에 그려지는 순간부터 사라지는 순간까지
* 컴포넌트는 생명주기 내에서 개발자가 작업이 가능하도록 매서드를 오버라이딩 할 수 있게 해준다.
* 디클레러티브(선언적 성질): 라이프사이클 순간 순간을 선언적으로 표현해 놓으면, 해당 함수를 실행해서 사용할 수 있게 해준다.
* 불필요하게 랜더되는 것을 방지하고 성능을 최적화 시키는데 도움을 준다.

Initialization | Mounting | Updating - Props | Updating - States | Unmounting
:--: | :--: | :--: | :--: | :--: 
setup props, state | compnentWillMount | componentWillReceivePorps | shouldComponentUpdate | componentWillUnmount
| - | render | shouldComponentUpdate | componentWillUpdate | -
| - | componentDidMouont | componentWillUpdate | render | -
| - | - | render | componentDidUpdate | -
| - | -  | componentDidUpdate  | - | -

# ✅ v16.3 이전 라이프사이클
## 컴포넌트 생성 및 마운트
* `constructor` 
* `componentWillMount`
* `render` 
* `componentDidMount`
```js
class App extends React.Component {
  state = {
    age: 39,
  }
  constructor(props){
  super(props)
    console.log('constructor', props) // 1번째로 출력
  }
  render(){
    console.log('render') // 3번째로 출력
    return(
      <div>
        <h2>Hello {this.props.name} - {this.props.age}</h2>
      </div>
    )
  }
  componentWillMount(){ // 해당 메서드는 리액트 라이프사이클에 의해 자동으로 불러짐
    console.log('componentWillMount') // 2번째로 출력
  }
  componentDidMount(){
    console.log('componentDidMount') // 4번째로 출력
    setInterval(() => {
      console.log('setInterval')
      this.setInterval(state => ({...state, age: state.age + 1})) // state가 1초마다 바뀌므로, 콘솔창에 1초마다 render 문자가 찍힌다.
    }, 1000)
  }
}

React.DOM.render(<App name = "Mark" />, document.querySelector('#root'))
```

## 컴포넌트 props, state 변경
* `componentWillReceiveProps`
* `shouldComponentUpdate`
* `componentWillUpdate`
* `render`
* `componentDidUpdate`
```js
class App extends React.Component {
  state = {
    age: 39,
  }
  constructor(props){
  super(props)
    console.log('constructor', props) // 1번째로 출력
  }
  render(){
    console.log('render') // 3번째로 출력
    return(
      <div>
        <h2>Hello {this.props.name} - {this.props.age}</h2>
      </div>
    )
  }
  componentWillMount(){ // 해당 메서드는 리액트 라이프사이클에 의해 자동으로 불러짐
    console.log('componentWillMount') // 2번째로 출력
  }
  componentDidMount(){
    console.log('componentDidMount') // 4번째로 출력
    setInterval(() => {
      console.log('setInterval')
      this.setInterval(state => ({...state, age: state.age + 1})) // state가 1초마다 바뀌므로, 콘솔창에 1초마다 render 문자가 찍힌다.
    }, 1000)
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){ // 5번째로 출력
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true // true or false로 반환 (값에 따라 랜더 여부 결정)
  }
  componentWillUpdate(nextProps, nextState){ // 6번째로 출력 > 7번째로 render 출력
    console.log('componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){ // 8번째로 출력
    console.log('componentDidUpdate', prevProps, prevState)
  }
}

React.DOM.render(<App name = "Mark" />, document.querySelector('#root'))
```

## componentWillReceiveProps
* props를 새로 지정했을 때 바로 호출된다.
* state의 변경에 반응하지 않는다.
* props의 값이 따라 state를 변경해야 한다면, setState를 이용한다.
* props와 state 변경을 순차적으로 하는 것이 아니라 모아서 한번에 변경해준다.

## shouldComponentUpdate
* props만 변경되도, state만 변경되도, 둘 다 변경되도 실행된다.
* newProps와 newState를 인자로 호출한다.
* 리턴타입은 boolean으로, true면 render 호출, false면 render을 호출하지 않는다. (기본값은 true)

## componentWillUpdate
* 컴포넌트가 재랜더링 되기 직전에 불린다.
* 여기서는 setState를 사용하면 안된다.

## componentDidUpdate
* 컴포넌트가 재랜더링을 마치면 불린다.

## componentWillUnmount
* 실제로 unmount 된 후에는 실행을 할 수 없으므로, 종료 직전을 뜻하는 willUnmount가 있다.
* 컴포넌트가 사용하고 있던 메모리 정리, 응답 요청한 API 연결 끊기 등
```js
class App extends React.Component {
  state = {
    age: 39,
  }
  interval = null
  constructor(props){
  super(props)
    console.log('constructor', props) // 1번째로 출력
  }
  render(){
    console.log('render') // 3번째로 출력
    return(
      <div>
        <h2>Hello {this.props.name} - {this.props.age}</h2>
      </div>
    )
  }
  componentWillMount(){ // 해당 메서드는 리액트 라이프사이클에 의해 자동으로 불러짐
    console.log('componentWillMount') // 2번째로 출력
  }
  componentDidMount(){
    console.log('componentDidMount') // 4번째로 출력
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setInterval(state => ({...state, age: state.age + 1})) // state가 1초마다 바뀌므로, 콘솔창에 1초마다 render 문자가 찍힌다.
    }, 1000)
  }
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){ // 5번째로 출력
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true // true or false로 반환 (값에 따라 랜더 여부 결정)
  }
  componentWillUpdate(nextProps, nextState){ // 6번째로 출력 > 7번째로 render 출력
    console.log('componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){ // 8번째로 출력
    console.log('componentDidUpdate', prevProps, prevState)
  }
  componentWillUnmouont(){ // 해당 컴포넌트가 사라지기 직전에 실행
    clearInterval(this.interval) // componentDidMount 에서 설정한 setInterval 종료처리
  }
}

React.DOM.render(<App name = "Mark" />, document.querySelector('#root'))
```
# ✅ v16.3 이후 라이프사이클
v16.3이전 | vs |  v16.3이후
:--: | :--: | :--:
constructor | = | constructor
componentWillMount | != | getDerivedStateFromProps
render | = |render
componentDidMount | = |componentDidMount
componentWillReviceProps | != |getDerivedStateFromProps
shouldComponentUpdate | = |shouldComponentUpdate
render | = |render
componentWillUpdate | != |getSnapshotBeforeUpdate
dom에 적용 | = |dom에 적용
componentDidUpdate | = |componentDidUpdate
componentWillUnmount | = |componentWillUnmount
