import React from 'react'

export type DonePickStepProps = {
  goToStart: () => void
}

export default function DonePickStep({ goToStart }: DonePickStepProps) {
  return <div onClick={goToStart}>처음으로 돌아가기</div>
}
