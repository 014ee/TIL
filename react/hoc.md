# ✅ HOC (Higher-Order Component)

* 비슷한 역할을 하는 hooks로 인해 요즘에는 사용도가 살짝 낮아짐  
* 컴포넌트 로직을 재활용 할 수 있도록 도와주는 역할을 한다.  (리엑트에만 국한된 개념은 아님)
* 즉, 컴포넌트를 인자로 받아 강화된 새로운 컴포넌트를 리턴하는 함수
* 보통 with가 붙은 경우가 많음 (ex. wihRouter(컴포넌트))

```js
const HOC = function(컴포넌트){return 새로운 컴포넌트}
```

