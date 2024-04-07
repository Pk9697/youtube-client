/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchChannelVideos, fetchVideos } from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  videosList: [],
  error: null,
  inProgress: false,
}

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.videosList = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.videosList = action.payload.data?.docs
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
      .addCase(fetchVideos.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(fetchChannelVideos.pending, (state) => {
        state.videosList = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchChannelVideos.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.videosList = action.payload.data?.docs
          toast({
            title: 'Channel Videos Fetched!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchChannelVideos.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchVideos, fetchChannelVideos }

export default videosSlice.reducer
