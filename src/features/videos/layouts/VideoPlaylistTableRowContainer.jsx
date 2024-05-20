import { useDispatch, useSelector } from 'react-redux'
import { ListMinusIcon } from 'lucide-react'
import { getPublicUrl } from '@/utils/getPublicUrl'
import Video from '../components/Video'
import { formatViews } from '@/utils/formatViews'
import { formatDate } from '@/utils/formatDate'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { removeVideoFromPlaylist } from '@/features/playlist'
import useApp from '@/app/useApp'

function VideoPlaylistTableRowContainer({ video = {}, playlistId }) {
  const { isLoading: isLoadingRemoveVideoFromPlaylist } = useApp(
    'playlist/removeVideoFromPlaylist'
  )
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { _id: videoId, thumbnail, title, views, createdAt } = video

  return (
    <Video.TableRow>
      <Video.TableCell>
        <Video.Image src={getPublicUrl(thumbnail)} />
      </Video.TableCell>
      <Video.TableCell className="font-medium">{title}</Video.TableCell>
      <Video.TableCell>{formatViews(views)}</Video.TableCell>
      <Video.TableCell>{formatDate(createdAt)}</Video.TableCell>
      <Video.TableCell>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Video.Button
                disabled={isLoadingRemoveVideoFromPlaylist}
                variant="destructive"
                size="icon"
                onClick={() =>
                  dispatch(
                    removeVideoFromPlaylist({
                      accessToken,
                      playlistId,
                      videoId,
                    })
                  )
                }
              >
                <ListMinusIcon className="size-5" />
              </Video.Button>
            </TooltipTrigger>
            <TooltipContent>Remove from playlist</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Video.TableCell>
    </Video.TableRow>
  )
}

export default VideoPlaylistTableRowContainer
