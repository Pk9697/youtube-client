/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import { fetchVideo } from './asyncThunkActions'

const initialState = {
  videoDetails: null,
  error: null,
  inProgress: false,
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.videoDetails = null
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.videoDetails = action.payload.data
          toast({
            title: action.payload?.message || 'Videos fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchVideo }

export default videoSlice.reducer
