/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  fetchChannel,
  fetchUserSubscribedToChannels,
} from './asyncThunkActions'

const initialState = {
  channelInfo: null,
  subscribedToChannelsList: [],
  error: null,
  inProgress: false,
}

const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    toggleSubscriptionFromChannelProfile: (state) => {
      const { isSubscribed, subscribersCount } = state.channelInfo
      state.channelInfo.subscribersCount = isSubscribed
        ? subscribersCount - 1
        : subscribersCount + 1
      state.channelInfo.isSubscribed = !isSubscribed

      const existingUserIndex = state.subscribedToChannelsList.findIndex(
        (user) => user?._id === state.channelInfo?._id
      )

      if (existingUserIndex !== -1) {
        state.subscribedToChannelsList[existingUserIndex].subscribersCount =
          isSubscribed ? subscribersCount - 1 : subscribersCount + 1

        state.subscribedToChannelsList[existingUserIndex].isSubscribed =
          !isSubscribed
      }
    },
    toggleSubscriptionFromChannelList: (state, action) => {
      const existingUserIndex = state.subscribedToChannelsList.findIndex(
        (user) => user?._id === action.payload?.userId
      )
      if (existingUserIndex !== -1) {
        const { isSubscribed, subscribersCount } =
          state.subscribedToChannelsList[existingUserIndex]

        state.subscribedToChannelsList[existingUserIndex].subscribersCount =
          isSubscribed ? subscribersCount - 1 : subscribersCount + 1

        state.subscribedToChannelsList[existingUserIndex].isSubscribed =
          !isSubscribed
      }

      if (state.channelInfo?._id === action.payload.userId) {
        const { isSubscribed, subscribersCount } = state.channelInfo
        state.channelInfo.subscribersCount = isSubscribed
          ? subscribersCount - 1
          : subscribersCount + 1
        state.channelInfo.isSubscribed = !isSubscribed
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannel.pending, (state) => {
        state.channelInfo = null
        state.subscribedToChannelsList = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchChannel.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.channelInfo = action.payload.data
          toast({
            title: 'User Channel Fetched!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchChannel.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(fetchUserSubscribedToChannels.pending, (state) => {
        state.subscribedToChannelsList = []
        state.error = null
      })
      .addCase(fetchUserSubscribedToChannels.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.subscribedToChannelsList = action.payload.data
          toast({
            title: 'User Subscribed to Channels fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchUserSubscribedToChannels.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export const {
  toggleSubscriptionFromChannelProfile,
  toggleSubscriptionFromChannelList,
} = channelSlice.actions

export { fetchChannel, fetchUserSubscribedToChannels }

export default channelSlice.reducer
