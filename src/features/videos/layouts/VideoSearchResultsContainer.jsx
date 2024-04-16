import { ClockIcon, ListPlusIcon } from 'lucide-react'
import Loader from '@/components/Loader'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { ROUTES } from '@/data/constants'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { getPublicUrl } from '@/utils/getPublicUrl'

function VideoSearchResultsContainer({ videosList = [], inProgress = false }) {
  return (
    <Loader inProgress={inProgress}>
      <Video.Group className="grid-cols-1">
        {!videosList.length && <Video.Title>No videos found</Video.Title>}
        {videosList?.map(
          ({
            _id,
            thumbnail,
            title,
            description,
            duration,
            views,
            createdAt,
            owner: { fullName, userName, avatar } = {},
          }) => (
            <Video key={_id} className="sm:grid-cols-[2fr_3fr]">
              <Video.ImageContainerLink to={`${ROUTES.VIEW}?videoId=${_id}`}>
                <Video.Image src={getPublicUrl(thumbnail)} />
                <Video.Duration>{formatDuration(duration)}</Video.Duration>
              </Video.ImageContainerLink>
              <Video.Details>
                <Video.AvatarLink
                  src={getPublicUrl(avatar)}
                  to={`${ROUTES.PROFILE}/${userName}`}
                />
                <Video.Meta>
                  <Video.TitleLink to={`${ROUTES.VIEW}?videoId=${_id}`}>
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
                  <Video.DropdownMenu>
                    <Video.DropdownMenuContent>
                      <Video.DropdownMenuItem>
                        <ListPlusIcon className="h-4 w-4" />
                        Save to playlist
                      </Video.DropdownMenuItem>
                      <Video.DropdownMenuItem>
                        <ClockIcon className="h-4 w-4" />
                        Save to Watch Later
                      </Video.DropdownMenuItem>
                    </Video.DropdownMenuContent>
                  </Video.DropdownMenu>
                </Video.Row>
              </Video.Details>
            </Video>
          )
        )}
      </Video.Group>
    </Loader>
  )
}

export default VideoSearchResultsContainer
