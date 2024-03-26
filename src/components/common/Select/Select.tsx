import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon/icon'

export type SelectProps = {
  label: string
  options: (string | number)[]
  value: number | string
  valueLabel?: string
  onValueChange: (data: string) => void
} & React.HTMLAttributes<HTMLDivElement>

export default function Select({
  label,
  options,
  value,
  valueLabel = '',
  onValueChange,
}: SelectProps) {
  return (
    <>
      <label>{label}</label>
      <SelectWrapper>
        <Icon name='LineArrowDown' />

        <OptionsWrapper
          value={value}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            onValueChange(e.target.value)
          }}
        >
          {options.map((data, _i) => {
            return (
              <option key={_i} value={data}>
                {`${data}${valueLabel}`}
              </option>
            )
          })}
        </OptionsWrapper>
      </SelectWrapper>
    </>
  )
}

const SelectWrapper = styled.div`
  position: relative;

  & > svg {
    & > path {
      fill: var(--gray600);
    }
    position: absolute;
    top: 18px;
    right: 8px;
    z-index: 21;
  }
`

const OptionsWrapper = styled.select`
  position: relative;

  width: 100%;
  height: 44px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 8px;

  display: flex;
  align-items: center;
  font-size: var(--p1);
  font-weight: var(--medium);
  color: var(--gray800);

  border: 1px solid var(--gray400);
  border-radius: 12px;
  background-color: var(--gray0);

  transition: background-color 0.2s ease;

  z-index: 20;
  cursor: pointer;

  &:hover {
    background-color: var(--gray200);
  }

  &:focus {
    outline: none;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`
