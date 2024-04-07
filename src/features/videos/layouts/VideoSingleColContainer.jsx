import React from 'react'
import Video from '../components/Video'
import { formatDuration } from '@/utils/formatDuration'
import { formatViews } from '@/utils/formatViews'
import { formatTimeAgo } from '@/utils/formatTimeAgo'
import Loader from '@/components/Loader'

function VideoSingleColContainer({ videosList, inProgress = false }) {
  return (
    <Loader inProgress={inProgress}>
      <Video.Group className="grid-cols-1">
        {videosList?.map(
          ({
            _id,
            thumbnail,
            title,
            duration,
            views,
            createdAt,
            owner: { fullName },
          }) => (
            <Video
              key={_id}
              className="grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]"
            >
              <Video.ImageContainerLink to={`/videos/view/${_id}`}>
                <Video.Image src={thumbnail} />
                <Video.Duration>{formatDuration(duration)}</Video.Duration>
              </Video.ImageContainerLink>
              <Video.Details>
                <Video.Meta>
                  <Video.TitleLink to={`/videos/view/${_id}`}>
                    {title}
                  </Video.TitleLink>
                  <Video.TextLink to="/:channelId">{fullName}</Video.TextLink>
                  <Video.Text>
                    {formatViews(views)} views • {formatTimeAgo(createdAt)}
                  </Video.Text>
                </Video.Meta>
                <Video.Row className="ml-auto">
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

export default VideoSingleColContainer
