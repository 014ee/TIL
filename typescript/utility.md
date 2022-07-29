# Utility

## Partial

```javascript
// 특정 타입의 부분을 만족하는 타입을 정의할 수 있다.
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type Item = Partial<Product>;
const item: ProductDetail = { id: 1, name: '선풍기' }
```

## Pick

```javascript
// 특정 타입 중 지정한 일부를 만족하는 타입을 정의할 수 있다.
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type Item = Pick<Product, 'id' | 'name' | 'price'>
const item: Item =  { id: 1, name: '선풍기', price: 10000 }
```

## Omit

```javascript
// 특정 타입 중 지정한 일부를 제외한 타입을 정의할 수 있다.
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

type Item = Omit<Product, 'stock'>
const item: Item =  { id: 1, name: '선풍기', price: 10000 }
```
