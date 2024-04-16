/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  addVideoToWatchLaterPlaylist,
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchWatchLaterPlaylist,
  removeVideoFromWatchLaterPlaylist,
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  channelPlaylists: [],
  currentPlaylist: {},
  watchLaterPlaylist: {},
  likedVideosPlaylistId: null,
  watchLaterPlaylistId: null,
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
        state.inProgress = true
      })
      .addCase(fetchChannelPlaylists.fulfilled, (state, action) => {
        state.inProgress = false
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
      .addCase(fetchCurrentPlaylist.pending, (state) => {
        state.currentPlaylist = {}
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchCurrentPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.currentPlaylist = action.payload.data
          toast({
            title: 'Current Playlist fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchCurrentPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(
        fetchLoggedInUserLikedVideosPlaylistIdByName.pending,
        (state) => {
          state.likedVideosPlaylistId = null
          state.error = null
        }
      )
      .addCase(
        fetchLoggedInUserLikedVideosPlaylistIdByName.fulfilled,
        (state, action) => {
          if (action.payload?.success) {
            state.likedVideosPlaylistId = action.payload.data
            toast({
              title: 'Current Playlist fetched successfully!',
            })
          } else {
            state.error = action.payload?.message || 'server error'
            toast({
              variant: 'destructive',
              title: state.error,
            })
          }
        }
      )
      .addCase(
        fetchLoggedInUserLikedVideosPlaylistIdByName.rejected,
        (state, action) => {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      )
      .addCase(fetchLoggedInUserWatchLaterPlaylistIdByName.pending, (state) => {
        state.watchLaterPlaylistId = null
        state.error = null
      })
      .addCase(
        fetchLoggedInUserWatchLaterPlaylistIdByName.fulfilled,
        (state, action) => {
          if (action.payload?.success) {
            state.watchLaterPlaylistId = action.payload.data
            toast({
              title: 'Current Playlist fetched successfully!',
            })
          } else {
            state.error = action.payload?.message || 'server error'
            toast({
              variant: 'destructive',
              title: state.error,
            })
          }
        }
      )
      .addCase(
        fetchLoggedInUserWatchLaterPlaylistIdByName.rejected,
        (state, action) => {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      )
      .addCase(fetchWatchLaterPlaylist.pending, (state) => {
        state.watchLaterPlaylist = {}
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchWatchLaterPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.watchLaterPlaylist = action.payload.data
          toast({
            title: 'Watch Later Playlist fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchWatchLaterPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(addVideoToWatchLaterPlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(addVideoToWatchLaterPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.watchLaterPlaylist.videos.unshift(action.payload.data)
          toast({
            title: 'Added video to Watch Later Playlist!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(addVideoToWatchLaterPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(removeVideoFromWatchLaterPlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(removeVideoFromWatchLaterPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { videoId } = action.meta.arg
          state.watchLaterPlaylist.videos =
            state.watchLaterPlaylist.videos.filter(
              (video) => video._id !== videoId
            )
          toast({
            title: 'Removed video from Watch Later Playlist!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(removeVideoFromWatchLaterPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export {
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchWatchLaterPlaylist,
  addVideoToWatchLaterPlaylist,
  removeVideoFromWatchLaterPlaylist,
}

export default playlistSlice.reducer
