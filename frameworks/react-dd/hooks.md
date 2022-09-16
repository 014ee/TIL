# Hooks

## Hooks

{% hint style="info" %}
클래스 컴포넌트에서만 작동하던 기능들을 낚아채듯 가져와서 함수 컴포넌트에서도 사용할 수 있도록 도와주는 내부 라이브러리이다. hooks를 이용하여 상태와 관련된 로직을 재사용할 수 있다.
{% endhint %}

## useState

{% hint style="info" %}
setState는 shouldComponentUpdate를 트리거하여 상태를 비교한 후 변화되었으면 재랜더를 요청한다. 때문에 react가 state를 직접 비교하고 변경할 수 있도록 state는 immutable해야한다.

또한 비동기로 동작하므로 동일한 상태를 연속적으로 업데이트 하는 경우, 동기로 처리되지 않고 일괄처리하여 한번만 실행된다. setState에 값이 아닌 함수를 넣으면 각각 실행시킬 수 있고 이를 함수형 업데이트라고 한다. 비동기 동작으로 인해 함수가 여러 개면 큐에 저장되어 있다가 최신 state값을 인자로 받으며 순차적으로 실행된다.
{% endhint %}

```javascript
const [상, 상태변화 함수] = useState(초기값);
```

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);
  
  const increase = () => {
   setState(count + 1) // count: 1
   setState(count + 4) // count: 4
  }
  
  const increase = () => {
   setState(count => count + 1) // count: 1
   setState(count => count + 1) // count: 2
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={increase}>+</button>
    <div>
  )
}
```

## useEffect

{% hint style="info" %}
useEffect를 통해 함수형 컴포넌트에서도 라이프사이클을 이용할 수 있다.&#x20;
{% endhint %}

```javascript
useEffect(콜백함수, [])                   // 최초 마운트된 시점에만 실행
```

```javascript
useEffect(콜백함수, [뎁스: 의존성 배열])    // 의존성 배열 내 값이 바뀔 때 마다 실행
```

```javascript
useEffect(콜백함수)                       // 리더가 발생할 때마다 실행
```

```javascript
useEffect(() => {return 클린업 함수}, []) // unmount 바로 직전 실행
```

```javascript
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

## useReducer

{% hint style="info" %}
useState의 확장판으로 여러 상태 관리가 가능하며, dispatch 함수에 넣은 액션 타입에 따라 reducer 함수 안에서 switch 문법으로 어떤 방식으로 상태를 변화시킬지 분기처리 할 수 있다. 컴포넌트 내 복잡한 상태변화 로직을 컴포넌트 밖으로 분리해 쉽게 활용할 수 있다는 장점이 있다.
{% endhint %}

```javascript
const [상태, 상태변화 함수] =  useReducer(리듀, 초기값)
```

```javascript
const reducer = (state, action) => {
  switch(action.type){
    case 'PLUS': 
      return {...state, count: state.count + 1}
    case 'MINUS': 
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}

export default function MyComponent() {
  const [state, dispatch] =  useReducer(reducer, { count: 0 });

  return (
    <div>
      <h2>{state.count}</h2>
      <button onClick={() => dispatch({type: 'PLUS'})}>+</button>
      <button onClick={() => dispatch({type: 'MINUS'})}>-</button>
    </div>
  )
} 
```

## useMemo (값을 저장)

{% hint style="info" %}
이미 계산해본 연산 결과를 기억해두었다가, 동일한 계산을 해야할 때 다시 연산하지 않고 기억해둔 값를 반환한다.  유용하긴 한데, 메모리를 계속 차지하고 있으므로 적절한 때에만 사용해야 한다. 의존성 배열 내 값이 변해야만 콜백함수가 실행되도록 하여 불필요한 랜더를 막고 성능을 최적화시킬 수 다.
{% endhint %}

```javascript
useMemo(콜백함수, [뎁스: 의존성 배열])
```

## useCallback (함수를 저장)

{% hint style="info" %}
useMemo가 특정 결과값을 재사용 할 때 사용된다면, useCallback은 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용한다. 사용 함수 안에서 사용하는 상태 혹은 props가 있다면 최신값을 보장받기 위해 꼭, 의존성 배열안에 포함시켜야 된다.
{% endhint %}

```javascript
useCalback(콜백함수, [뎁스: 의존성 배열])
```

## React.memo (리랜더 방지)

{% hint style="info" %}
부모의 상태가 바뀌면 자식 컴포넌트도 전부 리랜더 된다. 부모로부터 props로 전달받는 상태가 없어 자식 컨포넌트를 리랜더 하지 않아도 될 경우 React.memo로 감싸 최적화시킬 수 있다. 최적화하지 않을 컴포넌트에서의 React.memo 사용은 불필요하게 props 비교만 하는 것이기 때문에 실제로 랜더링 최적화가 가능한 상황에서만 사용해야 한다.
{% endhint %}

```javascript
// ...
export default React.memo(ChildComponent);
```

## useRef

{% hint style="info" %}
실제 Dom에 접근해야 하는 경우 useRef를 사용한다. useRef()의 파라미터로 넣은 값은 재랜더링 없이 실시간으로 조회 및 수정이 가능하다.  useRef는 처음 레퍼런스를 만든 후 새로 랜더되도 레퍼런스 값을 유지하고 있다는 특징이 다.
{% endhint %}

```javascript
const inputRef = useRef();
<input ref={inputRef} />    // 최초 랜더시에만 null 이후 리랜더가 일어나도 값 유
```

## createRef

{% hint style="info" %}
useRef와 유사하지만 createRef는 랜더 될 때마다 새롭게 레퍼런스를 생성한다는 차이가 다.
{% endhint %}

```javascript
const inputRef = createRef();
<input ref={inputRef} />    // 랜더 될 때마다 다시 레퍼런스 생
```
