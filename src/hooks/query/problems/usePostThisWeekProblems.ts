import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import {
  PostThisWeekProblemsReq,
  postThisWeekProblems,
} from '../../../lib/api/problems/postThisWeekProblems'
import useSnackbarStore from '../../../modules/snackbar/useSnackbarStore'
import useThisWeekProblemsQuery from './useThisWeekProblemsQuery'

export default function usePostThisWeekProblems() {
  const navigate = useNavigate()
  const { openSnackbar } = useSnackbarStore()
  const { refetch } = useThisWeekProblemsQuery()

  return useMutation(
    (value: PostThisWeekProblemsReq[]) => postThisWeekProblems(value),
    {
      onSuccess: async () => {
        navigate('/')
        await refetch()
        openSnackbar('이번 주 문제가 선정되었습니다!')
      },
    }
  )
}
