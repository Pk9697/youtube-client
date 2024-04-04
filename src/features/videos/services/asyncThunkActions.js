import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { APIUrls } from '@/utils/apiUrls'

const fetchVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ accessToken }) => {
    try {
      const url = APIUrls.fetchVideos()
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const fetchVideo = createAsyncThunk(
  'video/fetchVideo',
  async ({ accessToken, videoId }) => {
    try {
      const url = APIUrls.fetchVideo(videoId)
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

const toggleLikeVideo = createAsyncThunk(
  'video/toggleLikeVideo',
  async ({ accessToken, videoId }) => {
    try {
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const toggleDislikeVideo = createAsyncThunk(
  'video/toggleDislikeVideo',
  async ({ accessToken, videoId }) => {
    try {
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const toggleSubscriptionFromVideoOwner = createAsyncThunk(
  'video/toggleSubscriptionFromVideoOwner',
  async ({ accessToken, userId }) => {
    try {
      const url = APIUrls.toggleSubscription(userId)
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
    } catch (err) {
      return err.response?.data
    }
  }
)

export {
  fetchVideos,
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  toggleSubscriptionFromVideoOwner,
}
