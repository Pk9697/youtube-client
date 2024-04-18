import { useDispatch, useSelector } from 'react-redux'
import {
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from '@/features/playlist'

function useWatchLaterPlaylist() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { watchLaterPlaylistId, loggedInUserPlaylists } = useSelector(
    (state) => state.playlist
  )

  const handleAddVideoToWatchLaterPlaylist = (videoId) => {
    if (watchLaterPlaylistId) {
      dispatch(
        addVideoToPlaylist({
          accessToken,
          playlistId: watchLaterPlaylistId,
          videoId,
        })
      )
    }
  }
  const handleRemoveVideoFromWatchLaterPlaylist = (videoId) => {
    if (watchLaterPlaylistId) {
      dispatch(
        removeVideoFromPlaylist({
          accessToken,
          playlistId: watchLaterPlaylistId,
          videoId,
        })
      )
    }
  }

  const isVideoSavedInWatchLaterPlaylist = (videoId) => {
    const watchLaterPlaylist = loggedInUserPlaylists.find(
      (playlist) => playlist._id === watchLaterPlaylistId
    )

    return watchLaterPlaylist?.videos?.some((video) => video._id === videoId)
  }

  return {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  }
}

export default useWatchLaterPlaylist
