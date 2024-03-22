import { ProblemMemberNameType } from '../../../data/types'
import client from '../../client'

export async function getMembers() {
  const response = await client.get<MemberResType[]>(`/api/v1/member/list`)
  return response.data
}

export type MemberResType = {
  member_id: number
  member_name: ProblemMemberNameType
}
