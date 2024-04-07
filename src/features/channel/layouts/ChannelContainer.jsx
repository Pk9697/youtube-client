import { UserRoundPlusIcon } from 'lucide-react'
import Channel from '../components/Channel'

function ChannelContainer() {
  return (
    <Channel>
      <Channel.CoverImage src="" />
      <Channel.Details>
        <Channel.Avatar src />
        <Channel.Meta>
          <Channel.Title>Yash Mittal</Channel.Title>
          <Channel.Text>@userName</Channel.Text>
          <Channel.Text>600k Subscribers . 220 Subscribed</Channel.Text>
        </Channel.Meta>

        <Channel.Button className="sm:ml-auto">
          <UserRoundPlusIcon className="size-5" />
          Subscribe
        </Channel.Button>
      </Channel.Details>
    </Channel>
  )
}

export default ChannelContainer
