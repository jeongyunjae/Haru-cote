import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button/Button'

export default function LandingPage() {
  return (
    <LandingWrapper>
      <Button label='윤재' size='large_block' theme='fill_danger' />
    </LandingWrapper>
  )
}
const LandingWrapper = styled.main`
  width: 100%;
  height: calc(100vh - 50px - 82px);
  position: relative;
`
