# ✅ [Hooks](https://ko.reactjs.org/docs/hooks-intro.html)
 `2019년 6월 정식 출시 (v16.8)`
* 클래스 컴포넌트에서만 작동하던 기능들을 낚아채듯 가져와서 함수 컴포넌트에서도 사용할 수 있도록 도와주는 내부 라이브러리
* hooks를 이용한 함수 컴포넌트는 클래스 컴포넌트보다 코드가 간결하고 재사용성이 좋다.
* [나만의 Hook](https://ko.reactjs.org/docs/hooks-custom.html)을 만들어서 사용할 수도 있다.

## [useState](https://ko.reactjs.org/docs/hooks-state.html)
* setState는 shouldComponentUpdate를 트리거하여 상태를 비교한 후 변화되었으면 재랜더를 요청한다.
* 때문에 react가 state를 직접 비교하고 변경할 수 있도록 state는 immutable해야한다. (직접 변경하면 안되고 비교대상을 만들어야 함)
* 또한 비동기로 동작한다. 즉 동일한 상태를 연속적으로 업데이트 하는 경우, 동기로 처리되지 않고 일괄처리하여 한번만 실행된다.
* setState에 값이 아닌 함수를 넣으면 각각 실행시킬 수 있고 이를 함수형 업데이트라고 한다.  
* 비동기 동작으로 인해 함수가 여러 개면 큐에 저장되어 있다가 최신 state값을 인자로 받으며 순차적으로 실행된다. (deps 생략 가능)
```js
const [state: 현재 상태, setState: 상태변화 함수] = useState(초기값: 문자, 숫자 또는 객체 데이터)
````
```js
const Counter = () => {
  const [count, setCount] = useState(0)
  
  const increase = () => {
   setState(count + 1) // count: 1
   setState(count + 4) // 위 값을 모두 덮어 씌우고 마지막 값만 적용 > count: 4
  }
  
  const increase = () => {
   setState(count => count + 1) // count: 1
   setState(count => count + 1) // 큐에 저장되어 있다가 변경된 count 값을 가지고 동작 > count: 2
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    <div>
  )
}
```
## [useEffect](https://rinae.dev/posts/a-complete-guide-to-useeffect-ko)
* useEffect를 통해 함수형 컴포넌트에서도 라이프사이클을 이용할 수 있다. 
```js
useEffect(콜백함수, []) // 컴포넌트가 최초 마운트된 시점에만 실행
```
```js
useEffect(콜백함수, [뎁스: 의존성 배열]) // 의존성 배열 내 값이 바뀔 때 마다 실행
```
```js
useEffect(콜백함수) // 리랜더가 발생할 때마다 실행
```
```js
useEffect(() => {return 클린업 함수}, []) // 클린업 함수는 unmount 바로 직전 실행 (다음 mount에서 활용 가능)
```
```js
export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const plus = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(plus);
    };
  }, []);

  return <div>{count}</div>;
};
```
## [useReducer](https://ko.reactjs.org/docs/hooks-reference.html#usereducer)
* useState의 확장판으로 여러 상태 관리가 가능하며, switch 문법처럼 작동한다. (유데미 강의자료 참고)
* 컴포넌트 내 복잡한 상태변화 로직을 컴포넌트 밖으로 분리해 쉽게 활용할 수 있다. `redux: store`
* dispatch가 호출되면 상태변화가 일어나야 하고, 상태변화는 reducer함수가 실행한다.
* action은 객체 형태이며, 필수 프로퍼티로 type(상태변화 설명)을 가진다.
```js
const [state: 현재 상태, dispatch: 상태변화 함수] =  useReducer(reducer: 함수, 초기값: 문자, 숫자, 객체)
```
```js
const [state, dispatch] =  useReducer(reducer, {count:0})
```
```js
const reducer = (state, action) => {
 if(action.type === 'PLUS'){
  return {
   count: state.count + 1
  }
 }
 return state
}
```
```js
function click(){
 dispatch( {type: 'PLUS',} )
}
```

# ✅ 상태유지 Hooks
## [useMemo](https://ko.reactjs.org/docs/hooks-reference.html#usememo) (memoization)
* 이미 계산해본 연산 결과를 기억해두었다가, 동일한 계산을 해야할 때 다시 연산하지 않고 `기억해둔 값를 반환` (함수반환 X)
* 유용하긴 한데, `메모리를 계속 차지`하고 있으므로 적절한 때에만 사용해야 한다.
* 의존성 배열 내 값이 변해야만 콜백함수가 실행되도록 하여 불필요한 랜더를 막고 성능을 최적화시켜준다.
```js
useMemo(콜백함수, [뎁스: 의존성 배열])
```
### React.memo : 고차 컴포넌트(성능 최적화)
* 부모의 state가 바뀌더라도 해당 컴포넌트의 props가 변하지 않으면 재랜더링을 하지 않도록 조건을 달아 성능을 최적화시켜준다.
* 최적화하지 않을 컴포넌트에서의 React.memo 사용은 불필요하게 props 비교만 하는 것이기 때문에
실제로 랜더링 최적화가 가능한 상황에서만 사용할 것
```js
const MyNewComponent = React.memo(function MyComponent(props){...})
```

## [useCallback](https://ko.reactjs.org/docs/hooks-reference.html#usecallback) (memoization)
* useMemo가 특정 결과값을 재사용 할 때 사용된다면, useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
* 함수 안에서 사용하는 상태 혹은 props가 있다면 꼭, 의존성 배열안에 포함시켜야 된다. (안 넣으면 최신값 보장 x)
* 의존성 배열 내 값이 변하지 않으면, `memoization된 콜백함수를 반환` (값반환 X)
```js
useCalback(콜백함수, [뎁스: 의존성 배열])
```
## [useRef](https://ko.reactjs.org/docs/hooks-reference.html#useref)
* 윈도우 넓이, 엘리먼트 높이, 스크롤바 위치, 인풋 포커스 설정 등 실제 Dom에 접근해야 하는 경우 useRef를 사용한다.
* useRef()로 ref 객체를 만들고, Dom에 연결하면 해당 Dom의 .current 값을 얻을 수 있다.
* useRef()의 파라미터로 넣은 값은 재랜더링 없이 실시간으로 조회 및 수정이 가능하다. (id 생성 등에 활용)
* useRef는 처음 레퍼런스를 만든 후 새로 랜더되도 레퍼런스를 유지한다.
```js
const inputRef = useRef();

<input ref={ inputRef } /> // 최초 랜더시 {current: undefined}, 업데이트 후 {current: input}
```
* 반면 createRef는 랜더 될 때마다 새롭게 레퍼런스를 생성한다.
```js
const inputRef = createRef();

<input ref={ inputRef } /> // 최초 랜더시 {current: null}, 업데이트 후 {current: null}
```
# ✅ [React-router Hooks](https://v5.reactrouter.com/web/api/Hooks)
## useHistory()
* props를 거치지 않고 바로 가져와서 사용할 수 있음

## useParams()
* ??
