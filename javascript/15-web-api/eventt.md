# eventt



* HTML 태그 속성에 EventHandler 추가

```js
 <h1 onclick="console.log('clicked');">클릭</h1>
 <input type="text" onchange="console.log('changed');" onkeydown="console.log('typed');">
```

* js에서 property에 직접 EventHandler 설정

```js
document.getElementById("form").onsubmit = function eventHandler(){
  console.log("from property");
  return false; // 브라우저의 submit 처리(페이지 이동) 비활성
}
```

* addEventListener, removeEventListener (여러개의 이벤트 핸들러를 등록할 수 있음)

```js
document.getElementById("form1").addEventListener("submit", 
  function eventHandler(){
    console.log("from addEventListener");
    return false;
  }
);
```

## form evnet

* HTML 문서의 form 요소에 변화가 생기거나 submit 버튼을 누를 때 발생

## window event

* 페이지가 모두 로드 되었을 때 onload event 발생

## mouse/touch evnet

* 사용자가 마우스를 조작했을 때 발생 `onclick=""` `onchange``onkeydown`

## key event

* 사용자가 키보드를 조작했을 때 발생
