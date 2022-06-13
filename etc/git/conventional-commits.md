# conventional-commits

### Conventional-Commits란?

commit 메세지에 사용자와 기계 모두가 이해할 수 있는 의미를 부여하기 위한 스펙.\
기능추가, 버그수정 등 commit 상황에 맞는 **규칙을 가지고 기술함으로써 명확한 히스토리를 생성**합니다.\
(Conventional commits는 팀마다 다를 수 있으니 관련 문서를 참조할 것)

https://www.conventionalcommits.org/ko/v1.0.0/

### Commit 작성구조

```
<타입>[스코프(선택)]: <하나의 구나 절로 간략하게 설명 / 현재 시제를 사용하여 50자 이내로 요약>

[본문(선택)]: 변경된 이유와 변경 전과의 차이점을 설명합니다.

[꼬리말(선택)]: 주요 변경 내역들(Breaking Changes)

[#해결된 이슈 번호(선택)]
```

```
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

### Commit 타입

* **feat:** 새로운 기능 추가 (Add server.py)
* **fix:** 버그 수정
* **style:** 스타일 변경 (포매팅, 들여쓰기, 자간 등..)
* **refator:** 코드 리팩토링 (잘 되던 것을 더 잘되게 개선)
* **pref:** 성능 개선
* **conf:** 환경설정 (Create, .env, .gitignore)
* **docs:** 문서 작업 (READ.md, LICENSE)
* **build:** 빌드 관련 파일 수정
* **test:** 테스트 관련 코드
* **ci:** CI 설정 파일 수정
* **revert:** 작업 되돌리기

### Commit 이슈 자동화

commit 시 github 저장소 내 관련 이슈번호를 등록하여 자동으로 이슈를 완료처리 할 수 있습니다.

\*\* 참고: 이슈번호 추가되어 commit된 파일이 main branch에 push되어야 이슈 완료처리됨\
(ex. develop branch에만 push하면 해당 이슈 완료처리 안됨)
