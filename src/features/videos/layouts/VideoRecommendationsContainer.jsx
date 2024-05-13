import { ClockIcon, EllipsisVerticalIcon, ListPlusIcon } from 'lucide-react'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import {
  PlaylistDialogContainer,
  useWatchLaterPlaylist,
} from '@/features/playlist'
import VideoRecommendationsSkeletonContainer from '../skeletons/VideoRecommendationsSkeletonContainer'

function VideoRecommendationsContainer({ videosList, inProgress = false }) {
  const {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  } = useWatchLaterPlaylist()

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
  )
}

export default VideoRecommendationsContainer
