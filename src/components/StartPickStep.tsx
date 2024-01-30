import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'

export type StartPickStepProps = {
  goToShow?: () => void
}

const items = ['0', '1', '2', '3', '4']

export default function StartPickStep({ goToShow }: StartPickStepProps) {
  const [selectedLevel1, setSelectedLevel1] = useState<string>(items?.[0])
  const [selectedLevel2, setSelectedLevel2] = useState<string>(items?.[0])
  const [selectedLevel3, setSelectedLevel3] = useState<string>(items?.[0])
  const [selectedLevel4, setSelectedLevel4] = useState<string>(items?.[0])

  return (
    <StartPickStepWrapper>
      <Dropdown
        label='윤재꺼'
        trigger={<div>안녕</div>}
        options={items}
        value={selectedLevel1}
        onValueChange={setSelectedLevel1}
      />
      <Dropdown
        label='또잉'
        trigger={<div>안녕스</div>}
        options={items}
        value={selectedLevel2}
        onValueChange={setSelectedLevel2}
      />

      {/* <Select
        label='Level 1'
        value={selectedLevel1}
        onValueChange={setSelectedLevel1}
        trigger={<div>{selectedLevel1}</div>}
        options={items}
      />
      <Select
        label='Level 2'
        value={selectedLevel2}
        onValueChange={setSelectedLevel2}
        trigger={<div>{selectedLevel2}</div>}
        options={items}
      /> */}
      {/* <Select
        label='Level 3'
        value={selectedLevel3}
        onValueChange={setSelectedLevel3}
        trigger={<div>{selectedLevel3}</div>}
        options={items}
      />
      <Select
        label='Level 4'
        value={selectedLevel4}
        onValueChange={setSelectedLevel4}
        trigger={<div>{selectedLevel4}</div>}
        options={items}
      /> */}
    </StartPickStepWrapper>
  )
}

const StartPickStepWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`
