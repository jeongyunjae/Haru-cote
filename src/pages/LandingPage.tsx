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
  gap: 12px;
`
