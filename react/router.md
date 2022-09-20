# Router

## react-router-dom

{% hint style="info" %}
react-router-dom 라이브러를 통해 경로에 따라 컴포넌트가 바뀌는 SPA를 구현할 수 있다.
{% endhint %}

```bash
npm i react-router-dom
```

```javascript
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
   </ Router>
  );
}

export default App;
```

## Link

{% hint style="info" %}
Link 컴포넌트를 이용하여 새로고침 없이 라우트를 이동할 수 있다.
{% endhint %}

```javascript
import {Link} from "react-router-dom"

export default function Profile(){
 return (
   <div>
     <Link to="/">홈으로 이동</Link>
   </div>
 )
}
```

## NavLink

{% hint style="info" %}
Link와의 가장 큰 차이는 active 기능이 있다는 것이다.&#x20;
{% endhint %}

```javascript
import {NavLink} from "react-router-dom"
const activeStyle= {color: 'white'}

export default function TabBar(){
 return (
   <div>
     <NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
     <NavLink to="/profile" activeStyle={activeStyle}>Profile</NavLink>
   </div>
 )
}
```

## useParams

<pre class="language-javascript"><code class="lang-javascript"><strong>import { useParams } from 'react-router-dom'
</strong>
export default function Profile(){
 const {id} = useParams();

 return(
  &#x3C;div>
    &#x3C;h2>Profile 페이지&#x3C;/h2>
    {id &#x26;&#x26; &#x3C;p>id는 {id} 입니다.&#x3C;/p>}
  &#x3C;/div>
 )
}</code></pre>

## useSearchParams

```javascript
import { useSearchParams } from "react-router-dom"

export default function About(props){
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('name')

  return <div>
    <h2>About 페이지</h2>
    {query.name && <p>name은 {query.name}입니다.</p>}
    <button onClick={() => { setSearchParams({who: 'inhwa'}) }}>qs 바꾸기</button>
  </div>
}
```

## useNavigate

{% hint style="info" %}
로그인 페이지처럼 링크 태그를 클릭하지 않아도 의도적으로 경로를 변경해 줘야 할 때 사용할 수 있다.
{% endhint %}

```javascript
import { useNavigate } from "react-router-dom"

export default function Profile(props){
  const navigate = useNavigate();

  return <div>
    <h2>Profile 페이지</h2>
    <button onClick={() => {navigate('/')}}>홈으로 이동</button>
    <button onClick={() => {navigate(-1)}}>뒤로가기</button> 
  </div>
}
```

## Redirect

{% hint style="info" %}
jsx 상에서 렌더가 되면 바로 to에 지정된 경로로 이동
{% endhint %}

```javascript
import {BrowserRouter, Redirect, Route, Routes, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';

const isLogin = false

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' elements={<Home />}>
        <Route path='/login' element={() => isLogin ? <Redirect to="/" /> : <Login />} />
      </Routes>
     </ BrowserRouter>
  );
}

export default App;
```
