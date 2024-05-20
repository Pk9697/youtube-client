import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'
import createAsyncThunkWithLoadingAndError from '@/app/createAsyncThunkWithLoadingAndError'

const fetchChannelTweets = createAsyncThunkWithLoadingAndError(
  'tweets/fetchChannelTweets',
  async ({ accessToken, userName }) => {
    const url = APIUrls.fetchChannelTweets(userName)
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const addTweet = createAsyncThunkWithLoadingAndError(
  'tweets/addTweet',
  async ({ accessToken, formFields }) => {
    const url = APIUrls.addTweet()
    const response = await axios.post(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const toggleLikeTweet = createAsyncThunkWithLoadingAndError(
  'tweets/toggleLikeTweet',
  async ({ accessToken, tweetId }) => {
    const url = APIUrls.toggleLikeTweet(tweetId)
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

const toggleDislikeTweet = createAsyncThunkWithLoadingAndError(
  'tweets/toggleDislikeTweet',
  async ({ accessToken, tweetId }) => {
    const url = APIUrls.toggleDislikeTweet(tweetId)
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

const deleteTweet = createAsyncThunkWithLoadingAndError(
  'tweets/deleteTweet',
  async ({ accessToken, tweetId }) => {
    const url = APIUrls.deleteTweet(tweetId)
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

const editTweet = createAsyncThunkWithLoadingAndError(
  'tweets/editTweet',
  async ({ accessToken, formFields, tweetId }) => {
    const url = APIUrls.editTweet(tweetId)
    const response = await axios.patch(url, formFields, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    return response.data
  }
)

export {
  fetchChannelTweets,
  addTweet,
  toggleLikeTweet,
  toggleDislikeTweet,
  deleteTweet,
  editTweet,
}
