# conventional-commits

## [Conventional-Commits](https://www.conventionalcommits.org/ko/v1.0.0/)란?

{% hint style="info" %}
상황에 맞는 커밋 메세지를 사용함으로서 히스토리를 쉽게 이해 할 수 있도록 도와다.\
(Conventional commits는 팀마다 다를 수 있으니 관련 문서를 참조)
{% endhint %}

## Commit 작성구조

```vim
<타입>[스코프(선택)]: <하나의 구나 절로 간략하게 설명 / 현재 시제를 사용하여 50자 이내로 요약>

[본문(선택)]: 변경된 이유와 변경 전과의 차이점을 설명합니다.

[꼬리말(선택)]: 주요 변경 내역들(Breaking Changes)

[#해결된 이슈 번호(선택)]
```

```vim
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

## Commit 타입

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

## Commit 이슈 자동화

{% hint style="info" %}
commit 할 때 저장소 내 관련 이슈번호를 입력하여 자동으로 해당 이슈를 완료처리 할 수 있다. 참고로 이슈번호를 입력한 PR 요청이 main branch에 merge 되어야 이슈는 완료처리된다. develop branch에만 push하면 해당 완료처리 되지 않는다.
{% endhint %}
