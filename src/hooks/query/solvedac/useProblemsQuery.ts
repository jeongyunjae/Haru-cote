import { useQuery } from 'react-query'
import {
  GetProblemsParam,
  getProblems,
} from '../../../lib/api/solvedac/getProblems'
import { QueryOptionsOf } from '../../../lib/utils/types'

export default function useProblemsQuery(
  value: GetProblemsParam,
  options: QueryOptionsOf<typeof getProblems> = {}
) {
  return useQuery(['problems'], () => getProblems(value), options)
}
