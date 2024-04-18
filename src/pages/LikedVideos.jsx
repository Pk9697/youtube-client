import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrentPlaylist } from '@/features/playlist'
import Playlist from '@/features/playlist/components/Playlist'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { VideoPlaylistContainer2 } from '@/features/videos'
import Loader from '@/components/Loader'

function LikedVideos() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const {
    currentPlaylist: {
      _id,
      name,
      description,
      videos = [],
      owner: { fullName, userName, avatar } = {},
      createdAt,
    } = {},
    likedVideosPlaylistId,
    inProgress,
    loggedInUserPlaylists,
  } = useSelector((state) => state.playlist)

  useEffect(() => {
    if (likedVideosPlaylistId) {
      dispatch(
        fetchCurrentPlaylist({ accessToken, playlistId: likedVideosPlaylistId })
      )
    }
  }, [loggedInUserPlaylists])

  return (
    <Loader inProgress={inProgress}>
      <div className="grid w-full items-start gap-4 p-4 sm:grid-cols-[1fr_2fr]">
        <Playlist>
          <Playlist.ImageContainerLink
            to={`${ROUTES.VIEW}?videoId=${videos[0]?._id}&playlistId=${_id}`}
          >
            <Playlist.Image src={getPublicUrl(videos[0]?.thumbnail)} />
            <Playlist.Length>{videos.length} videos</Playlist.Length>
          </Playlist.ImageContainerLink>
          <Playlist.Details>
            <Playlist.AvatarLink
              src={getPublicUrl(avatar)}
              to={`${ROUTES.PROFILE}/${userName}`}
            />
            <Playlist.Meta>
              <Playlist.TitleLink
                to={`${ROUTES.VIEW}?videoId=${videos[0]?._id}&playlistId=${_id}`}
              >
                {name}
              </Playlist.TitleLink>
              <Playlist.Text>{description}</Playlist.Text>
              <Playlist.TextLink to={`${ROUTES.PROFILE}/${userName}`}>
                {fullName}
              </Playlist.TextLink>
              <Playlist.Text>{formatTimeAgo(createdAt)}</Playlist.Text>
            </Playlist.Meta>
          </Playlist.Details>
        </Playlist>
        <VideoPlaylistContainer2 videosList={videos} />
      </div>
    </Loader>
  )
}

export default LikedVideos