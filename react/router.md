 # ✅ react-router-dom (v5.1)
[리액트 라우터  라이브러리](https://reactrouter.com/)를 통해 경로에 따라 컴포넌트가 바뀌는 SPA를 구현할 수 있다.  
이것은 cra에 기본 내장되어 있지 않으며, facebook의 공식 패키지도 아니지만 가장 대표적인 라우팅 패키지이다.
```bash
npx create-react-app 파일명
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
 ## :id
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
 ```js
 export default function Profile(props){
  const id = props.match.params.id
  console.log(id, typeof id) // string
  return <div>
    Profile 페이지 입니다.
    {id && <h2>id는 {id} 입니다.</h2>} // id 값이 있을 때만 보임
  </div>
 }
 ```
 
 ## ?key=value
* 쿼리스트링 형식은 있든 없든 같은 페이지이므로 따로 라우트 처리를 안해도 됨 (옵셔널한 요소)
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
