import { CSSObject, css } from 'styled-components'

export function curry(f: Function) {
  return function (a: keyof typeof SCREENS) {
    return function (b: unknown) {
      return f(a, b)
    }
  }
}

const SCREENS = {
  mobile: 768,
}

const rawMediaQuery = (
  screenSize: keyof typeof SCREENS,
  style: TemplateStringsArray | CSSObject
) =>
  css`
    @media (max-width: ${SCREENS[screenSize]}px) {
      ${style};
    }
  `

export const mediaQuery = curry(rawMediaQuery)
