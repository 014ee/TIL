# JS to TS

## 🐇 주의 사항

* 기능적인 변경은 절대 하지 않을 것
* 테스트 커버리지가 낮을 땐 함부로 타입스크립트를 적용하지 않을 것
* 처음부터 타입을 엄격하게 적용하지 않을 것 (점진적으로 strict 적용)

## 🐇 적용 순서

1. 마이그레이션이 쉽지 않을 경우 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
2. 타입스크립트의 기본 환경 구성하기
   * [x] npm 초기화
   * [x] 타입스크립트 라이브러리 설치&#x20;
   * [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
   * [x] 자바스크립트 파일을 타입스크립트 파일로 변환
   * [x] `tsc` 명령어로 타입스크립트 컴파일
3. 명시적인 `any` 선언하기
   * [x] `noImplicitAny` 옵션 `true`로 설정
   * [x] 라이브러리를 쓰는 경우 [DefinitelyTyped](https://www.typescriptlang.org/dt/search?search=)에서 `@types` 라이브러리 찾아 설치
   * [x] 가능한 구체적인 타입으로 타입 정의
4. 프로젝트 환경 구성 babel, eslint, prettier 등 환경 설정하기
5. 외부 라이브러리 모듈화하기
6. `strict` 옵션 `true`로 설정 후 타입 정의하기

## 🐇 설정 파일

```bash
npm i typescript -D
```

```json
// tsconfig.json
{
  "compilerOptions": {
    // 느슨한 타입 체크
    "allowJs": true, // js 파일을 포함할 수 있는지 (점진적으로 마이그레이션 할 경우 필요)
    
    // 기본 설정 
    "target": "ES5", // 어떤 버전의 js로 변환할건지 'es2015'...'es2022', 'esnext'
    "moduleResolution": "Node", // 어떤 모듈 문법을 쓸건지 'node', 'classic'
    "outDir": "./dist", // js 파일 아웃풋 경로
    "lib": ["ES2015", "DOM", "DOM.Iterable"], // 컴파일 할 때 포함될 라이브러리 목록
    "typeRoots": ["./node_modules/@types", "./types"], // 타입이 정의되어 있는 경로 지정
    
    // 강한 타입 체크
    // "strict": true, // strict 관련 모드 전부 켜기
    // "noImplicitAny": true, // any 타입이 의도치않게 발생할 경우 에러 발생
    // "strictNullChecks": true, // 모든 타입에 서브타입으로 존재하는 null, undefined 제외
    // "noImplicitReturns": true, // 리턴값이 없는 함수는 에러 발생
    // "strictFunctionType": true , // 함수의 매개변수가 지정한 타입과 다르거나, 슈퍼타입이 아닌 경우 에러 발생
    
    // 기타 옵션
    // sourceMap: true // 컴파일시 소스맵을 생성할건지
  },
  "include": ["./src/**/*"], // js로 변환할 파일의 경로
  "exclude": ["node_modules", "dist"], // js로 변환하지 않을 파일 경로
}

```

```json
// packge.json
"scripts": {
  "build": "tsc"
}
```
