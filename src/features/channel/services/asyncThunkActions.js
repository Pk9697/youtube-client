import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchChannel = createAsyncThunk(
  'channel/fetchChannel',
  async ({ accessToken, userName }) => {
    try {
      const url = APIUrls.fetchChannel(userName)
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

const fetchUserSubscribedToChannels = createAsyncThunk(
  'channel/fetchUserSubscribedToChannels',
  async ({ accessToken, userName }) => {
    try {
      const url = APIUrls.fetchUserSubscribedToChannels(userName)
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

export { fetchChannel, fetchUserSubscribedToChannels }
