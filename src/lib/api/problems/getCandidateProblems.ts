import { PickLevelDataType } from '../../../modules/pickStore/usePickStore'
import client from '../../client'

export type GetProblemsParam = {
  levelData: PickLevelDataType
}

export async function getCandidateProblems({ levelData }: GetProblemsParam) {
  const response = await client.get<ProblemResType[]>(
    `/api/v1/problems/candidate`,
    {
      params: levelData,
    }
  )
  return response.data
}

export type ProblemResType = {
  problemId: number
  titleKo: string
  acceptedUserCount: number
  level: number
}
