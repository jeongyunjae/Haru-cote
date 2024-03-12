import styled from 'styled-components'
import ProblemCard from '../components/ProblemCard/ProblemCard'
import { problemsData } from '../data/problemsData'

export default function LandingPage() {
  return (
    <LandingWrapper>
      <CardWrapper>
        {problemsData
          .filter(({ isThisWeek }) => isThisWeek)
          .map(({ problemId, level, titleKo, person }, _i) => (
            <ProblemCard
              key={problemId}
              problemId={problemId}
              level={level}
              titleKo={titleKo}
              person={person}
            />
          ))}
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
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1080px;
  overflow-x: scroll;
  gap: 12px;

  scrollbar-width: none; /* Firefox에 대한 스크롤바 숨김 */
  -ms-overflow-style: none; /* IE 및 Edge에 대한 스크롤바 숨김 */
  &::-webkit-scrollbar {
    display: none; /* Chrome 및 Safari에 대한 스크롤바 숨김 */
  }
`
