/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { toast } from '@/components/ui/use-toast'
import {
  addComment,
  deleteComment,
  editComment,
  fetchVideo,
  fetchVideoComments,
  toggleDislikeComment,
  toggleDislikeVideo,
  toggleLikeComment,
  toggleLikeVideo,
  // toggleSubscriptionFromVideoOwner,
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
  reducers: {
    toggleSubscriptionFromVideoOwner: (state) => {
      const { isSubscribed, subscribersCount } = state.videoDetails.owner
      state.videoDetails.owner.subscribersCount = isSubscribed
        ? subscribersCount - 1
        : subscribersCount + 1
      state.videoDetails.owner.isSubscribed = !isSubscribed
    },
  },
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
          state.videoDetails = { ...state.videoDetails, ...action.payload.data }
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
          state.videoDetails = { ...state.videoDetails, ...action.payload.data }
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
      .addCase(toggleLikeComment.pending, (state) => {
        state.error = null
      })
      .addCase(toggleLikeComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { commentId } = action.meta.arg

          state.comments = state.comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, ...action.payload.data }
              : comment
          )
          toast({
            title: 'Comment Like toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleLikeComment.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(toggleDislikeComment.pending, (state) => {
        state.error = null
      })
      .addCase(toggleDislikeComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { commentId } = action.meta.arg

          state.comments = state.comments.map((comment) =>
            comment._id === commentId
              ? { ...comment, ...action.payload.data }
              : comment
          )
          toast({
            title: 'Comment Dislike toggled successfully!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(toggleDislikeComment.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(deleteComment.pending, (state) => {
        state.error = null
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          // * Recieved commentId after dispatching deleteComment action from it's arguments provided
          const { commentId } = action.meta.arg

          state.comments = state.comments.filter(
            (comment) => comment._id !== commentId
          )
          toast({
            title: 'Deleted Video Comment!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(deleteComment.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
      .addCase(editComment.pending, (state) => {
        state.error = null
      })
      .addCase(editComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { commentId, formFields: { content } = {} } = action.meta.arg
          const idx = state.comments.findIndex(
            (comment) => comment._id === commentId
          )
          state.comments[idx].content = content

          toast({
            title: 'Video comment edited!',
          })
        } else {
          state.error = action.payload?.message || 'server error'
          toast({
            variant: 'destructive',
            title: state.error,
          })
        }
      })
      .addCase(editComment.rejected, (state, action) => {
        state.error = action.payload?.message || 'server error'
        toast({
          variant: 'destructive',
          title: state.error,
        })
      })
  },
})

export const { toggleSubscriptionFromVideoOwner } = videoSlice.actions

export {
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  fetchVideoComments,
  addComment,
  toggleLikeComment,
  toggleDislikeComment,
  deleteComment,
  editComment,
}

export default videoSlice.reducer
