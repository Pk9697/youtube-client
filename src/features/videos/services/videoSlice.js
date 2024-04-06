/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  addComment,
  fetchVideo,
  fetchVideoComments,
  toggleDislikeVideo,
  toggleLikeVideo,
  toggleSubscriptionFromVideoOwner,
} from './asyncThunkActions'

const initialState = {
  videoDetails: null,
  comments: [],
  error: null,
  inProgress: false,
}

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.videoDetails = null
        state.error = null
        state.comments = []
        state.inProgress = true
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.videoDetails = action.payload.data
          toast({
            title: action.payload?.message || 'Videos fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleLikeVideo.pending, (state) => {
        state.error = null
      })
      .addCase(toggleLikeVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videoDetails.likesCount = action.payload.data.likesCount
          state.videoDetails.isLiked = action.payload.data.isLiked
          state.videoDetails.dislikesCount = action.payload.data.dislikesCount
          state.videoDetails.isDisliked = action.payload.data.isDisliked
          toast({
            title: action.payload?.message || 'Like toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleLikeVideo.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleDislikeVideo.pending, (state) => {
        state.error = null
      })
      .addCase(toggleDislikeVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videoDetails.likesCount = action.payload.data.likesCount
          state.videoDetails.isLiked = action.payload.data.isLiked
          state.videoDetails.dislikesCount = action.payload.data.dislikesCount
          state.videoDetails.isDisliked = action.payload.data.isDisliked
          toast({
            title: action.payload?.message || 'Dislike toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleDislikeVideo.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleSubscriptionFromVideoOwner.pending, (state) => {
        state.error = null
      })
      .addCase(toggleSubscriptionFromVideoOwner.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { isSubscribed, subscribersCount } = state.videoDetails.owner
          state.videoDetails.owner.subscribersCount = isSubscribed
            ? subscribersCount - 1
            : subscribersCount + 1
          state.videoDetails.owner.isSubscribed = !isSubscribed
          toast({
            title:
              action.payload?.message || 'Subscription toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleSubscriptionFromVideoOwner.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(fetchVideoComments.pending, (state) => {
        state.error = null
        state.comments = []
        state.inProgress = true
      })
      .addCase(fetchVideoComments.fulfilled, (state, action) => {
        state.inProgress = false
        if (action.payload?.success) {
          state.comments = action.payload.data?.docs
          toast({
            title: 'Video comments fetched successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(fetchVideoComments.rejected, (state, action) => {
        state.inProgress = false
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(addComment.pending, (state) => {
        state.error = null
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          // state.comments = [action.payload.data, ...state.comments]
          state.comments.unshift(action.payload.data)
          toast({
            title: 'Video comment added!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(addComment.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export {
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  toggleSubscriptionFromVideoOwner,
  fetchVideoComments,
  addComment,
}

export default videoSlice.reducer
