import { create, UseBoundStore, StoreApi } from 'zustand'

export type SnackBarStatusType = {
  message: string
  isOpen: boolean
}

const initialState: SnackBarStatusType = {
  message: '',
  isOpen: false,
}

type snackbarStore = {
  snackbarData: SnackBarStatusType
  openSnackbar: (message: string) => void
  closeSnackbar: () => void
}

// Zustand store 생성
const useSnackbarStore: UseBoundStore<StoreApi<snackbarStore>> = create(
  (set) => ({
    snackbarData: initialState,
    openSnackbar: (message: string) => {
      set((state) => ({
        snackbarData: {
          ...state.snackbarData,
          message: message,
          isOpen: true,
        },
      }))
    },
    closeSnackbar: () => {
      set((state) => ({
        snackbarData: {
          ...state.snackbarData,
          message: '',
          isOpen: false,
        },
      }))
    },
  })
)
export default useSnackbarStore
