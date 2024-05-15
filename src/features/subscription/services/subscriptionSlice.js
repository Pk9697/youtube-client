/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  fetchLoggedInUserSubscribedToChannels,
  fetchLoggedInUserSubscribersList,
  toggleSubscription,
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  subscribedToChannelsList: [],
  subscribersList: [],
}

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchLoggedInUserSubscribedToChannels.fulfilled,
        (state, action) => {
          if (action.payload?.success) {
            state.subscribedToChannelsList = action.payload.data
          }
        }
      )
      .addCase(toggleSubscription.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { userId } = action.meta.arg
          if (action.payload.data?._id) {
            state.subscribedToChannelsList.unshift(action.payload.data)
          } else {
            state.subscribedToChannelsList =
              state.subscribedToChannelsList.filter(
                (user) => user._id !== userId
              )
          }

          const existingUserIndex = state.subscribersList.findIndex(
            (user) => user?._id === userId
          )
          if (existingUserIndex !== -1) {
            const { isSubscribed, subscribersCount } =
              state.subscribersList[existingUserIndex]

            state.subscribersList[existingUserIndex].subscribersCount =
              isSubscribed ? subscribersCount - 1 : subscribersCount + 1

            state.subscribersList[existingUserIndex].isSubscribed =
              !isSubscribed
          }

          toast({
            title:
              action.payload?.message || 'Subscription toggled successfully!',
          })
        }
      })
      .addCase(fetchLoggedInUserSubscribersList.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.subscribersList = action.payload.data
        }
      })
  },
})

export {
  fetchLoggedInUserSubscribedToChannels,
  toggleSubscription,
  fetchLoggedInUserSubscribersList,
}

export default subscriptionSlice.reducer
