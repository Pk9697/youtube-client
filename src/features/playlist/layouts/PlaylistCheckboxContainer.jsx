import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EarthIcon, EarthLockIcon } from 'lucide-react'
import Playlist from '../components/Playlist'
import {
  addVideoToPlaylist,
  removeVideoFromPlaylist,
} from '../services/playlistSlice'

function PlaylistCheckboxContainer({
  _id: playlistId,
  name,
  visibility,
  videos = [],
  videoId,
}) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [isChecked, setIsChecked] = useState(
    videos.some((video) => video._id === videoId)
  )

  const handleCheckboxClick = () => {
    if (isChecked) {
      dispatch(removeVideoFromPlaylist({ accessToken, playlistId, videoId }))
    } else {
      dispatch(addVideoToPlaylist({ accessToken, playlistId, videoId }))
    }

    setIsChecked((prev) => !prev)
  }

  return (
    <Playlist.Row key={playlistId}>
      <Playlist.Checkbox
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
