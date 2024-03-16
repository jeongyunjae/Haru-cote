import styled from 'styled-components'
import Icon from './Icon/icon'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderWrapper>
      <MainHeader>
        <Link to='/'>
          <Icon name='Logo' />
        </Link>
      </MainHeader>
      <NavHeader>
        <NavUl>
          <NavLi>
            <Link to='/pick'>Pick</Link>
          </NavLi>
          <NavLi>
            <Link to='/watch'>Watch</Link>
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
  z-index: 99999;
  background-color: var(--gray0);
`

const MainHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > a {
    display: flex;
    height: 20px;
  }
`

const NavHeader = styled.nav`
  width: 100%;
  height: 32px;
  border-top: 1px solid var(--gray800);
  border-bottom: 1px solid var(--gray800);
  box-sizing: border-box;
  display: flex;
  justify-content: center;
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
    font-size: 16px;
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
