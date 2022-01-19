# ✅ [Context](https://ko.reactjs.org/docs/context.html)
* 부모 컴포넌트에서 props가 필요한 모든 하위 컴포넌트에 직접 데이터를 전달하는 방법
* 특정 컴포넌트에 props를 전달하기 위해 props가 불필요한 컴포넌트도 거쳐가야 하는 번거로움을 해결해줌
## Provider (데이터 Set)
* 데이터를 하위 컴포넌트에 전달할 수 있는 가장 상위 컴포넌트를 프로바이더라고 한다.
```js
export default const MyContext = React.createContext();
```
```js
const data = [
  {id:1, name:'Amy', age: 30},
  {id:2, name:'Bob', age: 24},
]

<MyContext.Provider value={data}>
  <App />
</MyContext.Provider>
```
## Consumer (데이터 Get)
* Consumer
```js
<MyContext.Consumer>
  {date => <ul>{data.map(???)}</ul>}
</MyContext.Consumer>
```
* this.context
*
* useContext
```js
import DiaryItem from "./DiaryItem"
const diaryList = useContext(DiaryStateContext)
```


```js
const MyContext = React.createContext(defaultValue)
```
