import React, { ReactElement, ReactNode, useState } from 'react'

export type FunnelStepName = '문제 선정하기' | '확정하기'

export type StepProps = {
  name: FunnelStepName
  children: ReactNode
}

export type FunnelProps = {
  children: Array<ReactElement<StepProps>>
}

export const useFunnel = (defaultStep: FunnelStepName) => {
  // state를 통해 현재 스텝을 관리
  const [step, setStep] = useState<FunnelStepName>(defaultStep)

  // 각 단계를 나타내는 Step 컴포넌트
  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>
  }

  const handleStep = (step: FunnelStepName) => {
    setStep(step)
  }

  // 여러 단계의 Step 컴포넌트 중 현재 활성화된 스텝을 렌더링하는 Funnel
  // find를 통해 Step 중 현재 Step을 찾아 렌더링
  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    )

    return <>{targetStep}</>
  }

  return { Funnel, Step, handleStep, currentStep: step } as const
}
