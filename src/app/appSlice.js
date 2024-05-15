/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSidebarOpen: true,
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
  },
})

export const { toggleSidebar, updateSidebar, setLoading, setError } =
  appSlice.actions

export default appSlice.reducer
