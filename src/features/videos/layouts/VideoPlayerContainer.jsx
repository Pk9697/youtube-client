import { useDispatch, useSelector } from 'react-redux'
import {
  ThumbsDownIcon,
  ThumbsUpIcon,
  ClockIcon,
  ListPlusIcon,
} from 'lucide-react'
import Video from '../components/Video'
import Loader from '@/components/Loader'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import {
  toggleDislikeVideo,
  toggleLikeVideo,
  toggleSubscriptionFromVideoOwner,
} from '../services/videoSlice'
import { ROUTES } from '@/data/constants'
import { toggleSubscription } from '@/features/subscription'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { useWatchLaterPlaylist } from '@/features/playlist'

function VideoPlayerContainer({
  videoDetails = {},
  inProgress = false,
  inProgressSubscription = false,
}) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  } = useWatchLaterPlaylist()

  const {
    _id: videoId,
    videoFile,
    title,
    description,
    views,
    createdAt,
    likesCount,
    isLiked,
    dislikesCount,
    isDisliked,
    owner: {
      _id: userId,
      userName,
      fullName,
      avatar,
      subscribersCount,
      isSubscribed,
    } = {},
  } = videoDetails || {}

  const handleToggleSubscription = () => {
    dispatch(toggleSubscriptionFromVideoOwner())
    dispatch(toggleSubscription({ accessToken, userId }))
  }

  return (
    <Loader inProgress={inProgress}>
      <Video.PlayerContainer>
        <Video.Player src={getPublicUrl(videoFile)}>
          Your browser does not support the video tag.
        </Video.Player>
        <Video.Title>{title}</Video.Title>
        <Video.Details className="flex-wrap">
          <Video.Row>
            <Video.AvatarLink
              src={getPublicUrl(avatar)}
              to={`${ROUTES.PROFILE}/${userName}`}
            />
            <Video.Meta>
              <Video.TitleLink to={`${ROUTES.PROFILE}/${userName}`}>
                {fullName}
              </Video.TitleLink>
              <Video.Text>
                {formatViews(subscribersCount)} Subscribers
              </Video.Text>
            </Video.Meta>
            {isSubscribed ? (
              <Video.Button
                disabled={inProgressSubscription}
                onClick={handleToggleSubscription}
                variant="destructive"
              >
                Unsubscribe
              </Video.Button>
            ) : (
              <Video.Button
                disabled={inProgressSubscription}
                onClick={handleToggleSubscription}
              >
                Subscribe
              </Video.Button>
            )}
          </Video.Row>
          <Video.Row className="ml-auto">
            <Video.Button
              onClick={() =>
                dispatch(toggleLikeVideo({ accessToken, videoId }))
              }
            >
              {isLiked ? <ThumbsUpIcon fill="skyblue" /> : <ThumbsUpIcon />}
              {formatViews(likesCount)}
            </Video.Button>
            <Video.Button
              onClick={() =>
                dispatch(toggleDislikeVideo({ accessToken, videoId }))
              }
            >
              {isDisliked ? <ThumbsDownIcon fill="red" /> : <ThumbsDownIcon />}
              {formatViews(dislikesCount)}
            </Video.Button>
            <Video.DropdownMenu>
              <Video.DropdownMenuContent>
                <Video.DropdownMenuItem>
                  <ListPlusIcon className="h-4 w-4" />
                  Save to playlist
                </Video.DropdownMenuItem>
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
                    onClick={() => handleAddVideoToWatchLaterPlaylist(videoId)}
                  >
                    <ClockIcon className="h-4 w-4" />
                    Save to Watch Later
                  </Video.DropdownMenuItem>
                )}
              </Video.DropdownMenuContent>
            </Video.DropdownMenu>
          </Video.Row>
        </Video.Details>
        <Video.Card>
          <Video.CardHeader>
            <Video.CardTitle>
              {formatViews(views)} views • {formatTimeAgo(createdAt)}
            </Video.CardTitle>
            <Video.CardDescription>{description}</Video.CardDescription>
          </Video.CardHeader>
        </Video.Card>
      </Video.PlayerContainer>
    </Loader>
  )
}

export default VideoPlayerContainer
