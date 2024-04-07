import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ChannelContainer, fetchChannel } from '@/features/channel'
import Channel from '@/features/channel/components/Channel'
import { VideoContainer, fetchChannelVideos } from '@/features/videos'
import Loader from '@/components/Loader'

function Profile() {
  const dispatch = useDispatch()
  const { userName } = useParams()
  const { accessToken } = useSelector((state) => state.auth)
  const { channelInfo, inProgress: inProgressChannelFetching } = useSelector(
    (state) => state.channel
  )
  const { videosList: channelVideos, inProgress: inProgressVideosFetching } =
    useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchChannel({ accessToken, userName }))
    dispatch(fetchChannelVideos({ accessToken, userName }))
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
          <Channel.TabsContent value="videos">
            <VideoContainer
              videosList={channelVideos}
              inProgress={inProgressVideosFetching}
            />
          </Channel.TabsContent>
          <Channel.TabsContent value="playlists">Playlists</Channel.TabsContent>
          <Channel.TabsContent value="tweets">Tweets</Channel.TabsContent>
          <Channel.TabsContent value="subscribedTo">
            Subscribed To
          </Channel.TabsContent>
        </Channel.Tabs>
      </div>
    </Loader>
  )
}

export default Profile
