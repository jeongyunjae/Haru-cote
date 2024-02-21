import React from 'react'
import { Select } from '../Select/Select'

export type DropdownProps = {
  label: string
  trigger: React.ReactNode
  options: number[]
  value: number
  onValueChange: (data: number) => void
} & React.HTMLAttributes<HTMLDivElement>

export default function Dropdown({
  label,
  trigger,
  options,
  value,
  onValueChange,
}: DropdownProps) {
  return (
    <Select label={label} value={value} onValueChange={onValueChange}>
      <Select.Label />
      <Select.Trigger as={trigger} />
      <div id={label} style={{ position: 'relative' }} />
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
