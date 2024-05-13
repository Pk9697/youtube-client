import { v4 as uuid } from 'uuid'
import { Skeleton } from '@/components/ui/skeleton'
import Video from '../components/Video'

function VideoPlaylistSkeletonContainer2() {
  const videosList = new Array(10).fill(null)
  return (
    <Video.Group className="grid-cols-1">
      {videosList?.map(() => (
        <Video key={uuid()} className="sm:grid-cols-[1fr_3fr]">
          <Skeleton className="aspect-video rounded-xl" />
          <Video.Details>
            <Skeleton className="size-10 rounded-full" />
            <Video.Meta className="w-full gap-1">
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-3 w-40" />
              <Skeleton className="h-3 w-36" />
            </Video.Meta>
          </Video.Details>
        </Video>
      ))}
    </Video.Group>
  )
}

export default VideoPlaylistSkeletonContainer2
