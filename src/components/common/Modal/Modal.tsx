import React from 'react'
import classNames from 'classnames'
import { Portal } from '../Portal/Portal'
import { Dimmer } from '../Dimmer/Dimmer'
import Button, { ButtonProps } from '../Button/Button'
import styled, { css } from 'styled-components'
import { mediaQuery } from '../../../assets/styles/mediaQuery'

export type ModalPrimaryPropsType = Omit<
  ButtonProps,
  'size' | 'theme' | 'width' | 'soft' | 'fullWidth' | 'halfWidth'
> & {
  theme: 'fill_normal' | 'fill_danger'
}

export type ModalSecondaryPropsType = Omit<
  ButtonProps,
  | 'size'
  | 'theme'
  | 'width'
  | 'fill'
  | 'disabled'
  | 'loading'
  | 'fullWidth'
  | 'halfWidth'
> & {
  theme: 'soft_normal' | 'soft_mono'
}

export type ModalProps = {
  Title: React.ReactNode
  Description?: React.ReactNode
  open: boolean
  onClose: () => void
  primaryProps?: ModalPrimaryPropsType
  secondaryProps?: ModalSecondaryPropsType
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

// 버튼의 너비가 절반일 때 가능한 최대 레이블의 길이 (레이블의 길이는 띄어쓰기 제외 글자 길이로만 판단)
const MAX_HALF_LABEL_LENGTH = 4

export function Modal({
  Title,
  Description,
  open,
  onClose,
  primaryProps,
  secondaryProps,
  className,
  children,
  ...props
}: ModalProps) {
  const isFullWidth =
    !secondaryProps ||
    (primaryProps &&
      primaryProps.label.replace(/ /gi, '').length > MAX_HALF_LABEL_LENGTH) ||
    (secondaryProps &&
      secondaryProps.label.replace(/ /gi, '').length > MAX_HALF_LABEL_LENGTH)

  const classNameProps = classNames(isFullWidth && ['vertical'], className)

  const PrimaryButton = primaryProps ? (
    <Button
      id='modal__primary-button'
      fullWidth={isFullWidth}
      halfWidth={!isFullWidth}
      size='large'
      {...primaryProps}
    />
  ) : null

  const SecondaryButton = secondaryProps ? (
    <Button
      fullWidth={isFullWidth}
      halfWidth={!isFullWidth}
      size='large'
      {...secondaryProps}
    />
  ) : null

  if (!open) return null

  return (
    <Portal selector='#modal'>
      <Dimmer vertical='center' onClick={onClose}>
        <ModalWrapper
          className={classNameProps}
          onClick={(e) => e.stopPropagation()}
          {...props}
        >
          <header>{Title}</header>
          {Description && <div className='description'>{Description}</div>}
          {children}
          <footer>
            {isFullWidth ? (
              <>
                {PrimaryButton}
                {SecondaryButton}
              </>
            ) : (
              <>
                {SecondaryButton}
                {PrimaryButton}
              </>
            )}
          </footer>
        </ModalWrapper>
      </Dimmer>
    </Portal>
  )
}

const ModalWrapper = styled.div`
  width: 412px;
  border-radius: 16px;
  background-color: var(--gray0);
  overflow: hidden;

  & > header {
    width: 100%;
    padding: 24px 16px;
    box-sizing: border-box;
    padding-bottom: 0;

    font-size: var(--h4);
    font-weight: var(--bold);
  }

  & > div.description {
    padding: 16px 16px 0px;
    font-size: var(--c1);
    color: var(--gray600);
  }

  & > {
  }
  & > footer {
    width: 100%;
    padding: 32px 16px 16px 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  &.vertical {
    & > footer {
      flex-direction: column;
    }
  }

  ${mediaQuery('mobile')(css`
    width: 312px;
  `)}
`
