import { useQuery } from 'react-query'
import { QueryOptionsOf } from '../../../lib/utils/types'
import {} from '../../../lib/api/problems/getCandidateProblems'
import { getThisWeekProblems } from '../../../lib/api/problems/getThisWeekProblems'

export default function useThisWeekProblemsQuery(
  options: QueryOptionsOf<typeof getThisWeekProblems> = {}
) {
  return useQuery(['problem_list'], () => getThisWeekProblems(), options)
}
