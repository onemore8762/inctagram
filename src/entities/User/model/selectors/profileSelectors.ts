import { type useAuthStateType } from '../store/authStore'

export const SelectUserId = (state: useAuthStateType) => state.userId
