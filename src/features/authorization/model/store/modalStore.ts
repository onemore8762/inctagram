import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

export interface useConfirmModalStateType {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}
export const useConfirmModal = create(immer<useConfirmModalStateType>((set) => ({
    isOpen: false,
    setIsOpen: (value: boolean) => {
        set(state => {
            state.isOpen = value
        })
    }
})))
