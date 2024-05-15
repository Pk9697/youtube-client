import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchVideosByQuery = createAsyncThunkWithLoadingAndError(
  'search/fetchVideosByQuery',
  async ({ accessToken, query, page = 1, limit = 10 }) => {
    const url = APIUrls.fetchVideosByQuery(query, page, limit)
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

export { fetchVideosByQuery }
