import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  ChannelContainer,
  fetchChannel,
  fetchUserSubscribedToChannels,
} from '@/features/channel'
import Channel from '@/features/channel/components/Channel'
import { VideoContainer, fetchChannelVideos } from '@/features/videos'
import Loader from '@/components/Loader'
import { TweetsContainer, fetchChannelTweets } from '@/features/tweets'
import UserContainer from '@/layouts/UserContainer'

function Profile() {
  const dispatch = useDispatch()
  const { userName } = useParams()
  const { accessToken } = useSelector((state) => state.auth)
  const {
    channelInfo,
    inProgress: inProgressChannelFetching,
    subscribedToChannelsList,
  } = useSelector((state) => state.channel)
  const { videosList: channelVideos, inProgress: inProgressVideosFetching } =
    useSelector((state) => state.videos)
  const { tweetsList: channelTweets, inProgress: inProgressTweetsFetching } =
    useSelector((state) => state.tweets)
  const { inProgress: inProgressSubscription } = useSelector(
    (state) => state.subscription
  )

  useEffect(() => {
    dispatch(fetchChannel({ accessToken, userName }))
    dispatch(fetchChannelVideos({ accessToken, userName }))
    dispatch(fetchChannelTweets({ accessToken, userName }))
    dispatch(fetchUserSubscribedToChannels({ accessToken, userName }))
  }, [userName])

  return (
    <Loader inProgress={inProgressChannelFetching}>
      <div className="flex flex-col gap-4">
        <ChannelContainer channelInfo={channelInfo} />
        <Channel.Tabs defaultValue="videos">
          <Channel.TabsList>
            <Channel.TabsTrigger value="videos">Videos</Channel.TabsTrigger>
            <Channel.TabsTrigger value="playlists">
              Playlists
            </Channel.TabsTrigger>
            <Channel.TabsTrigger value="tweets">Tweets</Channel.TabsTrigger>
            <Channel.TabsTrigger value="subscribedTo">
              Subscribed To
            </Channel.TabsTrigger>
          </Channel.TabsList>
          <Channel.TabsContent value="videos" className="mt-4">
            <VideoContainer
              videosList={channelVideos}
              inProgress={inProgressVideosFetching}
            />
          </Channel.TabsContent>
          <Channel.TabsContent value="playlists">Playlists</Channel.TabsContent>
          <Channel.TabsContent value="tweets" className="mt-4">
            <Loader inProgress={inProgressTweetsFetching}>
              <TweetsContainer
                currentProfileUserName={userName}
                tweetsList={channelTweets}
              />
            </Loader>
          </Channel.TabsContent>
          <Channel.TabsContent value="subscribedTo">
            <UserContainer
              usersList={subscribedToChannelsList}
              inProgressSubscription={inProgressSubscription}
            />
          </Channel.TabsContent>
        </Channel.Tabs>
      </div>
    </Loader>
  )
}

export default Profile
