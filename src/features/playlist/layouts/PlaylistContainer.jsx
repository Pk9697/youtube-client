import Playlist from '../components/Playlist'

function PlaylistContainer() {
  return (
    <Playlist.Group>
      <Playlist>
        <Playlist.ImageContainerLink>
          <Playlist.Image />
          <Playlist.Length>6 videos</Playlist.Length>
        </Playlist.ImageContainerLink>
        <Playlist.Details>
          <Playlist.AvatarLink />
          <Playlist.Meta>
            <Playlist.TitleLink>title</Playlist.TitleLink>
            <Playlist.Text>description</Playlist.Text>
            <Playlist.TextLink>fullName</Playlist.TextLink>
            <Playlist.Text>3 days ago</Playlist.Text>
          </Playlist.Meta>
        </Playlist.Details>
      </Playlist>
      <Playlist>
        <Playlist.ImageContainerLink>
          <Playlist.Image />
          <Playlist.Length>6 videos</Playlist.Length>
        </Playlist.ImageContainerLink>
        <Playlist.Details>
          <Playlist.AvatarLink />
          <Playlist.Meta>
            <Playlist.TitleLink>title</Playlist.TitleLink>
            <Playlist.Text>description</Playlist.Text>
            <Playlist.TextLink>fullName</Playlist.TextLink>
            <Playlist.Text>3 days ago</Playlist.Text>
          </Playlist.Meta>
        </Playlist.Details>
      </Playlist>
    </Playlist.Group>
  )
}

export default PlaylistContainer
