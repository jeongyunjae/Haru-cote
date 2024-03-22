import styled, { css } from 'styled-components'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import ProblemCard from '../components/ProblemCard/ProblemCard'
import useThisWeekProblemsQuery from '../hooks/query/problems/useThisWeekProblemsQuery'
import { skeletonAnimation } from '../assets/styles/animation'
import { Snackbar } from '../components/Snackbar/Snackbar'
import useSnackbarStore from '../modules/snackbar/useSnackbarStore'
import { Modal } from '../components/Modal/Modal'
import { useToggleState } from '../hooks/useToggleState'
import Button from '../components/Button/Button'
import useMembersQuery from '../hooks/query/members/useMembersQuery'
import { useEffect, useState } from 'react'
import MemberButton from '../components/MemberButton/MemberButton'
import { MemberResType } from '../lib/api/members/getMembers'
import { mediaQuery } from '../assets/styles/mediaQuery'

export default function LandingPage() {
  const {
    data: thisWeekProblemsList,
    isLoading: isThisWeekProblemsLoading,
    refetch,
    isRefetching,
  } = useThisWeekProblemsQuery()
  const { data: memberList } = useMembersQuery()
  const {
    snackbarData: { message, isOpen },
    closeSnackbar,
  } = useSnackbarStore()

  const [isConfetti, isConfettiToggle] = useToggleState(false)
  const [isModalOpen, isModalToggle] = useToggleState(false)
  const [memberCheckboxes, setMemberCheckboxes] = useState<
    (MemberResType & { isChecked: boolean })[]
  >([])

  useEffect(() => {
    if (memberList) {
      setMemberCheckboxes(
        memberList.map((item) => ({
          ...item,
          isChecked: false,
        }))
      )
    }
  }, [memberList])

  const handleMemberCheckboxChange = (id: number) => {
    const updatedCheckboxes = memberCheckboxes.map((memberData) =>
      memberData.member_id === id
        ? { ...memberData, isChecked: !memberData.isChecked }
        : memberData
    )
    setMemberCheckboxes(updatedCheckboxes)
  }

  const handleAssignMemberSubmit = async () => {
    isModalToggle()
    isConfettiToggle()

    await refetch()

    setTimeout(() => {
      isConfettiToggle()
    }, 2500)
  }

  return (
    <LandingWrapper>
      {isConfetti && <Confetti autorun={{ speed: 10, duration: 1 }} />}

      <CardWrapper>
        {isThisWeekProblemsLoading || isRefetching ? (
          <>
            {Array.from({ length: 5 }).map((_, _i) => (
              <CardSkeleton key={_i} />
            ))}
          </>
        ) : (
          <>
            {thisWeekProblemsList?.map(
              ({ problem_id, level, title, member_name }, _i) => (
                <ProblemCard
                  key={problem_id}
                  problemId={problem_id}
                  level={level}
                  title={title}
                  memberName={member_name}
                />
              )
            )}
          </>
        )}
      </CardWrapper>
      <Button
        label='멤버 배정하기'
        size='large_block'
        theme='fill_gradient'
        style={{ position: 'absolute', bottom: '40px' }}
        onClick={isModalToggle}
      />
      <Snackbar
        open={isOpen}
        innerText={message}
        buttonLabel='확인'
        onClose={closeSnackbar}
        onButtonClick={closeSnackbar}
      />
      <Modal
        primaryProps={{
          theme: 'fill_normal',
          label: '배정하기',
          onClick: handleAssignMemberSubmit,
        }}
        secondaryProps={{
          theme: 'soft_mono',
          label: '취소하기',
          onClick: isModalToggle,
        }}
        Title='문제 배정'
        Description='문제를 풀 멤버를 선택합니다.'
        open={isModalOpen}
        onClose={isModalToggle}
      >
        <MemberListWrapper>
          {memberCheckboxes?.map(({ member_id, member_name, isChecked }) => (
            <MemberButton
              key={member_id}
              memberId={member_id}
              label={member_name}
              isChecked={isChecked}
              onChange={() => handleMemberCheckboxChange(member_id)}
            />
          ))}
        </MemberListWrapper>
      </Modal>
    </LandingWrapper>
  )
}

const LandingWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 50px - 82px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Confetti = styled(Realistic)`
  width: 100%;
  height: 100%;
  position: absolute;
`

const CardWrapper = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  height: 300px;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 12px;

  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome 및 Safari에 대한 스크롤바 숨김 */
  }
`
const CardSkeleton = styled.li`
  margin: 30px 13px;
  width: 180px;
  height: 240px;
  padding: 16px;
  box-sizing: border-box;
  background-size: cover;
  background-color: var(--gray300);
  border-radius: 24px;
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`

const MemberListWrapper = styled.div`
  margin-top: 8px;
  padding: 16px;
  gap: 12px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;

  ${mediaQuery('mobile')(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`
