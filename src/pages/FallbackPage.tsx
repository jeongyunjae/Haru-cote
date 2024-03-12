import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'

export default function FallbackPage() {
  return (
    <FallbackWrapper>
      <Header />
      <Footer />
    </FallbackWrapper>
  )
}

const FallbackWrapper = styled.div`
  & > footer {
    width: 100%;
    position: absolute;
    bottom: 0px;
  }
`
