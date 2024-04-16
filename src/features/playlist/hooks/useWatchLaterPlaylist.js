import { useDispatch, useSelector } from 'react-redux'
import {
  addVideoToWatchLaterPlaylist,
  removeVideoFromWatchLaterPlaylist,
} from '@/features/playlist'

function useWatchLaterPlaylist() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { watchLaterPlaylistId, watchLaterPlaylist } = useSelector(
    (state) => state.playlist
  )

  const handleAddVideoToWatchLaterPlaylist = (videoId) => {
    if (watchLaterPlaylistId) {
      dispatch(
        addVideoToWatchLaterPlaylist({
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
        removeVideoFromWatchLaterPlaylist({
          accessToken,
          playlistId: watchLaterPlaylistId,
          videoId,
        })
      )
    }
  }

  const isVideoSavedInWatchLaterPlaylist = (videoId) => {
    return watchLaterPlaylist.videos?.some((video) => video._id === videoId)
  }

  return {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  }
}

export default useWatchLaterPlaylist
