import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import VideoRecommendationsSkeletonContainer from '../skeletons/VideoRecommendationsSkeletonContainer'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'

function VideoRecommendationsContainer({ videosList, inProgress = false }) {
  return inProgress ? (
    <VideoRecommendationsSkeletonContainer />
  ) : (
    <Video.Group className="grid-cols-1">
      {videosList?.map(
        ({
          _id: videoId,
          thumbnail,
          title,
          duration,
          views,
          createdAt,
          owner: { fullName, userName } = {},
        }) => (
          <Video
            key={videoId}
            className="grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]"
          >
            <Video.ImageContainerLink to={`${ROUTES.VIEW}?videoId=${videoId}`}>
              <Video.Image src={getPublicUrl(thumbnail)} />
              <Video.Duration>{formatDuration(duration)}</Video.Duration>
            </Video.ImageContainerLink>
            <Video.Details>
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

export default VideoRecommendationsContainer
