import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import StartPickStep from '../components/StartPickStep'
import ShowPickStep from '../components/ShowPickStep'
import { useFunnel } from '../components/Funnel/useFunnel'
import Button from '../components/Button/Button'
import { usePick } from './hooks/usePick'

export type levelType = { value: number; isContentOpen: boolean }

export default function PickPage() {
  const navigate = useNavigate()
  const { Funnel, Step, currentStep, handleStep } = useFunnel('문제 선정하기')
  const {
    problemIdList,
    sumOfLevels,
    handleChoiceButtonClick,
    WEEK_PROBLEM_COUNT,
  } = usePick({
    handleStep,
  })

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
              disabled={sumOfLevels !== WEEK_PROBLEM_COUNT}
            />
          ) : (
            <>
              <Button
                label='뒤로가기'
                size='medium'
                theme='soft_mono'
                onClick={() => handleStep('문제 선정하기')}
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const PickWrapper = styled.section`
  width: 326px;
  height: calc(100% - 80px);
  position: relative;
  padding: 18px 12px;
  box-sizing: border-box;
  background-color: var(--gray100);
  border-radius: 20px;
`

const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--h3);
  font-weight: var(--bold);
  line-height: var(--h3LineHeight);
`

const MainWrapper = styled.div`
  /* 40px: title, 60px: footer */
  height: calc(100% - 40px - 60px);
  max-height: 500px;
  margin-bottom: 12px;
  box-sizing: border-box;
  overflow-y: auto;

  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome 및 Safari에 대한 스크롤바 숨김 */
  }
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`
