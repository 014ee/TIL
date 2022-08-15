# URI-URL-URN

![](<../.gitbook/assets/1 (1).png>)

![](<../.gitbook/assets/1 (2).png>)

## URI (Uniform Resource Identifier)

{% hint style="info" %}
로케이터(locator), 이름(name) 또는 둘 다 추가로 분류될 수 있다.
{% endhint %}

* **U**niform: 리소스를 식별하는 통일된 방식
* **R**esource: URI로 식별할 수 있는 모든 것 (자원)
* **I**dentifier: 다른 항목과 구분하는데 필요한 정보



## URL (Uniform Resource Locator)

{% hint style="info" %}
리소스가 있는 위치를 지정한다.
{% endhint %}

![](<../.gitbook/assets/image (13).png>)

![](<../.gitbook/assets/image (5).png>)

![](<../.gitbook/assets/image (11).png>)

![](<../.gitbook/assets/image (9).png>)

![](<../.gitbook/assets/image (6).png>)

![](<../.gitbook/assets/image (12).png>)

![](<../.gitbook/assets/image (8) (2).png>)

![](<../.gitbook/assets/image (10) (1).png>)



## URN (Uniform Resource Name)

{% hint style="info" %}
리소스에 이름을 부여한다. URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않아서 거의 쓰이지 않는다.
{% endhint %}



## 웹에서 데이터가 전달되는 과정

{% hint style="info" %}
\[응용 계층 -> 전송 계층 -> 네트워크 계층 -> 데이터 링크 계층 -> 물리 계층] 의 순서를 거쳐 인터넷망을 통해 수신측에 전달한다. 수신측에서는 헤더를 역순으로 하나씩 거치며 최종 데이터를 확인한다. 모바일의 경우 중간에 IP가 변경되는 경우가 잦기 때문에 실제 개발을 할 때 이런 부분을 염두해두어야 하며 보통 로그인 토큰(쿠키)정보를 활용해서 해결한다.
{% endhint %}

1. 검색창에 웹사이트 주소 입력 후 엔터를 치면
2. 프로토콜을 통해 포트 번호를, DNS를 조회해서 IP 주소를 알아낸 후 HTTP 요청 메세지 생성
3. socket 라이브러리(지속적인 연결)를 통해 데이터를 TCP/IP 계층(OS)으로 내려보냄
4. 3 way handshake를 통해 TCP/IP 연결이 가능한지 물리계층을 거쳐 먼저 확인 (이 때 헤더만 전달)&#x20;
5. 연결이 가능하다면 HTTP 바디를 포함한 TCP/IP 패킷을 생성 후 물리계층을 거쳐 전달
6. 인터넷 망의 최적의 경로를 통해 TCP/IP 패킷이 서버에 전송됨&#x20;
7. 서버는 전달받은 패킷에서 HTTP 메세지를 꺼낸 후 해석
8. HTTP 응답 메시지를 생성 후 동일한 방식으로 응답 패킷을 만들어서 인터넷망을 통해 전달
9. 클라이언트에 HTTP 응답 패킷이 도착하면 브라우저가 데이터 꺼내서 보여줌

![](<../.gitbook/assets/1 (3).png>)
