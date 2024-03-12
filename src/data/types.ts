/**
    @description 하루코테 멤버
   */
export type ProblemPersonType =
  | '윤재'
  | '가윤'
  | '진욱'
  | '지은'
  | '사라'
  | '민지'
  | ''

/**
    @description 주간 문제 JSON 타입
   */
export type PracticeDataType = {
  problemNumber: number
  titleKo: string
  level: number
  person: ProblemPersonType
  isSolved: boolean
  isThisWeek: boolean
}
