# ✅ Redux

![리덕스](https://miro.medium.com/max/724/0*Xr19JdGptaWdGKFe.gif)

```
npm i redux
```
# ✅ Action
`step 1` 추후 오타 방지를 위해서 사용할 액션 타입을 변수로 정의 (보통 언더바와 대문자 사용)
```js
const ADD_TODO = "ADD_TODO"
```
`step 2` 액션 객체를 리턴하는 액션 생성함수 만들기 (type은 필수 프로퍼티)
```js
function addTodo(todo){
  return {
    type: ADD_TODO,
    todo,
  }
}
```
```js
{type: 'ADD_TODO'} // payload가 없는 액션
{type: 'ADD_TODO', todo: '운동하기'} // payload가 있는 액션
```

# ✅ Reducer
`step 3` 상태가 없을 경우를 대비해서 초기값을 먼저 설정
```js
const initialState = []
```
`step 4` 현재 상태과 액션 객체를 받아 상태를 변경시킨 후, 변경된 상태값을 반환해주는 reducer 함수 생성  
```js
import { ADD_TODO } from "./actions";

function reducer (state = initialState, action){
  if(action.type === ADD_TODO){
    return [...state, action.todo]
  }
  return state
}
```

# ✅ createStore
`step 5` redux를 이용해 createStore 함수의 인자로 reducer 함수를 넣어 store 생성
```js
import {createStore} from 'redux'

const store = createStore(reducer)
export default store
```
자주 사용하는 store 객체 내장 함수
```js
store.getState() // 현재 상태 출력 ex.[]
```
```js
store.dispatch(addTodo('점심먹기')) // action 함수를 인자로 넣어 상태를 변경시킴
```
```js
store.subscribe(()=>{ // 스토어 내 상태를 구독하고 있다가 상태 변경을 감지하면 등록된 함수를 호출 시킴
 console.log(store.getState())
})  
```
```js
const unsubscribe = store.subscribe(()=>{ // 구독을 해제하는 함수를 자동 리턴하므로, 변수로 받아 활용할 수 있다.
 console.log(store.getState())
})  
unsubscribe() // 구독 해제
```
