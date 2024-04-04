import VideoContainer from './layouts/VideoContainer'
import videosReducer, { fetchVideos } from './services/videosSlice'
import videoReducer, {
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
} from './services/videoSlice'

export {
  VideoContainer,
  videosReducer,
  fetchVideos,
  videoReducer,
  fetchVideo,
  toggleLikeVideo,
  toggleDislikeVideo,
}
