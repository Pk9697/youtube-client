import { ClockIcon, EllipsisVerticalIcon, ListPlusIcon } from 'lucide-react'
import Loader from '@/components/Loader'
import Video from '../components/Video'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import {
  PlaylistDialogContainer,
  useWatchLaterPlaylist,
} from '@/features/playlist'

function VideoPlaylistContainer2({ videosList = [], inProgress = false }) {
  const {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  } = useWatchLaterPlaylist()

  return (
    <Loader inProgress={inProgress}>
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
                </Video.Meta>
                <Video.Row className="ml-auto items-start">
                  <PlaylistDialogContainer videoId={videoId}>
                    <Video.DropdownMenu>
                      <Video.DropdownMenuTrigger asChild>
                        <Video.Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <EllipsisVerticalIcon className="h-4 w-4" />
                        </Video.Button>
                      </Video.DropdownMenuTrigger>
                      <Video.DropdownMenuContent>
                        <PlaylistDialogContainer.DialogTrigger asChild>
                          <Video.DropdownMenuItem>
                            <ListPlusIcon className="h-4 w-4" />
                            Save to playlist
                          </Video.DropdownMenuItem>
                        </PlaylistDialogContainer.DialogTrigger>
                        {isVideoSavedInWatchLaterPlaylist(videoId) ? (
                          <Video.DropdownMenuItem
                            onClick={() =>
                              handleRemoveVideoFromWatchLaterPlaylist(videoId)
                            }
                          >
                            <ClockIcon className="h-4 w-4" />
                            Remove from Watch Later
                          </Video.DropdownMenuItem>
                        ) : (
                          <Video.DropdownMenuItem
                            onClick={() =>
                              handleAddVideoToWatchLaterPlaylist(videoId)
                            }
                          >
                            <ClockIcon className="h-4 w-4" />
                            Save to Watch Later
                          </Video.DropdownMenuItem>
                        )}
                      </Video.DropdownMenuContent>
                    </Video.DropdownMenu>
                  </PlaylistDialogContainer>
                </Video.Row>
              </Video.Details>
            </Video>
          )
        )}
      </Video.Group>
    </Loader>
  )
}

export default VideoPlaylistContainer2
