# HTML

## HTML 기본 구조

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  // ...
</body>

</html>
```

## \<!DOCTYPE html>

{% hint style="info" %}
현재 문서가 html5로 제작된 웹 문서라고 알려주는 요소로, 이제부터 처리할 문서는 html 문서이고 어떤 유형을 사용했으니 그 버전에 맞는 방법으로 해석하라고 브라우저에게 알려주는 역할을 한다. 대소문자 구별이 없지만 강조하기 위해 주로 대문자로 한다.
{% endhint %}

```html
// xhtml은 아래와 같이 작성했었다.
<DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 TRANS...">
```

## \<html lang='en'>

{% hint style="info" %}
문서가 어디에서 시작하고, 어디에서 끝나는지 알려주는 범위를 나타내는 태그이다. lang 속성을 사용해 문서에서 사용할 언어를 지정할 수 있다.&#x20;
{% endhint %}
