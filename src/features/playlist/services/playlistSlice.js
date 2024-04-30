/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserPlaylists,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  removeVideoFromPlaylist,
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  channelPlaylists: [],
  currentPlaylist: {},
  loggedInUserPlaylists: [],
  likedVideosPlaylistId: null,
  watchLaterPlaylistId: null,
  error: null,
  inProgress: false,
}

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    sortLoggedInUserPlaylists: (state, action) => {
      const { sortBy = 'updatedAt', sortOrder = -1 } = action.payload

      state.loggedInUserPlaylists.sort((a, b) => {
        switch (sortBy) {
          case 'updatedAt': {
            return sortOrder * (Date.parse(a[sortBy]) - Date.parse(b[sortBy]))
          }
          case 'videos': {
            return sortOrder * (a[sortBy].length - b[sortBy].length)
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
      .addCase(fetchLoggedInUserPlaylists.pending, (state) => {
        state.loggedInUserPlaylists = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchLoggedInUserPlaylists.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.loggedInUserPlaylists = action.payload.data
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
      .addCase(fetchLoggedInUserPlaylists.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(addVideoToPlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(addVideoToPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { playlistId } = action.meta.arg
          const idx = state.loggedInUserPlaylists.findIndex(
            (playlist) => playlist._id === playlistId
          )
          if (idx !== -1) {
            state.loggedInUserPlaylists[idx].videos.unshift(
              action.payload.data?.video
            )
            state.loggedInUserPlaylists[idx].updatedAt =
              action.payload.data?.playlist?.updatedAt
          }

          toast({
            title: 'Added video to Playlist!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(addVideoToPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(removeVideoFromPlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { playlistId, videoId } = action.meta.arg
          const idx = state.loggedInUserPlaylists.findIndex(
            (playlist) => playlist._id === playlistId
          )
          if (idx !== -1) {
            state.loggedInUserPlaylists[idx].videos =
              state.loggedInUserPlaylists[idx].videos.filter(
                (video) => video._id !== videoId
              )
            state.loggedInUserPlaylists[idx].updatedAt =
              action.payload.data?.updatedAt
          }
          toast({
            title: 'Removed video from Playlist!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(removeVideoFromPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(createPlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.loggedInUserPlaylists.unshift(action.payload.data)
          toast({
            title: 'Playlist created successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(createPlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(deletePlaylist.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(deletePlaylist.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          const { playlistId } = action.meta.arg
          state.loggedInUserPlaylists = state.loggedInUserPlaylists.filter(
            (playlist) => playlist._id !== playlistId
          )
          toast({
            title: 'Playlist deleted successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(deletePlaylist.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export const { sortLoggedInUserPlaylists } = playlistSlice.actions

export {
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchLoggedInUserPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  createPlaylist,
  deletePlaylist,
}

export default playlistSlice.reducer
