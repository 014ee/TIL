# Utility

## Partial

```javascript
// 특정 타입의 부분 만족하는 타입을 정의할 수 있다.
interface Info {
  name: string;
  age: number;
  address: string;
}
type UserInfo = Partial<Info>;
const user: UserInfo = { name: 'Lee', age: 30 }
```

##
