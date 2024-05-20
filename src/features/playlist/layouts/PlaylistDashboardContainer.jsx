import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'
import { CirclePlusIcon, ListFilterIcon } from 'lucide-react'
import Playlist from '../components/Playlist'
import PlaylistTableRowContainer from './PlaylistTableRowContainer'
import { sortLoggedInUserPlaylists } from '../services/playlistSlice'
import PlaylistCreateContainer from './PlaylistCreateContainer'
import { Skeleton } from '@/components/ui/skeleton'
import PlaylistTableRowSkeletonContainer from '../skeletons/PlaylistTableRowSkeletonContainer'

function PlaylistDashboardContainer({ playlists = [], inProgress = false }) {
  const dispatch = useDispatch()

  // TODO : Move below code in custom hook named useSort
  const [sortBy, setSortBy] = useState('updatedAt')

  useEffect(() => {
    dispatch(sortLoggedInUserPlaylists({ sortBy }))
  }, [])

  const handleSortChange = (value) => {
    setSortBy(value)
    dispatch(sortLoggedInUserPlaylists({ sortBy: value }))
  }

  return (
    <Playlist.Card>
      <Playlist.CardHeader className="flex flex-row items-center space-y-0">
        <Playlist.CardDetails>
          <Playlist.CardTitle>Playlists</Playlist.CardTitle>
          <Playlist.CardDescription className="text-muted-foreground">
            Manage your playlists.
          </Playlist.CardDescription>
        </Playlist.CardDetails>

        <Playlist.CardActions>
          <Playlist.DropdownMenu>
            <Playlist.DropdownMenuTrigger asChild>
              <Playlist.Button
                variant="outline"
                size="sm"
                className="h-7 gap-1"
              >
                <ListFilterIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Sort
                </span>
              </Playlist.Button>
            </Playlist.DropdownMenuTrigger>

            <Playlist.DropdownMenuContent align="end">
              <Playlist.DropdownMenuLabel>Sort by</Playlist.DropdownMenuLabel>
              <Playlist.DropdownMenuSeparator />

              <Playlist.DropdownMenuRadioGroup
                value={sortBy}
                onValueChange={handleSortChange}
              >
                <Playlist.DropdownMenuRadioItem value="updatedAt">
                  Updated At
                </Playlist.DropdownMenuRadioItem>
                <Playlist.DropdownMenuRadioItem value="videos">
                  Video count
                </Playlist.DropdownMenuRadioItem>
              </Playlist.DropdownMenuRadioGroup>
            </Playlist.DropdownMenuContent>
          </Playlist.DropdownMenu>
          <Playlist.Dialog>
            <Playlist.DialogTrigger asChild>
              <Playlist.Button size="sm" className="h-7 gap-1">
                <CirclePlusIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Create Playlist
                </span>
              </Playlist.Button>
            </Playlist.DialogTrigger>
            <Playlist.DialogContent className="max-w-xs">
              <PlaylistCreateContainer />
            </Playlist.DialogContent>
          </Playlist.Dialog>
        </Playlist.CardActions>
      </Playlist.CardHeader>

      <Playlist.CardContent>
        <Playlist.Table>
          <Playlist.TableHeader>
            <Playlist.TableRow>
              <Playlist.TableHead className="w-[80px]">
                <span className="sr-only">Image</span>
              </Playlist.TableHead>
              <Playlist.TableHead>Name</Playlist.TableHead>
              <Playlist.TableHead className="hidden md:table-cell">
                Visibility
              </Playlist.TableHead>
              <Playlist.TableHead>Video count</Playlist.TableHead>
              <Playlist.TableHead className="hidden md:table-cell">
                Updated at
              </Playlist.TableHead>
              <Playlist.TableHead>
                <span className="sr-only">Actions</span>
              </Playlist.TableHead>
            </Playlist.TableRow>
          </Playlist.TableHeader>

          <Playlist.TableBody>
            {inProgress
              ? 'abcdefghij'
                  .split('')
                  .map(() => <PlaylistTableRowSkeletonContainer key={uuid()} />)
              : playlists.map((playlist) => (
                  <PlaylistTableRowContainer
                    key={playlist._id}
                    playlist={playlist}
                  />
                ))}
          </Playlist.TableBody>
        </Playlist.Table>
      </Playlist.CardContent>

      <Playlist.CardFooter>
        <Playlist.TextSmall>
          {inProgress ? (
            <Skeleton className="mt-0.5 h-4 w-36" />
          ) : (
            <>
              Showing <strong>1-10</strong> of{' '}
              <strong>{playlists?.length}</strong> playlists
            </>
          )}
        </Playlist.TextSmall>
      </Playlist.CardFooter>
    </Playlist.Card>
  )
}

export default PlaylistDashboardContainer
