import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchDashboardStats',
  async ({ accessToken }) => {
    try {
      const url = APIUrls.fetchDashboardStats()
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

const fetchDashboardVideos = createAsyncThunk(
  'dashboard/fetchDashboardVideos',
  async ({ accessToken, page = 1, limit = 10 }) => {
    try {
      const url = APIUrls.fetchDashboardVideos(page, limit)
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

const toggleVideoPublishStatus = createAsyncThunk(
  'dashboard/toggleVideoPublishStatus',
  async ({ accessToken, videoId }) => {
    try {
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const deleteVideo = createAsyncThunk(
  'dashboard/deleteVideo',
  async ({ accessToken, videoId }) => {
    try {
      const url = APIUrls.deleteVideo(videoId)
      const response = await axios.delete(url, {
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

const uploadVideo = createAsyncThunk(
  'dashboard/uploadVideo',
  async ({ accessToken, formFields = {} }) => {
    try {
      const url = APIUrls.uploadVideo()
      const response = await axios.post(url, formFields, {
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

const editVideo = createAsyncThunk(
  'dashboard/editVideo',
  async ({ accessToken, formFields = {}, videoId }) => {
    try {
      const url = APIUrls.editVideo(videoId)
      const response = await axios.patch(url, formFields, {
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

export {
  fetchDashboardStats,
  fetchDashboardVideos,
  toggleVideoPublishStatus,
  deleteVideo,
  uploadVideo,
  editVideo,
}
