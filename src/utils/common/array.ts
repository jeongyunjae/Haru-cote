/**
    @description 배열을 쉼표 기준으로 하나의 문자열로 생성
    @example [123,1256,'abc'] -> '123,1256,abc'
   */
export function addCommaForArray(values: (string | number)[]) {
  const data = values.join(',')
  return data
}

export type NonEmptyArray<T> = [T, ...T[]]

/**
    @description 배열에 1개 이상의 요소가 있는지 검사합니다
    @example [123] => true, [] => false
   */
export function isNonEmptyArray<T>(array: T[]): array is NonEmptyArray<T> {
  return array.length >= 1
}
