import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchLoggedInUserSubscribedToChannels = createAsyncThunk(
  'subscription/fetchLoggedInUserSubscribedToChannels',
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

export { fetchLoggedInUserSubscribedToChannels }
