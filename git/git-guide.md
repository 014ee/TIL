## git 설치 후 초기설정(~/.gitconfig에 저장됨)
```
$ git config --global core.autocrlf true > 운영체제마다 다른 개행문자로 인해 변경사항이 없는데 있다고 착각하여 문제가 발생할 수 있으므로 미리 통일
$ git config --global user.name 'github 아이디' > 사용자 아이디 등록
$ git config --glabal user.email 'github 이메일' > 사용자 이메일 등록
$ git config --global core.editor vim > vim 에디터 사용 등록
$ git config --list > 설정확인
```
```
$ git config —unset —global user.name > 잘못 등록한 user.name 삭제
```

## git 상태확인
```
$ git status

// on branch main > 현재 main branch라는 뜻
// no commits yet > 아직 commit한 파일이 없음
// nothing to comit > 현재 commit할 파일이 없음
// untracked files > 한번도 버전관리 하지 않은 파일이 존재함
// changes to be committed > commit 가능
// changes not staged for commit > 변경된 파일이 아직 스테이지에 올라가지 않음
```

## 저장소, 경로, 파일
```
// VSCODE 터미널

$ dir > ls과 동일한 역할 (현재 디렉토리의 폴더, 파일 리스트)
$ code . -re > vscode 터미널에서 입력한 경로의 폴더를 현재창에서 열고 싶은 경우
$ code . > vscode 터미널에서 입력한 경로의 폴더를 새창으로 열고 싶은 경우
```
```
$ git clone [원격 저장소 URL] > 로컬에 원격 저장소 복제
$ git init > git 버전관리 시작 선언(.git 폴더 생성)
```
```
$ cd > 기본 경로로 이동
$ cd 폴더명 > 폴더명으로 이동
$ cd .. > 현재 폴더의 상위 폴더로 이동
$ pwd > 현재 디렉토리 확인
$ ls > 현재 디렉토리의 폴더, 파일 리스트
```
```
$ mkdir [폴더명] > 디렉토리 생성
$ touch [파일명] > 빈 파일 생성
$ git rm -rf [폴더명or파일명] > 폴더명or파일명 삭제
& git mv [현재파일명] [바꿀파일명] > 파일명 변경
```
```
$ cat [파일명] > 파일내용 확인
```

## add
* working directory에서 수정된 사항을 stage에 올려 tracking 해줌 (이때부터 변경사항 추적 시작)
```
$ git add [파일명] > git이 [파일명]의 변경사항을 추적하도록 명령
$ git add . > 모든 파일의 변경사항을 추적하도록 명령
```

## commit
* commit을 한다는 것은 작업을 하다가 되돌릴 수 있는 하나의 버전을 만드는 것과 같다.
* 때문에 수정된 사항들이 모여 의미있는 변화가 있을 때 commit 하는 것이 좋다. (불완전한 단위의 commit은 no!!)
```
$ git commit > stage에 올라온 파일 commit
$ git commit -m "메세지" > commit과 commit 메세지를 한번에 처리
$ git commit -am "메세지" > staging과 commit 한번에 처리
```
```
$ git log > commit history를 시간순으로 보여줌
```

## commit 되돌리기
* git revert (이전상태로 되돌리기)
```
// reset 보다는 revert (잘못한 이력도 commit으로 박제하고 수정한 이력을 남기자!)

$ git revet --no-commit HEAD~3.. > 바로 직전의 3개 commit을 순서대로 거슬러 올라감
$ git commit > 거슬러 올라간 내역에 대해 commit
$ git push origin [브랜치명] > 해당 내역을 원격 저장소에 push
```
* git reset (가급적 사용하지 말것!)
```
// 다른 팀원의 commit log로 인해 파일이 살아나거나, 과거 히스토리가 사라져 commit log tracking이 힘들어질 수 있음

$ git reset --hard HEAD~3 > 바로 직전의 3개 commit을 강제로 삭제
$ git reset--hard ORIG_HEAD > commit 삭제를 잘못한 것을 바로 알아차렸을 경우, 딱 1번만 원래대로 되돌릴 수 있다.
$ git push -f origin [브랜치명] > commit을 강제로 삭제 후, 현재 상태를 강제로 원격 저장소에 push
```

## push
* commit 된 파일을 원격 저장소 저장
* push 너무 자주하지 말고 commit으로 쌓아놧다가 요청 올 때 하기 (실수했을 경우 히스토리 지저분해짐)
```
$ git remote > 원격 저장소 이름(origin) 확인
$ git remote -v > 원격 저장소 이름과 url 확인
$ git remote add origin [원격저장소 주소] > 원격저장소 주소를 origin이라는 별칭으로 추가
```
```
$ git branch > branch 확인
$ git push origin [브랜치명] > commit된 파일을 원격 저장소(origin)의 [브랜치명]으로 옮겨주는 명령어
```

## fetch/pull
* 원격 저장소에서 파일 가져오기
```
$ git fetch origin [브랜치명] > 로컬 저장소로 가져오기 (부분만 선택적으로 가져올 수 있음)
```
```
$ git pull origin [브랜치명] > 로컬 저장소의 working directory로 가져옴과 동시에 병합 (부분만 가져오기 안됨)
```
## conflict
* 원격과 로컬 모두에서 동일한 파일, 동일한 부분에 변경이 일어나 push error가 발생한 경우
```
$ git pull origin [브랜치명] > 원격 저장소에서 먼저 내용을 당겨온 후 충돌나는 부분을 정리한 후
$ git push origin [브랜치명] > 충돌이 해결된 파일을 다시 원격에 push 해준다.
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

## 되돌리기
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
