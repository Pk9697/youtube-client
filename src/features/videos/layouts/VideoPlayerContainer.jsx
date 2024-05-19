import { useDispatch, useSelector } from 'react-redux'
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Video from '../components/Video'
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
import VideoPlayerSkeletonContainer from '../skeletons/VideoPlayerSkeletonContainer'
import useApp from '@/app/useApp'
import VideoDropdownMenuContainer from './VideoDropdownMenuContainer'

function VideoPlayerContainer({ videoDetails = {}, inProgress = false }) {
  const dispatch = useDispatch()
  const { isLoading: isLoadingToggleLikeVideo } = useApp(
    'video/toggleLikeVideo'
  )
  const { isLoading: isLoadingToggleDislikeVideo } = useApp(
    'video/toggleDislikeVideo'
  )
  const { isLoading: isLoadingToggleSubscription } = useApp(
    'subscription/toggleSubscription'
  )

  const { accessToken } = useSelector((state) => state.auth)

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

  return inProgress ? (
    <VideoPlayerSkeletonContainer />
  ) : (
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
            <Video.Text>{formatViews(subscribersCount)} Subscribers</Video.Text>
          </Video.Meta>
          {isSubscribed ? (
            <Video.Button
              disabled={isLoadingToggleSubscription}
              onClick={handleToggleSubscription}
              variant="destructive"
            >
              Unsubscribe
            </Video.Button>
          ) : (
            <Video.Button
              disabled={isLoadingToggleSubscription}
              onClick={handleToggleSubscription}
            >
              Subscribe
            </Video.Button>
          )}
        </Video.Row>
        <Video.Row className="ml-auto">
          <Video.Button
            disabled={isLoadingToggleLikeVideo || isLoadingToggleDislikeVideo}
            onClick={() => dispatch(toggleLikeVideo({ accessToken, videoId }))}
          >
            {isLiked ? (
              <ThumbsUpIcon className="mr-2 size-5" fill="skyblue" />
            ) : (
              <ThumbsUpIcon className="mr-2 size-5" />
            )}
            {formatViews(likesCount)}
          </Video.Button>
          <Video.Button
            disabled={isLoadingToggleLikeVideo || isLoadingToggleDislikeVideo}
            onClick={() =>
              dispatch(toggleDislikeVideo({ accessToken, videoId }))
            }
          >
            {isDisliked ? (
              <ThumbsDownIcon className="mr-2 size-5" fill="red" />
            ) : (
              <ThumbsDownIcon className="mr-2 size-5" />
            )}
            {formatViews(dislikesCount)}
          </Video.Button>
          <VideoDropdownMenuContainer videoId={videoId} />
        </Video.Row>
      </Video.Details>
      <Video.Card>
        <Video.CardHeader>
          <Video.CardTitle className="text-sm">
            {formatViews(views)} views • {formatTimeAgo(createdAt)}
          </Video.CardTitle>
          <Video.CardDescription>{description}</Video.CardDescription>
        </Video.CardHeader>
      </Video.Card>
    </Video.PlayerContainer>
  )
}

export default VideoPlayerContainer
