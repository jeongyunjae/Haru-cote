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
      <Dropdown
        label='상 문제 수'
        options={items}
        value={level1Value}
        onValueChange={(value: number | string) =>
          updateLevelData('level1Value', Number(value))
        }
        valueLabel='문제'
      />
      <Divider />
      <Dropdown
        label='중상 문제 수'
        options={items}
        value={level2Value}
        onValueChange={(value: number | string) =>
          updateLevelData('level2Value', Number(value))
        }
        valueLabel='문제'
      />
      <Divider />
      <Dropdown
        label='중 문제 수'
        options={items}
        value={level3Value}
        onValueChange={(value: number | string) =>
          updateLevelData('level3Value', Number(value))
        }
        valueLabel='문제'
      />
    </StartPickStepWrapper>
  )
}

const StartPickStepWrapper = styled.section`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome 및 Safari에 대한 스크롤바 숨김 */
  }
`
