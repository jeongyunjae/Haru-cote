import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Realistic from 'react-canvas-confetti/dist/presets/realistic'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, EffectCoverflow, Pagination } from 'swiper/modules'
import ProblemCard from '../components/ProblemCard/ProblemCard'
import useThisWeekProblemsQuery from '../hooks/query/problems/useThisWeekProblemsQuery'
import { skeletonAnimation } from '../assets/styles/animation'
import { Snackbar } from '../components/common/Snackbar/Snackbar'
import useSnackbarStore from '../modules/snackbar/useSnackbarStore'
import { Modal } from '../components/common/Modal/Modal'
import { useToggleState } from '../hooks/useToggleState'
import Button from '../components/common/Button/Button'
import useMembersQuery from '../hooks/query/members/useMembersQuery'
import MemberButton from '../components/MemberButton/MemberButton'
import { MemberResType } from '../lib/api/members/getMembers'
import { mediaQuery } from '../assets/styles/mediaQuery'
import 'swiper/css/effect-cards'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css'

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
          isChecked: true,
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
      {isConfetti && <Confetti autorun={{ speed: 50, duration: 10 }} />}

      <CardWrapper>
        {isThisWeekProblemsLoading || isRefetching ? (
          <>
            {Array.from({ length: 3 }).map((_, _i) => (
              <CardSkeleton key={_i} />
            ))}
          </>
        ) : (
          <Swiper
            effect='coverflow'
            grabCursor
            centeredSlides
            loop
            navigation
            pagination
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 50,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination]}
          >
            {thisWeekProblemsList?.map(
              ({ problem_id, level, title, member_name }, _i) => (
                <SwiperSlide key={problem_id}>
                  <ProblemCard
                    problemId={problem_id}
                    level={level}
                    title={title}
                    memberName={member_name}
                  />
                </SwiperSlide>
              )
            )}
          </Swiper>
        )}
      </CardWrapper>
      <MobileCardWrapper>
        {isThisWeekProblemsLoading || isRefetching ? (
          <MobileCardSkeleton />
        ) : (
          <Swiper effect='cards' grabCursor loop modules={[EffectCards]}>
            <>
              {thisWeekProblemsList?.map(
                ({ problem_id, level, title, member_name }, _i) => (
                  <SwiperSlide key={problem_id}>
                    <ProblemCard
                      problemId={problem_id}
                      level={level}
                      title={title}
                      memberName={member_name}
                    />
                  </SwiperSlide>
                )
              )}
            </>
          </Swiper>
        )}
      </MobileCardWrapper>
      <Button
        label='멤버 배정하기'
        size='large_block'
        theme='fill_gradient'
        style={{ position: 'absolute', bottom: '50px' }}
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
          disabled: !memberCheckboxes.some((data) => data.isChecked),
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
  height: calc(
    100vh - var(--heightMainHeader) - var(--heightNavHeader) -
      var(--heightFooter)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${mediaQuery('mobile')(css`
    height: calc(100vh - var(--heightMainMobileHeader));
  `)}
`

const Confetti = styled(Realistic)`
  width: 100%;
  height: 100%;
  position: absolute;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;

  .swiper {
    width: 760px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 240px;
    height: 320px;
  }

  ${mediaQuery('mobile')(css`
    display: none;
  `)}
`

const CardSkeleton = styled.div`
  margin: 50px 13px;
  width: 240px;
  height: 320px;
  box-sizing: border-box;
  background-size: cover;
  background-color: var(--gray300);
  border-radius: 24px;
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`

const MobileCardWrapper = styled.div`
  display: none;

  ${mediaQuery('mobile')(css`
    display: flex;
    margin-top: 50px;
  `)}

  .swiper {
    width: 240px;
    height: 320px;
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    overflow: visible;
  }
`

const MobileCardSkeleton = styled.div`
  width: 240px;
  height: 320px;
  margin: 0px 13px;
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
