import { v4 as uuid } from 'uuid'
import { Skeleton } from '@/components/ui/skeleton'
import Video from '../components/Video'

function VideoRecommendationsSkeletonContainer() {
  const videosList = new Array(10).fill(null)

  return (
    <Video.Group className="grid-cols-1">
      {videosList?.map(() => (
        <Video
          key={uuid()}
          className="grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]"
        >
          <Skeleton className="aspect-video rounded-xl" />

          <Video.Meta className="w-full gap-1">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-36" />
          </Video.Meta>
        </Video>
      ))}
    </Video.Group>
  )
}

export default VideoRecommendationsSkeletonContainer
