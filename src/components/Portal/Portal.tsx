import React from 'react'
import { createPortal } from 'react-dom'

export type PortalProps = {
  children: React.ReactNode
  selector: string
}

export function Portal({ children, selector }: PortalProps) {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector)
  return element && children ? createPortal(children, element) : null
}
