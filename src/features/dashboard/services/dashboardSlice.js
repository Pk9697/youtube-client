/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  deleteVideo,
  editVideo,
  fetchDashboardStats,
  fetchDashboardVideos,
  toggleVideoPublishStatus,
  uploadVideo,
} from './asyncThunkActions'

const initialState = {
  dashboardStats: {},
  dashboardVideos: [],
  paginate: {},
  error: null,
  inProgress: false,
}

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    sortVideos: (state, action) => {
      const { sortBy = 'createdAt', sortOrder = -1 } = action.payload

      state.dashboardVideos.sort((a, b) => {
        switch (sortBy) {
          case 'createdAt': {
            return sortOrder * (Date.parse(a[sortBy]) - Date.parse(b[sortBy]))
          }
          default: {
            return sortOrder * (a[sortBy] - b[sortBy])
          }
        }
      })
    },
  },
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
          // toast({
          //   title: 'Dashboard Stats fetched successfully',
          // })
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
          const { docs, ...paginateOptions } = action.payload.data || {}
          state.dashboardVideos = docs
          state.paginate = paginateOptions
          // toast({
          //   title: 'Dashboard Stats fetched successfully',
          // })
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
      .addCase(deleteVideo.pending, (state) => {
        state.inProgress = true
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { videoId } = action.meta.arg
          const idx = state.dashboardVideos.findIndex(
            (video) => video._id === videoId
          )
          state.dashboardStats.totalVideosLikes -=
            state.dashboardVideos[idx].likesCount
          state.dashboardStats.totalVideosViews -=
            state.dashboardVideos[idx].views
          state.dashboardVideos = state.dashboardVideos.filter(
            (video) => video._id !== videoId
          )

          toast({
            title: 'Video Deleted successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(deleteVideo.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(uploadVideo.pending, (state) => {
        state.inProgress = true
      })
      .addCase(uploadVideo.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          if (action.payload.data?._id) {
            state.dashboardVideos.unshift(action.payload.data)
          }

          toast({
            title: 'Video Uploaded successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(uploadVideo.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(editVideo.pending, (state) => {
        state.inProgress = true
      })
      .addCase(editVideo.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { videoId } = action.meta.arg
          state.dashboardVideos = state.dashboardVideos.map((video) =>
            video._id === videoId ? action.payload.data : video
          )
          toast({
            title: 'Video Edited successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(editVideo.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export const { sortVideos } = dashboardSlice.actions

export {
  fetchDashboardStats,
  fetchDashboardVideos,
  toggleVideoPublishStatus,
  deleteVideo,
  uploadVideo,
  editVideo,
}

export default dashboardSlice.reducer
