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
import { TweetsContainer, fetchChannelTweets } from '@/features/tweets'
import UserContainer from '@/layouts/UserContainer'
import { PlaylistContainer, fetchChannelPlaylists } from '@/features/playlist'
import useApp from '@/app/useApp'

function Profile() {
  const dispatch = useDispatch()
  const { userName } = useParams()
  const { accessToken } = useSelector((state) => state.auth)
  const { isLoading: isLoadingFetchChannel } = useApp('channel/fetchChannel')
  const { isLoading: isLoadingFetchUserSubscribedToChannels } = useApp(
    'channel/fetchUserSubscribedToChannels'
  )
  const { channelInfo, subscribedToChannelsList } = useSelector(
    (state) => state.channel
  )
  const { isLoading: isLoadingFetchChannelVideos } = useApp(
    'videos/fetchChannelVideos'
  )
  const { videosList: channelVideos, paginate } = useSelector(
    (state) => state.videos
  )
  const { isLoading: isLoadingFetchChannelTweets } = useApp(
    'tweets/fetchChannelTweets'
  )
  const { tweetsList: channelTweets } = useSelector((state) => state.tweets)
  const { isLoading: isLoadingFetchChannelPlaylist } = useApp(
    'playlist/fetchChannelPlaylists'
  )
  const { channelPlaylists } = useSelector((state) => state.playlist)

  useEffect(() => {
    dispatch(fetchChannel({ accessToken, userName }))
    dispatch(fetchChannelVideos({ accessToken, userName }))
    dispatch(fetchChannelTweets({ accessToken, userName }))
    dispatch(fetchUserSubscribedToChannels({ accessToken, userName }))
    dispatch(fetchChannelPlaylists({ accessToken, userName }))
  }, [userName])

  const handleChangePage = (page = 1) => {
    dispatch(fetchChannelVideos({ accessToken, userName, page }))
  }

  return (
    <div className="flex flex-col gap-4">
      <ChannelContainer
        channelInfo={channelInfo}
        inProgress={isLoadingFetchChannel}
      />
      <Channel.Tabs defaultValue="videos">
        <Channel.TabsList>
          <Channel.TabsTrigger value="videos">Videos</Channel.TabsTrigger>
          <Channel.TabsTrigger value="playlists">Playlists</Channel.TabsTrigger>
          <Channel.TabsTrigger value="tweets">Tweets</Channel.TabsTrigger>
          <Channel.TabsTrigger value="subscribedTo">
            Subscribed To
          </Channel.TabsTrigger>
        </Channel.TabsList>
        <Channel.TabsContent value="videos" className="mt-4">
          <VideoContainer
            videosList={channelVideos}
            inProgress={isLoadingFetchChannelVideos}
            paginate={paginate}
            handleChangePage={handleChangePage}
          />
        </Channel.TabsContent>
        <Channel.TabsContent value="playlists">
          <PlaylistContainer
            inProgress={isLoadingFetchChannelPlaylist}
            playlists={channelPlaylists}
          />
        </Channel.TabsContent>
        <Channel.TabsContent value="tweets" className="mt-4">
          <TweetsContainer
            currentProfileUserName={userName}
            tweetsList={channelTweets}
            inProgress={isLoadingFetchChannelTweets}
          />
        </Channel.TabsContent>
        <Channel.TabsContent value="subscribedTo">
          <UserContainer
            inProgress={isLoadingFetchUserSubscribedToChannels}
            usersList={subscribedToChannelsList}
          />
        </Channel.TabsContent>
      </Channel.Tabs>
    </div>
  )
}

export default Profile
