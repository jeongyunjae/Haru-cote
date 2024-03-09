import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import StartPickStep from '../components/StartPickStep'
import ShowPickStep from '../components/ShowPickStep'
import { useFunnel } from '../components/Funnel/useFunnel'
import Button from '../components/Button/Button'
import usePickStore from '../modules/pickStore/usePickStore'
import practiceData from '../data/practiceTestData.json'

export type levelType = { value: number; isContentOpen: boolean }

export default function PickPage() {
  const navigate = useNavigate()
  const { Funnel, Step, currentStep, setStep } = useFunnel('문제 선정하기')
  const { levelData } = usePickStore()
  const [problemIdList, setProblemIdList] = useState<number[]>([])
  const sumOfLevels = Object.values(levelData).reduce(
    (acc, value) => acc + value,
    0
  )

  const handleChoiceButtonClick = useCallback(() => {
    let subset: number[] = []

    Object.values(levelData).forEach((count, _i) => {
      const filteringLevel = practiceData
        .filter(({ level, isSolved }) => level === _i + 1 && !isSolved)
        .map(({ problemNumber }) => problemNumber)

      const shuffled = [...filteringLevel]
      for (let i = shuffled.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[randomIndex]] = [
          shuffled[randomIndex],
          shuffled[i],
        ]
      }
      subset = [...subset, ...shuffled.slice(0, count)]
    })

    setProblemIdList([...subset])
    setStep('확정하기')
  }, [levelData, practiceData, setProblemIdList, setStep])

  return (
    <PageWrapper>
      <PickWrapper>
        <TitleWrapper>{currentStep}</TitleWrapper>

        <MainWrapper>
          <Funnel>
            <Step name='문제 선정하기'>
              <StartPickStep />
            </Step>
            <Step name='확정하기'>
              <ShowPickStep problemIdList={problemIdList} />
            </Step>
          </Funnel>
        </MainWrapper>

        <FooterWrapper>
          {currentStep === '문제 선정하기' ? (
            <Button
              label={`총 ${sumOfLevels}문제 선정하기`}
              size='medium'
              fullWidth
              onClick={handleChoiceButtonClick}
              theme='fill_normal'
              disabled={sumOfLevels !== 5}
            />
          ) : (
            <>
              <Button
                label='뒤로가기'
                size='medium'
                theme='soft_mono'
                onClick={() => setStep('문제 선정하기')}
                halfWidth
              />
              <Button
                label='확정하기'
                size='medium'
                theme='fill_normal'
                onClick={() => navigate('/')}
                halfWidth
              />
            </>
          )}
        </FooterWrapper>
      </PickWrapper>
    </PageWrapper>
  )
}

const PageWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 50px - 82px);
  position: relative;
  align-items: center;
  justify-content: center;
  display: flex;
`

const PickWrapper = styled.section`
  position: relative;
  width: 326px;
  height: calc(100% - 80px);
  box-sizing: border-box;
  padding: 0px 12px;
  border-radius: 16px;
`

const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;

  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--h3);
  line-height: var(--h3LineHeight);
  font-weight: var(--bold);
`

const MainWrapper = styled.div`
  /* 40px: title, 60px: footer */
  height: calc(100% - 50px - 60px);
  max-height: 500px;
  overflow-y: auto;
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`
