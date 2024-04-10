import Video from '../components/Video'

function VideoPlaylistContainer() {
  return (
    <Video.Card>
      <Video.CardHeader>
        <Video.CardTitle>Title</Video.CardTitle>
        <Video.TextLink>fullName</Video.TextLink>
        <Video.CardDescription>Desc</Video.CardDescription>
      </Video.CardHeader>
      <Video.CardContent>
        <Video.Group className="grid-cols-1">
          <Video className="grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]">
            <Video.ImageContainerLink>
              <Video.Image />
              <Video.Duration>duration</Video.Duration>
            </Video.ImageContainerLink>
            <Video.Details>
              <Video.Meta>
                <Video.TitleLink>title</Video.TitleLink>
                <Video.TextLink>fullName</Video.TextLink>
              </Video.Meta>
              <Video.Row className="ml-auto">
                <Video.DropdownMenu />
              </Video.Row>
            </Video.Details>
          </Video>
        </Video.Group>
      </Video.CardContent>
    </Video.Card>
  )
}

export default VideoPlaylistContainer
