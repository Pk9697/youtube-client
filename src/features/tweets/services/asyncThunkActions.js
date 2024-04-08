import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { APIUrls } from '@/utils/apiUrls'

const fetchChannelTweets = createAsyncThunk(
  'tweets/fetchChannelTweets',
  async ({ accessToken, userName }) => {
    try {
      const url = APIUrls.fetchChannelTweets(userName)
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

const addTweet = createAsyncThunk(
  'tweets/addTweet',
  async ({ accessToken, formFields }) => {
    try {
      const url = APIUrls.addTweet()
      const response = await axios.post(url, formFields, {
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

const toggleLikeTweet = createAsyncThunk(
  'tweets/toggleLikeTweet',
  async ({ accessToken, tweetId }) => {
    try {
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const toggleDislikeTweet = createAsyncThunk(
  'tweets/toggleDislikeTweet',
  async ({ accessToken, tweetId }) => {
    try {
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
    } catch (err) {
      return err.response?.data
    }
  }
)

const deleteTweet = createAsyncThunk(
  'tweets/deleteTweet',
  async ({ accessToken, tweetId }) => {
    try {
      const url = APIUrls.deleteTweet(tweetId)
      const response = await axios.delete(url, {
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
  fetchChannelTweets,
  addTweet,
  toggleLikeTweet,
  toggleDislikeTweet,
  deleteTweet,
}
