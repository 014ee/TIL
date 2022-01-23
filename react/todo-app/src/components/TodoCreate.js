import React, {useState} from "react";
import styled, {css} from 'styled-components'
import {MdAdd} from 'react-icons/md'
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  width: 80px;
  height: 80px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 60px;
  color: white;
  z-index: 5;
  cursor: pointer;
  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const InsertForm = styled.form`
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  background: #f8f9fa;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
`;

function TodoCreate(){
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open)
  const onChange = (e) => setValue(e.target.value)
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type:'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      }
    })
    setValue('');
    setOpen(false);
    nextId.current += 1
  }


  return(
    <>
      {open &&
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input onChange={onChange} value={value} placeholder="할일을 입력 후, Enter를 누르세요." autoFocus/>
          </InsertForm>
        </InsertFormPositioner>
      }
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default React.memo(TodoCreate)