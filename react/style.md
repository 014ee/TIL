# ✅ css, scss
* 스타일이 전역적으로 오염되지 않도록 주의해야 한다.
```
import './App.css'
import './App.scss'
```
* scss 사용시 scss 확장자를 css 확장자로 컴파일해주는 모듈을 설치해야한다. 
```bash
npm i sass
```
# ✅ css module, sass module
* 작성한 코드로 인해 다른 영역의 스타일이 오염되지 않도록 hash처리 및 변환시킨 후 header에 style 태그 추가
* `import`한 스타일 객체가 변경된 클래스 네임을 매칭 
```js
App: "App_App__c8gNs" //파일명_클래스명_해쉬
```
```js
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
      </header>
    </div>
  );
}

export default App;
```
## 클릭했을 때 스타일 변경할 경우
```js
import React from "react"
import styles from './Button.module.css'

// 이벤트에 바인딩되는 함수는 화살표 함수를 사용해야 그 안에서 this 사용 가능
class Button extends React.Component {
  state = {
    loading: false
  }
  render(){
    return <button
    onClick={this.startLoading}
    className = {this.state.loading ? `${styles.button} ${styles.loading}` : styles.button}
    {...this.props} />
  }
  startLoading = () => {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1000)
  }
}

export default Button;
```
* 위 방법은 복잡하므로 classnames라는 라이브러리 사용
* falsy한 값의 classname은 출력하지 않는다.
```
npm i classnames
```
```js
import React from "react"
import styles from './Button.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)
console.log(cx('button', 'loading'))

// 이벤트에 바인딩되는 함수는 화살표 함수를 사용해야 그 안에서 this 사용 가능
class Button extends React.Component {
  state = {
    loading: false
  }
  render(){
    const {loading} = this.state
    
    return <button
    onClick={this.startLoading}
    className = {cx('button', {loading})}
    {...this.props} />
  }
  
  startLoading = () => {
    this.setState({
      loading: true,
    })
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 1000)
  }
}

export default Button;
```
# ✅ Styled Components
* 
```js
npm i styled-components
```
```js
import styled, {css} from 'styled-components'

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  ${props =>
    props.primary &&
    css `palevioletred
  `};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-size: 20px;
`;

export default StyledButton;
```
기존 컴포넌트를 스타일 변경해서 쓰고 싶을 때
```
const newSyledButton = styled(StyledButton)`
  background: blue
`
```
기존 컴포넌트의 태그를 변경하거나 다른 컴포넌트로 덮어쓰고 싶을 때
```
<StyledButton as="a" href="/">버튼</StyledButton>
<StyledButton as={newStyledButton}>버튼</StyledButton>
```
