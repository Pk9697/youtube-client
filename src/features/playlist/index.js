import PlaylistContainer from './layouts/PlaylistContainer'
import playlistReducer, {
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchWatchLaterPlaylist,
  addVideoToWatchLaterPlaylist,
  removeVideoFromWatchLaterPlaylist,
} from './services/playlistSlice'

import useWatchLaterPlaylist from './hooks/useWatchLaterPlaylist'

export {
  PlaylistContainer,
  playlistReducer,
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchWatchLaterPlaylist,
  addVideoToWatchLaterPlaylist,
  removeVideoFromWatchLaterPlaylist,
  useWatchLaterPlaylist,
}
