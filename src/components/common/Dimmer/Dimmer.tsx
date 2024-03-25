import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { fadeIn, fadeOut } from '../../../assets/styles/animation'

export type DimmerProps = {
  children: React.ReactNode
  vertical: 'top' | 'center' | 'bottom'
  horizontal?: 'left' | 'middle' | 'right'
  fadeOut?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function Dimmer({
  children,
  vertical,
  horizontal,
  fadeOut,
  className,
  ...props
}: DimmerProps) {
  const classNameProps = classNames(
    [vertical],
    horizontal ? [horizontal] : ['middle'],
    fadeOut && ['fade-out'],
    className
  )

  return (
    <DimmerWrapper className={classNameProps} {...props}>
      {children}
    </DimmerWrapper>
  )
}

const DimmerWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: flex;
  animation: ${fadeIn} 0.3s ease-in-out;

  &.top {
    align-items: flex-start;
  }

  &.center {
    align-items: center;
  }

  &.bottom {
    align-items: flex-end;
  }

  &.left {
    justify-content: flex-start;
  }

  &.middle {
    justify-content: center;
  }

  &.right {
    justify-content: flex-end;
  }

  &.fade-out {
    animation: ${fadeOut} 0.3s ease-in-out;
  }
`
