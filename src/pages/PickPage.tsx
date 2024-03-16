import styled, { css } from 'styled-components'
import { useQueryClient } from 'react-query'

import StartPickStep from '../components/StartPickStep'
import ShowPickStep from '../components/ShowPickStep'
import { useFunnel } from '../components/Funnel/useFunnel'
import Button from '../components/Button/Button'
import usePickStore from '../modules/pickStore/usePickStore'
import { ProblemResType } from '../lib/api/problems/getCandidateProblems'
import usePostThisWeekProblems from '../hooks/query/problems/usePostThisWeekProblems'
import { PostThisWeekProblemsReq } from '../lib/api/problems/postThisWeekProblems'
import { mediaQuery } from '../assets/styles/mediaQuery'

export type levelType = { value: number; isContentOpen: boolean }

export default function PickPage() {
  const { Funnel, Step, currentStep, handleStep } = useFunnel('문제 선정하기')
  const { levelData } = usePickStore()
  const queryClient = useQueryClient()

  const { mutateAsync: mutatePostThisWeekProblems, isLoading } =
    usePostThisWeekProblems()
  const sumOfLevels = Object.values(levelData).reduce(
    (acc, value) => acc + value,
    0
  )

  const handleThisWeekDataChange = async () => {
    const cachedData: ProblemResType[] | undefined =
      queryClient.getQueryData('problems')
    if (!cachedData) return null

    // cachedData 배열을 해시맵으로 변환
    const mapA: PostThisWeekProblemsReq[] = cachedData.map(
      ({ problemId, titleKo }) => {
        return { problemId: problemId, title: titleKo }
      }
    )

    await mutatePostThisWeekProblems([...mapA])
  }
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
              <ShowPickStep />
            </Step>
          </Funnel>
        </MainWrapper>

        <FooterWrapper>
          {currentStep === '문제 선정하기' ? (
            <Button
              label={`총 ${sumOfLevels}문제 선정하기`}
              size='medium'
              fullWidth
              onClick={() => {
                handleStep('확정하기')
              }}
              loading={isLoading}
              theme='fill_normal'
              disabled={sumOfLevels === 0}
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
                onClick={handleThisWeekDataChange}
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

  ${mediaQuery('mobile')(css`
    height: calc(100vh - 82px);
  `)}
`

const PickWrapper = styled.section`
  width: 332px;
  height: calc(100% - 80px);
  position: relative;
  padding: 24px 20px;
  box-sizing: border-box;
  background-color: var(--gray100);
  border-radius: 20px;

  ${mediaQuery('mobile')(css`
    width: 100%;
    border-radius: 0px;
    height: 100%;
  `)}
`

const TitleWrapper = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-size: var(--h3);
  font-weight: var(--bold);
  line-height: var(--h3LineHeight);
`

const MainWrapper = styled.div`
  /* 40px: title, 60px: footer */
  height: calc(100% - 40px - 60px);
  margin-bottom: 12px;
  box-sizing: border-box;
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
`
