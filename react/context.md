# ✅ Context
* context 생성
```js
const MyContext = React.createContext(defaultValue)
```

* context provider를 통한 데이터 공급
```
<MyContext.Provider value={전역으로 전달하고자 하는 값}>
// context 안에 위치할 자식 컴포넌트들
</MyContext.Provider>
```

* context provider로 공급한 데이터 사용
```js
import DiaryItem from "./DiaryItem"
const diaryList = useContext(DiaryStateContext)
```
