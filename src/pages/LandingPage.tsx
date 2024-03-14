import styled from 'styled-components'
import ProblemCard from '../components/ProblemCard/ProblemCard'
import useThisWeekProblemsQuery from '../hooks/query/problems/useThisWeekProblemsQuery'
import { skeletonAnimation } from '../assets/styles/animation'

export default function LandingPage() {
  const { data: thisWeekProblemsList, isLoading } = useThisWeekProblemsQuery()
  return (
    <LandingWrapper>
      <CardWrapper>
        {isLoading ? (
          <>
            {Array.from({ length: 5 }).map((_, _i) => (
              <CardSkeleton key={_i} />
            ))}
          </>
        ) : (
          <>
            {thisWeekProblemsList?.map(
              ({ problemId, level, title, person }, _i) => (
                <ProblemCard
                  key={problemId}
                  problemId={problemId}
                  level={level}
                  title={title}
                  person={person}
                />
              )
            )}
          </>
        )}
      </CardWrapper>
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

const CardWrapper = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  max-width: 1080px;
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
