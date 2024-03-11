import { useState } from 'react'
import classNames from 'classnames'
import { ButtonProps } from './Button'

export function useButton({
  size,
  theme,
  disabled,
  loading,
  fullWidth,
  halfWidth,
  leftIconName,
  rightIconName,
  onTouchStart,
  onTouchEnd,
  onMouseDown,
  onMouseUp,
  onMouseOver,
  onMouseOut,
  className,
}: Omit<ButtonProps, 'label'>) {
  const [isActive, setIsActive] = useState<boolean>(false)

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    if (onTouchStart) onTouchStart(e)
    setIsActive(true)
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (disabled || loading) return
    if (onTouchEnd) onTouchEnd(e)
    setIsActive(false)
  }

  const handleMouseDown = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled || loading) return
    if (onMouseDown) onMouseDown(e)
    setIsActive(true)
  }

  const handleMouseUp = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled || loading) return
    if (onMouseUp) onMouseUp(e)
    setIsActive(false)
  }

  const handleMouseOver = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled || loading) return
    if (onMouseOver) onMouseOver(e)
    setIsActive(true)
  }

  const handleMouseOut = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (disabled || loading) return
    if (onMouseOut) onMouseOut(e)
    setIsActive(false)
  }

  const classNameProps = classNames(
    [size],
    [theme],
    isActive && 'active',
    loading && 'loading',
    leftIconName && 'icon_left',
    rightIconName && 'icon_right',
    halfWidth && 'half_width',
    fullWidth && 'full_width',
    className
  )

  return {
    isActive,
    classNameProps,
    setIsActive,
    handleMouseDown,
    handleMouseUp,
    handleTouchEnd,
    handleTouchStart,
    handleMouseOver,
    handleMouseOut,
  }
}
