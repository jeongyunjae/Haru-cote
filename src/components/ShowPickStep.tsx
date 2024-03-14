import styled from 'styled-components'
import useProblemsQuery from '../hooks/query/solvedac/useProblemsQuery'

import { skeletonAnimation } from '../assets/styles/animation'
import { tierLevel } from '../utils/solvedac'
import classNames from 'classnames'
import Button from './Button/Button'
import usePickStore from '../modules/pickStore/usePickStore'

export type ShowPickStepProps = {}

export default function ShowPickStep() {
  const { levelData } = usePickStore()
  const {
    data: problemList,
    isLoading,
    isFetching,
    refetch,
  } = useProblemsQuery({
    levelData: levelData,
  })

  return (
    <ShowPickStepWrapper>
      <ReSelectButtonWrapper>
        <Button
          label='다시 선정'
          size='small'
          theme='soft_mono'
          onClick={() => {
            refetch()
          }}
        />
      </ReSelectButtonWrapper>
      <CardUl>
        {isLoading || isFetching ? (
          <>
            {Array.from({ length: 4 }).map((_, _i) => (
              <CardSkeleton key={_i} />
            ))}
          </>
        ) : (
          <>
            {problemList?.map(({ titleKo, level, problemId }, _i) => (
              <CardLi
                key={problemId}
                className={classNames([tierLevel[level].tier])}
              >
                <h2>{titleKo}</h2>
                <span>{`${tierLevel[level].tier} ${tierLevel[level].level}`}</span>
              </CardLi>
            ))}
          </>
        )}
      </CardUl>
    </ShowPickStepWrapper>
  )
}

const ShowPickStepWrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100%;
`

const ReSelectButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 14px;
`

const CardUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;
  height: calc(100% - 46px);

  overflow-y: scroll;

  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome 및 Safari에 대한 스크롤바 숨김 */
  }
`

const CardSkeleton = styled.li`
  width: 100%;
  min-height: 74px;
  background-color: var(--gray300);
  border-radius: 12px;
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`

const CardLi = styled.li`
  width: 100%;
  min-height: 74px;
  padding: 8px 10px;
  position: relative;
  box-sizing: border-box;
  transition: filter 0.3s ease;
  border-radius: 12px;

  &.Unrated {
    background-color: var(--unrated);
  }

  &.Bronze {
    background-color: var(--bronze);
  }

  &.Silver {
    background-color: var(--silver);
  }

  &.Gold {
    background-color: var(--gold);
  }

  &.Platinum {
    background-color: var(--platinum);
  }

  &.Diamond {
    background-color: var(--diamond);
  }

  &.Ruby {
    background-color: var(--ruby);
  }

  &:hover {
    filter: brightness(0.85);
  }

  & > h2 {
    color: var(--gray0);
    font-size: 16px;
    line-height: 24px;
  }

  & > span {
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: var(--gray0);
    font-size: 12px;
  }
`
