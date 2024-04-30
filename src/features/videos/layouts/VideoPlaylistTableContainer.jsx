import { ListFilterIcon } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Video from '../components/Video'
import { sortVideos } from '@/features/dashboard'
import VideoPlaylistTableRowContainer from './VideoPlaylistTableRowContainer'

function VideoPlaylistTableContainer({ videosList = [], playlistId }) {
  const dispatch = useDispatch()

  // TODO : Move below code in custom hook named useSort
  const [sortBy, setSortBy] = useState('createdAt')

  const handleSortChange = (value) => {
    setSortBy(value)
    dispatch(sortVideos({ sortBy: value }))
  }

  return (
    <Video.Card>
      <Video.CardHeader className="flex flex-row items-center space-y-0">
        <Video.CardDetails>
          <Video.CardTitle>Playlist Videos</Video.CardTitle>
          <Video.CardDescription className="text-muted-foreground">
            Manage your playlist videos.
          </Video.CardDescription>
        </Video.CardDetails>

        <Video.CardActions>
          <Video.DropdownMenu>
            <Video.DropdownMenuTrigger asChild>
              <Video.Button variant="outline" size="sm" className="h-7 gap-1">
                <ListFilterIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Sort
                </span>
              </Video.Button>
            </Video.DropdownMenuTrigger>

            <Video.DropdownMenuContent align="end">
              <Video.DropdownMenuLabel>Sort by</Video.DropdownMenuLabel>
              <Video.DropdownMenuSeparator />

              <Video.DropdownMenuRadioGroup
                value={sortBy}
                onValueChange={handleSortChange}
              >
                <Video.DropdownMenuRadioItem value="createdAt">
                  Created At
                </Video.DropdownMenuRadioItem>
                <Video.DropdownMenuRadioItem value="views">
                  Views
                </Video.DropdownMenuRadioItem>
              </Video.DropdownMenuRadioGroup>
            </Video.DropdownMenuContent>
          </Video.DropdownMenu>
        </Video.CardActions>
      </Video.CardHeader>

      <Video.CardContent>
        <Video.Table>
          <Video.TableHeader>
            <Video.TableRow>
              <Video.TableHead className="w-[80px]">
                <span className="sr-only">Image</span>
              </Video.TableHead>
              <Video.TableHead>Title</Video.TableHead>
              <Video.TableHead>Views</Video.TableHead>
              <Video.TableHead>Created at</Video.TableHead>
              <Video.TableHead>
                <span className="sr-only">Remove from playlist</span>
              </Video.TableHead>
            </Video.TableRow>
          </Video.TableHeader>

          <Video.TableBody>
            {videosList.map((video) => (
              <VideoPlaylistTableRowContainer
                key={video._id}
                video={video}
                playlistId={playlistId}
              />
            ))}
          </Video.TableBody>
        </Video.Table>
      </Video.CardContent>

      <Video.CardFooter>
        <Video.TextSmall>
          Showing <strong>1-10</strong> of <strong>{videosList?.length}</strong>{' '}
          videos
        </Video.TextSmall>
      </Video.CardFooter>
    </Video.Card>
  )
}

export default VideoPlaylistTableContainer
