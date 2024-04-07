import { UserRoundMinusIcon, UserRoundPlusIcon } from 'lucide-react'
import Channel from '../components/Channel'
import { formatViews } from '@/utils/formatViews'

function ChannelContainer({ channelInfo }) {
  if (!channelInfo) return null

  const {
    userName,
    fullName,
    avatar,
    coverImage,
    subscribersCount,
    subscribedToCount,
    isSubscribed,
  } = channelInfo

  return (
    <Channel>
      <Channel.CoverImage src={coverImage} />
      <Channel.Details>
        <Channel.Avatar src={avatar} />
        <Channel.Meta>
          <Channel.Title>{fullName}</Channel.Title>
          <Channel.Text>@{userName}</Channel.Text>
          <Channel.Text>
            {formatViews(subscribersCount)} Subscribers •{' '}
            {formatViews(subscribedToCount)} Subscribed
          </Channel.Text>
        </Channel.Meta>

        {isSubscribed ? (
          <Channel.Button variant="destructive" className="sm:ml-auto">
            <UserRoundMinusIcon className="size-5" />
            Unsubcribe
          </Channel.Button>
        ) : (
          <Channel.Button className="sm:ml-auto">
            <UserRoundPlusIcon className="size-5" />
            Subscribe
          </Channel.Button>
        )}
      </Channel.Details>
    </Channel>
  )
}

export default ChannelContainer
