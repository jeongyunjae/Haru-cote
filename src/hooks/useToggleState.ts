import { useCallback, useState } from 'react'

/**
 * @description 토글 상태를 on, off 하는 함수
 * @param defaultValue 토글 상태
 * @returns [bool, toggle]
 */
export function useToggleState(
  defaultValue = false
): readonly [boolean, () => void] {
  const [bool, setBool] = useState<boolean>(defaultValue)

  const toggle = useCallback(() => {
    setBool((prevBool) => !prevBool)
  }, [])

  return [bool, toggle] as const
}
