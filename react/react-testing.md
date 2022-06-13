# react-testing

## ✅ Utit Test with [JEST](https://jestjs.io/)

* 통합 테스트에 비해 빠르고 쉽게 문제를 찾아낼 수 있다.
* 테스트 코드를 통해 어떻게 동작하는지 예측할 수 있다.
* JEST는 facebook의 오픈소스로, create-react-app에 기본으로 설치되어 있어 많이 쓰이는 테스트 도구이다.\
  `easy setup` `instant feedback` `snapshot testing`
* [jest-dom](https://github.com/testing-library/jest-dom)
* [user-event](https://testing-library.com/docs/ecosystem-user-event/)

### JEST 설치&명령어 세팅

```bash
npm i jest -D
```

```js
"scripts": {
  "test": "jest"
},

npm test > 그때그때 테스트
```

```js
npx jest --watchAll  > 항상 테스트 켜놓는 방법
```

### 간단한 사용 예시

`test('test 설명', 함수)`

```js
// example.test.js
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
})
```

여러 테스트를 `describe`로 묶어서 관리할 수도 있다.

```js
describe('expect test', ()=>{
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
  })
  it('37 equal 37', () => {
    expect(37).toBe(37);
  })
  it('{age: 39} to equal {age: 39}', () => {
    expect({age: 39}).toEqual({age: 39}); // 참조형은 값이 같아도 가르키는 곳이 다르므로 toBe를 쓰면 failed 뜸
  })
})
```

### 자주 쓰는 테스트 함수

```js
describe('expect test', ()=>{

  it('.toHaveLength', () => {
    expect("hello").toHaveLength(5);
  })
  
  it('.toHaveProperty', () => {
    expect({name: 'mark'}).toHaveProperty('name');
    expect({name: 'mark'}).toHaveProperty('name', 'mark');
  })
  
  it('.toBeDefined', () => {
    expect({name: 'mark'}.name).toBeDefined();
    // expect({name: 'mark'}.age).toBeDefined();
  })
  
  it('.toBeFalsy', () => {
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
  })
  
  it('.toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(9);
  })
  
  it('.toBeGreaterThanOrEqual', () => {
    expect(10).toBeGreaterThanOrEqual(10);
  })
  
  it('.toBeInstanceOf', () => {
    class foo {}
    expect(new foo).toBeInstanceOf(foo);
  })
  
})
```

`.not`을 붙여 사용할 수도 있다.

```js
describe('not expect test', ()=>{

  it('.not.toBeFalsy', () => {
    expect(true).not.toBeFalsy();
    expect("true").not.toBeFalsy();
  })
  
})
```

### 비동기 로직 테스트

```js
describe('use async test', ()=>{
  it('async-await', async ()=>{
    function p(){
      return new Promise(resolve => {
        setTimeout(() => {
          resoleve(37)
        }, 1000)
      })
    }
    
    const data = await p()
    return expect(data).toBe(37)
  })
})
```

```js
describe('use async test', ()=>{
  it('async-await, catch', async ()=>{
    function p(){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('error'))
        }, 1000)
      })
    }
    try {
      await p()
    } catch (error){
      expect(error).toBeInstancOf(error)
    }
  })
})
```

## ✅ React Component Test

`create-react-app`으로 프로젝트를 생성하면 별도의 세팅 없이 바로 `npm test` 사용 가능

```js
// package.json에서 설치된 테스트 라이브러리 확인 가능

"dependencies": {
  "@testing-library/jest-dom": "^5.16.1",
  "@testing-library/react": "^12.1.2",
  "@testing-library/user-event": "^13.5.0",
},
```

```js
// App.test에서 확인 가능

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

## ✅ @testing-library/react 실습

### 1. 컴포넌트 랜더

테스트 코드 먼저 작성시 유의해야 할 점은 먼저 실제 코드는 테스트 코드를 통화시킬 정도로만 간단히 작성하는 것

```js
// Button.jsx

export default function Button(){
  return <></>;
}
```

```js
// Button.test.js

import {render} from '@testing-library/react'
import Button from './Button'

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  it('컴포넌트가 정상적으로 생성된다.', () => {
    const button = render(<Button / >);
    expect(button).not.toBe(null);
  })
})
```

### 2. button이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.

```js
// Button.jsx

export default function Button(){
  return <button>button</button>;
}
```

```js
// Button.test.js

import {render} from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  // step1 생략..
  
  it('button 이라고 쓰여있는 엘리먼트는 HTMLButtonElement 이다.', () => {
    const {getByText} = render(<Button />);
    const buttonElement = getByText('button')
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement)
  });
})
```

### 3. 버튼을 클릭하면 P태그 안에 '버튼이 방금 눌렸다' 라고 쓰여진다.

```js
// Button.jsx

export default function Button(){
  return (<div>
    <button>button</button>
    <p>버튼이 방금 눌렸다</p>
  </div>);
}
```

```js
// Button.test.js

import {render} from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  // step1 생략..
  // step2 생략..
  
  it('버튼을 클릭하면 P 태그 안에 "버튼이 방금 눌렸다" 라고 쓰여진다.', () => {
    const {getByText} = render(<Button />);
    const buttonElement = getByText('button');
    fireEvent.click(buttonElement);

    const p = getByText('버튼이 방금 눌렸다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
})
```

### 4. 버튼을 클릭하기 전에는, P태그 안에 '버튼이 눌리지 않았다.' 라고 쓰여진다.

```js
// Button.jsx

import { useState } from "react";

export default function Button(){
  const [message, setMessage] = useState('버튼이 눌리지 않았다')
  return (
    <div>
      <button onClick={click}>button</button>
      <p>{message}</p>
    </div>);

  function click(){
    setMessage('버튼이 방금 눌렸다')
  }
}
```

```js
// Button.test.js

import {render} from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  // step1 생략..
  // step2 생략..
  // step3 생략..
  
  it('버튼을 클릭하기 전에는, P태그 안에 "버튼이 눌리지 않았다" 라고 쓰여진다.', () => {
    const {getByText} = render(<Button />);

    const p = getByText('버튼이 눌리지 않았다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
})
```

### 5. 버튼을 클릭하고 5초 뒤에는 P태그 안에 "버튼이 눌리지 않았다" 라고 쓰여진다.

state의 변화가 있는 테스트를 할 때 [act](https://ko.reactjs.org/docs/test-utils.html#act) 라는 함수 안에서 작동시켜야 한다. ([AAA 테스트 방법론 참고](http://wiki.c2.com/?ArrangeActAssert))

```js
// Button.jsx

import { useState } from "react";

export default function Button(){
  const [message, setMessage] = useState('버튼이 눌리지 않았다')
  return (<div>
    <button onClick={click}>button</button>
    <p>{message}</p>
    </div>);

    function click(){
      setMessage('버튼이 방금 눌렸다');
      setTimeout(()=>{
        setMessage('버튼이 눌리지 않았다');
    }, 5000)
  }
}
```

```js
// Button.test.js

import {render} from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  // step1 생략..
  // step2 생략..
  // step3 생략..
  // step4 생략..
  
  it('버튼을 클릭하고 5초 뒤에는 P태그 안에 "버튼이 눌리지 않았다" 라고 쓰여진다.', () => {
    jest.useFakeTimers();

    const {getByText} = render(<Button />);
    const buttonElement = getByText('button');
    fireEvent.click(buttonElement);

    // 5초가 흐른다.
    act(()=>{
      jest.advanceTimersByTime(5000);
    })

    const p = getByText('버튼이 눌리지 않았다');
    expect(p).not.toBeNull();
    expect(p).toBeInstanceOf(HTMLParagraphElement);
  });
})
```

**중간 리팩토링**

```js
// Button.jsx

import { useEffect, useState, useRef} from "react";

const BUTTON_TEXT = {
  NORMAL:'버튼이 눌리지 않았다',
  CLICKED:'버튼이 방금 눌렸다',
}

export default function Button(){
  const [message, setMessage] = useState(BUTTON_TEXT.NORMAL)
  const timer = useRef();

  useEffect(() => {
    return () => {
      if(timer.current){
        clearTimeout(timer.current)
      }
    }
  }, [])

  return (<div>
    <button onClick={click}>button</button>
    <p>{message}</p>
    </div>);

    function click(){
      setMessage(BUTTON_TEXT.CLICKED);
      timer.current = setTimeout(()=>{
        setMessage(BUTTON_TEXT.NORMAL);
    }, 5000)
  }
}
```

### 6. 버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.

```js
// Button.jsx

import { useEffect, useState, useRef} from "react";

const BUTTON_TEXT = {
  NORMAL:'버튼이 눌리지 않았다',
  CLICKED:'버튼이 방금 눌렸다',
}

export default function Button(){
  const [message, setMessage] = useState(BUTTON_TEXT.NORMAL)
  const timer = useRef();

  useEffect(() => {
    return () => {
      if(timer.current){
        clearTimeout(timer.current)
      }
    }
  }, [])

  return (<div>
    <button onClick={click} disabled={message === BUTTON_TEXT.CLICKED}>button</button>
    <p>{message}</p>
    </div>);

    function click(){
      setMessage(BUTTON_TEXT.CLICKED);
      timer.current = setTimeout(()=>{
        setMessage(BUTTON_TEXT.NORMAL);
      }, 5000)
    }
}
```

```js
// Button.test.js

import {render} from '@testing-library/react';
import Button from './Button';

describe('Button 컴포넌트 (@testing-library/react)', ()=>{
  // step1 생략..
  // step2 생략..
  // step3 생략..
  // step4 생략..
  // step5 생략..
  
  it('버튼을 클릭하면, 5초 동안 버튼이 비활성화 된다.', () => {
    jest.useFakeTimers();

    const {getByText} = render(<Button />);
    const buttonElement = getByText('button');
    fireEvent.click(buttonElement);

    // 비활성화
    expect(buttonElement).toBeDisabled();

    // 5초가 흐른다.
    act(()=>{
      jest.advanceTimersByTime(5000);
    })

    // 활성화
    expect(buttonElement).not.toBeDisabled();
  });
})
```
