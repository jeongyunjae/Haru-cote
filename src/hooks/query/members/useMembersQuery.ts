import { useQuery } from 'react-query'
import { QueryOptionsOf } from '../../../lib/utils/types'
import { getMembers } from '../../../lib/api/members/getMembers'

export default function useMembersQuery(
  options: QueryOptionsOf<typeof getMembers> = {}
) {
  return useQuery(['memberList'], () => getMembers(), options)
}
