import styled from 'styled-components'
import useProblemsQuery from '../hooks/query/solvedac/useProblemsQuery'
import { addCommaForArray, isNonEmptyArray } from '../utils/common/array'
import { skeletonAnimation } from '../assets/styles/animation'
import { SolvedacTierType, tierLevel } from '../utils/solvedac'
import classNames from 'classnames'

export type ShowPickStepProps = {
  problemIdList: number[]
}

export default function ShowPickStep({ problemIdList }: ShowPickStepProps) {
  const { data: problemList, isLoading } = useProblemsQuery(
    {
      problemIds: addCommaForArray(problemIdList),
    },
    {
      enabled: isNonEmptyArray(problemIdList),
    }
  )

  return (
    <StepWrapper>
      <CardWrapper>
        {isLoading ? (
          <>
            {Array.from({ length: 4 }).map(() => (
              <CardSkeleton />
            ))}
          </>
        ) : (
          <>
            {problemList?.map(({ titleKo, level }, _i) => (
              <Card className={classNames([tierLevel[level].tier])}>
                <h2>{titleKo}</h2>
                <span>{`${tierLevel[level].tier} ${tierLevel[level].level}`}</span>
              </Card>
            ))}
          </>
        )}
      </CardWrapper>
    </StepWrapper>
  )
}

const StepWrapper = styled.section``

const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

const CardSkeleton = styled.li`
  margin: 10px 0px;
  width: 100%;
  height: 70px;
  background-color: var(--gray300);
  border-radius: 8px;
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`

const Card = styled.li`
  margin: 12px 0px;
  position: relative;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  height: 80px;

  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out; /* 호버 효과를 부드럽게 만들기 위해 transition 사용 */

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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 호버 시 그림자 추가 */
  }

  & > h2 {
    font-size: 16px;
    color: var(--gray0);
    line-height: 24px;
  }

  & > span {
    font-size: 12px;
    position: absolute;
    color: var(--gray0);
    right: 10px;
    bottom: 10px;
  }
`
