# ✅ Hooks
* 클래스형 컴포넌트에서만 작동하던 기능들을 낚아채듯 가져와서 함수형 컴포넌트에서도 사용할 수 있도록 도와주는 것 
* hooks를 이용해 만든 함수형 컴포넌트는 기존 클래스형 컴포넌트보다 코드 중복이 적고 코드를 간결하게 작성할 수 있어 가독성이 좋다.
* `use` 키워드가 앞에 붙는다. (useState, useEffect, useRef, useContext 등.. )
* `2019년 6월 정식 출시`
* `set~` 에는 값이 아닌 함수를 전달해도 된다. (함수형 업데이트라고 함) > 항상 최신의 state를 인자를 통해 참조

## useState


## useEffect
* 함수형에서 라이프사이클을 이용하기 위해서 useEffect라는 키워드가 필요하다. 
```js
useEffect(콜백함수, 뎁스: 의존성 배열) // 의존성 배열 내에 들어있는 값이 하나라도 변화하면 콜백 함수가 다시 실행된다.
//빈배열이 들어가면 컴포넌트가 최초 마운트된 시점에만 작동
```


## useMemo (memoization)
이미 계산해 본 연산 결과를 기억해두었다가
동일한 계산을 해야할 때, 다시 연산하지 않고 기억해두었던 데이터를 반환하는 방법
(유용하긴 한데, 메모리를 계속 차지하고 있으므로 적절한 때에만 사용해야 한다.)
또한 함수가 아니라 값을 반환하는 점도 주의!
```js
useMemo(콜백함수, 뎁스: 의존성 배열) // 콜백함수가 리턴하는 값을 최적화할 수 있게 도와줌 / 의존성 배열 내에 들어있는 값이 변해야만 함수가 다시 실행된다. (연산 최적화)
```

### React.memo : 고차 컴포넌트(성능 최적화)
부모의 state가 바뀜으로써 굳이 바뀌지 않아도 되는 자식 컴포넌트까지 재랜더되는 것을 막아줌
즉, 랜더딩 되는 조건을 달아, 조건에 맞지 않으면 부모 state가 바뀌어도 해당 컴포넌트는 재랜더되지 않음
```js
const Mycomponent = React.memo(function Mycomponent(props){

})
const props가 변하지 않으면 리랜더링 하지 않는 강화된 컴포넌트 = React.memo(function 나의 컴포넌트(props){

})
```

## useCallback
```js
useCalback(콜백함수, 뎁스: 의존성 배열) // 의존성 배열 내 값이 변화하지 않으면, memoization된 콜백함수를 계속 재사용할 수 있도록 반환 (useMemo는 값을 반환!)
```

## useReducer
유데미 강의자료 참고!!
```js
const Counter = () => {
const [count, dispatch] =  useReducer(reducer, 1:기본값)
return (<div>{count} <button onClick = {()=>dispatch({type:10}) }>add 10</div>)
}
```
useState를 대체할 수 있는 기능으로,
컴포넌트 내 복잡하고 긴 상태변화 로직을 컴포넌트 밖으로 분리해 가볍게 작성할 수 있도록 도와줌
(스위치 케이스 문법처럼 작동)
- type: 액션 객체(상태변화를 설명할 객체)
- dispatch가 호출되면 상태변화가 일어나야 하고, 상태변화는 reducer함수가 실행한다.

# ✅ Controlled, Uncontrolled
## controlled component
* 상태를 가지고 있는 엘리먼트(input, textarea, select)를 반환하는 있는 컴포넌트가 해당 엘리먼트의 상태를 관리 
```js
const ControlledComponent = () => {
  const [ value, setValue ] = setStatus('')

  return (
    <div>
      <input value={value} onChange={(e) => {setState(e.target.value)}}/>
      <button onClick={() => {console.log(input.value)}}>버튼</button>
    </div>
  )
}
```
## uncontrolled component
* 레퍼런스라는 api 사용
* 엘리먼트를 참조만 하고 컴포넌트가 소유하면 
* 참조한 값은 변경될 때 마다 추척하는 것이 아니라, 필요할 때만 변경된 값을 요청할 수 있다. (실시간으로 변경되는 값의 상태를 알아야 할 때는 부적절)
```js
const UncontrolledComponent = () => {
  const [ value, setValue ] = setStatus('')
  inputRef = React.createRef() // 최초 랜더되었을 때는 null값, 최초 랜더 이후에 값이 들어감

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => {console.log(inputRef.current.value)}}>버튼</button>
    </div>
  )
}
```
