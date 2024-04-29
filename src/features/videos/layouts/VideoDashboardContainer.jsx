import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { CirclePlusIcon, ListFilterIcon } from 'lucide-react'
import Video from '../components/Video'
import { sortVideos } from '@/features/dashboard'
import VideoUploadDialogContainer from './VideoUploadDialogContainer'
import VideoTableRowContainer from './VideoTableRowContainer'

function VideoDashboardContainer({ videosList = [] }) {
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
          <Video.CardTitle>Videos</Video.CardTitle>
          <Video.CardDescription className="text-muted-foreground">
            Manage your videos.
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
                <Video.DropdownMenuRadioItem value="likesCount">
                  Likes
                </Video.DropdownMenuRadioItem>
                <Video.DropdownMenuRadioItem value="dislikesCount">
                  Dislikes
                </Video.DropdownMenuRadioItem>
              </Video.DropdownMenuRadioGroup>
            </Video.DropdownMenuContent>
          </Video.DropdownMenu>

          <VideoUploadDialogContainer>
            <VideoUploadDialogContainer.DialogTrigger asChild>
              <Video.Button size="sm" className="h-7 gap-1">
                <CirclePlusIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Upload Video
                </span>
              </Video.Button>
            </VideoUploadDialogContainer.DialogTrigger>
          </VideoUploadDialogContainer>
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
              <Video.TableHead>Status</Video.TableHead>
              <Video.TableHead className="hidden md:table-cell">
                Views
              </Video.TableHead>
              <Video.TableHead className="hidden md:table-cell">
                Likes
              </Video.TableHead>
              <Video.TableHead className="hidden md:table-cell">
                Dislikes
              </Video.TableHead>
              <Video.TableHead className="hidden md:table-cell">
                Created at
              </Video.TableHead>
              <Video.TableHead>
                <span className="sr-only">Actions</span>
              </Video.TableHead>
            </Video.TableRow>
          </Video.TableHeader>

          <Video.TableBody>
            {videosList.map((video) => (
              <VideoTableRowContainer key={video._id} video={video} />
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

export default VideoDashboardContainer
