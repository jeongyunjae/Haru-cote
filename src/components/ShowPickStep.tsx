import styled from 'styled-components'
import useProblemsQuery from '../hooks/query/solvedac/useProblemsQuery'
import { addCommaForArray, isNonEmptyArray } from '../utils/common/array'
import { skeletonAnimation } from '../assets/styles/animation'
import { tierLevel } from '../utils/solvedac'
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
    <ShowPickStepWrapper>
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
    </ShowPickStepWrapper>
  )
}

const ShowPickStepWrapper = styled.section``

const CardWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`

const CardSkeleton = styled.li`
  width: 100%;
  height: 70px;
  margin: 10px 0px;
  background-color: var(--gray300);
  border-radius: 8px;
  animation: ${skeletonAnimation} 1s ease-in-out infinite;
`

const Card = styled.li`
  width: 100%;
  height: 80px;
  margin: 8px 0px;
  padding: 8px 10px;
  position: relative;
  box-sizing: border-box;
  transition: filter 0.3s ease; /* Hover 시 부드러운 전환을 위한 설정 */
  cursor: pointer;
  border-radius: 8px;

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
