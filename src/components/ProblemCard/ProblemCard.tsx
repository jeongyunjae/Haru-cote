import styled from 'styled-components'
import { useCard } from './hooks/useCard'
import classNames from 'classnames'
import { ProblemPersonType } from '../../data/types'

export type ProblemCardProps = {
  problemId: number
  level?: number
  title?: string
  person: ProblemPersonType
}

export default function ProblemCard({
  problemId,
  level = 0,
  title = '',
  person,
}: ProblemCardProps) {
  const { containerRef, overlayRef } = useCard()

  return (
    <ContainerWrapper
      ref={containerRef}
      onClick={() =>
        window.open(`https://www.acmicpc.net/problem/${problemId}`, '_blank')
      }
    >
      <Overlay ref={overlayRef} />
      <Card className={classNames([`level${level}`])}>
        <span className='title'>{title}</span>
        <span className='level'>{`level ${level}`}</span>
        <span className='person'>{person}</span>
      </Card>
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  width: 206px;
  height: 300px;
  position: relative;
  transition: all 0.1s;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Overlay = styled.div`
  position: absolute;
  width: 180px;
  height: 240px;
  border-radius: 24px;
  background-image: radial-gradient(
    farthest-corner circle at 50% 50%,
    hsla(0, 0%, 40%, 0.8) 10%,
    hsla(0, 0%, 40%, 0.65) 20%,
    hsla(0, 0%, 0%, 0.5) 90%
  );
  filter: brightness(1.1) opacity(0);
  mix-blend-mode: color-dodge;
  background-size: 150% 150%;
  background-position: 100%;
  transition: all 0.1s;
  cursor: pointer;
`

const Card = styled.div`
  width: 180px;
  height: 240px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 24px;
  background-size: cover;
  background-color: var(--gray700);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  position: relative;
  cursor: pointer;

  & > span {
    position: absolute;
    color: var(--gray0);
  }

  & > .title {
    width: calc(100% - 32px);
    top: 13px;
    font-size: 18px;
    line-height: 24px;
    font-weight: var(--bold);
    word-break: keep-all;
  }

  & > .level {
    bottom: 16px;
    left: 16px;
    font-size: var(--c2);
    font-weight: var(--regular);
  }

  & > .person {
    bottom: 16px;
    right: 16px;
    font-size: var(--c1);
    font-weight: var(--regular);
  }

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
