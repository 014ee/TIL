# Mapped

## Mapped

```typescript
// 기존에 정의되어 있는 타입을 새로운 타입으로 변환
interface Profile {
  name: string;
  email: string;
  profileImageUrl: string;
}

type ProfileUpdate = {
  [p in keyof Profile]?: Profile[p]
}
```
