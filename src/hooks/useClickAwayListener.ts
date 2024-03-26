import { useEffect } from 'react'

export type useClickAwayListenerProps = {
  ref: React.RefObject<HTMLElement>
  onOutsideClick: () => void
}

export default function useClickAwayListener({
  ref,
  onOutsideClick,
}: useClickAwayListenerProps) {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        onOutsideClick()
    }

    document.addEventListener('mouseup', handler as EventListener)

    return () => {
      document.removeEventListener('mouseup', handler as EventListener)
    }
  }, [ref, onOutsideClick])
}
