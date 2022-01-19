# ✅ [Hooks](https://ko.reactjs.org/docs/hooks-intro.html)
 `2019년 6월 정식 출시 (v16.8)`
* 클래스 컴포넌트에서만 작동하던 기능들을 낚아채듯 가져와서 함수 컴포넌트에서도 사용할 수 있도록 도와주는 내부 라이브러리
* hooks를 이용한 함수 컴포넌트는 클래스 컴포넌트보다 코드가 간결하고 재사용성이 좋다.
* [나만의 Hook](https://ko.reactjs.org/docs/hooks-custom.html)을 만들어서 사용할 수도 있다.

## [useState](https://ko.reactjs.org/docs/hooks-state.html)
* 참고로 setState에 값 대신 함수를 전달하면 함수형 업데이트라고 한다. (최신 state값을 인자를 통해 참조)
```js
const [state: 현재 상태, setState: 상태변화 함수] = useState(초기값: 문자, 숫자 또는 객체 데이터)
````
```js
const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={ () => {setState(state + 1)} }>+</button>
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
* useState의 확장판으로 switch 문법처럼 작동한다. (유데미 강의자료 참고)
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
![리덕스](https://miro.medium.com/max/724/0*Xr19JdGptaWdGKFe.gif)

## [useMemo](https://ko.reactjs.org/docs/hooks-reference.html#usememo) (memoization)
이미 계산해 연산 결과를 기억해두었다가
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
## [useRef](https://ko.reactjs.org/docs/hooks-reference.html#useref)
