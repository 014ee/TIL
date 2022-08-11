# HTTP Status

클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능

## 1XX(informational)

* 요청이 수신되어 처리

## 2XX(successful)

* 요청 정상 처
* 200 OK (요청 성공)
* 201 Created (요청 성공해서 새로운 리소스가 생성됨)
* 202 Accepted (요청이 접수되었으나 처리가 완료되지 않았)
* 204 No Content (서버가 요청을 성공적으로 수행했지만 응답 페이로드 본문에 보낼 데이터가 없)

## 3XX(redirection)

* 요청을 완료하려면 유저 에이전트의 추가 조치 필요&#x20;
* 웹브라우저는 3xx 응답 결과에 Location 헤더가 있으면, Location 위치로 자동 이동한다.

#### 영구 리다이렉션(경로가 완전히 바뀐 경우)

* 301 Moved Permanently (리다이렉션 후 재요청시 메서드가 GET으로 변하고 메세지 바디가 사라짐)
* 308 Permanent Redirect (리다이렉션 후 재요청시 메서드와 메세지 바디 유지)

#### 일시 리다이렉션(주문 완료 후 주문 내역 화면으로 이동)

* 리소스의 URI가 일시적으로 변되는 것이므로 검색엔진 등에서 URL을 변경하면 안
* 302 Found (리다이렉션시 후 재요청시 메서드가 GET으로 변하고 메세지 바디가 사라짐)
* 303 See Other (리다이렉션 후 재요청시 메서드와 메세지 바디 유지)
* 307 Temporary Redirect (리다이렉션 후 재요청시 메서드만 GET으로 변경)

#### PRG 패: Post/Redirect/Get

\=> 예를 들어 쇼핑 사이트에서 주문하기 버튼을 눌러 주문 요청을 보내고 응답까지 받은 상태에서 새로고침을 하면 동일한 주문이 또 들어가는 문제가 있다. (새로고침은 마지막 요청을 다시 실행시켜주기 때문에) 이 문제를 해결하기 위한 패턴이 PRG 이다. (기본적으로 클라이언트 측에서 )

해 결 방법

* Post로 주문 후에 주문 결과 화면을 GET 메서드로 리다이렉트
* 새로고침해도 결과 화면을 GET으로 조회 => 중복주문 대신 결과 화면만 get으로 다시 요

#### 특수 리다이렉션(결과 대신 캐시 사용)

* 300 Multiple Choices (거의 안)
* 304 Not Modified (캐시로 리다이렉트, 클라이언트에게 리소스가 수정되지 않았으므로 다시 데이터 줄 필요 없이 캐시 재사용하면 된다고 알려주는 목적)



## 4XX(client error)

* 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 수행할 수 없는 경우
* 클라이언트가 이미 잘못된 요청  데이터를 보내고 있기 때문에 똑같은 재시도를 할 경우 계속 실패
* 요청 파라미터 및  메세지 잘못되거나, API 스펙이 맞지 않는 등의 오류이므로 클라이언트는 요청 내용을 다시 검토하고 보내야함
* 401 Unauthorized (www-authenticate 헤더와 함께 인증 방법을 설명해야함-로그인을 하는 등 )
* 403 Forbidden (서버가 요청을 이해했지만 승인을 거부-관리자만 접근할 수 있는 경우 )
* 404 Not Found (요청 리소스가 서버에 없음 또는 클라이언트의 권한으로 접근할 수 없는 리소스에 접근해서 해당 리소스를 숨기고 싶을 )

## 5XX(server error)

* 서버 오류, 서버가 정상 요청을 처리하지 못하는 경우
* 서버에 문제가 있기 때문에 재시도 하면 성공할 수도 있
* 500 Internal Server Error (서버 문제로 발생한 오류로 애매하면 500으로 처리함)
* 503 Service Unavailable (서버가 일시적인 과부하 또는 예정된 작업으로 잠시 요청을 처리할 수 없는 경우 - 서비스 이용 불)




