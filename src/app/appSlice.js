/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },
    updateSidebar: (state, action) => {
      state.isSidebarOpen = action.payload
    },
  },
})

export const { toggleSidebar, updateSidebar } = appSlice.actions

export default appSlice.reducer
