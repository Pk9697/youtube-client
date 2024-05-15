import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Playlist from '@/features/playlist/components/Playlist'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { VideoPlaylistContainer2 } from '@/features/videos'
import { PlaylistSkeleton, fetchCurrentPlaylist } from '@/features/playlist'
import useApp from '@/app/useApp'

function WatchLater() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { isLoading: isLoadingFetchCurrentPlaylist } = useApp(
    'playlist/fetchCurrentPlaylist'
  )
  const {
    currentPlaylist: {
      _id,
      name,
      description,
      videos = [],
      owner: { fullName, userName, avatar } = {},
      createdAt,
    } = {},
    watchLaterPlaylistId,
    loggedInUserPlaylists,
  } = useSelector((state) => state.playlist)

  useEffect(() => {
    if (watchLaterPlaylistId) {
      dispatch(
        fetchCurrentPlaylist({ accessToken, playlistId: watchLaterPlaylistId })
      )
    }
  }, [loggedInUserPlaylists])

  return (
    <div className="grid w-full items-start gap-4 p-4 sm:grid-cols-[1fr_2fr]">
      {isLoadingFetchCurrentPlaylist ? (
        <PlaylistSkeleton />
      ) : (
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
      )}
      <VideoPlaylistContainer2
        videosList={videos}
        inProgress={isLoadingFetchCurrentPlaylist}
      />
    </div>
  )
}

export default WatchLater
