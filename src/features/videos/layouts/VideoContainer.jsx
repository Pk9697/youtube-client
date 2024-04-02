import React from 'react'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'

function VideoContainer({ videosList = [] }) {
  return (
    <Video.Group>
      {videosList?.map(
        ({
          _id,
          thumbnail,
          title,
          duration,
          views,
          createdAt,
          owner: { fullName, avatar },
        }) => (
          <Video key={_id}>
            <Video.ImageContainerLink to="/view/:videoId">
              <Video.Image src={thumbnail} />
              <Video.Duration>{formatDuration(duration)}</Video.Duration>
            </Video.ImageContainerLink>
            <Video.Details>
              <Video.AvatarLink src={avatar} to="/:channelId" />
              <Video.Meta>
                <Video.TitleLink to="/view/:videoId">{title}</Video.TitleLink>
                <Video.TextLink to="/:channelId">{fullName}</Video.TextLink>
                <Video.Text>
                  {formatViews(views)} views · {formatTimeAgo(createdAt)}
                </Video.Text>
              </Video.Meta>
            </Video.Details>
          </Video>
        )
      )}
    </Video.Group>
  )
}

export default VideoContainer
