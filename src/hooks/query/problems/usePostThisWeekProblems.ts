import { useMutation } from 'react-query'
import {
  PostThisWeekProblemsReq,
  postThisWeekProblems,
} from '../../../lib/api/problems/postThisWeekProblems'
import { useNavigate } from 'react-router-dom'

export default function usePostThisWeekProblems() {
  const navigate = useNavigate()

  return useMutation(
    (value: PostThisWeekProblemsReq[]) => postThisWeekProblems(value),
    {
      onSuccess: async () => {
        navigate('/')
      },
    }
  )
}
