import client from '../../client'

export type PostThisWeekProblemsReq = {
  problem_id: number
  title: string
}

export async function postThisWeekProblems(req: PostThisWeekProblemsReq[]) {
  const response = await client.post<undefined>(
    `/api/v1/problems/this-week`,
    req
  )
  return response.data
}
