/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import {
  fetchLoggedInUserSubscribedToChannels,
  toggleSubscription,
} from './asyncThunkActions'
import { toast } from '@/components/ui/use-toast'

const initialState = {
  subscribedToChannelsList: [],
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
            toast({
              title:
                'Logged In User Subscribed to Channels fetched successfully!',
            })
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
          if (action.payload.data?.channel) {
            state.subscribedToChannelsList.unshift(action.payload.data)
          } else {
            state.subscribedToChannelsList =
              state.subscribedToChannelsList.filter(
                (user) => user.channel._id !== userId
              )
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
  },
})

export { fetchLoggedInUserSubscribedToChannels, toggleSubscription }

export default subscriptionSlice.reducer
