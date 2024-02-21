import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'
import InputButton from './InputButton/InputButton'

export type StartPickStepProps = {
  goToShow?: () => void
}

const items = [0, 1, 2, 3, 4]

export default function StartPickStep({ goToShow }: StartPickStepProps) {
  const [selectedLevels, setSelectedLevels] = useState<{
    level1: number
    level2: number
    level3: number
  }>({
    level1: items[0],
    level2: items[0],
    level3: items[0],
  })

  const handleLevel1Change = (value: number) => {
    setSelectedLevels({ ...selectedLevels, level1: value })
  }

  const handleLevel2Change = (value: number) => {
    setSelectedLevels({ ...selectedLevels, level2: value })
  }

  const handleLevel3Change = (value: number) => {
    setSelectedLevels({ ...selectedLevels, level3: value })
  }
  return (
    <StartPickStepWrapper>
      <Dropdown
        label='하'
        trigger={<InputButton value={selectedLevels.level1} />}
        options={items}
        value={selectedLevels.level1}
        onValueChange={handleLevel1Change}
      />
      <Dropdown
        label='중'
        trigger={<InputButton value={selectedLevels.level2} />}
        options={items}
        value={selectedLevels.level2}
        onValueChange={handleLevel2Change}
      />
      <Dropdown
        label='중상'
        trigger={<InputButton value={selectedLevels.level3} />}
        options={items}
        value={selectedLevels.level3}
        onValueChange={handleLevel3Change}
      />
    </StartPickStepWrapper>
  )
}

const StartPickStepWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`
