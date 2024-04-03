import React from 'react'
import { ThumbsDownIcon, ThumbsUpIcon } from 'lucide-react'
import Video from '../components/Video'

function VideoPlayerContainer() {
  return (
    <Video.PlayerContainer>
      <Video.Player src>
        Your browser does not support the video tag.
      </Video.Player>
      <Video.Title>title</Video.Title>
      <Video.Details className="flex-wrap">
        <Video.Row>
          <Video.AvatarLink />
          <Video.Meta>
            <Video.TitleLink>Channel Name</Video.TitleLink>
            <Video.Text>1.4M Subscribers</Video.Text>
          </Video.Meta>
          <Video.Button className="">Subscribe</Video.Button>
        </Video.Row>
        <Video.Row className="ml-auto">
          <Video.Button>
            <ThumbsUpIcon /> 123
          </Video.Button>
          <Video.Button>
            <ThumbsDownIcon /> 123
          </Video.Button>
          <Video.DropdownMenu />
        </Video.Row>
      </Video.Details>
      <Video.Card>
        <Video.CardHeader>
          <Video.CardTitle>77000 views 2 days ago</Video.CardTitle>
          <Video.CardDescription>
            sdjhvvbskjbndckkkkkkkkkkkkkkkkkkkkkkk
            sjbckdjdkjcnsssssssssssssssssssbvjkbsdkvjbksdjbvkjsbdvkjbdddk,mjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjmmjkkkkkkkkkkkkkkkdddddddddddddddddddddsdvkjbsdkvjbksdjbvkjsbdvkjbsdvkjbdsvkjbdsvkjbsdvkjbsdvkjbsdkjvkj
          </Video.CardDescription>
        </Video.CardHeader>
      </Video.Card>
    </Video.PlayerContainer>
  )
}

export default VideoPlayerContainer
