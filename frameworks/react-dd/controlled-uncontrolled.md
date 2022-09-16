# Controlled Uncontrolled

## Controlled

{% hint style="info" %}
컴포넌트가 엘리먼트의 상태를 실시간으로 관리하는 경우에 controlled component 방식을 사용한다. (ex. 회원가입 폼 작성시 유효성 검사)
{% endhint %}

```javascript
export default function MyComponent() {
  const [value, setValue] = useState('');
  const handleChange = (e) => setValue(e.target.value);
  
  return (
    <div>
      <input value={value} onChange={handleChange}/>
      <p>{value}</p>
    </div>
  )

} 
```

## Uncontrolled

{% hint style="info" %}
컴포넌트가 엘리먼트의 상태는 관리하지 않고 참조만 하는 경우 useRef를 통한 uncontrolled component 방식을 사용한다.  (ex. 마우스 오버시 메뉴 열림)
{% endhint %}

```javascript
export default function MyComponent() {
  const inputRef = React.createRef();
  
  return (
    <div>
      <input ref={inputRef} />
      <p>{inputRef.current.value}</p>
    </div>
  )
} 
```
