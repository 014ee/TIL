# Git Command

## git 초기설정

{% hint style="info" %}
\~/.gitconfig에 저장된다.
{% endhint %}

```bash
git config --global core.autocrlf true         // 개행문자로 인한 변경 감지 방지
git config --global user.name 'github 아이디'   // 사용자 아이디 등록
git config --glabal user.email 'github 이메일'  // 사용자 이메일 등록
git config --global core.editor vim            // vim 에디터 사용 등록
git config --list                              // 설정 확
```

```bash
git config —unset —global user.name            // 잘못 등록한 user.name 삭제
```

## git 버전관리 시작

```bash
git init                   // 프로젝트를 새롭게 시작하는 경우
git clone [원격 레포 URL]   // 원격 레포에 있는 프로젝트를 가져오는 경우
```

## git 파일 생성/수정/삭제

```bash
mkdir [폴더명]                 // 디렉토리 생성
touch [파일명]                 // 빈 파일 생성
git rm -rf [폴더명or파일명]     // 폴더명or파일명 삭제
git mv [현재파일명] [바꿀파일명] // 파일명 변경
```

## git status

```bash
git status    
```

* on branch main: 현재 main branch라는 뜻
* no commits yet: 아직 commit한 파일이 없음
* nothing to comit: 현재 commit할 파일이 없음
* untracked files: 한번도 버전관리 하지 않은 파일이 존재함
* changes to be committed: commit 가능
* changes not staged for commit: 변경된 파일이 아직 스테이지에 올라가지 않음

## git add

{% hint style="info" %}
working directory에서 수정된 사항을 stage에 올려 변경사항을 추적해줌
{% endhint %}

```bash
$ git add [파일명]  // git이 특정 파일의 변경사항을 추적
$ git add .        // 모든 파일의 변경사항을 추적
```

## git commit

{% hint style="info" %}
commit을 한다는 것은 작업을 하다가 되돌릴 수 있는 하나의 버전을 만드는 것과 같다. 때문에 수정된 사항들이 모여 의미있는 변화가 있을 때 commit 을 해야 한다.
{% endhint %}

```bash
git commit             // stage에 올라온 파일 commit
git commit -m "메세지"  // commit과 commit 메세지를 한번에 처리
git commit -am "메세지" // staging과 commit 한번에 처리
```

## git fetch

{% hint style="info" %}
원격 저장소에서 로컬 저장소로 파일 가져오기 (부분만 선택적으로 가져올 수 있음)
{% endhint %}

```bash
git fetch origin [브랜치명] 
```

## git pull

{% hint style="info" %}
원격 저장소 파일을 로컬 저장소의 working directory로 가져옴과 동시에 병합
{% endhint %}

```bash
git pull origin [브랜치명] 
```

## git push

{% hint style="info" %}
협업시 git fetch나 git pull로 원격 레포에서 변경된 파일을 먼저 당겨온 후 충돌나는 부분을 정리해서 push 해야한다.
{% endhint %}

```bash
git remote -v  // 원격 저장소 이름과 url 확인
git branch     // branch 확인
git push origin [브랜치명] 
```

```bash
git remote add origin [원격저장소 주소] // 원격저장소 주소를 origin이라는 별칭으로 추가
```

## git revert

{% hint style="info" %}
commit을 되돌리기 할 때는 reset 보다는 revert 사용을 권장한다. reset을 하면 다른 팀원의 commit log로 인해 파일이 살아나거나, 과거 히스토리가 사라져 commit log tracking이 힘들어질 수 있기 때문이다.
{% endhint %}

```bash
git revet --no-commit HEAD~3.. // 직전의 3개 commit을 순서대로 거슬러 올라감
git commit > 거슬러 올라간 내역에 대해 commit
```

## git reset

```bash
git reset --hard HEAD~3        // 직전의 3개 commit을 강제로 삭제
git reset--hard ORING_HEAD     // commit 삭제를 잘못했을 경우 딱 1번만 되돌릴 수 있다.
git push -f origin [브랜치명]   // commit을 강제로 삭제 후, 강제로 원격 저장소에 push
```

## git rm -r cached .

{% hint style="info" %}
간혹 원격 레포의 파일을 지워야 할 때 사용한다.
{% endhint %}

```bash
git rm --cached 파일명      // 원격 레포의 파일명 삭제
git rm --cached -r 폴더명   // 원격 레포의 폴더명 삭
git rm -r cached .         // 원격 레포의 파일 모두 삭제
```
