/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  addTweet,
  deleteTweet,
  editTweet,
  fetchChannelTweets,
  toggleDislikeTweet,
  toggleLikeTweet,
} from './asyncThunkActions'

const initialState = {
  tweetsList: [],
}

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelTweets.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.tweetsList = action.payload.data
        }
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.tweetsList.unshift(action.payload.data)
          toast({
            title: 'Tweet added!',
          })
        }
      })
      .addCase(toggleLikeTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { tweetId } = action.meta.arg

          state.tweetsList = state.tweetsList.map((tweet) =>
            tweet._id === tweetId ? { ...tweet, ...action.payload.data } : tweet
          )
          toast({
            title: 'Tweet Like toggled successfully!',
          })
        }
      })
      .addCase(toggleDislikeTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { tweetId } = action.meta.arg

          state.tweetsList = state.tweetsList.map((tweet) =>
            tweet._id === tweetId ? { ...tweet, ...action.payload.data } : tweet
          )
          toast({
            title: 'Tweet Dislike toggled successfully!',
          })
        }
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { tweetId } = action.meta.arg

          state.tweetsList = state.tweetsList.filter(
            (tweet) => tweet._id !== tweetId
          )
          toast({
            title: 'Deleted Tweet!',
          })
        }
      })
      .addCase(editTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { tweetId, formFields: { content } = {} } = action.meta.arg
          const idx = state.tweetsList.findIndex(
            (tweet) => tweet._id === tweetId
          )
          state.tweetsList[idx].content = content

          toast({
            title: 'Tweet edited!',
          })
        }
      })
  },
})

export {
  fetchChannelTweets,
  addTweet,
  toggleLikeTweet,
  toggleDislikeTweet,
  deleteTweet,
  editTweet,
}

export default tweetsSlice.reducer
