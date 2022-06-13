# life-cycle

## ✅ 클래스 라이프사이클

* 컴포넌트가 브라우저 어딘가에 그려지는 순간부터 사라지는 순간까지
* 선언적 성질: 각 라이프사이클 단계를 함수로 선언하여 실행시킬 수 있다.
* 이를 통해 불필요한 재랜더를 방지하고 성능을 최적화시킬 수 있다.

## ✅ v16.3 이전 라이프사이클

|   Initialization   |      Mounting      |      Updating - Props     |   Updating - States   |      Unmounting      |
| :----------------: | :----------------: | :-----------------------: | :-------------------: | :------------------: |
| setup props, state |  compnentWillMount | componentWillReceivePorps |           -           | componentWillUnmount |
|          -         |       render       |   shouldComponentUpdate   | shouldComponentUpdate |           -          |
|          -         | componentDidMouont |    componentWillUpdate    |  componentWillUpdate  |           -          |
|          -         |          -         |           render          |         render        |           -          |
|          -         |          -         |     componentDidUpdate    |   componentDidUpdate  |           -          |

### 마운트

`constructor` `componentWillMount` `render` `componentDidMount`

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
    console.log('최초 랜더 실행!') // 3번째로 출력
    return(
      <div>
        <h2>Hello {this.props.name} - {this.props.age}</h2>
      </div>
    )
  }
  
  componentWillMount(){ 
    console.log('최초 랜더 전 실행!') // 2번째로 출력
  }
  
  componentDidMount(){
    console.log('최초 랜더 후 실행!') // 4번째로 출력
    setInterval(() => {
      console.log('setInterval') // 최초 랜더 후 state가 1초마다 바뀌므로, 1초마다 '최초 랜더 실행!' 출력
      this.setInterval(state => ({...state, age: state.age + 1})) 
    }, 1000)
  }
}
```

### 업데이트

`componentWillReceiveProps`

* props를 새로 지정했을 때만 호출 (state의 변경에는 반응 X)
* shouldComponentUpdate로의 이동은 props와 state에서 각각 별도로 하는게 아니라 기다렸다가 한번에 이동된다.
* props의 값에 따라 state를 변경해야 한다면, setState를 이용한다.

`shouldComponentUpdate`

* 리턴타입은 boolean으로, true면 render 호출, false면 render을 호출하지 않는다. (기본값은 true/성능 최적화)
* props나 state 중 하나만 변경되도 실행된다.
* newProps와 newState를 인자로 호출한다.

`componentWillUpdate`

* 컴포넌트가 재랜더링 되기 직전에 불린다.
* 여기서는 setState를 사용하면 안된다.

`render`

* 업데이트 후 재랜더링된다.

`componentDidUpdate`

* 컴포넌트가 재랜더링을 마치면 불린다.

```js
class App extends React.Component {
 // 생략..
  
  componentWillReceiveProps(nextProps){
    console.log('componentWillReceiveProps', nextProps)
  }
  
  shouldComponentUpdate(nextProps, nextState){ 
    console.log('shouldComponentUpdate', nextProps, nextState)
    return true // true or false로 반환 (값에 따라 랜더 여부 결정)
  }
  
  componentWillUpdate(nextProps, nextState){ 
    console.log('componentWillUpdate', nextProps, nextState)
  }
  
  componentDidUpdate(prevProps, prevState){ 
    console.log('componentDidUpdate', prevProps, prevState)
  }
}
```

### 언마운트

`componentWillUnmount`

* 실제로 unmount 된 후에는 실행을 할 수 없으므로, 종료 직전을 뜻하는 willUnmount가 있다.
* 컴포넌트가 사용하고 있던 메모리 정리, 응답 요청한 API 연결 끊기 등으로 성능을 개선시켜준다.

```js
class App extends React.Component {
 // 생략..
 
  componentWillUnmouont(){ // 해당 컴포넌트가 사라지기 직전에 실행
    clearInterval(this.interval) // componentDidMount 에서 설정한 setInterval 종료처리
  }
}
```

## ✅ v16.3 이후 라이프사이클

|          v16.3이전         |  vs |          v16.3이후         |
| :----------------------: | :-: | :----------------------: |
|    componentWillMount    |  != | getDerivedStateFromProps |
| componentWillReviceProps |  != | getDerivedStateFromProps |
|    componentWillUpdate   |  != |  getSnapshotBeforeUpdate |

```js
class App extends React.Component {
  // 생략..
  
  // 보통 시간의 흐름에 따라 변하는 props에 state가 의존하는 특수한 상황에 쓰임
  static getDerivedStateFromProps(nextProps, prevState){ 
    console.log('getDerivedStateFromProps', nextProps, prevState)
    return { // 리턴값이 없으면 에러 발생하므로 리턴 없을 경우 null로 지정
      age: 390, // nextProps가 들어 왔을 때 state가 입력한 것과 같이 바뀜
    } 
  }
}
```

```js
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
```

## ✅ 컴포넌트 에러 캐치

* `componentDidCatch`가 생기기 전에는 부분적인 오류만으로도 전체가 동작하지 않는 문제가 있었다.
* [에러 바운더리 라이브러리](https://ko.reactjs.org/docs/error-boundaries.html) : 하위에서 발생하는 에러만 처리하므로 최상위에 있어야 한다.

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
