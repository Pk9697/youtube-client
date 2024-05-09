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
  error: null,
  inProgress: false,
}

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLoggedInUserSubscribedToChannels.pending, (state) => {
        state.subscribedToChannelsList = []
        state.error = null
        state.inProgress = true
      })
      .addCase(
        fetchLoggedInUserSubscribedToChannels.fulfilled,
        (state, action) => {
          state.inProgress = false
          if (action.payload?.success) {
            state.subscribedToChannelsList = action.payload.data
            // toast({
            //   title:
            //     'Logged In User Subscribed to Channels fetched successfully!',
            // })
          } else {
            state.error = action.payload?.message || 'server error'
            toast({
              variant: 'destructive',
              title: state.error,
            })
          }
        }
      )
      .addCase(
        fetchLoggedInUserSubscribedToChannels.rejected,
        (state, action) => {
          state.inProgress = false
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      )
      .addCase(toggleSubscription.pending, (state) => {
        state.error = null
        state.inProgress = true
      })
      .addCase(toggleSubscription.fulfilled, (state, action) => {
        state.inProgress = false
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
        } else {
          state.inProgress = false
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleSubscription.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(fetchLoggedInUserSubscribersList.pending, (state) => {
        state.subscribersList = []
        state.error = null
        state.inProgress = true
      })
      .addCase(fetchLoggedInUserSubscribersList.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.subscribersList = action.payload.data
          // toast({
          //   title:
          //     'Logged In User Subscribed to Channels fetched successfully!',
          // })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchLoggedInUserSubscribersList.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export {
  fetchLoggedInUserSubscribedToChannels,
  toggleSubscription,
  fetchLoggedInUserSubscribersList,
}

export default subscriptionSlice.reducer
