import React, { useRef } from 'react'
import styled from 'styled-components'
import Icon from '../common/Icon/icon'
import { useToggleState } from '../../hooks/useToggleState'

export type HeaderAccordionProps = React.HTMLAttributes<HTMLDivElement>

export default function HeaderAccordion({ children }: HeaderAccordionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, toggle] = useToggleState(false)

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

  & > div:first-child {
    padding: 0px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > svg {
      transition: transform 0.2s ease-in-out;
    }
  }

  & > div:last-child {
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
