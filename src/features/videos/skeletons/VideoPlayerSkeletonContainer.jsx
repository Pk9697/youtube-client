import { Skeleton } from '@/components/ui/skeleton'
import Video from '../components/Video'

function VideoPlayerSkeletonContainer() {
  return (
    <Video.PlayerContainer>
      <Skeleton className="aspect-video w-full rounded-lg" />

      <Skeleton className="h-7 w-48" />

      <Video.Details className="flex-wrap">
        <Video.Row>
          <Skeleton className="size-10 rounded-full" />

          <Video.Meta className="space-y-1">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-28" />
          </Video.Meta>

          <Skeleton className="h-9 w-24" />
        </Video.Row>
        <Video.Row className="ml-auto mr-10">
          <Skeleton className="h-9 w-16" />
          <Skeleton className="h-9 w-16" />
        </Video.Row>
      </Video.Details>
      <Video.Card>
        <Video.CardHeader>
          <Skeleton className="h-4 w-48" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        </Video.CardHeader>
      </Video.Card>
    </Video.PlayerContainer>
  )
}

export default VideoPlayerSkeletonContainer
