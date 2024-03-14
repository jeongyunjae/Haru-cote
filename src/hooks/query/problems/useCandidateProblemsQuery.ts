import { useQuery } from 'react-query'
import { QueryOptionsOf } from '../../../lib/utils/types'
import {
  GetProblemsParam,
  getCandidateProblems,
} from '../../../lib/api/problems/getCandidateProblems'

export default function useProblemsQuery(
  value: GetProblemsParam,
  options: QueryOptionsOf<typeof getCandidateProblems> = {}
) {
  return useQuery(['problems'], () => getCandidateProblems(value), options)
}
