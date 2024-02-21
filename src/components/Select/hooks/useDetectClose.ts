import { useEffect, useRef, useState } from 'react'
import { useToggleState } from '../../../hooks/useToggleState'

export type DetectCloseType = {
  initialState: boolean
  elem: React.RefObject<any>
}

function useDetectClose({ initialState, elem }: DetectCloseType) {
  const [isOpen, toggle] = useToggleState(initialState)
  useEffect(() => {
    const onClick = (e: CustomEvent<MouseEvent>) => {
      if (elem.current !== null && !elem.current.contains(e.target as Node)) {
        toggle()
      }
    }

    if (isOpen) {
      window.addEventListener('click', onClick as EventListener)
    }

    return () => {
      window.removeEventListener('click', onClick as EventListener)
    }
  }, [isOpen, elem])
  return { isOpen, toggle, elem }
}

export default useDetectClose
