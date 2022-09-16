# .gitignore

## .gitignore 이란?

{% hint style="info" %}
로컬 환경정보나 빌드정보와 같이 원격 저장소에 올라가 말아야 하는 것을을 입력하여 git 추적을 하지 않도록 해주는 파일로, 로젝트 작업 초기에 추가해주어야 한다.
{% endhint %}

## .gitignore 나중에 적용했을 때 &#x20;

{% hint style="info" %}
.gitignore 파일을 나중에 추가하여 .git이 모든 파일을 바라보고 있을 경우, 아래 명령어를 통해 원격 저장소 파일을 모두 제거 후 다시 push 해야 다.
{% endhint %}

```bash
git rm -r --cached .       // 원격 레포의 모든 파일 삭제
git add .
git commit -m "메세지"
git push origin [브랜치명]
```
