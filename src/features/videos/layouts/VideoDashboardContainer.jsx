import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {
  CirclePlusIcon,
  ListFilterIcon,
  MoreHorizontalIcon,
} from 'lucide-react'
import Video from '../components/Video'
import { formatViews } from '@/utils/formatViews'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatDate } from '@/utils/formatDate'
import {
  deleteVideo,
  sortVideos,
  toggleVideoPublishStatus,
} from '@/features/dashboard'
import VideoUploadDialogContainer from './VideoUploadDialogContainer'

function VideoDashboardContainer({ videosList = [] }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)

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
            {videosList.map(
              ({
                _id: videoId,
                thumbnail,
                title,
                isPublished,
                views,
                likesCount,
                dislikesCount,
                createdAt,
              } = {}) => (
                <Video.TableRow key={videoId}>
                  <Video.TableCell>
                    <Video.Image src={getPublicUrl(thumbnail)} />
                  </Video.TableCell>
                  <Video.TableCell className="font-medium">
                    {title}
                  </Video.TableCell>
                  <Video.TableCell>
                    <Video.Switch
                      checked={isPublished}
                      onCheckedChange={() =>
                        dispatch(
                          toggleVideoPublishStatus({ accessToken, videoId })
                        )
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
                    <Video.DropdownMenu>
                      <Video.DropdownMenuTrigger asChild>
                        <Video.Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontalIcon className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Video.Button>
                      </Video.DropdownMenuTrigger>

                      <Video.DropdownMenuContent align="end">
                        <Video.DropdownMenuLabel>
                          Actions
                        </Video.DropdownMenuLabel>
                        <Video.DropdownMenuItem>Edit</Video.DropdownMenuItem>
                        <Video.DropdownMenuItem
                          onClick={() =>
                            dispatch(deleteVideo({ accessToken, videoId }))
                          }
                        >
                          Delete
                        </Video.DropdownMenuItem>
                      </Video.DropdownMenuContent>
                    </Video.DropdownMenu>
                  </Video.TableCell>
                </Video.TableRow>
              )
            )}
          </Video.TableBody>
        </Video.Table>
      </Video.CardContent>

      <Video.CardFooter>
        <Video.TextSmall>
          Showing <strong>1-10</strong> of <strong>{videosList.length}</strong>{' '}
          videos
        </Video.TextSmall>
      </Video.CardFooter>
    </Video.Card>
  )
}

export default VideoDashboardContainer
