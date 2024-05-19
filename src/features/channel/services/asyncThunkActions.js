import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchChannel = createAsyncThunkWithLoadingAndError(
  'channel/fetchChannel',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchChannel(userName)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const fetchUserSubscribedToChannels = createAsyncThunkWithLoadingAndError(
  'channel/fetchUserSubscribedToChannels',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchUserSubscribedToChannels(userName)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

export { fetchChannel, fetchUserSubscribedToChannels }
