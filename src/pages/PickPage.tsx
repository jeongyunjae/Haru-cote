import styled from 'styled-components'
import StartPickStep from '../components/StartPickStep'
import ShowPickStep from '../components/ShowPickStep'
import { useFunnel } from '../components/Funnel/useFunnel'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function PickPage() {
  const { Funnel, Step, currentStep, setStep } = useFunnel('선정하기')

  const navigate = useNavigate()
  return (
    <PageWrapper>
      <PickWrapper>
        <TitleWrapper>{currentStep}</TitleWrapper>
        <FunnelWrapper>
          <Funnel>
            <Step name='선정하기'>
              <StartPickStep goToShow={() => setStep('선정하기')} />
            </Step>
            <Step name='확정하기'>
              <ShowPickStep />
            </Step>
          </Funnel>
        </FunnelWrapper>
        <FooterWrapper>
          {currentStep === '선정하기' ? (
            <Button
              label='문제 선정'
              size='medium'
              fullWidth
              onClick={() => setStep('확정하기')}
              theme='fill_normal'
            />
          ) : (
            <>
              <Button
                label='뒤로가기'
                size='medium'
                theme='soft_mono'
                onClick={() => setStep('선정하기')}
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
  align-items: center;
  justify-content: center;
`

const PickWrapper = styled.section`
  position: relative;
  width: 326px;
  min-width: 326px;
  height: calc(100% - 80px);
  border-radius: 16px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`

const TitleWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0px 12px;
  position: relative;

  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: var(--h3);
  line-height: var(--h3LineHeight);
  font-weight: var(--medium);
`

const FunnelWrapper = styled.div`
  /* 40px: title, 60px: footer */
  height: calc(100% - 50px - 60px);
  overflow-y: scroll;
`

const FooterWrapper = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0px 12px;

  position: absolute;
  bottom: 0px;

  display: flex;
  align-items: center;
`
