/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  fetchDashboardStats,
  fetchDashboardVideos,
  toggleVideoPublishStatus,
} from './asyncThunkActions'

const initialState = {
  dashboardStats: {},
  dashboardVideos: [],
  error: null,
  inProgress: false,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending, (state) => {
        state.dashboardStats = {}
        state.inProgress = true
      })
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.dashboardStats = action.payload.data
          toast({
            title: 'Dashboard Stats fetched successfully',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchDashboardStats.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(fetchDashboardVideos.pending, (state) => {
        state.dashboardVideos = []
        state.inProgress = true
      })
      .addCase(fetchDashboardVideos.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.dashboardVideos = action.payload.data?.docs
          toast({
            title: 'Dashboard Stats fetched successfully',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchDashboardVideos.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleVideoPublishStatus.pending, (state) => {
        state.inProgress = true
      })
      .addCase(toggleVideoPublishStatus.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { videoId } = action.meta.arg
          state.dashboardVideos = state.dashboardVideos.map((video) =>
            video._id === videoId
              ? { ...video, isPublished: !video.isPublished }
              : video
          )
          toast({
            title: 'Video Publish status toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleVideoPublishStatus.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchDashboardStats, fetchDashboardVideos, toggleVideoPublishStatus }

export default dashboardSlice.reducer
