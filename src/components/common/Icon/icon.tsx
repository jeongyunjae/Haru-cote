import React from 'react'
import * as svg from './svg'

export type IconType = keyof typeof svg

export type IconProps = {
  name: IconType
  className?: string
  onClick?: (value?: any) => void
}

export default function Icon({ name, className, onClick }: IconProps) {
  return React.createElement(svg[name], { className, onClick })
}
