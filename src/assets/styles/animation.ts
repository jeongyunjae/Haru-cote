import { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const skeletonAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`

export const shakeInput = keyframes`
  0%,
  100% {
    left: 0px;
  }
  20%,
  60% {
    left: 10px;
  }
  40%,
  80% {
    left: -10px;
  }
`

export const slideUp = keyframes`
    from {
        transform: translateY(200px);
    }
    to {
        transform: translateY(0px);
    }
`

export const slideDown = keyframes`
    from {
        transform: translateY(0px);
    }
    to {
        transform: translateY(200px);
    
    }
`

export const float = keyframes`
	0% {
		box-shadow: 0 1.6rem 1.6rem -0.8rem rgba(30, 30, 44, 0.12);
		transform: translatey(0);
	}
	50% {
		box-shadow: 0 4.6rem 1.6rem -0.8rem rgba(30, 30, 44, 0.12);
		transform: translatey(-3rem);
	}
	100% {
		box-shadow: 0 1.6rem 1.6rem -0.8rem rgba(30, 30, 44, 0.12);
		transform: translatey(0);
	}
`
