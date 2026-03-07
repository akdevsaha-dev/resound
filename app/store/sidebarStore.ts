import { create } from "zustand"

type SidebarItem = "newsletter" | "library" | "starred" | "downloads" | "billings" | "archive" | "bin"

interface SidebarState {
    activeItem: SidebarItem
    setActiveItem: (item: SidebarItem) => void
}

export const useSideBarStore = create<SidebarState>((set) => ({
    activeItem: "newsletter",

    setActiveItem: (item) => set({ activeItem: item }),
}))