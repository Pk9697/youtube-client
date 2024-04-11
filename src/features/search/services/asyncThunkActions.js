import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchVideosByQuery = createAsyncThunk(
  'search/fetchVideosByQuery',
  async ({ accessToken, query }) => {
    try {
      const url = APIUrls.fetchVideosByQuery(query)
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

export { fetchVideosByQuery }
