import React from 'react'
import PracticeData from '../data/practiceTestData.json'
import RealData from '../data/realTestData.json'
import styled from 'styled-components'

export type ShowPickStepProps = {
  goToDone?: () => void
}

export default function ShowPickStep({ goToDone }: ShowPickStepProps) {
  const level1 = PracticeData.filter(
    ({ level, isSolved }) => level === 1 && !isSolved
  ).map(({ problemNumber }) => problemNumber)
  const level2 = PracticeData.filter(
    ({ level, isSolved }) => level === 2 && !isSolved
  ).map(({ problemNumber }) => problemNumber)
  const level3 = PracticeData.filter(
    ({ level, isSolved }) => level === 3 && !isSolved
  ).map(({ problemNumber }) => problemNumber)
  const level4 = RealData.filter((data) => !data.isSolved)

  let randomIndex1 = Math.floor(Math.random() * level1.length)
  let randomIndex2_1 = Math.floor(Math.random() * level2.length)
  let randomIndex2_2 = Math.floor(Math.random() * level2.length)
  let randomIndex3 = Math.floor(Math.random() * level3.length)

  // while (randomIndex2_1 === randomIndex2_1) {
  //   randomIndex2_1 = Math.floor(Math.random() * level2.length)
  // }

  return (
    <>
      <Level1Wrapper>
        <h1>하</h1>
        <a
          href={`https://www.acmicpc.net/problem/${level1[randomIndex1]}`}
          target='_blank'
        >
          {level1[randomIndex1]}
        </a>
      </Level1Wrapper>
      <Level2Wrapper>
        <h1>중</h1>
        <a
          href={`https://www.acmicpc.net/problem/${level2[randomIndex2_1]}`}
          target='_blank'
        >
          {level2[randomIndex2_1]}
        </a>
        <br />
        <a
          href={`https://www.acmicpc.net/problem/${level2[randomIndex2_2]}`}
          target='_blank'
        >
          {level2[randomIndex2_2]}
        </a>
      </Level2Wrapper>
      <Level3Wrapper>
        <h1>중상</h1>
        <a
          href={`https://www.acmicpc.net/problem/${level3[randomIndex3]}`}
          target='_blank'
        >
          {level3[randomIndex3]}
        </a>
      </Level3Wrapper>
    </>
  )
}

const Level1Wrapper = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
`

const Level2Wrapper = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
`

const Level3Wrapper = styled.div`
  font-size: 24px;
  padding-bottom: 10px;
`
