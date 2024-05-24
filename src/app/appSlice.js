/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
  progress: 0,
}

const generateStateKey = (baseType, suffix) => `${baseType}/${suffix}`

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
    setLoading: (state, action) => {
      const { baseType, isLoading } = action.payload
      state[generateStateKey(baseType, 'loading')] = isLoading
    },
    setError: (state, action) => {
      const { baseType, error } = action.payload
      state[generateStateKey(baseType, 'error')] = error
    },
    setProgress: (state, action) => {
      state.progress = action.payload
    },
  },
})

export const {
  toggleSidebar,
  updateSidebar,
  setLoading,
  setError,
  setProgress,
} = appSlice.actions

export default appSlice.reducer
