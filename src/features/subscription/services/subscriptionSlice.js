/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { fetchLoggedInUserSubscribedToChannels } from './asyncThunkActions'
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
      })
      .addCase(
        fetchLoggedInUserSubscribedToChannels.fulfilled,
        (state, action) => {
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
  },
})

export { fetchLoggedInUserSubscribedToChannels }

export default subscriptionSlice.reducer
