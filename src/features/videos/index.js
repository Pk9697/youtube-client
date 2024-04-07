import VideoContainer from './layouts/VideoContainer'
import VideoCommentsContainer from './layouts/VideoCommentsContainer'
import VideoPlayerContainer from './layouts/VideoPlayerContainer'
import VideoSingleColContainer from './layouts/VideoSingleColContainer'
import videosReducer, {
  fetchVideos,
  fetchChannelVideos,
} from './services/videosSlice'
import videoReducer, {
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  toggleSubscriptionFromVideoOwner,
  fetchVideoComments,
  addComment,
  toggleLikeComment,
  toggleDislikeComment,
  deleteComment,
} from './services/videoSlice'

export {
  VideoContainer,
  videosReducer,
  fetchVideos,
  videoReducer,
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
  toggleSubscriptionFromVideoOwner,
  VideoSingleColContainer,
  VideoPlayerContainer,
  VideoCommentsContainer,
  fetchVideoComments,
  addComment,
  toggleLikeComment,
  toggleDislikeComment,
  deleteComment,
  fetchChannelVideos,
}
