import PlaylistContainer from './layouts/PlaylistContainer'
import Playlist from './components/Playlist'
import PlaylistDialogContainer from './layouts/PlaylistDialogContainer'
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
  Playlist,
  PlaylistDialogContainer,
}
