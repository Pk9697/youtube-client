import { formatTimeAgo } from '@/utils/formatTimeAgo'
import Playlist from '../components/Playlist'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'

function PlaylistContainer({ playlists = [] }) {
  return (
    <Playlist.Group>
      {playlists.map(
        ({
          _id,
          name,
          description,
          videos = [],
          owner: { fullName, userName, avatar } = {},
          createdAt,
        }) => (
          <Playlist key={_id}>
            <Playlist.ImageContainerLink
              to={`${ROUTES.VIEW}?videoId=${videos[0]?._id}&playlistId=${_id}`}
            >
              <Playlist.Image src={getPublicUrl(videos[0]?.thumbnail)} />
              <Playlist.Length>{videos.length} videos</Playlist.Length>
            </Playlist.ImageContainerLink>
            <Playlist.Details>
              <Playlist.AvatarLink
                src={getPublicUrl(avatar)}
                to={`${ROUTES.PROFILE}/${userName}`}
              />
              <Playlist.Meta>
                <Playlist.TitleLink
                  to={`${ROUTES.VIEW}?videoId=${videos[0]?._id}&playlistId=${_id}`}
                >
                  {name}
                </Playlist.TitleLink>
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
