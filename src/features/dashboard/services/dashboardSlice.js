/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import { fetchDashboardStats, fetchDashboardVideos } from './asyncThunkActions'

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
  },
})

export { fetchDashboardStats, fetchDashboardVideos }

export default dashboardSlice.reducer
