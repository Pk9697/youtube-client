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
} from './asyncThunkActions'

const initialState = {
  videoDetails: null,
  comments: [],
  paginate: null,
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
      .addCase(fetchVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videoDetails = action.payload.data
        }
      })
      .addCase(toggleLikeVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videoDetails = { ...state.videoDetails, ...action.payload.data }
          toast({
            title: action.payload?.message || 'Like toggled successfully!',
          })
        }
      })
      .addCase(toggleDislikeVideo.fulfilled, (state, action) => {
        if (action.payload?.success) {
          state.videoDetails = { ...state.videoDetails, ...action.payload.data }
          toast({
            title: action.payload?.message || 'Dislike toggled successfully!',
          })
        }
      })
      .addCase(fetchVideoComments.fulfilled, (state, action) => {
        if (action.payload?.success) {
          const { docs, ...paginateOptions } = action.payload.data || {}
          state.comments = docs
          state.paginate = paginateOptions
        }
      })
      .addCase(addComment.fulfilled, (state, action) => {
        if (action.payload?.success) {
          // state.comments = [action.payload.data, ...state.comments]
          state.comments.unshift(action.payload.data)
          toast({
            title: 'Video comment added!',
          })
        }
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
        }
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
        }
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
        }
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
        }
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
