# Life Cycle

## Class 라이프 사이

{% hint style="info" %}
컴포넌트가 브라우저 어딘가에 그려지는 순간부터 사라지는 순간을 말한다. 이를 활용 불필요한 재랜더를 방지하고 성능을 최적화시킬 수 있다.
{% endhint %}

## v16.3 이전 라이프사이클

|   Initialization   |      Mounting      |      Updating - Props     |   Updating - States   |      Unmounting      |
| :----------------: | :----------------: | :-----------------------: | :-------------------: | :------------------: |
| setup props, state |  compnentWillMount | componentWillReceivePorps |           -           | componentWillUnmount |
|          -         |       render       |   shouldComponentUpdate   | shouldComponentUpdate |           -          |
|          -         | componentDidMouont |    componentWillUpdate    |  componentWillUpdate  |           -          |
|          -         |          -         |           render          |         render        |           -          |
|          -         |          -         |     componentDidUpdate    |   componentDidUpdate  |           -          |

## v16.3 이후 라이프사이클

|          v16.3이전         |  vs |          v16.3이후         |
| :----------------------: | :-: | :----------------------: |
|    componentWillMount    |  != | getDerivedStateFromProps |
| componentWillReviceProps |  != | getDerivedStateFromProps |
|    componentWillUpdate   |  != |  getSnapshotBeforeUpdate |
