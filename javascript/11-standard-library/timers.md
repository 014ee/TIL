# Timers

## 🐇 타이머 함수

* `setTimeout(함수, 시간)` : 일정 시간 후 함수 실행
* `setInterval(함수, 시간)` : 시간 간격마다 함수 실행
* `clearTimeout()` : 설정된 timeout 함수를 종료
* `clearInterval()` : 설정된 interval 함수를 종료

```js
const timer = setTimeout (() => {
 console.log ('Heropy');
}, 3000) // 3초 뒤 콘솔 실행

const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
 clearTimeout(timer); // h1을 클릭하면 타임아웃 종료
})
```
