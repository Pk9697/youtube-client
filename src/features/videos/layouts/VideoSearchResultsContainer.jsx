import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { ROUTES } from '@/data/constants'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { getPublicUrl } from '@/utils/getPublicUrl'
import PaginateContainer from '@/layouts/PaginateContainer'
import VideoSearchResultsSkeletonContainer from '../skeletons/VideoSearchResultsSkeletonContainer'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'

function VideoSearchResultsContainer({
  videosList = [],
  inProgress = false,
  paginate,
  handleChangePage,
}) {
  return inProgress ? (
    <VideoSearchResultsSkeletonContainer />
  ) : (
    <div className="flex flex-col justify-between gap-6">
      <Video.Group className="grid-cols-1">
        {!videosList.length && <Video.Title>No videos found</Video.Title>}
        {videosList?.map(
          ({
            _id: videoId,
            thumbnail,
            title,
            description,
            duration,
            views,
            createdAt,
            owner: { fullName, userName, avatar } = {},
          }) => (
            <Video key={videoId} className="sm:grid-cols-[2fr_3fr]">
              <Video.ImageContainerLink
                to={`${ROUTES.VIEW}?videoId=${videoId}`}
              >
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
                  <Video.Text className="hidden sm:block">
                    {description}
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
      <PaginateContainer
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default VideoSearchResultsContainer
