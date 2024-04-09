/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchChannelPlaylists } from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  channelPlaylists: [],
  error: null,
  inProgress: false,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelPlaylists.pending, (state) => {
        state.channelPlaylists = []
        state.error = null
      })
      .addCase(fetchChannelPlaylists.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.channelPlaylists = action.payload.data
          toast({
            title: 'Channel Playlists fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchChannelPlaylists.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export { fetchChannelPlaylists }

export default playlistSlice.reducer
