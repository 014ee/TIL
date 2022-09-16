# Styling

## CSS, SCSS

{% hint style="info" %}
전역적으로 오염되지 않도록 주의해야 한다. scss 사용시 scss를 css 확장자로 컴파일해주는 모듈을 추가로 설치해야 한다.
{% endhint %}

```bash
npm i sass
```

```javascript
import './styles.scss'

function Button({ children, size }) {
  return <button className={`Button ${size}`}>{children}</button>;
  // return <button className={['Button', size].join(' ')}>{children}</button>;
}

Button.defaultProps = {
  size: 'medium'
};

export default Button;
```

## CSS Module, SCSS Module

{% hint style="info" %}
스타일이 중첩되지 않도록 해쉬 처리를 해주므로 짧고 흔한 클래스명 사용이 가능하다. styles로 import한 스타일 객체의 값을 참조하는 방식으로 사용한다. 클래스 이름을 고유화하지 않고 전역적으로 사용하고 싶다면 :global을 이용하면 된다.&#x20;
{% endhint %}

```
:global .header {
   // 스타일링
}
```

```javascript
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <button className={styles['button-red']}></button>
      </header>
    </div>
  );
}

export default App;
```

{% hint style="info" %}
클래스가 여러개거나 조건부 스타일링을 할 때 코드가 길어진다는 불편함이 있다. 이는 classnames bind 기능으로 해결 가능하다.
{% endhint %}

```javascript
${styles.one} ${styles.two}
${styles.one} ${condition ? styles.two : ''}
```

## Classnames

{% hint style="info" %}
props로 받아온 값을 { outline }과 같이 객체 안에 넣어서 classNames()에 포함시키면 값이 true일 때만 적용된다.
{% endhint %}

```bash
npm i classnames
```

```javascript
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

## Styled Components

{% hint style="info" %}
CSS in JS 리액트 라이브러리에는 emotion, styled-jsx 등 여러가지가 있다. 그 중 styled components는 인기있는 라이브러리로 props에 따른 조건부 스타일링에 유용하다.
{% endhint %}

```bash
npm i styled-components
```

```javascript
import styled from 'styled-components'

function Button({ child }) {
  return (<ButtonBlock />{ child }</Button>);
}

export default Button;

const ButtonBlock = styled.button`
  border: 2px solid #ddd;

```
