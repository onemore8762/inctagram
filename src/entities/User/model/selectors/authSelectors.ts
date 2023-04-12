import { type useAuthStateType } from '../store/authStore'

export const SelectEmail = (state: useAuthStateType) => state.email
export const SelectSetEmail = (state: useAuthStateType) => state.setEmail
