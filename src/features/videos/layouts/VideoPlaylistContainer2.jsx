import Video from '../components/Video'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import VideoPlaylistSkeletonContainer2 from '../skeletons/VideoPlaylistSkeletonContainer2'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'

function VideoPlaylistContainer2({ videosList = [], inProgress = false }) {
  return inProgress ? (
    <VideoPlaylistSkeletonContainer2 />
  ) : (
    <Video.Group className="grid-cols-1">
      {!videosList.length && <Video.Title>No videos available</Video.Title>}
      {videosList?.map(
        ({
          _id: videoId,
          thumbnail,
          title,
          duration,
          views,
          createdAt,
          owner: { fullName, userName, avatar } = {},
        }) => (
          <Video key={videoId} className="sm:grid-cols-[1fr_3fr]">
            <Video.ImageContainerLink to={`${ROUTES.VIEW}?videoId=${videoId}`}>
              <Video.Image src={getPublicUrl(thumbnail)} />
              <Video.Duration>{formatDuration(duration)}</Video.Duration>
            </Video.ImageContainerLink>
            <Video.Details>
              <Video.AvatarLink
                src={getPublicUrl(avatar)}
                to={`${ROUTES.PROFILE}/${userName}`}
              />
              <Video.Meta>
                <Video.TitleLink to={`${ROUTES.VIEW}?videoId=${videoId}`}>
                  {title}
                </Video.TitleLink>
                <Video.TextLink to={`${ROUTES.PROFILE}/${userName}`}>
                  {fullName}
                </Video.TextLink>
                <Video.Text>
                  {formatViews(views)} views • {formatTimeAgo(createdAt)}
                </Video.Text>
              </Video.Meta>
              <Video.Row className="ml-auto items-start">
                <VideoDropdownMenuContainer videoId={videoId} />
              </Video.Row>
            </Video.Details>
          </Video>
        )
      )}
    </Video.Group>
  )
}

export default VideoPlaylistContainer2
