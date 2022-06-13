# error



프로그램의 외부 요인으로 프로그램의 특정 파트가 정상적으로 동작하지 않을 수 있으나,\
에러 처리를 이용하면 프로그램이 정상적으로 실행될 수 있다.

## 에러 처리 과정

* throw 발생 시, catch 구문을 찾아서 이동
* catch 구문을 찾으면 에러가 처리되고 해당 try, catch 구문 이후 코드가 실행됨
* try, finally 구문만 존재시, finally 구문은 실행되고, catch 될 수 있는 구문을 찾아 이동
* 현재의 블록에서 catch, finally 구문이 없다면 상위 블록, 상위 함수(호출된 함수)로 이동

## try, catch, finally

* try 구문 안에서 호출한 함수 안에서 에러가 발생한 경우에도 catch로 이동된다.
* `catch`나 `finally`는 둘 중 하나만 있어도 정상적으로 실행 가능하다.

```js
try{
  // 정상적으로 실행되는 경우 실행될 프로그램 작성
  // try 블록안에서 에러가 발생한 경우 catch 블록으로 이동함
}
catch(e){
  // try 블록에서 에러가 발생한 경우
  // 에러를 인자 e로 받아 에러를 처리하는 코드를 작성
}
finally{
  // try, catch구문이 실행되고 나서 실행될 코드
}
```

## if 문이 대체할 수 없는 이유

```js
function errFunc(){
  throw new Error("에러");
  console.log('이 코드는 실행되지 않습니다.')
}

function func(){
  try{
    errFunc(); 
  } finally{
    console.log('여기서 errFunc의 에러 부분을 처리해줄 수 있습니다.')
  }
}

try {
  func();
} catch(e) {
  console.log(e) // Error: 에러 / func에서 에러가 처리된 errFunc을 여기서 실행시켜줄 수 있습니다.
} finally {
  console.log('이 코드는 항상 실행됩니다.')
}
```

## throw

* return 구문과 비슷하게 에러를 나타낼 수 있는 인자를 사용한다.

```js
try {
  throw new Error("에러");
}catch(e){
  console.log(e) // Error: 에러
}
```
