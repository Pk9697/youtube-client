/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  addVideoToPlaylist,
  createPlaylist,
  deletePlaylist,
  editPlaylist,
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
      .addCase(fetchChannelPlaylists.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.channelPlaylists = action.payload.data
        }
      })
      .addCase(fetchCurrentPlaylist.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.currentPlaylist = action.payload.data
        }
      })
      .addCase(
        fetchLoggedInUserLikedVideosPlaylistIdByName.fulfilled,
        (state, action) => {
          if (action.payload?.success) {
            state.likedVideosPlaylistId = action.payload.data
          }
        }
      )
      .addCase(
        fetchLoggedInUserWatchLaterPlaylistIdByName.fulfilled,
        (state, action) => {
          if (action.payload?.success) {
            state.watchLaterPlaylistId = action.payload.data
          }
        }
      )
      .addCase(fetchLoggedInUserPlaylists.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.loggedInUserPlaylists = action.payload.data
        }
      })
      .addCase(addVideoToPlaylist.fulfilled, (state, action) => {
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
        }
      })
      .addCase(removeVideoFromPlaylist.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { playlistId, videoId } = action.meta.arg
          // UPDATE loggedInUserPlaylists
          const existingPlaylist = state.loggedInUserPlaylists.find(
            (playlist) => playlist._id === playlistId
          )
          if (existingPlaylist) {
            state.loggedInUserPlaylists = state.loggedInUserPlaylists.filter(
              (playlist) => playlist._id !== playlistId
            )
            existingPlaylist.videos = existingPlaylist.videos.filter(
              (video) => video._id !== videoId
            )
            existingPlaylist.updatedAt = action.payload.data?.updatedAt
            state.loggedInUserPlaylists.unshift(existingPlaylist)
          }
          // UPDATE currentPlaylist
          if (state.currentPlaylist?._id === playlistId) {
            state.currentPlaylist.videos = state.currentPlaylist.videos?.filter(
              (video) => video._id !== videoId
            )
          }
          toast({
            title: 'Removed video from Playlist!',
          })
        }
      })
      .addCase(createPlaylist.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.loggedInUserPlaylists.unshift(action.payload.data)
          toast({
            title: 'Playlist created successfully!',
          })
        }
      })
      .addCase(deletePlaylist.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { playlistId } = action.meta.arg
          state.loggedInUserPlaylists = state.loggedInUserPlaylists.filter(
            (playlist) => playlist._id !== playlistId
          )
          toast({
            title: 'Playlist deleted successfully!',
          })
        }
      })
      .addCase(editPlaylist.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const {
            playlistId,
            formFields: { name, description, visibility },
          } = action.meta.arg
          state.loggedInUserPlaylists = state.loggedInUserPlaylists.map(
            (playlist) =>
              playlist._id === playlistId
                ? { ...playlist, name, description, visibility }
                : playlist
          )
          toast({
            title: 'Playlist edited successfully!',
          })
        }
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
  editPlaylist,
}

export default playlistSlice.reducer
