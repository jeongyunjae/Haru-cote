import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/icon'
import classNames from 'classnames'

export type MemberButtonProps = {
  memberId: number
  label: string
  isChecked: boolean
  onChange: () => void
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>

export default function MemberButton({
  memberId,
  label,
  disabled,
  onChange,
  isChecked,
  ...props
}: MemberButtonProps) {
  const classNameProps = classNames(isChecked && 'checked', props.className)

  return (
    <MemberButtonWrapper
      className={classNameProps}
      disabled={disabled}
      onClick={onChange}
    >
      <input type='checkbox' />
      <label>
        {isChecked && <Icon name='Check' />}
        {label}
      </label>
    </MemberButtonWrapper>
  )
}

const MemberButtonWrapper = styled.button`
  transition: all 0.1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 32px;

  font-size: var(--c2);
  font-weight: var(--medium);
  line-height: var(--c2LineHeight);

  border: 1px solid var(--gray600);
  border-radius: 16px;
  background-color: var(--gray0);
  cursor: pointer;

  & > input {
    display: none;
  }

  &.checked {
    border: 1px solid var(--blue400);
    border-radius: 16px;
    background-color: var(--blue100);
    color: var(--blue400);
  }

  & > label {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > svg {
      width: 18px;
      margin-right: 6px;
    }
  }
`
