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

const toggleSubscription = createAsyncThunk(
  'subscription/toggleSubscription',
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

const fetchLoggedInUserSubscribersList = createAsyncThunk(
  'subscription/fetchLoggedInUserSubscribersList',
  async ({ accessToken, userId }) => {
    try {
      const url = APIUrls.fetchUserSubscribersList(userId)
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

export {
  fetchLoggedInUserSubscribedToChannels,
  toggleSubscription,
  fetchLoggedInUserSubscribersList,
}
