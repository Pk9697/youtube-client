import { Skeleton } from '@/components/ui/skeleton'
import Playlist from '../components/Playlist'

function PlaylistTableRowSkeletonContainer() {
  return (
    <Playlist.TableRow>
      <Playlist.TableCell>
        <Skeleton className="block aspect-video h-8 w-full rounded-xl" />
      </Playlist.TableCell>
      <Playlist.TableCell>
        <Skeleton className="h-5 w-20" />
      </Playlist.TableCell>
      <Playlist.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-16" />
      </Playlist.TableCell>
      <Playlist.TableCell>
        <Skeleton className="h-5 w-12" />
      </Playlist.TableCell>
      <Playlist.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-20" />
      </Playlist.TableCell>
    </Playlist.TableRow>
  )
}

export default PlaylistTableRowSkeletonContainer
