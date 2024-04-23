import { useDispatch, useSelector } from 'react-redux'
import {
  CirclePlusIcon,
  ListFilterIcon,
  MoreHorizontalIcon,
} from 'lucide-react'
import Video from '../components/Video'
import { formatViews } from '@/utils/formatViews'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { formatDate } from '@/utils/formatDate'
import { toggleVideoPublishStatus } from '@/features/dashboard'

function VideoDashboardContainer({ videosList = [] }) {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)

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
                  Filter
                </span>
              </Video.Button>
            </Video.DropdownMenuTrigger>

            <Video.DropdownMenuContent align="end">
              <Video.DropdownMenuLabel>Filter by</Video.DropdownMenuLabel>
              <Video.DropdownMenuSeparator />
              <Video.DropdownMenuCheckboxItem checked>
                Created At
              </Video.DropdownMenuCheckboxItem>
              <Video.DropdownMenuCheckboxItem>
                Views
              </Video.DropdownMenuCheckboxItem>
              <Video.DropdownMenuCheckboxItem>
                Likes
              </Video.DropdownMenuCheckboxItem>
              <Video.DropdownMenuCheckboxItem>
                Dislikes
              </Video.DropdownMenuCheckboxItem>
            </Video.DropdownMenuContent>
          </Video.DropdownMenu>

          <Video.Button size="sm" className="h-7 gap-1">
            <CirclePlusIcon className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Upload Video
            </span>
          </Video.Button>
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
                        <Video.DropdownMenuItem>Delete</Video.DropdownMenuItem>
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
