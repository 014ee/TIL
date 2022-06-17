# Strings-as-Arrays

## 🐇 배열인 문자열

{% hint style="info" %}
&#x20;자바스크립트 **문자열은 UTF-16 유니코드 문자로 구성된 읽기 전용 배열처럼 동작**한다. 때문에 charAt() 메서드 대신 대괄호를 서서 개별 문자에 접근할 수 있다. 다만 typeof 연산자는 문자열에 대해 'string'을 반환하며 Array.isArray() 메서드는 문자열을 받으면 false를 반환한다.
{% endhint %}

```
const string = 'hello world';
string.charAt(0); // 'h'
string[0];        // 'h'
```

{% hint style="info" %}
&#x20;문자열이 배열처럼 동작한다는 것은 범용 배열 메서드도 적용할 수 있다는 뜻이다. 하지만 문자열은 불변인 값이므로 배열처럼 취급한다 해도 읽기 전용이라는 점을 명심해야 한다.

push(), sort(), reverse(), splice() 처럼 원래 배열을 정하는 배열 메서드는 문자열에서 동작하지 않으며, 에러 없이 조용히 실패한다.
{% endhint %}

```
Array.prototype.join.call('안녕하세요', '.'); // '안.녕.하.세.요.'
```
