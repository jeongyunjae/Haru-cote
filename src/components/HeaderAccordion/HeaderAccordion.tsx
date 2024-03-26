import React, { useRef } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon/icon'
import { useToggleState } from '../../hooks/useToggleState'
import useClickAwayListener from '../../hooks/useClickAwayListener'

export type HeaderAccordionProps = React.HTMLAttributes<HTMLDivElement>

export default function HeaderAccordion({ children }: HeaderAccordionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, toggle] = useToggleState(false)

  useClickAwayListener({ ref: ref, onOutsideClick: () => isOpen && toggle() })

  return (
    <AccordionWrapper>
      <div onClick={toggle}>
        <Icon name={isOpen ? 'Cross' : 'MenuHamberger'} />
      </div>
      <ChildrenWrapper
        onClick={toggle}
        ref={ref}
        style={
          isOpen && ref.current
            ? {
                maxHeight: ref.current.scrollHeight,
              }
            : {
                maxHeight: 0,
              }
        }
      >
        {children}
      </ChildrenWrapper>
    </AccordionWrapper>
  )
}

const AccordionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  & > div:nth-of-type(1) {
    padding: 0px 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > svg > path {
      stroke: var(--gray800);
    }
  }

  & > div:nth-of-type(2) {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
  }
`

const ChildrenWrapper = styled.div`
  position: fixed;
  top: var(--heightMainMobileHeader);
  left: 0px;
`
