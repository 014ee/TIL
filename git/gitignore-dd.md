# gitignore-dd

### .gitignore 이란?

로컬 환경정보나 빌드정보 등 원격 저장소에 노출 또는 관리되지 말아야 하는 파일들을 별도로 지정하여\
원격 저장소에 실수로 올라가지 않도록 도와주는 역할을 합니다.\
프로젝트 작업 초기에 추가해주어야 하며, 정의한 내용 대해서는 git 추적을 진행하지 않습니다.

### .gitignore 파일 생성

* .gitignore 파일을 프로젝트 최상단 폴더에 생성합니다. (확장자는 따로 없음)
* https://www.toptal.com/developers/gitignore에서 untracked할 운영체제, 프로그래밍 언어 등을 입력합니다.
* 생성된 코드를 .gitignore 파일에 붙여넣은 후 commit > push를 진행합니다.
* commit 메세지는 다음과 같이 입력할 수 있습니다.

```
conf: Set to ignore something with .gitignore

MacOS, Windows, Linux, Vim, Visual Studio Code
```

### .gitignore 파일이 적용되지 않았을 경우

.gitignore 파일을 나중에 추가하여 .git이 모든 파일을 바라보고 있을 경우,\
아래 명령어를 통해 원격 저장소 파일을 제거 후 다시 push 할 수 있습니다.

```
$ git rm -r --cached.
$ git add.
$ git commit -m "메세지"
$ git push origin [브랜치명]
```
