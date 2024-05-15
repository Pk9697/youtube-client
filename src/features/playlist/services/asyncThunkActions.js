import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchChannelPlaylists = createAsyncThunkWithLoadingAndError(
  'playlist/fetchChannelPlaylists',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchChannelPlaylists(userName)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchCurrentPlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/fetchCurrentPlaylist',
  async ({ accessToken, playlistId }) => {
    const url = APIUrls.fetchCurrentPlaylist(playlistId)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchLoggedInUserLikedVideosPlaylistIdByName =
  createAsyncThunkWithLoadingAndError(
    'playlist/fetchLoggedInUserLikedVideosPlaylistIdByName',
    async ({ accessToken, playlistName = 'LL' }) => {
      const url = APIUrls.fetchLoggedInUserPlaylistIdByName(playlistName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    }
  )

const fetchLoggedInUserWatchLaterPlaylistIdByName =
  createAsyncThunkWithLoadingAndError(
    'playlist/fetchLoggedInUserWatchLaterPlaylistIdByName',
    async ({ accessToken, playlistName = 'WL' }) => {
      const url = APIUrls.fetchLoggedInUserPlaylistIdByName(playlistName)
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      return response.data
    }
  )

const fetchLoggedInUserPlaylists = createAsyncThunkWithLoadingAndError(
  'playlist/fetchLoggedInUserPlaylists',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchChannelPlaylists(userName)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const addVideoToPlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/addVideoToPlaylist',
  async ({ accessToken, playlistId, videoId }) => {
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
  }
)

const removeVideoFromPlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/removeVideoFromPlaylist',
  async ({ accessToken, playlistId, videoId }) => {
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
  }
)

const createPlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/createPlaylist',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.createPlaylist()
    const response = await axios.post(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const deletePlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/deletePlaylist',
  async ({ accessToken, playlistId }) => {
    const url = APIUrls.deletePlaylist(playlistId)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const editPlaylist = createAsyncThunkWithLoadingAndError(
  'playlist/editPlaylist',
  async ({ accessToken, formFields, playlistId }) => {
    const url = APIUrls.editPlaylist(playlistId)
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
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
  createPlaylist,
  deletePlaylist,
  editPlaylist,
}
