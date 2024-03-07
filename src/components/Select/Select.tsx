import React, { createContext, useContext, useRef } from 'react'
import useDetectClose from './hooks/useDetectClose'
import styled from 'styled-components'
import { createPortal } from 'react-dom'

function SelectLabel() {
  const selectState = useContext(SelectContext)
  return <Label>{selectState?.label}</Label>
}

const Label = styled.label`
  display: block;
  padding-bottom: 4px;
  font-weight: bold;
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

type SelectItemProps = {
  children?: React.ReactNode
  value: number
} & React.HTMLAttributes<HTMLDivElement>

function SelectItem({ children, value, ...props }: SelectItemProps) {
  const selectState = useContext(SelectContext)
  return (
    <SelectItemLi
      style={{ ...props }}
      onClick={() => {
        selectState?.onValueChange(value)
        selectState?.toggle()
      }}
    >
      {children}
    </SelectItemLi>
  )
}

const SelectItemLi = styled.li`
  padding: 12px;
  height: 24px;
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

type SelectRootProps = {
  children: React.ReactNode
  label: string
  value?: number
  onValueChange: (data: number) => void
} & React.HTMLAttributes<HTMLDivElement>

export type DetectTypes = {
  isOpen: boolean
  toggle: () => void
  elem: React.RefObject<any>
} & Omit<SelectRootProps, 'children'>

const SelectContext = createContext<DetectTypes | null>(null)

function SelectRoot({
  children,
  label,
  value,
  onValueChange,
}: SelectRootProps) {
  const elem = useRef<any>(null)
  const { isOpen, toggle } = useDetectClose({
    initialState: false,
    elem: elem,
  })
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

const Viewport = styled.div`
  position: relative;
`
