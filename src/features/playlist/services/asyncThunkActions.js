import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchChannelPlaylists = createAsyncThunk(
  'playlist/fetchChannelPlaylists',
  async ({ accessToken, userName }) => {
    try {
      const url = APIUrls.fetchChannelPlaylists(userName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchCurrentPlaylist = createAsyncThunk(
  'playlist/fetchCurrentPlaylist',
  async ({ accessToken, playlistId }) => {
    try {
      const url = APIUrls.fetchCurrentPlaylist(playlistId)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchLoggedInUserLikedVideosPlaylistIdByName = createAsyncThunk(
  'playlist/fetchLoggedInUserLikedVideosPlaylistIdByName',
  async ({ accessToken, playlistName = 'LL' }) => {
    try {
      const url = APIUrls.fetchLoggedInUserPlaylistIdByName(playlistName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchLoggedInUserWatchLaterPlaylistIdByName = createAsyncThunk(
  'playlist/fetchLoggedInUserWatchLaterPlaylistIdByName',
  async ({ accessToken, playlistName = 'WL' }) => {
    try {
      const url = APIUrls.fetchLoggedInUserPlaylistIdByName(playlistName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchLoggedInUserPlaylists = createAsyncThunk(
  'playlist/fetchLoggedInUserPlaylists',
  async ({ accessToken, userName }) => {
    try {
      const url = APIUrls.fetchChannelPlaylists(userName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const addVideoToPlaylist = createAsyncThunk(
  'playlist/addVideoToPlaylist',
  async ({ accessToken, playlistId, videoId }) => {
    try {
      const url = APIUrls.addVideoToPlaylist(playlistId, videoId)
      const response = await axios.patch(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

const removeVideoFromPlaylist = createAsyncThunk(
  'playlist/removeVideoFromPlaylist',
  async ({ accessToken, playlistId, videoId }) => {
    try {
      const url = APIUrls.removeVideoFromPlaylist(playlistId, videoId)
      const response = await axios.patch(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      return response.data
    } catch (err) {
      return err.response?.data
    }
  }
)

export {
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchLoggedInUserPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
}
