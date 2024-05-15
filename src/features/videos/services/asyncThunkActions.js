import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchVideos = createAsyncThunkWithLoadingAndError(
  'videos/fetchVideos',
  async ({ accessToken, page = 1, limit = 10 }) => {
    const url = APIUrls.fetchVideos(page, limit)
    const response = await axios.post(
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

const fetchVideo = createAsyncThunkWithLoadingAndError(
  'video/fetchVideo',
  async ({ accessToken, videoId }) => {
    const url = APIUrls.fetchVideo(videoId)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const toggleLikeVideo = createAsyncThunkWithLoadingAndError(
  'video/toggleLikeVideo',
  async ({ accessToken, videoId }) => {
    const url = APIUrls.toggleLikeVideo(videoId)
    const response = await axios.post(
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

const toggleDislikeVideo = createAsyncThunkWithLoadingAndError(
  'video/toggleDislikeVideo',
  async ({ accessToken, videoId }) => {
    const url = APIUrls.toggleDislikeVideo(videoId)
    const response = await axios.post(
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

const fetchVideoComments = createAsyncThunkWithLoadingAndError(
  'video/fetchVideoComments',
  async ({ accessToken, videoId, page = 1, limit = 10 }) => {
    const url = APIUrls.fetchVideoComments(videoId, page, limit)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const addComment = createAsyncThunkWithLoadingAndError(
  'video/addComment',
  async ({ accessToken, formFields, videoId }) => {
    const url = APIUrls.addComment(videoId)
    const response = await axios.post(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const toggleLikeComment = createAsyncThunkWithLoadingAndError(
  'video/toggleLikeComment',
  async ({ accessToken, commentId }) => {
    const url = APIUrls.toggleLikeComment(commentId)
    const response = await axios.post(
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

const toggleDislikeComment = createAsyncThunkWithLoadingAndError(
  'video/toggleDislikeComment',
  async ({ accessToken, commentId }) => {
    const url = APIUrls.toggleDislikeComment(commentId)
    const response = await axios.post(
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

const deleteComment = createAsyncThunkWithLoadingAndError(
  'video/deleteComment',
  async ({ accessToken, commentId }) => {
    const url = APIUrls.deleteComment(commentId)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchChannelVideos = createAsyncThunkWithLoadingAndError(
  'videos/fetchChannelVideos',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchChannelVideos(userName)
    const response = await axios.post(
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

const fetchSubscriptionsVideos = createAsyncThunkWithLoadingAndError(
  'videos/fetchSubscriptionsVideos',
  async ({ accessToken }) => {
    const url = APIUrls.fetchSubscriptionsVideos()
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchLoggedInUserWatchHistory = createAsyncThunkWithLoadingAndError(
  'videos/fetchLoggedInUserWatchHistory',
  async ({ accessToken }) => {
    const url = APIUrls.fetchLoggedInUserWatchHistory()
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const editComment = createAsyncThunkWithLoadingAndError(
  'video/editComment',
  async ({ accessToken, commentId, formFields }) => {
    const url = APIUrls.editComment(commentId)
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

export {
  fetchVideos,
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  fetchVideoComments,
  addComment,
  toggleLikeComment,
  toggleDislikeComment,
  deleteComment,
  fetchChannelVideos,
  fetchSubscriptionsVideos,
  fetchLoggedInUserWatchHistory,
  editComment,
}
