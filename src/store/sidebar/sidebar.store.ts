import { create } from "zustand";

interface SidebarState {
  closeSidebar: () => void;
  isOpen: boolean;
  openSidebar: () => void;
  toggleSidebar: () => void;
}

export const useSidebarStore = create<SidebarState>((set) => ({
  closeSidebar: () => set({ isOpen: false }),
  isOpen: false,
  openSidebar: () => set({ isOpen: true }),
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export const sidebarActions = {
  closeSidebar: () => useSidebarStore.getState().closeSidebar(),
  openSidebar: () => useSidebarStore.getState().openSidebar(),
  toggleSidebar: () => useSidebarStore.getState().toggleSidebar(),
};
export const useIsSidebarOpen = () => useSidebarStore((state) => state.isOpen);
