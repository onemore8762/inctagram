import create from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface StateType {
    email: string
    setEmail: (email: string) => void
}
export const useAuth = create(immer<StateType>((set) => ({
    email: '',
    isAuth: false,
    setEmail: (email: string) => {
        set(state => {
            state.email = email
        })
    }
})))

export const SelectEmail = (state: StateType): string => state.email
export const SelectSetEmail = (state: StateType) => state.setEmail
