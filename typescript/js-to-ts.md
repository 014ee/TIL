# JS to TS

## 🐇 주의 사항

* 기능적인 변경은 절대 하지 않을 것
* 테스트 커버리지가 낮을 땐 함부로 타입스크립트를 적용하지 않을 것
* 처음부터 타입을 엄격하게 적용하지 않을 것 (점진적으로 strict 레벨 증)

## 🐇 적용 순서

1. 자바스크립트 파일에 JSDoc으로 타입 시스템 입히기
2. 타입스크립트의 기본 환경 구성
   * [x] npm 초기화
   * [x] 타입스크립트 라이브러리 설치
   * [x] 타입스크립트 설정 파일 생성 및 기본 값 추가
   * [x] 자바스크립트 파일을 타입스크립트 파일로 변환하기
   * [x] `tsc` 명령어로 타입스크립트 컴파일하기
3. 명시적인 `any` 선언하기
   * [x] `tsconfig.json` 파일에 `noImplicitAny`를 `true`로 설정하기
   * [x] 가능한 구체적인 타입으로 타입 정의
4. 프로젝트 환경 구성babel, eslint, prettier 등의 환경 설정
5. 외부 라이브러리 모듈화
6. `strict` 옵션 추가 후 타입 정의

## 🐇 설정 파일

```bash
npm i typescript -D
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "target": "ES5",
    "outDir": "./dist",
    "moduleResolution": "Node",
    "lib": ["ES2015", "DOM", "DOM.Iterable"],
    "typeRoots": ["./node_modules/@types", "./types"],
    // "noImplicitAny": true,
    // "strict": true,
  },
  "include": ["./src/**/*"],
  "exclude": ["node_modules", "dist"],
}

```

```json
// packge.json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "tsc"
}bash
```
