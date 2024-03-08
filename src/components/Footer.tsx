import React from 'react'
import styled from 'styled-components'
import Icon from './Icon/icon'

export default function Footer() {
  return (
    <FooterWrapper>
      <Icon name='Logo' />
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  height: 50px;
  padding: 0px 24px;
  border-top: 1px solid var(--gray800);
  background-color: var(--bgColor);
  box-sizing: border-box;
  position: relative;
  z-index: 99999;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > svg {
    width: 80px;
  }
`
