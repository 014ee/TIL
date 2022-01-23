import React from "react"
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 512px;
  height: 768px;
  margin: 96px auto 32px;
  box-shadow: 0 0 8px 0 rgba(0,0,0,.04);
  border-radius: 16px;
  background: #fff;
`

export default function TodoTemplate ({children}){
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

