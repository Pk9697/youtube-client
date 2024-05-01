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
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  user: null,
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
        state.user = null
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
          toast({
            title: action.payload?.message || 'Logged in successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(register.pending, (state) => {
        state.user = null
        state.accessToken = null
        state.error = null
        state.isLoggedIn = false
        state.inProgress = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.user = action.payload.data
          toast({
            title: 'Registered successfully! Now please Log in',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(register.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(logout.pending, (state) => {
        state.user = null
        state.accessToken = null
        state.error = null
        state.isLoggedIn = false
        state.inProgress = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.user = null
          state.accessToken = null
          state.error = null
          state.isLoggedIn = false
          toast({
            title: 'Logged out successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(logout.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(updateAvatar.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.user.avatar = action.payload.data?.avatar
          toast({
            title: 'Avatar updated successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(updateCoverImage.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(updateCoverImage.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.user.coverImage = action.payload.data?.coverImage
          toast({
            title: 'CoverImage updated successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(updateCoverImage.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(updateAccountDetails.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(updateAccountDetails.fulfilled, (state, action) => {
        state.inProgress = false
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
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(updateAccountDetails.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(updatePassword.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          toast({
            title: 'Password updated successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
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
}

export default authSlice.reducer
