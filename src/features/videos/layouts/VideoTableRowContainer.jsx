import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  ListPlusIcon,
  MoreHorizontalIcon,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'
import Video from '../components/Video'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { deleteVideo, toggleVideoPublishStatus } from '@/features/dashboard'
import { formatViews } from '@/utils/formatViews'
import { formatDate } from '@/utils/formatDate'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import PlaylistDialogContentContainer from '@/features/playlist/layouts/PlaylistDialogContentContainer'
import VideoEditDialogContentContainer from './VideoEditDialogContentContainer'
import useApp from '@/app/useApp'

function VideoTableRowContainer({ video = {} }) {
  const {
    _id: videoId,
    thumbnail,
    title,
    isPublished,
    views,
    likesCount,
    dislikesCount,
    createdAt,
  } = video

  const Dialogs = Object.freeze({
    editVideo: 'editVideo',
    saveVideoToPlaylist: 'saveVideoToPlaylist',
  })
  const { isLoading: isLoadingDeleteVideo } = useApp('dashboard/deleteVideo')
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const [dialog, setDialog] = useState()

  return (
    <Video.TableRow>
      <Video.TableCell>
        <Video.Image className="aspect-video" src={getPublicUrl(thumbnail)} />
      </Video.TableCell>
      <Video.TableCell className="font-medium">{title}</Video.TableCell>
      <Video.TableCell>
        <Video.Switch
          checked={isPublished}
          onCheckedChange={() =>
            dispatch(toggleVideoPublishStatus({ accessToken, videoId }))
          }
        />
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        {formatViews(views)}
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        {formatViews(likesCount)}
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        {formatViews(dislikesCount)}
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        {formatDate(createdAt)}
      </Video.TableCell>

      <Video.TableCell>
        <Dialog>
          <Video.DropdownMenu>
            <Video.DropdownMenuTrigger asChild>
              <Video.Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontalIcon className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Video.Button>
            </Video.DropdownMenuTrigger>
            <Video.DropdownMenuContent align="end">
              <Video.DropdownMenuLabel>Actions</Video.DropdownMenuLabel>
              <Video.DropdownMenuSeparator />
              <DialogTrigger
                asChild
                onClick={() => {
                  setDialog(Dialogs.saveVideoToPlaylist)
                }}
              >
                <Video.DropdownMenuItem>
                  <ListPlusIcon className="h-4 w-4" />
                  Save to playlist
                </Video.DropdownMenuItem>
              </DialogTrigger>
              <DialogTrigger
                asChild
                onClick={() => {
                  setDialog(Dialogs.editVideo)
                }}
              >
                <Video.DropdownMenuItem>
                  <PencilIcon className="h-4 w-4" />
                  Edit
                </Video.DropdownMenuItem>
              </DialogTrigger>
              <Video.DropdownMenuItem
                disabled={isLoadingDeleteVideo}
                className="bg-destructive"
                onClick={() => dispatch(deleteVideo({ accessToken, videoId }))}
              >
                <Trash2Icon className="h-4 w-4" />
                Delete
              </Video.DropdownMenuItem>
            </Video.DropdownMenuContent>
          </Video.DropdownMenu>
          {dialog === Dialogs.editVideo && (
            <VideoEditDialogContentContainer video={video} />
          )}
          {dialog === Dialogs.saveVideoToPlaylist && (
            <PlaylistDialogContentContainer videoId={videoId} />
          )}
        </Dialog>
      </Video.TableCell>
    </Video.TableRow>
  )
}

export default VideoTableRowContainer
