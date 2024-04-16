import { ClockIcon, ListPlusIcon } from 'lucide-react'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import Loader from '@/components/Loader'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'

function VideoContainer({ videosList = [], inProgress = false }) {
  return (
    <Loader inProgress={inProgress}>
      <Video.Group>
        {!videosList.length && <Video.Title>0 videos</Video.Title>}
        {videosList?.map(
          ({
            _id,
            thumbnail,
            title,
            duration,
            views,
            createdAt,
            owner: { fullName, avatar, userName } = {},
          }) => (
            <Video key={_id}>
              <Video.ImageContainerLink to={`${ROUTES.VIEW}?videoId=${_id}`}>
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
                    <Video.TitleLink to={`${ROUTES.VIEW}?videoId=${_id}`}>
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

export default VideoContainer
