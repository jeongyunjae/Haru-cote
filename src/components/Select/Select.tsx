import React, { createContext, useContext, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import useDetectClose from './hooks/useDetectClose'

function SelectLabel() {
  const selectState = useContext(SelectContext)
  return <Label>{selectState?.label}</Label>
}

const Label = styled.label`
  display: block;
  padding-bottom: 6px;
  font-weight: var(--medium);
`

type SelectTriggerProps = {
  as: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SelectTrigger({ as }: SelectTriggerProps) {
  const selectState = useContext(SelectContext)
  return (
    <div
      onClick={(e) => {
        selectState?.toggle()
        e.stopPropagation()
      }}
    >
      {as}
    </div>
  )
}

type SelectViewportProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SelectViewport({ children }: SelectViewportProps) {
  return <Viewport>{children}</Viewport>
}

const Viewport = styled.div`
  position: relative;
`

type SelectContentProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SelectContent({ children }: SelectContentProps) {
  const selectState = useContext(SelectContext)
  const portalTarget = document.getElementById(selectState?.label || '')
  if (!selectState?.isOpen) return null
  return createPortal(children, portalTarget || document.body)
}

type SelectListProps = {
  children?: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

function SelectList({ children }: SelectListProps) {
  const selectState = useContext(SelectContext)
  return <SelectListUl ref={selectState?.elem}>{children}</SelectListUl>
}

const SelectListUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`

type SelectItemProps<T> = {
  children?: React.ReactNode
  value: T
} & React.HTMLAttributes<HTMLDivElement>

function SelectItem<T>({ children, value, ...props }: SelectItemProps<T>) {
  const selectState = useContext(SelectContext)
  return (
    <SelectItemLi
      style={{ ...props }}
      onClick={() => {
        selectState?.toggle()
        selectState?.onValueChange(value)
      }}
    >
      {children}
    </SelectItemLi>
  )
}

const SelectItemLi = styled.li`
  padding: 12px;
  height: 44px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: var(--gray400);
  }

  &.is_selected {
    background-color: var(--gray600);
  }
`

type SelectRootProps<T> = {
  children: React.ReactNode
  label: string
  value: T
  onValueChange: (data: T) => void
  onOpenChange: (data: boolean) => void
} & React.HTMLAttributes<HTMLDivElement>

export type DetectTypes<T> = {
  isOpen: boolean
  toggle: () => void
  elem: React.RefObject<any>
} & Omit<SelectRootProps<T>, 'children' | 'onOpenChange'>

const SelectContext = createContext<DetectTypes<any> | null>(null)

function SelectRoot<T>({
  children,
  label,
  value,
  onValueChange,
  onOpenChange,
}: SelectRootProps<T>) {
  const elem = useRef<any>(null)
  const { isOpen, toggle } = useDetectClose({
    initialState: false,
    elem: elem,
  })

  useEffect(() => {
    onOpenChange(isOpen)
  }, [isOpen, onOpenChange])

  return (
    <SelectContext.Provider
      value={{ isOpen, toggle, elem, label, value, onValueChange }}
    >
      {children}
    </SelectContext.Provider>
  )
}

export const Select = Object.assign(SelectRoot, {
  Label: SelectLabel,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Viewport: SelectViewport,
  List: SelectList,
  Item: SelectItem,
})
