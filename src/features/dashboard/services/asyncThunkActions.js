import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchDashboardStats = createAsyncThunkWithLoadingAndError(
  'dashboard/fetchDashboardStats',
  async ({ accessToken }) => {
    const url = APIUrls.fetchDashboardStats()
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchDashboardVideos = createAsyncThunkWithLoadingAndError(
  'dashboard/fetchDashboardVideos',
  async ({ accessToken, page = 1, limit = 10 }) => {
    const url = APIUrls.fetchDashboardVideos(page, limit)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const toggleVideoPublishStatus = createAsyncThunkWithLoadingAndError(
  'dashboard/toggleVideoPublishStatus',
  async ({ accessToken, videoId }) => {
    const url = APIUrls.toggleVideoPublishStatus(videoId)
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

const deleteVideo = createAsyncThunkWithLoadingAndError(
  'dashboard/deleteVideo',
  async ({ accessToken, videoId }) => {
    const url = APIUrls.deleteVideo(videoId)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const uploadVideo = createAsyncThunkWithLoadingAndError(
  'dashboard/uploadVideo',
  async ({ accessToken, formFields = {} }) => {
    const url = APIUrls.uploadVideo()
    const response = await axios.post(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const editVideo = createAsyncThunkWithLoadingAndError(
  'dashboard/editVideo',
  async ({ accessToken, formFields = {}, videoId }) => {
    const url = APIUrls.editVideo(videoId)
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

export {
  fetchDashboardStats,
  fetchDashboardVideos,
  toggleVideoPublishStatus,
  deleteVideo,
  uploadVideo,
  editVideo,
}
