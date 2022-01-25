# ✅ css, scss
* 전역적으로 오염되지 않도록 주의해야 한다.
* scss 사용시 scss를 css 확장자로 컴파일해주는 모듈을 설치해야 한다.
```js
import './App.css'
import './App.scss'
```
```bash
npm i sass
```
* props로 사이즈 유형을 입력받는 버튼 컴포넌트 예시
```js
import './Button.scss';

function Button({ children, size }) {
  return <button className={['Button', size].join(' ')}>{children}</button>;
  // return <button className={`Button ${size}`}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium'
};

export default Button;
```
# ✅ css module, sass module
* 스타일이 중첩되지 않도록 해쉬 처리를 해주므로 짧고 흔한 클래스명 사용이 가능하다.
* `styles`로 `import`한 스타일 객체의 값을 참조하는 방식으로 사용한다. 
```js
App: "App_App__c8gNs" //파일명_클래스명_해쉬
```
```js
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <button className={styles['btn-red']}></button>
      </header>
    </div>
  );
}

export default App;
```
* 클래스 이름을 고유화하지 않고 전역적으로 사용하고 싶다면 `:global`을 이용한다. (반대는 `:local`)
```js
:global .header {
   // 스타일링
}
```
* 클래스가 여러개거나 조건부 스타일링 할 때 코드가 길어진다는 불편함이 있다.
```js
${styles.one} ${styles.two}
${styles.one} ${condition ? styles.two : ''}
```
# ✅ classnames
```bash
npm i classnames
```
* props로 받아온 값을 { outline }과 같이 객체 안에 넣어서 classNames()에 포함시키면 값이 true일 때만 적용된다. 
```js
import classNames from 'classnames';
import styles from './Button.module.css'

function Button({ children, size, color, outline }) {
  return (
    <button className={classNames('Button', size, color, { outline })}>
      {children}
    </button>
  );
}
```
* bind 기능을 사용하면, 클래스 이름을 `{cx('클래스이름')}` 과 같이 편하게 작성할 수 있다. 
```js
const cx = classNames.bind(styles)
```
```js
<div className={cx('checkbox', 'box')}></div>
```
# ✅ Styled Components 
* `CSS in JS` 리액트 라이브러리에는 [emotion](https://github.com/emotion-js/emotion), [styled-jsx](https://github.com/vercel/styled-jsx) 등 여러가지가 있다. 
* 그 중 [styled components](https://styled-components.com/)는 가장 인기있는 라이브러리
* props에 따른 조건부 스타일링에 유용하다.
```js
npm i styled-components
```
```js
import styled, {css} from 'styled-components'

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color="red" huge />;
}

export default App;
```
* 기존 컴포넌트를 스타일 변경해서 쓰고 싶을 때
```js
const newSyledButton = styled(StyledButton)`
  background: blue
`
```
* 기존 컴포넌트의 태그를 변경하거나 다른 컴포넌트로 덮어쓰고 싶을 때
```js
<StyledButton as="a" href="/">버튼</StyledButton>
<StyledButton as={newStyledButton}>버튼</StyledButton>
```
