import React from 'react'
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Video from '../components/Video'
import Loader from '@/components/Loader'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'

function VideoPlayerContainer({ videoDetails = {}, inProgress = false }) {
  if (!videoDetails) return null
  const {
    videoFile,
    title,
    description,
    views,
    createdAt,
    likesCount,
    isLiked,
    dislikesCount,
    isDisliked,
    owner: { fullName, avatar, subscribersCount, isSubscribed },
  } = videoDetails || {}

  return (
    <Loader inProgress={inProgress}>
      <Video.PlayerContainer>
        <Video.Player src={videoFile}>
          Your browser does not support the video tag.
        </Video.Player>
        <Video.Title>{title}</Video.Title>
        <Video.Details className="flex-wrap">
          <Video.Row>
            <Video.AvatarLink src={avatar} />
            <Video.Meta>
              <Video.TitleLink>{fullName}</Video.TitleLink>
              <Video.Text>
                {formatViews(subscribersCount)} Subscribers
              </Video.Text>
            </Video.Meta>
            {isSubscribed ? (
              <Video.Button variant="destructive">Unsubscribe</Video.Button>
            ) : (
              <Video.Button>Subscribe</Video.Button>
            )}
          </Video.Row>
          <Video.Row className="ml-auto">
            <Video.Button>
              {isLiked ? <ThumbsUpIcon fill="skyblue" /> : <ThumbsUpIcon />}
              {formatViews(likesCount)}
            </Video.Button>
            <Video.Button>
              {isDisliked ? <ThumbsDownIcon fill="red" /> : <ThumbsDownIcon />}
              {formatViews(dislikesCount)}
            </Video.Button>
            <Video.DropdownMenu />
          </Video.Row>
        </Video.Details>
        <Video.Card>
          <Video.CardHeader>
            <Video.CardTitle>
              {formatViews(views)} views , {formatTimeAgo(createdAt)}
            </Video.CardTitle>
            <Video.CardDescription>{description}</Video.CardDescription>
          </Video.CardHeader>
        </Video.Card>
      </Video.PlayerContainer>
    </Loader>
  )
}

export default VideoPlayerContainer
