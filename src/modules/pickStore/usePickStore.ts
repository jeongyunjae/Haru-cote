import { create, UseBoundStore, StoreApi } from 'zustand'

export type PickLevelDataType = {
  level1Value: number
  level2Value: number
  level3Value: number
}

type PickLevelStore = {
  levelData: PickLevelDataType
  updateLevelData: (key: keyof PickLevelDataType, newValue: number) => void
}

// 초기 상태
const initialState: PickLevelDataType = {
  level1Value: 1,
  level2Value: 3,
  level3Value: 1,
}

// Zustand store 생성
const usePickStore: UseBoundStore<StoreApi<PickLevelStore>> = create((set) => ({
  levelData: initialState,
  updateLevelData: (key: keyof PickLevelDataType, newValue: number) => {
    set((state) => ({
      levelData: {
        ...state.levelData,
        [key]: newValue,
      },
    }))
  },
}))
export default usePickStore
