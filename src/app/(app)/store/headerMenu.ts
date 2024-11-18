
'use client'
import { create } from 'zustand'


export type HeaderMenuState = {
    isOpen: boolean
}

export type HeaderMenuActions = {
    setStatus: (status: boolean) => void
}


export type HeaderMenuStore = HeaderMenuActions & HeaderMenuState

export const headerMenuStore = create<HeaderMenuStore>((set) => ({
    isOpen: false,
    setStatus: (newStatus) => set((state) => ({ isOpen: newStatus })),
}))

