import styled from 'styled-components'
import useProblemsQuery from '../hooks/query/solvedac/useProblemsQuery'
import { addCommaForArray, isNonEmptyArray } from '../utils/array'
import { skeletonAnimation } from '../assets/styles/animation'

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
              <Card>
                <h2>{titleKo}</h2>
                <span>{level}</span>
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
  margin: 10px 0px;
  position: relative;
  width: 100%;
  padding: 6px 10px;
  box-sizing: border-box;
  height: 70px;

  /* background: linear-gradient(to bottom, #d5dee7 0%, #e8ebf2 50%, #e2e7ed 100%),
    linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.02) 50%,
      rgba(255, 255, 255, 0.02) 61%,
      rgba(0, 0, 0, 0.02) 73%
    ),
    linear-gradient(33deg, rgba(255, 255, 255, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%);
  background-blend-mode: normal, color-burn; */

  /* background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%); */
  background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out; /* 호버 효과를 부드럽게 만들기 위해 transition 사용 */

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* 호버 시 그림자 추가 */
  }

  & > h2 {
    font-size: 18px;
    color: var(--gray900);
    line-height: 28px;
  }

  & > span {
    font-size: 12px;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
`
