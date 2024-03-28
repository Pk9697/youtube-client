/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { login } from './actions'

const initialState = {
  user: {},
  accessToken: null,
  error: null,
  isLoggedIn: false,
  inProgress: false,
}

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.user = {}
        state.accessToken = null
        state.error = null
        state.isLoggedIn = false
        state.inProgress = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.isLoggedIn = true
          state.user = action.payload.data?.user
          state.accessToken = action.payload.data?.accessToken
        } else {
          state.error = action.payload?.message || 'server error'
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
      })
  },
})

// Action creators are generated for each case reducer function

// export const {} = authSlice.actions

export default authSlice.reducer
