'use client'
import { create } from 'zustand'


export type LoadingState = {
    isDone: boolean
}

export type LoadingActions = {
    setStatus: (status: boolean) => void
}


export type InitLoadingType = LoadingState & LoadingActions

export const useInitLoadingStore = create<InitLoadingType>((set) => ({
    isDone: false,
    setStatus: (newStatus) => set((state) => ({ isDone: newStatus })),
}))

