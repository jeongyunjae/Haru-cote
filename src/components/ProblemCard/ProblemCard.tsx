import styled from 'styled-components'
import { useCard } from './hooks/useCard'
import classNames from 'classnames'

export type ProblemCardProps = {
  level?: number
}

export default function ProblemCard({ level = 0 }: ProblemCardProps) {
  const { containerRef, overlayRef } = useCard()

  return (
    <ContainerWrapper ref={containerRef}>
      <Overlay ref={overlayRef} />
      <Card className={classNames([`level${level}`])} />
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  width: 206px;
  height: 276px;
  position: relative;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Overlay = styled.div`
  position: absolute;
  width: 180px;
  height: 240px;
  border-radius: 24px;
  background-image: radial-gradient(
    farthest-corner circle at 50% 50%,
    hsla(0, 0%, 35%, 0.8) 10%,
    hsla(0, 0%, 35%, 0.65) 20%,
    hsla(0, 0%, 0%, 0.5) 90%
  );
  filter: brightness(1.1) opacity(0);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.1s;
`

const Card = styled.div`
  width: 180px;
  height: 240px;
  border-radius: 24px;
  background-size: cover;
  background-color: var(--gray700);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &.level1 {
    background-color: var(--silver);
  }

  &.level2 {
    background-color: var(--gold);
  }

  &.level3 {
    background-color: var(--roseGold);
  }
`
