import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { CirclePlusIcon, ListFilterIcon } from 'lucide-react'
import Video from '../components/Video'
import { fetchDashboardVideos, sortVideos } from '@/features/dashboard'
import VideoUploadDialogContainer from './VideoUploadDialogContainer'
import VideoTableRowContainer from './VideoTableRowContainer'
import PaginateContainer from '@/layouts/PaginateContainer'

function VideoDashboardContainer({ videosList = [], paginate = {} }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  // TODO : Move below code in custom hook named useSort
  const [sortBy, setSortBy] = useState('createdAt')

  const handleSortChange = (value) => {
    setSortBy(value)
    dispatch(sortVideos({ sortBy: value }))
  }

  const lowerLimit = paginate.pagingCounter
  const upperLimit = Math.min(
    paginate.pagingCounter + paginate.limit - 1,
    paginate.totalDocs
  )

  const handleChangePage = (page = 1) => {
    dispatch(fetchDashboardVideos({ accessToken, page }))
  }

  return (
    <Video.Card>
      <Video.CardHeader className="flex flex-row items-center space-y-0">
        <Video.CardDetails>
          <Video.CardTitle>Videos</Video.CardTitle>
          <Video.CardDescription className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {lowerLimit}-{upperLimit}
            </strong>{' '}
            of <strong>{paginate.totalDocs}</strong> videos
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
        <PaginateContainer
          paginate={paginate}
          handleChangePage={handleChangePage}
        />
      </Video.CardFooter>
    </Video.Card>
  )
}

export default VideoDashboardContainer
