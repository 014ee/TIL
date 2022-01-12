# ✅ Utit Test with [JEST](https://jestjs.io/)
* 통합 테스트에 비해 빠르고 쉽게 문제를 찾아낼 수 있다.
* 테스트 코드를 통해 어떻게 동작하는지 예측할 수 있다.
* JEST는 facebook의 오픈소스로, create-react-app에 기본으로 설치되어 있어 많이 쓰이는 테스트 도구이다.  
`easy setup` `instant feedback` `snapshot testing`
## JEST 설치&명령어 세팅
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
## 예시  
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
## 자주 쓰는 테스트 함수
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
## 비동기 로직 테스트 
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
