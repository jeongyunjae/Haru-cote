import classNames from 'classnames'
import React from 'react'
import styled from 'styled-components'

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  marginType?: 'small' | 'medium' | 'large'
} & React.HTMLAttributes<HTMLButtonElement>

export default function Divider({
  orientation = 'horizontal',
  marginType = 'medium',
  ...props
}: DividerProps) {
  const classNameProps = classNames([orientation], [marginType])
  return <HrWrapper className={classNameProps} style={{ ...props }} />
}

const HrWrapper = styled.hr`
  background-color: var(--gray400);
  border: none;

  &.horizontal {
    width: 100%;
    min-height: 1px;

    &.small {
      margin: 16px 0px;
    }

    &.medium {
      margin: 24px 0px;
    }

    &.large {
      margin: 32px 0px;
    }
  }

  &.vertical {
    min-width: 1px;
    height: 100%;

    &.small {
      margin: 0px 16px;
    }

    &.medium {
      margin: 0px 24px;
    }

    &.large {
      margin: 0px 32px;
    }
  }
`
