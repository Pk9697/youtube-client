import VideoContainer from './layouts/VideoContainer'
import VideoCommentsContainer from './layouts/VideoCommentsContainer'
import VideoPlayerContainer from './layouts/VideoPlayerContainer'
import VideoRecommendationsContainer from './layouts/VideoRecommendationsContainer'
import VideoPlaylistContainer from './layouts/VideoPlaylistContainer'
import VideoSearchResultsContainer from './layouts/VideoSearchResultsContainer'
import VideoPlaylistContainer2 from './layouts/VideoPlaylistContainer2'
import VideoDashboardContainer from './layouts/VideoDashboardContainer'
import VideoPlaylistTableContainer from './layouts/VideoPlaylistTableContainer'

import videosReducer, {
  fetchVideos,
  fetchChannelVideos,
  fetchSubscriptionsVideos,
  fetchLoggedInUserWatchHistory,
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
  editComment,
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
  VideoRecommendationsContainer,
  VideoPlayerContainer,
  VideoCommentsContainer,
  fetchVideoComments,
  addComment,
  toggleLikeComment,
  toggleDislikeComment,
  deleteComment,
  fetchChannelVideos,
  VideoPlaylistContainer,
  VideoSearchResultsContainer,
  fetchSubscriptionsVideos,
  fetchLoggedInUserWatchHistory,
  VideoPlaylistContainer2,
  editComment,
  VideoDashboardContainer,
  VideoPlaylistTableContainer,
}
