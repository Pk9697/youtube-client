import PlaylistContainer from './layouts/PlaylistContainer'
import Playlist from './components/Playlist'
import PlaylistDialogContainer from './layouts/PlaylistDialogContainer'
import playlistReducer, {
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  fetchLoggedInUserPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  createPlaylist,
} from './services/playlistSlice'

import useWatchLaterPlaylist from './hooks/useWatchLaterPlaylist'

export {
  PlaylistContainer,
  playlistReducer,
  fetchChannelPlaylists,
  fetchCurrentPlaylist,
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
  useWatchLaterPlaylist,
  Playlist,
  PlaylistDialogContainer,
  fetchLoggedInUserPlaylists,
  addVideoToPlaylist,
  removeVideoFromPlaylist,
  createPlaylist,
}
