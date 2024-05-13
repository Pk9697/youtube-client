import { Skeleton } from '@/components/ui/skeleton'
import Playlist from '../components/Playlist'

function PlaylistSkeleton() {
  return (
    <Playlist>
      <Skeleton className="aspect-video rounded-xl" />
      <Playlist.Details>
        <Skeleton className="size-10 rounded-full" />
        <Playlist.Meta className="w-full gap-1">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-40" />
          <Skeleton className="h-3 w-36" />
        </Playlist.Meta>
      </Playlist.Details>
    </Playlist>
  )
}

export default PlaylistSkeleton
