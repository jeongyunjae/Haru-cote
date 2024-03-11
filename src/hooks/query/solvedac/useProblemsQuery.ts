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
  return useQuery(
    createKey(value.problemIds),
    () => getProblems(value),
    options
  )
}

const createKey = (id: string) => ['problems', id]
useProblemsQuery.createKey = createKey
