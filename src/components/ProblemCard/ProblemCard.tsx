import styled from 'styled-components'
import classNames from 'classnames'
import { ProblemMemberNameType } from '../../data/types'

export type ProblemCardProps = {
  problemId: number
  level?: number
  title?: string
  memberName?: ProblemMemberNameType
}

export default function ProblemCard({
  problemId,
  level = 0,
  title = '',
  memberName = '',
}: ProblemCardProps) {
  return (
    <Card
      className={classNames([`level${level}`])}
      onClick={() =>
        window.open(`https://www.acmicpc.net/problem/${problemId}`, '_blank')
      }
    >
      <span className='title'>{title}</span>
      <span className='level'>{`level ${level}`}</span>
      <span className='member'>{memberName}</span>
    </Card>
  )
}

const Card = styled.div`
  display: block;
  width: 100%;
  height: 320px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 18px;
  background-size: cover;
  background-color: var(--gray700);
  box-shadow: 0 6px 15px rgba(36, 37, 38, 0.08);
  position: relative;
  cursor: pointer;

  & > span {
    position: absolute;
    color: var(--gray0);
  }

  & > .title {
    width: calc(100% - 40px);
    top: 20px;
    font-size: var(--h2);
    font-weight: var(--bold);
    word-break: keep-all;
  }

  & > .level {
    bottom: 20px;
    right: 20px;
    font-size: var(--c1);
    font-weight: var(--regular);
  }

  & > .member {
    bottom: 20px;
    left: 20px;
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
