import styled, { css } from 'styled-components'
import Icon from './common/Icon/icon'
import { mediaQuery } from '../assets/styles/mediaQuery'

export default function Footer() {
  return (
    <FooterWrapper>
      <Icon name='Logo' />

      <div>© 2024 All Rights Reserved.</div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  height: 50px;
  padding: 0px 24px;
  border-top: 1px solid var(--gray800);
  box-sizing: border-box;
  position: relative;
  z-index: 9999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > svg {
    width: 80px;
  }

  & > div {
    font-size: 14px;
  }

  ${mediaQuery('mobile')(css`
    padding: 0px 16px;

    & > svg {
      width: 60px;
    }

    & > div {
      font-size: 12px;
    }
  `)}
`
