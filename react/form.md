# ✅ [From](https://ko.reactjs.org/docs/forms.html)
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
