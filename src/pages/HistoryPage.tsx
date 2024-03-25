import styled, { css } from 'styled-components'
import { mediaQuery } from '../assets/styles/mediaQuery'

export default function HistoryPage() {
  return <HistoryWrapper></HistoryWrapper>
}

const HistoryWrapper = styled.main`
  width: 100%;
  height: calc(
    100vh - var(--heightMainHeader) - var(--heightNavHeader) -
      var(--heightFooter)
  );
  position: relative;

  ${mediaQuery('mobile')(css`
    height: calc(100vh - var(--heightMainMobileHeader));
  `)}
`
