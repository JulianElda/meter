import { createSlice } from "@reduxjs/toolkit";

import type { RootState } from "@/src/store/store";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  initialState,
  name: "sidebar",
  reducers: {
    closeSidebar: (state) => {
      state.isOpen = false;
    },
    openSidebar: (state) => {
      state.isOpen = true;
    },
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { closeSidebar, openSidebar, toggleSidebar } =
  sidebarSlice.actions;

export default sidebarSlice.reducer;

export const isSidebarOpenSelector = (state: RootState) => state.sidebar.isOpen;
