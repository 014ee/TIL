# Mapped

## Mapped

```javascript
// 기존에 정의되어 있는 타입을 새로운 타입으로 변환
type Heroes = "Hulk" | "Thor" | "Capt";
type HeroAges = { [K in Heroes]?: number };
const ages: HeroAges = {
  Hulk: 30,
};
```
