import { UserRoundMinusIcon, UserRoundPlusIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import Channel from '../components/Channel'
import { formatViews } from '@/utils/formatViews'
import { toggleSubscriptionFromChannelProfile } from '../services/channelSlice'
import { toggleSubscription } from '@/features/subscription'
import { getPublicUrl } from '@/utils/getPublicUrl'

function ChannelContainer({ channelInfo, inProgressSubscription = false }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)

  if (!channelInfo) return null

  const {
    _id: userId,
    userName,
    fullName,
    avatar,
    coverImage,
    subscribersCount,
    subscribedToCount,
    isSubscribed,
  } = channelInfo

  const handleToggleSubscription = () => {
    dispatch(toggleSubscriptionFromChannelProfile())
    dispatch(toggleSubscription({ accessToken, userId }))
  }

  return (
    <Channel>
      <Channel.CoverImage src={getPublicUrl(coverImage)} />
      <Channel.Details>
        <Channel.Avatar src={getPublicUrl(avatar)} />
        <Channel.Meta>
          <Channel.Title>{fullName}</Channel.Title>
          <Channel.Text>@{userName}</Channel.Text>
          <Channel.Text>
            {formatViews(subscribersCount)} Subscribers •{' '}
            {formatViews(subscribedToCount)} Subscribed
          </Channel.Text>
        </Channel.Meta>

        {isSubscribed ? (
          <Channel.Button
            disabled={inProgressSubscription}
            variant="destructive"
            className="sm:ml-auto"
            onClick={handleToggleSubscription}
          >
            <UserRoundMinusIcon className="size-5" />
            Unsubscribe
          </Channel.Button>
        ) : (
          <Channel.Button
            disabled={inProgressSubscription}
            className="sm:ml-auto"
            onClick={handleToggleSubscription}
          >
            <UserRoundPlusIcon className="size-5" />
            Subscribe
          </Channel.Button>
        )}
      </Channel.Details>
    </Channel>
  )
}

export default ChannelContainer
