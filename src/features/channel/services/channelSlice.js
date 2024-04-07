/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import { fetchChannel } from './asyncThunkActions'

const initialState = {
  currentChannel: null,
  error: null,
  inProgress: false,
}

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannel.pending, (state) => {
        state.currentChannel = null
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchChannel.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.currentChannel = action.payload.data
          toast({
            title: 'User Channel Fetched!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchChannel.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchChannel }

export default channelSlice.reducer
