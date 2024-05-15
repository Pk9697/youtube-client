import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchLoggedInUserSubscribedToChannels =
  createAsyncThunkWithLoadingAndError(
    'subscription/fetchLoggedInUserSubscribedToChannels',
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

const toggleSubscription = createAsyncThunkWithLoadingAndError(
  'subscription/toggleSubscription',
  async ({ accessToken, userId }) => {
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
  }
)

const fetchLoggedInUserSubscribersList = createAsyncThunkWithLoadingAndError(
  'subscription/fetchLoggedInUserSubscribersList',
  async ({ accessToken, userId }) => {
    const url = APIUrls.fetchUserSubscribersList(userId)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

export {
  fetchLoggedInUserSubscribedToChannels,
  toggleSubscription,
  fetchLoggedInUserSubscribersList,
}
