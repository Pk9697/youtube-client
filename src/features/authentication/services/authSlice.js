/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  login,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
  updatePassword,
  verifyAccessToken,
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
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
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.isLoggedIn = true
          state.user = action.payload.data?.user
          state.accessToken = action.payload.data?.accessToken
          state.refreshToken = action.payload.data?.refreshToken
          toast({
            title: action.payload?.message || 'Logged in successfully!',
          })
        }
      })
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.user = action.payload.data
          toast({
            title: 'Registered successfully! Now please Log in',
          })
        }
      })
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.user = null
          state.accessToken = null
          state.refreshToken = null
          state.isLoggedIn = false
          toast({
            title: 'Logged out successfully!',
          })
        }
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.user.avatar = action.payload.data?.avatar
          toast({
            title: 'Avatar updated successfully!',
          })
        }
      })
      .addCase(updateCoverImage.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.user.coverImage = action.payload.data?.coverImage
          toast({
            title: 'CoverImage updated successfully!',
          })
        }
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const {
            formFields: { fullName, email },
          } = action.meta.arg
          if (fullName) {
            state.user.fullName = fullName
          }
          if (email) {
            state.user.email = email
          }
          toast({
            title: 'Account Details updated successfully!',
          })
        }
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        if (action.payload?.success) {
          toast({
            title: 'Password updated successfully!',
          })
        }
      })
      .addCase(verifyAccessToken.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.isLoggedIn = true
        } else {
          state.isLoggedIn = false
          state.accessToken = null
          state.refreshToken = null
          state.user = null
        }
      })
      .addCase(verifyAccessToken.rejected, (state) => {
        state.isLoggedIn = false
        state.accessToken = null
        state.refreshToken = null
        state.user = null
      })
    // TODO : add refresh token logic
    // .addCase(refreshAccessToken.fulfilled, (state, action) => {
    //   if (action.payload?.success) {
    //     state.accessToken = action.payload.data?.accessToken
    //     state.refreshToken = action.payload.data?.refreshToken
    //     toast({
    //       title: 'Access and refresh Token refreshed successfully!',
    //     })
    //   }
    // })
    // .addCase(refreshAccessToken.rejected, (state, action) => {
    //   state.user = null
    //   state.accessToken = null
    //   state.refreshToken = null
    //   state.isLoggedIn = false
    // })
  },
})

// Action creators are generated for each case reducer function
// export const {} = authSlice.actions

// async thunk actions
export {
  login,
  register,
  logout,
  updateAvatar,
  updateCoverImage,
  updateAccountDetails,
  updatePassword,
  verifyAccessToken,
}

export default authSlice.reducer
