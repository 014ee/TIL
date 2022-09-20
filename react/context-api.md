# Context API

## Context API

{% hint style="info" %}
부모 컴포넌트에서 props가 필요한 모든 하위 컴포넌트에 props drilling 없이 직접 데이터를 전달하는 방법을 제공해준다.
{% endhint %}

## Provider

{% hint style="info" %}
데이터를 하위 컴포넌트에 전달할 수 있는 가장 상위 컴포넌트를 프로바이더라고 한다.
{% endhint %}

```javascript
export default const MyContext = React.createContext();

const data = [
  {id:1, name:'Amy', age: 30},
  {id:2, name:'Bob', age: 24},
]

<MyContext.Provider value={data}>
  <App />
</ MyContext.Provider>
```

## Consumer

{% hint style="info" %}
생성한 context로부터 값을 받아 사용하는 컴포넌트를 컨슈머라고 한다.
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript"><strong>export default function Component(){
</strong>  return (
    &#x3C;MyContext.Consumer>
      // ...
    &#x3C;/MyContext.Consumer>
  )
}</code></pre>

```javascript
export default function UserComponent {
  const MyContext = useContext(MyContextProvider)
  
  return (
    <div>
      // ...
    </div>
  )
}
```
