import { v4 as uuid } from 'uuid'
import Video from '../components/Video'
import { Skeleton } from '@/components/ui/skeleton'

function VideoSkeletonContainer() {
  const videosList = new Array(10).fill(null)
  return (
    <Video.Group>
      {videosList?.map(() => (
        <Video key={uuid()}>
          <Skeleton className="aspect-video rounded-xl" />
          <Video.Details>
            <Video.Row>
              <Skeleton className="size-10 rounded-full" />
              <Video.Meta className="gap-1">
                <Skeleton className="h-5 w-48" />
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-4 w-36" />
              </Video.Meta>
            </Video.Row>
          </Video.Details>
        </Video>
      ))}
    </Video.Group>
  )
}

export default VideoSkeletonContainer
