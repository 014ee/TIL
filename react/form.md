# ✅ [Form](https://ko.reactjs.org/docs/forms.html)
`input` `textarea` `select` `등`
* 실시간으로 변경되는 값을 얻어야 하는지, 아닌지에 따라 선택해서 사용
## Controlled Component
* 상태값을 갖는 특성을 지닌 엘리먼트를 반환하는 컴포넌트가 직접 해당 엘리먼트의 상태를 관리할 경우
* `실시간으로` 변하는 값을 얻을 수 있다.
```js
const ControlledComponent = () => {
  const [ value, setValue ] = setStatus('')

  return (
    <div>
      <input value={value} onChange={(e) => {setState(e.target.value)}}/>
      <button onClick={() => {console.log(value)}}>버튼</button>
    </div>
  )
}
```
## Uncontrolled Component
* 레퍼런스라는 api 사용하여 상태값을 갖는 특성을 지닌 엘리먼트를 참조하여 값을 얻어내는 경우 
* `요청했을 때만` 값을 얻어낼 수 있다.
```js
const UncontrolledComponent = () => {

  // 최초로 랜더되었을 때는 {current: null}
  // 최초 랜더 후 재랜더했을 때 값이 들어감 {current: input}
  inputRef = React.createRef() 

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => {console.log(inputRef.current.value)}}>버튼</button>
    </div>
  )
}
```
