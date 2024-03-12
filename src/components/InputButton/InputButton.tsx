import React from 'react'
import styled from 'styled-components'
import Icon, { IconType } from '../Icon/icon'
import classNames from 'classnames'

export type InputButtonProps = {
  value: string | number
  placeholder?: string
  leftIconName?: IconType
  rightIconName?: IconType
} & React.HTMLAttributes<HTMLDivElement>

export default function InputButton({
  value,
  placeholder = '선택해주세요..',
  leftIconName,
  rightIconName,
}: InputButtonProps) {
  const classNameProps = classNames(
    leftIconName && 'icon_left',
    rightIconName && 'icon_right'
  )
  return (
    <InputButtonWrapper>
      <input
        className={classNameProps}
        placeholder={placeholder}
        value={value}
        readOnly
      />
      {leftIconName && <Icon name={leftIconName} />}
      {rightIconName && <Icon name={rightIconName} />}
    </InputButtonWrapper>
  )
}

const InputButtonWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: var(--gray0);
  transition: all 0.2s ease;
  border-radius: 12px;
  z-index: 20;
  cursor: pointer;
  &:hover {
    background-color: var(--gray200);
  }

  & > input {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-weight: var(--medium);
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 12px;
    background-color: inherit;
    cursor: inherit;

    &:focus {
      border-color: var(--blue600);
      outline: none;
    }
  }

  & > svg {
    position: absolute;
    right: 10px;
    stroke: green;
  }
  // 버튼 안에 아이콘이 있을 때
  &.icon_left > svg {
    margin-right: 8px;
  }

  &.icon_right > svg {
    margin-left: 8px;
  }
`
