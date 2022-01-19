# ✅ 클래스 라이프사이클
* 컴포넌트가 브라우저 어딘가에 그려지는 순간부터 사라지는 순간까지
* 이를 이용해 특정한 컴포넌트 생명주기에 접근하여 매서드를 오버라이딩 할 수 있다.
* 선언적 성질: 라이프사이클 순간 순간을 선언적으로 표현해놓은 함수를 실행해서 사용할 수 있다.
* 불필요하게 랜더되는 것을 방지하고 성능을 최적화 시키는데 도움을 준다.
* `shouldComponentUpdate`는 `true`와 `false`를 반환하며, 컴포넌트 업데이트 여부를 판단하여 불필요한 랜더를 줄이는데 중요한 역할을 한다.

# ✅  v16.3 이전 라이프사이클
Initialization | Mounting | Updating - Props | Updating - States | Unmounting
:--: | :--: | :--: | :--: | :--: 
setup props, state | compnentWillMount | componentWillReceivePorps | - | componentWillUnmount
| - | render | shouldComponentUpdate | shouldComponentUpdate | -
| - | componentDidMouont | componentWillUpdate | componentWillUpdate | -
| - | - | render | render | -
| - | -  | componentDidUpdate  | componentDidUpdate | -


## 마운트
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
      console.log('setInterval') // state가 1초마다 바뀌므로, 1초마다 render 문자가 찍힌다.
      this.setInterval(state => ({...state, age: state.age + 1})) 
    }, 1000)
  }
}

React.DOM.render(<App name = "Mark" />, document.querySelector('#root'))
```

## 업데이트
`componentWillReceiveProps`
* props를 새로 지정했을 때 바로 호출된다.
* state의 변경에 반응하지 않는다.
* props의 값이 따라 state를 변경해야 한다면, setState를 이용한다.
* 변경된 props와 state로 인한 shouldComponentUpdate로의 이동은 순차적으로 진행되는게 아니라 한번에 이동된다.

`shouldComponentUpdate`
* props만 변경되도, state만 변경되도, 둘 다 변경되도 실행된다.
* newProps와 newState를 인자로 호출한다.
* 리턴타입은 boolean으로, true면 render 호출, false면 render을 호출하지 않는다. (기본값은 true)

`componentWillUpdate`
* 컴포넌트가 재랜더링 되기 직전에 불린다.
* 여기서는 setState를 사용하면 안된다.

`render`
* 업데이트 후 재랜더링

`componentDidUpdate`
* 컴포넌트가 재랜더링을 마치면 불린다.
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
      this.setInterval(state => ({...state, age: state.age + 1}))
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

## 언마운트
`componentWillUnmount`
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
      this.setInterval(state => ({...state, age: state.age + 1}))
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
componentWillMount | != | getDerivedStateFromProps
componentWillReviceProps | != |getDerivedStateFromProps
componentWillUpdate | != |getSnapshotBeforeUpdate

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
  static getDerivedStateFromProps(nextProps, prevState){ // v16.3 이후 라이프사이클 (보통 시간의 흐름에 따라 변하는 props에 state가 의존하는 특수한 상황에 쓰임)
    console.log('getDerivedStateFromProps', nextProps, prevState)
    return { // 리턴값이 없으면 에러 발생하므로 리턴 없을 경우 null로 지정
      age: 390, // nextProps가 들어 왔을 때 state가 입력한 것과 같이 바뀜
    } 
  }
  componentDidMount(){
    console.log('componentDidMount') // 4번째로 출력
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setInterval(state => ({...state, age: state.age + 1})) 
    }, 1000)
  }
  componentWillReceiveProps(nextProps){  / 삭제?
    console.log('componentWillReceiveProps', nextProps)
  }
  shouldComponentUpdate(nextProps, nextState){ // 5번째로 출력
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true // true or false로 반환 (값에 따라 랜더 여부 결정)
  }
  componentWillUpdate(nextProps, nextState){ // 6번째로 출력 > 7번째로 render 출력 / 삭제?
    console.log('componentWillUpdate', nextProps, nextState)
  }
  componentDidUpdate(prevProps, prevState){ // 8번째로 출력
    console.log('componentDidUpdate', prevProps, prevState)
  }
  componentWillUnmouont(){ // 해당 컴포넌트가 사라지기 직전에 실행
    clearInterval(this.interval) // componentDidMount 에서 설정한 setInterval 종료처리
  }
}

let i = 0
class App extends React.Component {
  state = {
    list: []
  }
  render(){
    return (
      <div id="list" style={{height: 100; overflow:"scroll"}}>
        {this.state.list.map(i){
          return <div>{i}</div>
        }}
      </div>
    )
  }
  componentDidMound(){
    setInterval(() => {
      this.setState(state => ({
        list: [...state.list, i++]
      }), 1000)
    })
  }
  getSnapshotBeforeUpdate(prevProps,  prevState){
    if(prevState.list.length === this.state.list.length) return null
    const list = document.querySelctor('#list')
    return list.scrollHeight - list.scrollTop // DOM 업데이트 전 단계에서 필요한 값을 스냅샷 찍어놓고
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(snapshot)
    if (snapshot === null) return
    const list = document.querySelctor('#list')
    list.scrollTop = list.scrollHeight - snapshot // DOM 업데이트 후 snap으로 저장해둔 값을 이용해서 스크롤 위치 수정
  }
  
}

React.DOM.render(<App name = "Mark" />, document.querySelector('#root'))
```

# ✅ 컴포넌트 에러 캐치
* `componentDidCatch`가 생기기 전에는 부분적인 오류 발생시에도 전체가 동작하지 않는 문제가 있었다.
* [에러 바운더리 라이브러리](https://ko.reactjs.org/docs/error-boundaries.html) : 에러 바운더리는 하위에서 발생하는 에러만 처리하므로 최상위에 있어야 한다.
```js
class App etends React.Component{
  state = {
    hasEorror: flase
  }
  render(){
    if(this.state.hasError){
      return <div>예상치 못한 에러가 발생하였습니다.</div>
    }
    return <ourWebService/>
  }
  componentDidCath(error, info){
    this.setState({hasError: true})
  }
}
```
