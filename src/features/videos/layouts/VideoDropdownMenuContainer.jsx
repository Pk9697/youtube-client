import { ClockIcon, EllipsisVerticalIcon, ListPlusIcon } from 'lucide-react'
import useApp from '@/app/useApp'
import {
  PlaylistDialogContainer,
  useWatchLaterPlaylist,
} from '@/features/playlist'
import Video from '../components/Video'

function VideoDropdownMenuContainer({ videoId }) {
  const { isLoading: isLoadingRemoveVideoFromPlaylist } = useApp(
    'playlist/removeVideoFromPlaylist'
  )
  const { isLoading: isLoadingAddVideoToPlaylist } = useApp(
    'playlist/addVideoToPlaylist'
  )

  const {
    isVideoSavedInWatchLaterPlaylist,
    handleAddVideoToWatchLaterPlaylist,
    handleRemoveVideoFromWatchLaterPlaylist,
  } = useWatchLaterPlaylist()

  return (
    <PlaylistDialogContainer videoId={videoId}>
      <Video.DropdownMenu>
        <Video.DropdownMenuTrigger asChild>
          <Video.Button aria-haspopup="true" size="icon" variant="ghost">
            <EllipsisVerticalIcon className="h-4 w-4" />
          </Video.Button>
        </Video.DropdownMenuTrigger>
        <Video.DropdownMenuContent>
          <PlaylistDialogContainer.DialogTrigger asChild>
            <Video.DropdownMenuItem>
              <ListPlusIcon className="h-4 w-4" />
              Save to playlist
            </Video.DropdownMenuItem>
          </PlaylistDialogContainer.DialogTrigger>
          {isVideoSavedInWatchLaterPlaylist(videoId) ? (
            <Video.DropdownMenuItem
              disabled={isLoadingRemoveVideoFromPlaylist}
              onClick={() => handleRemoveVideoFromWatchLaterPlaylist(videoId)}
            >
              <ClockIcon className="h-4 w-4" />
              Remove from Watch Later
            </Video.DropdownMenuItem>
          ) : (
            <Video.DropdownMenuItem
              disabled={isLoadingAddVideoToPlaylist}
              onClick={() => handleAddVideoToWatchLaterPlaylist(videoId)}
            >
              <ClockIcon className="h-4 w-4" />
              Save to Watch Later
            </Video.DropdownMenuItem>
          )}
        </Video.DropdownMenuContent>
      </Video.DropdownMenu>
    </PlaylistDialogContainer>
  )
}

export default VideoDropdownMenuContainer
