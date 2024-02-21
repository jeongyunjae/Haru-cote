import React from 'react'
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
  z-index: 99999;
  top: 0;
  background-color: var(--bgColor);
`

const MainHeader = styled.div`
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
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

const NavLi = styled.li`
  min-width: 80px;
  text-align: center;
  & > a {
    width: fit-content;
    display: block;
    margin: 0 auto;
    color: var(--gray800);
    text-decoration: none;
    font-size: 16px;
  }

  a:hover {
    text-decoration: none;
  }

  a::after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background-color: #000;
    transition: width 0.5s;
  }

  a:hover::after {
    width: 100%;
  }
`
