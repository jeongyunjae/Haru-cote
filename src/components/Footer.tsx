import styled from 'styled-components'
import Icon from './Icon/icon'

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
  z-index: 99999;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & > svg {
    width: 80px;
  }

  & > div {
    font-size: 14px;
    position: absolute;
    right: 24px;
  }
`
