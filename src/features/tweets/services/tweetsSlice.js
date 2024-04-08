/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  addTweet,
  deleteTweet,
  fetchChannelTweets,
  toggleDislikeTweet,
  toggleLikeTweet,
} from './asyncThunkActions'

const initialState = {
  tweetsList: [],
  error: null,
  inProgress: false,
}

const tweetsSlice = createSlice({
  name: 'tweets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelTweets.pending, (state) => {
        state.error = null
        state.tweetsList = []
        state.inProgress = true
      })
      .addCase(fetchChannelTweets.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.tweetsList = action.payload.data
          toast({
            title: 'Channel Tweets fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchChannelTweets.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(addTweet.pending, (state) => {
        state.error = null
      })
      .addCase(addTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.tweetsList.unshift(action.payload.data)
          toast({
            title: 'Tweet added!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(addTweet.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleLikeTweet.pending, (state) => {
        state.error = null
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
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleLikeTweet.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleDislikeTweet.pending, (state) => {
        state.error = null
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
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleDislikeTweet.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(deleteTweet.pending, (state) => {
        state.error = null
      })
      .addCase(deleteTweet.fulfilled, (state, action) => {
        if (action.payload?.success) {
          // * Recieved commentId after dispatching deleteTweet action from it's arguments provided
          const { tweetId } = action.meta.arg

          state.tweetsList = state.tweetsList.filter(
            (tweet) => tweet._id !== tweetId
          )
          toast({
            title: 'Deleted Tweet!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(deleteTweet.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export {
  fetchChannelTweets,
  addTweet,
  toggleLikeTweet,
  toggleDislikeTweet,
  deleteTweet,
}

export default tweetsSlice.reducer
