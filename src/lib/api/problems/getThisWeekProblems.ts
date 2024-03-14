import { ProblemPersonType } from '../../../data/types'
import client from '../../client'

export async function getThisWeekProblems() {
  const response = await client.get<ProblemResDataType[]>(
    `/api/v1/problems/list`
  )
  return response.data
}

export type ProblemResDataType = {
  problemId: number
  title: string
  level: number
  person: ProblemPersonType
  isSolved: boolean
  isThisWeek: boolean
}
