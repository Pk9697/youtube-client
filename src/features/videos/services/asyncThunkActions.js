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

export { fetchVideos }
