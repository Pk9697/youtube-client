import { useDispatch, useSelector } from 'react-redux'
import {
  EarthIcon,
  EarthLockIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'
import { formatViews } from '@/utils/formatViews'
import Playlist from '../components/Playlist'
import { formatDate } from '@/utils/formatDate'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { deletePlaylist } from '../services/asyncThunkActions'
import PlaylistEditContainer from './PlaylistEditContainer'
import useApp from '@/app/useApp'

function PlaylistTableRowContainer({ playlist = {} }) {
  const { isLoading: isLoadingDeletePlaylist } = useApp(
    'playlist/deletePlaylist'
  )
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { _id: playlistId, name, visibility, videos = [], updatedAt } = playlist
  return (
    <Playlist.TableRow>
      <Playlist.TableCell>
        <Playlist.Image src={getPublicUrl(videos[0]?.thumbnail)} />
      </Playlist.TableCell>
      <Playlist.TableCell className="font-medium">{name}</Playlist.TableCell>
      <Playlist.TableCell className="hidden md:table-cell">
        <Playlist.TextSmall className="flex items-center gap-1">
          {visibility}
          {visibility === 'private' ? (
            <EarthLockIcon className="size-5" />
          ) : (
            <EarthIcon className="size-5" />
          )}
        </Playlist.TextSmall>
      </Playlist.TableCell>
      <Playlist.TableCell>{formatViews(videos?.length)}</Playlist.TableCell>

      <Playlist.TableCell className="hidden md:table-cell">
        {formatDate(updatedAt)}
      </Playlist.TableCell>

      <Playlist.TableCell>
        <Playlist.Dialog>
          <Playlist.DropdownMenu>
            <Playlist.DropdownMenuTrigger asChild>
              <Playlist.Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Playlist.Button>
            </Playlist.DropdownMenuTrigger>

            <Playlist.DropdownMenuContent align="end">
              <Playlist.DropdownMenuLabel>Actions</Playlist.DropdownMenuLabel>
              <Playlist.DropdownMenuSeparator />
              <Playlist.DialogTrigger asChild>
                <Playlist.DropdownMenuItem>
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </Playlist.DropdownMenuItem>
              </Playlist.DialogTrigger>
              <Playlist.DropdownMenuItem
                disabled={isLoadingDeletePlaylist}
                className="bg-destructive"
                onClick={() =>
                  dispatch(deletePlaylist({ accessToken, playlistId }))
                }
              >
                <Trash2Icon className="h-4 w-4" />
                Delete
              </Playlist.DropdownMenuItem>
            </Playlist.DropdownMenuContent>
          </Playlist.DropdownMenu>

          <Playlist.DialogContent>
            <PlaylistEditContainer playlist={playlist} />
          </Playlist.DialogContent>
        </Playlist.Dialog>
      </Playlist.TableCell>
    </Playlist.TableRow>
  )
}

export default PlaylistTableRowContainer
