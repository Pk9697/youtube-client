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
      .addCase(fetchDashboardStats.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.dashboardStats = action.payload.data
        }
      })
      .addCase(fetchDashboardVideos.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { docs, ...paginateOptions } = action.payload.data || {}
          state.dashboardVideos = docs
          state.paginate = paginateOptions
        }
      })
      .addCase(toggleVideoPublishStatus.fulfilled, (state, action) => {
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
        }
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
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

          state.paginate.totalDocs -= 1

          toast({
            title: 'Video Deleted successfully!',
          })
        }
      })
      .addCase(uploadVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          if (action.payload.data?._id) {
            state.dashboardVideos.unshift(action.payload.data)
          }
          state.paginate.totalDocs += 1

          toast({
            title: 'Video Uploaded successfully!',
          })
        }
      })
      .addCase(editVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { videoId } = action.meta.arg
          state.dashboardVideos = state.dashboardVideos.map((video) =>
            video._id === videoId ? action.payload.data : video
          )
          toast({
            title: 'Video Edited successfully!',
          })
        }
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
