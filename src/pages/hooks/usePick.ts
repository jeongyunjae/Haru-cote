import { useCallback, useState } from 'react'
import practiceData from '../../data/practiceTestData.json'
import usePickStore from '../../modules/pickStore/usePickStore'
import { FunnelStepName } from '../../components/Funnel/useFunnel'

export type PickProps = {
  handleStep: (step: FunnelStepName) => void
}

export function usePick({ handleStep }: PickProps) {
  /**
    @description 주간 푸는 문제 수
   */
  const WEEK_PROBLEM_COUNT = 5

  const [problemIdList, setProblemIdList] = useState<number[]>([])
  const { levelData } = usePickStore()

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

      // Fisher-Yates 알고리즘 (문제 섞기)
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
    handleStep('확정하기')
  }, [levelData, practiceData, setProblemIdList, handleStep])

  return {
    WEEK_PROBLEM_COUNT,
    problemIdList,
    sumOfLevels,
    handleChoiceButtonClick,
  }
}
