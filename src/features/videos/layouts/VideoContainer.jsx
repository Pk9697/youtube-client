import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import PaginateContainer from '@/layouts/PaginateContainer'
import VideoSkeletonContainer from '../skeletons/VideoSkeletonContainer'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'

function VideoContainer({
  videosList = [],
  inProgress = false,
  paginate,
  handleChangePage,
}) {
  return inProgress ? (
    <VideoSkeletonContainer />
  ) : (
    <div className="flex flex-col justify-between gap-6">
      <Video.Group>
        {!videosList.length && <Video.Title>0 videos</Video.Title>}
        {videosList?.map(
          ({
            _id: videoId,
            thumbnail,
            title,
            duration,
            views,
            createdAt,
            owner: { fullName, avatar, userName } = {},
          }) => (
            <Video key={videoId}>
              <Video.ImageContainerLink
                to={`${ROUTES.VIEW}?videoId=${videoId}`}
              >
                <Video.Image src={getPublicUrl(thumbnail)} />
                <Video.Duration>{formatDuration(duration)}</Video.Duration>
              </Video.ImageContainerLink>
              <Video.Details>
                <Video.Row>
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
                </Video.Row>
                <Video.Row className="ml-auto">
                  <VideoDropdownMenuContainer videoId={videoId} />
                </Video.Row>
              </Video.Details>
            </Video>
          )
        )}
      </Video.Group>
      <PaginateContainer
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default VideoContainer
