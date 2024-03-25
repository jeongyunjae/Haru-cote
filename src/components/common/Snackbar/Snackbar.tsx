import React, { useEffect } from 'react'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import { Portal } from '../Portal/Portal'
import { mediaQuery } from '../../../assets/styles/mediaQuery'
import { float } from '../../../assets/styles/animation'

export type SnackbarProps = {
  open: boolean
  onClose: () => void
  innerText: string
  buttonLabel?: string
  onButtonClick?: () => void
} & React.HTMLAttributes<HTMLDivElement>

// 버튼의 레이블이 길면 스낵바의 형태가 달라지는데 짧음의 기준이 되는 레이블 길이 (레이블의 길이는 띄어쓰기 제외 글자 길이로만 판단)
const MAX_SHORT_LABEL_LENGTH = 6

export function Snackbar({
  open,
  innerText,
  buttonLabel,
  onButtonClick,
  onClose,
  className,
  ...props
}: SnackbarProps) {
  const isLongButtonLabel =
    buttonLabel &&
    buttonLabel.replace(/ /gi, '').length > MAX_SHORT_LABEL_LENGTH

  const classNameProps = classNames(
    isLongButtonLabel && ['long-button'],
    open && open,
    !open && close,
    className
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose()
    }, 6000)

    if (open) timeout

    return () => {
      clearTimeout(timeout)
    }
  }, [open])

  if (!open) return null

  return (
    <Portal selector='#modal'>
      <SnackbarWrapper
        className={classNameProps}
        style={{
          ...props.style,
        }}
        {...props}
      >
        <span>{innerText}</span>
        {buttonLabel && <span onClick={onButtonClick}>{buttonLabel}</span>}
      </SnackbarWrapper>
    </Portal>
  )
}

const SnackbarWrapper = styled.div`
  width: 300px;
  padding: 16px;
  border-radius: 12px;
  background-color: var(--gray800);
  position: fixed;
  left: calc(50% - 150px);
  bottom: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${float} 0.3s ease-in-out;
  z-index: 9999;

  & > span {
    color: var(--gray0);
    &:nth-of-type(2) {
      cursor: pointer;
    }
  }

  & > div:first-child {
    width: 100%;
  }

  & > button {
    margin-left: 8px;
  }

  &.long-button {
    flex-direction: column;
    align-items: unset;

    & > button {
      margin-top: 8px;
      align-self: flex-end;
    }
  }

  &.open {
    animation: ${float} 0.3s ease-in-out;
    transform: translateY(0);
  }

  &.close {
    transform: translateY(50vh);
  }

  ${mediaQuery('mobile')(css`
    width: calc(100% - 32px);
  `)}
`
