# module

### 내보내기

* 하나의 파일에서 여러 데이터를 내보낼 수 있다. (default, named를 한 파일에 작성 가능)
* `Default export` 이름을 따로 지정하지 않아도 기본 통로로 빠져나감

```js
export default function(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```

```js
export default function getType(data) {
 return Object.prototype.toString.call(data).slice(8, -1)
}
```

* `Named export` 이름을 지정해서 내보내야 함

```js
export function random() {
 return Math.floor(Math.random() * 10)
}
```

### 가져오기

* `Default import` default 또는 아무 이름으로 받아올 수 있음

```js
import defalt from './getType.js'
import getType from './getType.js'
import _ from 'lodash' // From 'node modules'
```

* `Named import` 중괄호 사이에 지정한 이름을 입력하여 받아올 수 있음

```js
import {random} from './getRandom.js'
```

* 실행할 이름 바꾸고 싶으면 {이름 as 바꾸고 싶은 이름}

```js
import {random as getRandom} from './getRandom.js'
```

* 한 파일에서 이름이 지정된 여러 export 데이터를 가져올 경우 {이름, 이름}

```js
import {getType, random} from './export.js'
```

* 한 파일에 있는 모든 export 데이터를 가져와 하나의 이름으로 실행하고 싶을 때

```js
import * as 이름 from './export.js'
```
