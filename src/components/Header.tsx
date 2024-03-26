import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Icon from './common/Icon/icon'
import { mediaQuery } from '../assets/styles/mediaQuery'
import HeaderAccordion from './HeaderAccordion/HeaderAccordion'

export default function Header() {
  return (
    <HeaderWrapper>
      <MainHeader>
        <Link to='/'>
          <Icon name='Logo' />
        </Link>
        <RightToggleButtonWrapper>
          <HeaderAccordion>
            <MobileNavUl>
              <MobileNavLi>
                <Link to='/pick'>Pick</Link>
              </MobileNavLi>
              <MobileNavLi>
                <Link to='/history'>History</Link>
              </MobileNavLi>
              <MobileNavLi>
                <Link to='/settings'>Settings</Link>
              </MobileNavLi>
            </MobileNavUl>
          </HeaderAccordion>
        </RightToggleButtonWrapper>
      </MainHeader>
      <NavHeader>
        <NavUl>
          <NavLi>
            <Link to='/pick'>Pick</Link>
          </NavLi>
          <NavLi>
            <Link to='/history'>History</Link>
          </NavLi>
          <NavLi>
            <Link to='/settings'>Settings</Link>
          </NavLi>
        </NavUl>
      </NavHeader>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: var(--gray0);

  ${mediaQuery('mobile')(css`
    background-color: hsla(0, 0%, 100%, 0.9);
    backdrop-filter: blur(10px);
    box-shadow: 0 1px 1px 0 rgba(81, 99, 120, 0.2);
  `)}
`

const MainHeader = styled.div`
  width: 100%;
  height: var(--heightMainHeader);
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    height: 20px;
  }

  ${mediaQuery('mobile')(css`
    height: var(--heightMainMobileHeader);
    max-width: calc(100% - var(--paddingContainerBase));
    margin: 0 auto;
    justify-content: space-between;

    & > a > svg {
      width: 100px;
    }
  `)}
`

const RightToggleButtonWrapper = styled.div`
  display: none;

  position: absolute;
  right: 20px;
  align-items: center;

  & > svg {
    padding: 0px 8px;
    margin-right: -8px;
  }

  ${mediaQuery('mobile')(css`
    display: block;
  `)}
`

const MobileNavUl = styled.ul`
  background-color: hsla(0, 0%, 100%, 0.9);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 1px 0 rgba(81, 99, 120, 0.2);

  display: flex;
  flex-direction: column;
`
const MobileNavLi = styled.li`
  width: 100vw;
  height: 56px;
  box-sizing: border-box;

  & > a {
    padding: 18px 20px;
    display: block;
    font-size: var(--p1);
    color: var(--gray800);
    font-weight: var(--medium);
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  &:active {
    background-color: var(--gray200);
  }
`

const NavHeader = styled.nav`
  width: 100%;
  height: var(--heightNavHeader);
  border-top: 1px solid var(--gray800);
  border-bottom: 1px solid var(--gray800);
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  ${mediaQuery('mobile')(css`
    display: none;
  `)}
`

const NavUl = styled.ul`
  width: 324px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const NavLi = styled.li`
  min-width: 80px;
  text-align: center;
  & > a {
    margin: 0 auto;
    width: fit-content;
    display: block;
    font-size: var(--p1);
    color: var(--gray800);
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  a::after {
    width: 0;
    height: 1px;
    content: '';

    display: block;
    background-color: var(--gray800);
    transition: width 0.5s;
  }

  a:hover::after {
    width: 100%;
  }
`
