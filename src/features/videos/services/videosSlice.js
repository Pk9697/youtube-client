/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  fetchChannelVideos,
  fetchLoggedInUserWatchHistory,
  fetchSubscriptionsVideos,
  fetchVideos,
} from './asyncThunkActions'

const initialState = {
  videosList: [],
  paginate: null,
}

const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { docs, ...paginateOptions } = action.payload.data || {}
          state.videosList = docs
          state.paginate = paginateOptions
        }
      })
      .addCase(fetchChannelVideos.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { docs, ...paginateOptions } = action.payload.data || {}
          state.videosList = docs
          state.paginate = paginateOptions
        }
      })
      .addCase(fetchSubscriptionsVideos.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videosList = action.payload.data
        }
      })
      .addCase(fetchLoggedInUserWatchHistory.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videosList = action.payload.data
        }
      })
  },
})

export {
  fetchVideos,
  fetchChannelVideos,
  fetchSubscriptionsVideos,
  fetchLoggedInUserWatchHistory,
}

export default videosSlice.reducer
