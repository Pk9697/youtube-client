import React from 'react'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import Loader from '@/components/Loader'

function VideoContainer({ videosList = [], inProgress = false }) {
  return (
    <Loader inProgress={inProgress}>
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
              <Video.ImageContainerLink to="videos/view/:videoId">
                <Video.Image src={thumbnail} />
                <Video.Duration>{formatDuration(duration)}</Video.Duration>
              </Video.ImageContainerLink>
              <Video.Details>
                <Video.Row>
                  <Video.AvatarLink src={avatar} to="/:channelId" />
                  <Video.Meta>
                    <Video.TitleLink to="videos/view/:videoId">
                      {title}
                    </Video.TitleLink>
                    <Video.TextLink to="/:channelId">{fullName}</Video.TextLink>
                    <Video.Text>
                      {formatViews(views)} views · {formatTimeAgo(createdAt)}
                    </Video.Text>
                  </Video.Meta>
                </Video.Row>
                <Video.Row className="">
                  <Video.DropdownMenu />
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
