# URI-URL-URN

## URI (Uniform Resource Identifier)

* 로케이터(locator), 이름(name) 또는 둘 다 추가로 분류될 수 있다.
* Uniform: 리소스를 식별하는 통일된 방식
* Resource: URI로 식별할 수 있는 모든 것 (자원)
* Identifier: 다른 항목과 구분하는데 필요한 정보

포트명을 직접 기입하지 않으면 웹 브라우져가 미리 약속한 80, 443 포트를 사용합니다. 이것은 HTTP, HTTPS의 포트를 이것으로 사용하겠다는 표준화가 되어 있기 때문에 가능한 것이지요.

![](<../.gitbook/assets/image (3).png>)

![](../.gitbook/assets/image.png)

## URL (Uniform Resource Locator)

* 리소스가 있는 위치를 지정
*
*
* cf. 서버는 80번 포트를 사용하는 것이 관례이기에 사용자가 URL뒤에 포트 번호를 생략할 경우 80번을 기본값으로 사용합니다.

![](<../.gitbook/assets/image (13).png>)

![](<../.gitbook/assets/image (5).png>)

![](<../.gitbook/assets/image (11).png>)

![](<../.gitbook/assets/image (9).png>)

![](<../.gitbook/assets/image (6).png>)

![](<../.gitbook/assets/image (12).png>)

![](<../.gitbook/assets/image (8).png>)

![](<../.gitbook/assets/image (10).png>)







## URN (Uniform Resource Name)

* 리소스에 이름을 부여
* URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화되지 않아서 거의 쓰이지 않는다.



## 웹에서 데이터가 전달되는 과정

1. DNS를 조회해서 IP를 알아냄
2. 프로토콜을 통해 포트정보를 알아냄
3. HTTP 요청 메세지(데이터)를 생성함\
   ex. GET /search?q=hello\&hl=ko HTTP/1.1 HOST: www.google.com
4. IP와 Port를 가지고 3 way handshake를 해서 TCP/IP 연결이 가능한지 확인한 후
5. socket 라이브러리를 통해 HTTP 요청 메세지 TCP/IP 계층(OS)에 전달
6. HTTP 메세지를 포함한 TCP/IP 패킷 생성 후 인터넷망을 통해 전달
7. 구글 서버에서 TCP/IP 패킷을 받음
8. 전달받은 패킷에서 HTTP 메세지를 꺼낸 후 해석 후 데이터를 추출
9. HTTP 응답 메시지를 생성 후 응답 패킷을 만들어서 인터넷망을 통해 전달
10. 클라이언트에서 HHTP 응답 메시지를 받을 후 그 안에서 요청한 데이터 꺼내서 보여

![](<../.gitbook/assets/image (2).png>)

