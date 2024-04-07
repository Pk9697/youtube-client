import { useSelector } from 'react-redux'
import { ChannelContainer } from '@/features/channel'
import Channel from '@/features/channel/components/Channel'
import { VideoContainer } from '@/features/videos'

function Profile() {
  const { videosList, inProgress } = useSelector((state) => state.videos)
  return (
    <div className="flex flex-col gap-4">
      <ChannelContainer />
      <Channel.Tabs defaultValue="videos">
        <Channel.TabsList>
          <Channel.TabsTrigger value="videos">Videos</Channel.TabsTrigger>
          <Channel.TabsTrigger value="playlists">Playlists</Channel.TabsTrigger>
          <Channel.TabsTrigger value="tweets">Tweets</Channel.TabsTrigger>
          <Channel.TabsTrigger value="subscribedTo">
            Subscribed To
          </Channel.TabsTrigger>
        </Channel.TabsList>
        <Channel.TabsContent value="videos">
          <VideoContainer videosList={videosList} inProgress={inProgress} />
        </Channel.TabsContent>
        <Channel.TabsContent value="playlists">Playlists</Channel.TabsContent>
        <Channel.TabsContent value="tweets">Tweets</Channel.TabsContent>
        <Channel.TabsContent value="subscribedTo">
          Subscribed To
        </Channel.TabsContent>
      </Channel.Tabs>
    </div>
  )
}

export default Profile
