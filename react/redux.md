# ✅ Redux
```
npm i redux
```

# ✅ Action
* 액션 생성자를 통해 만들어진 액션 객체는 리덕스 스토어에 보내진다.
* 리덕스 스토어가 액션 객체를 받으면 스토어의 상태 값이 변경된다.
* 변경된 상태 값에 의해 상태를 이용하고 있던 컴포넌트가 변경된다.

## step 1 액션의 타입을 변수로 정의하는 단계 (선택)
* Action 객체에서 type만이 필수 프로퍼티이며, type은 문자열이다.
* 변수로 정의하지 않으면 그냥 문자열로 존재한다.
```js
export const ADD_TODO = 'ADD_TODO'
```
## step 2 액션 객체를 만들어내는 함수를 만드는 단계
* 액션 생성자 함수로 액션을 생성해서, 액션 객체를 리턴해준다.
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
{type: 'ADD_TODO', todo: 'todo'} // payload가 있는 액션
```

# ✅ Reducers
* action을 전달받아 변경된 state를 리턴해준다.
* 변경된 상태를 비교하고 처리하기 위해, 인자로 들어오는 previousState와 리턴되는 newState는 다른 곳을 참조(다른 객체)해야한다.
```js
function 리듀서(previousState, action) {
  return newState
}
```
```js
import { ADD_TODO } from "./actions";

const initialState = [] // 초기값 설정

export function todoApp (previousState = initialState, action){

  if (action.type === ADD_TODO){
    return [...previousState, action.todo]
  }

  return previousState;
}
```

# ✅ createStore
스토어를 만드는 함수
```js
const store = createStore(리듀서)
```
```js
import {createStore} from 'redux'
import {todoApp} from './reducers'

const store = createStore(todoApp)

export default store;
```
