import React from 'react'
import styled from 'styled-components'

export type InputButtonProps = {
  value: string | number
  placeholder?: string
} & React.HTMLAttributes<HTMLDivElement>

export default function InputButton({
  value,
  placeholder = '선택해주세요..',
}: InputButtonProps) {
  return (
    <InputButtonWrapper>
      <input placeholder={placeholder} value={`${value}개`} readOnly />
    </InputButtonWrapper>
  )
}

const InputButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  & > input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: var(--blue600);
      outline: none;
    }
  }
`
