import React, { useState } from 'react'
import { Select } from '../Select/Select'
import InputButton from '../InputButton/InputButton'

export type DropdownProps<U, T> = {
  label: string
  options: U[]
  value: T
  onValueChange: (data: T) => void
} & React.HTMLAttributes<HTMLDivElement>

export default function Dropdown<U extends number, T extends number>({
  label,
  options,
  value,
  onValueChange,
}: DropdownProps<U, T>) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Select<T>
      label={label}
      value={value}
      onValueChange={onValueChange}
      onOpenChange={(data) => setIsOpen(data)}
    >
      <Select.Label />
      <Select.Trigger
        as={
          <InputButton
            value={value}
            rightIconName={isOpen ? 'LineArrowUp' : 'LineArrowDown'}
          />
        }
      />

      <div id={label} />

      <Select.Content>
        <Select.Viewport>
          <Select.List>
            {options.map((data, _i) => {
              return (
                <Select.Item key={_i} value={data}>
                  {data}
                </Select.Item>
              )
            })}
          </Select.List>
        </Select.Viewport>
      </Select.Content>
    </Select>
  )
}
