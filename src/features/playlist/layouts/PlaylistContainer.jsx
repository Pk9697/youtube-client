import { formatTimeAgo } from '@/utils/formatTimeAgo'
import Playlist from '../components/Playlist'
import { ROUTES } from '@/data/constants'

function PlaylistContainer({ playlists = [] }) {
  return (
    <Playlist.Group>
      {playlists.map(
        ({
          _id,
          name,
          description,
          videos = [],
          owner: { fullName, userName, avatar },
          createdAt,
        }) => (
          <Playlist key={_id}>
            <Playlist.ImageContainerLink>
              <Playlist.Image src={videos[0]?.thumbnail} />
              <Playlist.Length>{videos.length} videos</Playlist.Length>
            </Playlist.ImageContainerLink>
            <Playlist.Details>
              <Playlist.AvatarLink
                src={avatar}
                to={`${ROUTES.PROFILE}/${userName}`}
              />
              <Playlist.Meta>
                <Playlist.TitleLink>{name}</Playlist.TitleLink>
                <Playlist.Text>{description}</Playlist.Text>
                <Playlist.TextLink to={`${ROUTES.PROFILE}/${userName}`}>
                  {fullName}
                </Playlist.TextLink>
                <Playlist.Text>{formatTimeAgo(createdAt)}</Playlist.Text>
              </Playlist.Meta>
            </Playlist.Details>
          </Playlist>
        )
      )}
    </Playlist.Group>
  )
}

export default PlaylistContainer
