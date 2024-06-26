import { twMerge } from 'tailwind-merge'
import { ROUTES } from '@/data/constants'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'
import VideoPlaylistSkeletonContainer from '../skeletons/VideoPlaylistSkeletonContainer'

function VideoPlaylistContainer({
  currentPlaylist = {},
  currentVideoId,
  inProgress = false,
}) {
  const {
    _id: playlistId,
    name,
    description,
    videos = [],
    owner: {
      userName: playlistOwnerUserName,
      fullName: playlistOwnerFullName,
    } = {},
  } = currentPlaylist

  return inProgress ? (
    <VideoPlaylistSkeletonContainer />
  ) : (
    <Video.Card>
      <Video.CardHeader>
        <Video.CardTitle className="text-xl font-bold">{name}</Video.CardTitle>
        <Video.TextLink to={`${ROUTES.PROFILE}/${playlistOwnerUserName}`}>
          {playlistOwnerFullName}
        </Video.TextLink>
        <Video.CardDescription>{description}</Video.CardDescription>
      </Video.CardHeader>
      <Video.CardContent>
        <Video.Group className="grid-cols-1">
          {videos.map(
            ({
              _id: videoId,
              title,
              thumbnail,
              duration,
              owner: {
                fullName: videoOwnerFullName,
                userName: videoOwnerUserName,
              },
            }) => (
              <Video
                key={videoId}
                className={twMerge(
                  'grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]',
                  currentVideoId === videoId ? 'rounded-xl bg-muted' : ''
                )}
              >
                <Video.ImageContainerLink
                  to={`${ROUTES.VIEW}?videoId=${videoId}&playlistId=${playlistId}`}
                >
                  <Video.Image src={getPublicUrl(thumbnail)} />
                  <Video.Duration>{formatDuration(duration)}</Video.Duration>
                </Video.ImageContainerLink>
                <Video.Details>
                  <Video.Meta>
                    <Video.TitleLink
                      to={`${ROUTES.VIEW}?videoId=${videoId}&playlistId=${playlistId}`}
                    >
                      {title}
                    </Video.TitleLink>
                    <Video.TextLink
                      to={`${ROUTES.PROFILE}/${videoOwnerUserName}`}
                    >
                      {videoOwnerFullName}
                    </Video.TextLink>
                  </Video.Meta>
                  <Video.Row className="ml-auto">
                    <VideoDropdownMenuContainer videoId={videoId} />
                  </Video.Row>
                </Video.Details>
              </Video>
            )
          )}
        </Video.Group>
      </Video.CardContent>
    </Video.Card>
  )
}

export default VideoPlaylistContainer
