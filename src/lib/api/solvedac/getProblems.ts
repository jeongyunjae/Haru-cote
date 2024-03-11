import client from '../../client'

export type GetProblemsParam = {
  problemIds: string
}

export async function getProblems({ problemIds }: GetProblemsParam) {
  const response = await client.get<ProblemResType>(`/api/v3/problem/lookup`, {
    params: { problemIds },
  })

  return response.data
}

export type ProblemResType = {
  problemId: number
  titleKo: string
  acceptedUserCount: number
  level: number
}[]
