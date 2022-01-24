 # ✅ react-router-dom (v5.1)
[리액트 라우터  라이브러리](https://reactrouter.com/)를 통해 경로에 따라 컴포넌트가 바뀌는 SPA를 구현할 수 있다.  
이것은 cra에 기본 내장되어 있지 않으며, facebook의 공식 패키지도 아니지만 가장 대표적인 라우팅 패키지이다.
```bash
npm i react-router-dom
```
```js
import {BrowserRouter, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
     <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/about' component={About} />
     </ BrowserRouter>
  );
}

export default App;
```

 # ✅ 다이나믹 라우팅
 ## Path Variable `:id`
 ```js
import {BrowserRouter, Route} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
     <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route exact path='/profile' component={Profile} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/about' component={About} />
     </ BrowserRouter>
  );
}

export default App;
 ```
### props
 ```js
 export default function Profile(props){
  const id = props.match.params.id
  console.log(id, typeof id) // string
  
  return(
   <div>
     Profile 페이지 입니다.
     {id && <h2>id는 {id} 입니다.</h2>} // id 값이 있을 때만 보임
   </div>
  )
 }
 ```
### useParams
 ```js
import { useParams } from 'react-router-dom'

export default function Profile(){
  const {id} = useParams();
  console.log(id)

  return(
   <div>
     Profile 페이지 입니다.
     {id && <h2>id는 {id} 입니다.</h2>} // id 값이 있을 때만 보임
   </div>
  )
}
```
 ## Query String `?key=value`
* 웹 페이지에 데이터를 전달하는 가장 간단한 방법
* 쿼리스트링이 있든 없든 같은 페이지이므로 따로 라우트 처리를 안해도 된다. (옵셔널한 요소)
### URLSearchParams 
```js
export default function About(props){
  const searchParams = props.location.search
  
  // URLSearchParams 
  // 메서드를 다 기억하고 있어야 하고, 일부 브러우저에서 지원 안함(IE all)
  const obj = new URLSearchParams(searchParams)
  console.log(obj.get('name')) 
  
  return <div>
    <h2>About 페이지 입니다.</h2>
  </div>
}
```
### [query-string](https://www.npmjs.com/package/query-string)
```
npm i query-string
import queryString from 'query-string'
```
```js
import queryString from 'query-string'

export default function About(props){
  const searchParams = props.location.search
  
  // query-string
  // URLSearchParams의 두가지 문제를 해결
  const query = queryString.parse(searchParams)

  return <div>
    <h2>About 페이지 입니다.</h2>
    {query.name && <p>name은 {query.name}입니다.</p>}
  </div>
}
```
### useSearchParams
```js
import { useSearchParams } from "react-router-dom"

export default function About(props){
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('name')

  return <div>
    <h2>About 페이지 입니다.</h2>
    {query.name && <p>name은 {query.name}입니다.</p>}
    <button onClick={() => { setSearchParams({who: 'inhwa'}) }}>qs 바꾸기</button> // querystring을 바꿀 수도 있다.
  </div>
}
```
## Page Moving
### useNavigate
* 링크 태그를 클릭하지 않아도 의도적으로 경로를 바꿔야 할 때 사용 (ex. 로그인)
```js
import { useNavigate } from "react-router-dom"

export default function About(props){
  const navigate = useNavigate();

  return <div>
    <h2>About 페이지 입니다.</h2>
    <button onClick={() => {navigate('/home')}}>이동</button> // home으로 이동
  </div>
}
```
 # ✅ Switch와 NotFound
 ## Switch
 * `Switch`는 라우트가 입력된 순서대로 필터링하며 경로에 알맞은 컴포넌트 하나만 보여준다. (switch문과 유사)
 * 때문에 순서만 맞추면 exact를 쓰지 않고도 원하는대로 페이지 표현이 가능하다.
 * 이를 이용해 어느 path에도 맞지 않으면 not found 컴포넌트가 보여지도록 할 수 있다.
 ```js
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

function App() {
  return (
     <BrowserRouter>
      <Switch>
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} /> // 최상위 루트는 모든 경로를 포함하고 있으므로 exact를 넣어줘야 한다.
        <Route component={NotFound} /> // 경로를 찾지 못하면 나오는 컴포넌트
      </Switch>
     </ BrowserRouter>
  );
}

export default App;
 ```
 
 # ✅ Link
 * 링크 연결시 기존 a태그를 이용하면 새로고침 후 다시 랜더
 * Link 컴포넌트를 이용하여 새로고침 없이 라우트를 이동할 수 있다.
 ```js
import {Link} from "react-router-dom"

export default function Links(){
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/profile/1">Profile/1</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/about?name=mark">About?name=mark</Link></li>
    </ul>
  )
}
 ```
# ✅ NavLink
* Link와의 가장 큰 차이는 active 기능 (링크에 설정된 경로와, 현재 브라우저 경로가 매칭되었을 때 상태를 처리해주는 것)  
* 라우트의 path처럼 포함관계로 동작하기 때문에 exact가 동작한다.
 ```js
 import {NavLink} from "react-router-dom"
const activeStyle= {color: 'green'}

export default function NavLinks(){
  return (
    <ul>
      <li><NavLink to="/" exact activeStyle={activeStyle} >Home</NavLink></li>
      <li><NavLink to="/profile" exact activeStyle={activeStyle}>Profile</NavLink></li>
      <li><NavLink to="/profile/1" activeStyle={activeStyle}>Profile/1</NavLink></li>
      <li><NavLink to="/about" exact activeStyle={activeStyle} isActive={(match, location) => {
          return  match !== null && location.search === '';
          console.log(match)
        }}>About</NavLink></li>
      <li><NavLink to="/about?name=mark" activeStyle={activeStyle} isActive={(match, location) => {
        return match !== null && location.search === '?name=mark'
        console.log(match)
      }}>About?name=mark</NavLink></li>
    </ul>
  )
}
 ```
# ✅ js로 라우팅 이동하기 withRouter
```js
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Links from './components/Links';
import NavLinks from './components/NavLinks';

function App() {
  return (
     <BrowserRouter>
      <Links/>
      <NavLinks/>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
       </Switch>
     </ BrowserRouter>
  );
}

export default App;
```
### 방법1
* 로그인 페이지 하위에 여러 섹션 컴포넌트가 있고, 거기에 button이 있을 경우 하나하나 props를 전달해줘야 하고,  
이 과정에서 실수할 확률 높아짐
```js
export default function Login(props){
  function login(){
    setTimeout(() => {
      // 페이지 이동 로직
      props.history.push('/')
    }, 1000)
  }

  return (<div>
    <h2>Login 페이지 입니다.</h2>
    <button onClick={login}>로그인하기</button>
  </div>
  )
}
```
### 방법2
* button 컴포넌트 분리 후 react-router-dom에서 제공하는 `withRouter`라는 함수 사용
```js
import LoginButton from '../components/LoginButton'
export default function Login(){

  return (<div>
    <h2>Login 페이지 입니다.</h2>
    <LoginButton />
  </div>
  )
}
```
```js
import { withRouter } from 'react-router-dom'
export default withRouter(function LoginButton(props){
  function login(){
    setTimeout(() => {
      props.history.push('/')
    }, 1000)
  }

  return <button onClick={login}>로그인하기</button>
})
```

# ✅ Redirect
* `<redirect to="/경로">` jsx 상에서 랜더가 되면 바로 to에 지정된 경로로 이동
 
```js
import {BrowserRouter, Redirect, Route, Switch, Link} from 'react-router-dom'
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Links from './components/Links';
import NavLinks from './components/NavLinks';

const isLogin = false


function App() {
  return (
     <BrowserRouter>
      <Links/>
      <NavLinks/>
      <Switch>
        <Route path='/login' render={() => isLogin ? <Redirect to="/" /> : <Login />} />
        <Route path='/profile/:id' component={Profile} />
        <Route path='/profile' component={Profile} />
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
       </Switch>
     </ BrowserRouter>
  );
}

export default App;
```
