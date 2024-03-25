import styled, { css } from 'styled-components'
import { mediaQuery } from '../assets/styles/mediaQuery'

export default function SettingsPage() {
  return <SettingsWrapper></SettingsWrapper>
}

const SettingsWrapper = styled.main`
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
