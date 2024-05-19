import { v4 as uuid } from 'uuid'
import { Skeleton } from '@/components/ui/skeleton'
import Video from '../components/Video'

function VideoPlaylistSkeletonContainer() {
  const videosList = new Array(5).fill(null)

  return (
    <Video.Card>
      <Video.CardHeader>
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </Video.CardHeader>
      <Video.CardContent>
        <Video.Group className="grid-cols-1">
          {videosList?.map(() => (
            <Video
              key={uuid()}
              className="grid-cols-[2fr_7fr] lg:grid-cols-[2fr_3fr]"
            >
              <Skeleton className="aspect-video rounded-xl" />
              <Video.Details>
                <Video.Meta className="w-full gap-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-40" />
                </Video.Meta>
              </Video.Details>
            </Video>
          ))}
        </Video.Group>
      </Video.CardContent>
    </Video.Card>
  )
}

export default VideoPlaylistSkeletonContainer
