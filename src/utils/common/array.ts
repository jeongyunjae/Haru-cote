import { problemsData } from '../../data/problemsData'
import { PickLevelDataType } from '../../modules/pickStore/usePickStore'

/**
    @description 배열을 쉼표 기준으로 하나의 문자열로 생성
    @example [123,1256,'abc'] -> '123,1256,abc'
   */
export function addCommaForArray(values: (string | number)[]) {
  const data = values.join(',')
  return data
}

export type NonEmptyArray<T> = [T, ...T[]]

/**
    @description 배열에 1개 이상의 요소가 있는지 검사합니다
    @example [123] => true, [] => false
   */
export function isNonEmptyArray<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length >= 1
}

/**
 * 
    @description 주어진 개수에 맞게 랜덤으로 아이템 선정
    @example [1,3,1] => ['1234','5163',14621','1567','1245']
   */
export const getRandomData = (levelData: PickLevelDataType) => {
  let subset: number[] = []

  Object.values(levelData).forEach((count, _i) => {
    const filteringLevel = problemsData
      .filter(({ level, isSolved }) => level === _i + 1 && !isSolved)
      .map(({ problemId }) => problemId)

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
  return subset
}
