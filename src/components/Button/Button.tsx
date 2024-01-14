import React from 'react'
import styled from 'styled-components'
import { useButtonHook } from './useButtonHook'
import Icon, { IconType } from '../Icon/icon'

export type ButtonSizeType = 'large-block' | 'large' | 'medium' | 'small'

export type ButtonProps = {
  label: string
  size: ButtonSizeType
  theme: 'fill_normal' | 'fill_danger' | 'soft_normal' | 'soft_mono'
  disabled?: boolean
  loading?: boolean
  width?: string
  fullWidth?: boolean
  halfWidth?: boolean
  leftIconName?: IconType
  rightIconName?: IconType
  type?: 'button' | 'submit' | 'reset'
} & React.HTMLAttributes<HTMLButtonElement>

export default function Button({ ...props }: ButtonProps) {
  const { type, disabled, loading, width, leftIconName, label, rightIconName } =
    props

  const {
    classNameProps,
    handleMouseDown,
    handleMouseUp,
    handleTouchEnd,
    handleTouchStart,
    handleMouseOver,
    handleMouseOut,
  } = useButtonHook(props)

  return (
    <ButtonWrapper
      className={classNameProps}
      type={type ?? 'button'}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      disabled={disabled || loading}
      style={{ width, minWidth: width, ...props.style }}
      {...props}
    >
      {loading ? (
        <Icon name='Logo' />
      ) : (
        <>
          {leftIconName && <Icon name={leftIconName} />}
          {label}
          {rightIconName && <Icon name={rightIconName} />}
        </>
      )}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.button`
  font-weight: 600;
  border: none;
  outline: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  white-space: nowrap;

  // 버튼 타입
  &.fill_normal {
    background-color: var(--yellow400);
    color: var(--gray0);
    &.active {
      background-color: var(--yellow500);
    }
  }

  &.fill_danger {
    background-color: var(--red400);
    color: var(--gray0);

    &.active {
      background-color: var(--red500);
    }
  }

  &.soft_normal {
    background-color: var(--yellow100);
    color: var(--yellow700);

    &.active {
      background-color: var(--yellow200);
    }
  }

  &.soft_mono {
    background-color: var(--gray200);
    color: var(--gray800);

    &.active {
      background-color: var(--gray300);
    }
  }

  // 버튼 사이즈
  &.large-block,
  &.large {
    height: 48px;
    padding: 0 32px;
    font-size: var(--p1);
    line-height: var(--p1LineHeight);
    border-radius: 16px;
  }

  &.large-block {
    width: 240px;
    min-width: 240px;
  }

  &.medium {
    height: 40px;
    padding: 0 24px;
    font-size: var(--p1);
    line-height: var(--p1LineHeight);
    border-radius: 12px;
  }

  &.small {
    height: 32px;
    padding: 0 16px;
    font-size: var(--c1);
    line-height: var(--c1LineHeight);
    border-radius: 12px;
  }

  // 너비 설정
  &.full-width {
    width: 100%;
  }

  &.half-width {
    width: 50%;
  }

  // 버튼 안에 아이콘이 있을 때
  &.icon_left > svg {
    margin-right: 8px;
  }

  &.icon_right > svg {
    margin-left: 8px;
  }

  // 버튼의 상태
  &:disabled {
    background-color: var(--gray200);
    color: var(--gray400);
    cursor: not-allowed;
  }

  &.loading {
    & > svg {
      animation: rotate 1s linear infinite;
      margin: 0;
    }
  }

  // 버튼 다음에 바로 버튼이 사용될 경우
  & + & {
    margin-left: 8px;
  }

  &.full-width {
    & + & {
      margin: 0;
      margin-top: 8px;
    }
  }
`
