## git 설치 후 초기설정(~/.gitconfig에 저장됨)
```
$ git config --global user.name [github 아이디] > 사용자 아이디 등록
$ git config --glabal user.email [github 이메일] > 사용자 이메일 등록
$ git config --global core.editor vim > vim 에디터 사용 등록
$ git config --list > 설정확인
```
```
$ git config —unset —global user.name > 잘못 등록한 user.name 삭제
```

## 기본 명령어
```
$ git 명령어--help > 명령어 도움말
```

* 저장소 관리
```
$ git clone [원격 저장소 URL] > 로컬에 원격 저장소 복제
$ git init > git 버전관리 시작 선언(.git 폴더 생성)

$ cd > 기본 경로로 이동
$ cd 폴더명 > 폴더명으로 이동
$ cd .. > 현재 폴더의 상위 폴더로 이동
$ pwd > 현재 디렉토리 확인
$ ls > 현재 디렉토리의 폴더, 파일 리스트

$ mkdir [폴더명] > 디렉토리 생성
$ touch [파일명] > 빈 파일 생성
$ git rm -rf [폴더명or파일명] > 폴더명or파일명 삭제

$ cat [파일명] > 파일내용 확인
```

* 상태확인 (git status)
```
$ git status > git 저장소의 상태확인

// on branch main > 현재 main branch라는 뜻
// no commits yet > 아직 commit한 파일이 없음
// nothing to comit > 현재 commit할 파일이 없음
// untracked files > 한번도 버전관리 하지 않은 파일이 존재함
// changes to be committed > commit 가능
// changes not staged for commit > 변경된 파일이 아직 스테이지에 올라가지 않음
```

* git add (working directory에서 수정된 사항을 stage에 올려 tracking 해줌)
```
$ git add [파일명] > git이 [파일명]의 변경사항을 추적하도록 명령

$ git stash > 수정된 작업 중 commit 되지 않은 파일들만 잠시 working directory에서 스택으로 옮겨둠
$ git stash list > 지금까지 저장된 stash 목록 확인
$ git stash apply [stash 이름] > 스택으로 옮겨둔 파일 중 다시 작업할 stash 파일 선택
$ git stash apply --index > 선택한 stash 파일을 staged 상태로 복원 (이 단계를 거쳐야 다시 작업 가능)
$ git stash drop [stash 이름] > apply를 해도 해당 stash는 여전히 스택에 남아있음으로 제거해줘야함
```

* git commit (수정된 사항들이 모여 의미있는 변화가 있을 때 snapshot을 찍어 로컬 저장소에 저장)
```
$ git commit > stage에 올라온 파일 commit
$ git commit -m "메세지" > commit과 commit 메세지를 한번에 처리
$ git commit -am "메세지" > staging과 commit 한번에 처리
$ git log > commit history를 시간순으로 보여줌
```

* git push (snapshot 찍힌 commit 파일들을 원격 저장소에 새로 추가하거나 변경 내용을 저장)
```
$ git remote > 원격 저장소 이름(origin) 확인
$ git remote -v > 원격 저장소 이름과 url 확인
$ git push origin develop > commit된 파일을 원격 저장소(origin)의 develop branch로 옮겨주는 명령어
$ git branch > branch 확인
```

* git fetch/pull (원격 저장소에서 파일을 다운로드)
```
$ git fetch origin develop > 원격 저장소의 develop branch를 로컬 저장소로 가져오기 (부분만 선택적으로 가져올 수 있음)

$ git pull origin develop > 원격 저장소의 develop branch를 로컬 저장소의 working directory로 당겨오기 (부분만 가져오기 안됨)
```

## 상태 비교하기 (git diff)
```
$ git diff > working directory에 unstaged 된 파일 비교
$ diff --git a/파일명 b/파일명 > 이전버전(a) 파일과 현재버전(a) 파일을 비교

$ git diff --staged > staging area에 있는 파일 비교
$ git diff [브랜치명] [다른브랜치명] > 로컬 내 브랜치 비교
$ git diff [브랜치명] > [origin/브랜치명] > 로컬 브랜치와 리모트 브랜치 비교

$ git diff <commit 해시값> <commit 해시값> > 커밋간 비교
```

## 상황별 되돌리기
* commit 되돌리기  
```
※ revert (이전상태로 되돌리기)
reset 보다는 revert (잘못한 이력도 commit으로 박제하고 수정한 이력을 남기자!)

예시: 현재 HEAD에서 직전 3개의 commit을 순서대로 거슬러 올라가 해당 내역에 대해 commit, push 실행
$ git revet --no-commit HEAD~3..
$ git commit
$ git push origin branch명


※ reset (삭제) > 절대 사용하지 말 것
다른 팀원의 commit log로 인해 파일이 살아나거나, 과거 히스토리가 사라져 commit log tracking이 힘들어질 수 있음

예시: 직전 3개의 commit 삭제 후 remote에 강제 push
$ git reset --hard HEAD~3
$ git push -f origin branch명
```

* 되돌리기
```
$ git mv sever.py main.py > 리네이밍
$ git reset HEAD 파일명 > 파일명 언스테이징
$ git rm -f 파일명 > 파일명 언스테이징 + 삭제
$ git commit --amend > 방금 진행한 commit 수정(index의 변화없이 쓸 경우 메세지만 수정/변화했을 경우 반영되서 커밋)
$ git rebase -i <commit> > 처음 commit 수정
$ git rebase --abort > 리베이스 중단
$ git rebase --continue > 리베이스 완료

$ git log -p > 로그에서 출력되는 버전간의 차이점을 출력하고 싶을 때
$ git diff 버전1..버전2 > 버전1과 버전2간의 차이점을 비교할 때
$ git diff > git add하기 전(working directory)과 후(index)의 파일 내용을 비교할 때
```
