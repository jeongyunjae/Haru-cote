import styled from 'styled-components'
import Dropdown from './Dropdown/Dropdown'
import Divider from './Divider/Divider'
import usePickStore from '../modules/pickStore/usePickStore'

const items: number[] = [0, 1, 2, 3, 4, 5]

export default function StartPickStep() {
  const {
    levelData: { level1Value, level2Value, level3Value },
    updateLevelData,
  } = usePickStore()

  return (
    <StartPickStepWrapper>
      <Dropdown<number, number>
        label='상 문제 수'
        options={items}
        value={level1Value}
        onValueChange={(myData: number) =>
          updateLevelData('level1Value', myData)
        }
      />
      <Divider />
      <Dropdown<number, number>
        label='중상 문제 수'
        options={items}
        value={level2Value}
        onValueChange={(myData: number) =>
          updateLevelData('level2Value', myData)
        }
      />
      <Divider />
      <Dropdown<number, number>
        label='중 문제 수'
        options={items}
        value={level3Value}
        onValueChange={(myData: number) =>
          updateLevelData('level3Value', myData)
        }
      />
    </StartPickStepWrapper>
  )
}

const StartPickStepWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
