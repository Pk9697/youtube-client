import { useDispatch, useSelector } from 'react-redux'
import { EarthIcon, EarthLockIcon } from 'lucide-react'
import Playlist from '../components/Playlist'
import {
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from '../services/playlistSlice'
import useApp from '@/app/useApp'

function PlaylistCheckboxContainer({
  _id: playlistId,
  name,
  visibility,
  videos = [],
  videoId,
}) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const isChecked = videos.some((video) => video._id === videoId)

  const { isLoading: isLoadingRemoveVideoFromPlaylist } = useApp(
    'playlist/removeVideoFromPlaylist'
  )
  const { isLoading: isLoadingAddVideoToPlaylist } = useApp(
    'playlist/addVideoToPlaylist'
  )

  const handleCheckboxClick = () => {
    if (isChecked) {
      dispatch(removeVideoFromPlaylist({ accessToken, playlistId, videoId }))
    } else {
      dispatch(addVideoToPlaylist({ accessToken, playlistId, videoId }))
    }
  }

  return (
    <Playlist.Row key={playlistId}>
      <Playlist.Checkbox
        disabled={
          isLoadingRemoveVideoFromPlaylist || isLoadingAddVideoToPlaylist
        }
        onClick={handleCheckboxClick}
        checked={isChecked}
        id={playlistId}
      />
      <Playlist.Label htmlFor={playlistId}>
        {name}
        {visibility === 'private' ? (
          <EarthLockIcon className="size-5" />
        ) : (
          <EarthIcon className="size-5" />
        )}
      </Playlist.Label>
    </Playlist.Row>
  )
}

export default PlaylistCheckboxContainer
