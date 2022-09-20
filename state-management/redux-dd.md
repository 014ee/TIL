# redux-dd



## ✅ Redux 원리

**헷갈리는 부분**

* 작동 과정 !== 코드 작성 과정 (이걸 자꾸 일치시키려고 하면 헷갈리므로 역할에 집중할 것)
* 상태값이 변경되면 view에 자동으로 적용되는게 아니고, useState와 useEffect를 이용해 직접 설정해줘야함\
  `<h2>{ store.getState() }</h2>` 이런식으로 하면 초기값은 등록되는데, 상태변화에 따른 view 변경 안되므로 아래 과정으로

```js
const [state, setState] = useState(store.getState());
```

```js
useEffect(() => {
  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
    setState(store.getState());
  });
  return () => {
    unsubscribe();
  };
});
```

![리덕스](https://miro.medium.com/max/724/0\*Xr19JdGptaWdGKFe.gif)

**Action 생성 함수**

* 상태를 변화시킬 기본 재료가 담긴 객체을 반환하는 함수
* 선언만 되어 있다가 이벤트가 발생했을 때 dispatch의 인자로 태워져 호출된다.

**Dispatch**

* dispatch(action 생성함수())
* 이벤트, action 생성 함수, reducer의 중간다리
* 이벤트가 발생하면 action 생성함수로부터 action 객체를 받아와 reducer에게 전달해준다.

#### Reducer

* dispatch가 받아온 액션 객체에서 type을 확인한 후, type에 맞춰 상태를 변화시키는 함수
* 보통 switch 문법으로 동작한다.

## ✅ Redux 사용 방법

파일 및 폴더 구성은 [Ducks-Pattern](https://github.com/JisuPark/ducks-modular-redux) 참고

```
npm i redux
```

### Action

`step 1` 오타 방지를 위해 액션 타입을 변수로 정의 (보통 언더바와 대문자 사용)

```js
const ADD_TODO = "ADD_TODO"
```

`step 2` 필요에 따라 액션 생성함수 만들기 (type은 필수 프로퍼티)

```js
function addTodo(todo){
  return {
    type: ADD_TODO,
    todo: todo,
  }
}
```

```js
{type: 'ADD_TODO'} // payload가 없는 액션
{type: 'ADD_TODO', todo: '운동하기'} // payload가 있는 액션
```

### Reducer

`step 3` 리스트 불러오기, 리스트 추가하기 등 관계가 없는 기능들은 쪼개서 별도의 reducer 함수로 생성 (ex. reducer 폴더 > todos파일)

```js
const initialState = [] // 상태 초기값

function todos (state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      return [...state, action.todo]
    default:
      return state
  }
}
```

`step 4` 분리되어 작성된 여러 reducer 함수를 하나로 결합

```js
const reducer = combineReducers({
  todos, 
  filter,
})
```

### Store

`step 5` 전역적으로 사용할 상태관리 store 생성

```js
import {createStore} from 'redux'
import reducer from "./reducer/reducer";

const store = createStore(reducer)
export default store
```

### store 객체 내장 함수

```js
store.getState() // 현재 상태 출력
```

```js
store.dispatch(addTodo('점심먹기')) // action 함수를 인자로 넣어 reducer에게 상태 변경 요청
```

```js
store.subscribe(()=>{ // 스토어 내 상태를 구독하고 있다가 상태 변경을 감지하면 등록된 함수를 호출
 console.log(store.getState())
 setState(store.getState())
})  
```

```js
const unsubscribe = store.subscribe(()=>{ // 구독을 해제하는 함수를 자동 리턴하므로, 변수로 받아 활용할 수 있다.
 console.log(store.getState())
 setState(store.getState())
})  

unsubscribe() // 구독 해제
```
