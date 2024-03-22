import { ProblemMemberNameType } from '../../../data/types'
import client from '../../client'

export async function getThisWeekProblems() {
  const response = await client.get<ProblemResDataType[]>(
    `/api/v1/problems/list`
  )
  return response.data
}

export type ProblemResDataType = {
  problem_id: number
  title: string
  level: number
  is_solved: boolean
  is_thisWeek: boolean
  member_id?: number
  member_name?: ProblemMemberNameType
}
