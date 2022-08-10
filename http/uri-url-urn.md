# URI-URL-URN

## URI (Uniform Resource Identifier)

* 로케이터(locator), 이름(name) 또는 둘 다 추가로 분류될 수 있다.
* Uniform: 리소스를 식별하는 통일된 방식
* Resource: URI로 식별할 수 있는 모든 것 (자원)
* Identifier: 다른 항목과 구분하는데 필요한 정보

포트명을 직접 기입하지 않으면 웹 브라우져가 미리 약속한 80, 443 포트를 사용합니다. 이것은 HTTP, HTTPS의 포트를 이것으로 사용하겠다는 표준화가 되어 있기 때문에 가능한 것이지요.

![](<../.gitbook/assets/image (3).png>)

![](<../.gitbook/assets/image (4).png>)

## URL (Uniform Resource Locator)

* 리소스가 있는 위치를 지정
*
*
* cf. 서버는 80번 포트를 사용하는 것이 관례이기에 사용자가 URL뒤에 포트 번호를 생략할 경우 80번을 기본값으로 사용합니다.

![](<../.gitbook/assets/image (13) (1).png>)

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

\[응용 계층 -> 전송 계층 -> 네트워크 계층 -> 데이터 링크 계층 -> 물리 계층] 의 순서를 거쳐 인터넷망을 통해 수신측에 전달

수신측에서는 이 헤더를 역순으로 하나씩 거치며 최종 데이터를 확인합니다.

1. 검색창에 웹사이트 주소 입력 후 엔터를 치면
2. 프로토콜과 DNS를 조회해서 포트 번호와 IP 주소를 알아냄
3. HTTP 요청 메세지 생성한  ex. GET /search?q=hello\&hl=ko HTTP/1.1 HOST: www.google.com
4. socket 라이브러리(지속적인 연결)를 통해 데이터를 TCP/IP 계층(OS)으로 내려보낸 후  3 way handshake를 해서 TCP/IP 연결이 가능한지 물리계층을 통해 인터넷망에 전달해서 먼저 확인 (내가 요청 보낼 곳과 연결할 수 있는지를 체크하는 로직)
5. 연결이 가능하다면 HTTP 메세지를 포함한 TCP/IP 패킷을 생성 후 물리계층을 통해 인터넷망에 전달
6. 인터넷 망의 최적의 경로를 통해 이동하고, 구글 서버에서 TCP/IP 패킷을 받음&#x20;
7. 전달받은 패킷에서 HTTP 메세지를 꺼낸 후 해석
8. HTTP 응답 메시지를 생성 후 동일한 방식으로 응답 패킷을 만들어서 인터넷망을 통해 전달
9. 클라이언트에 HTTP 응답 패킷이 도착하면 브라우저가 데이터 꺼내서 보여줌

![](<../.gitbook/assets/image (2).png>)



* 모바일의 경우 중간에 IP가 변경되는 경우가 잦기 때문에 실제 개발을 할 때 이런 부분을 염두해두어야 하며 보통 로그인 토큰(쿠키)정보를 활용해서 해결다.

웹 초창기에는 모든 데이터에 이 3-way handshake를 해야 했기에 효율이 매우 나빴습니다. 그래서 HTTP/1.1 부터는 'HTTP 지속 연결 상태'(persistence connection) 이라는 개념을 도입, 모든 바이트에 3-way handshake를 하는 것이 아니라 최초에 핸드쉐이크를 하고 이후에는 계속 연결을 유지하는 방식을 도입하였습니다. 모든 연결이 끝났을때 헤더에 연결 종료를 알림으로써 TCP 연결을 끊는 식입니다. (이 지속 연결 상태 동안은 클라이언트와 서버가 연결되어 있는 상태입니다.)

.\
이 HTTP 지속 연결 상태를 기반으로 HTTP 파이프라이닝 이라는 기술도 같이 적용되었습니다. 이는 한번 연결된 TCP 연결을 기반으로 여러개의 요청을 '병렬' 요청함으로써 FIFO 방식 처리의 단점인 지연(latency) 문제를 해결하였습니다.&#x20;

.

이후 HTTP/2.0 에서는 최초 TCP 연결 이후 스트림(stream) 방식으로 여러 요청을 처리하는 멀티플렉싱 기능을 도입하여 더욱 속도 향상을 이루었고, HTTP/3.0에서는 아예 TCP가 아닌 UDP 방식으로 데이터를 전송함으로써 3-way handshake를 아예 하지 않아도 되는 식으로 발전하고 있습니다.
