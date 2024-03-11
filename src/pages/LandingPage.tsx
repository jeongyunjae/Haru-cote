import styled from 'styled-components'
import practiceData from '../data/practiceTestData.json'
import ProblemCard from '../components/ProblemCard/ProblemCard'

export default function LandingPage() {
  return (
    <LandingWrapper>
      <CardWrapper>
        {practiceData
          .filter(({ isThisWeek }) => isThisWeek)
          .map(({ level }) => (
            <ProblemCard level={level} />
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
