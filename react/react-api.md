# axios

* axios 라이브러리를 사용하여 간편하게 데이터를 받아올 수 있다.

```bash
npm i axios
```

```js
import React, {useState, useEffect} from "react";
import axios from 'axios'

function Users(){
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUsers = async () => {
    try {
      // 요청 시작할 때에는 error와 user 초기화하고
      setError(null)
      setUsers(null)
      // loading 상태를 true 로 바꾸기
      setLoading(true)
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      )
      setUsers(response.data) // 데이터는 response.data 안에 들어있다.
    } catch(e) {
      setError(e)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers()
  }, [])


  if (loading) return <div>로딩중..</div>
  if (error) return <div>에러가 발생하였습니다.</div>
  if (!users) return null

  return (
   <>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
    <button onClick={fetchUsers}>데이터 다시 불러오기</button>
  </>
  )
}

export default Users;
```
