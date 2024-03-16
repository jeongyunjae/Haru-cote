import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import {
  PostThisWeekProblemsReq,
  postThisWeekProblems,
} from '../../../lib/api/problems/postThisWeekProblems'
import useSnackbarStore from '../../../modules/snackbar/useSnackbarStore'

export default function usePostThisWeekProblems() {
  const navigate = useNavigate()
  const { openSnackbar } = useSnackbarStore()

  return useMutation(
    (value: PostThisWeekProblemsReq[]) => postThisWeekProblems(value),
    {
      onSuccess: async () => {
        navigate('/')
        openSnackbar('이번 주 문제가 선정되었습니다!')
      },
    }
  )
}
