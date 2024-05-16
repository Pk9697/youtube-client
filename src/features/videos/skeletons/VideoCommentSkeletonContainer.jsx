import Comment from '@/components/Comment'
import { Skeleton } from '@/components/ui/skeleton'

function VideoCommentSkeletonContainer() {
  return (
    <Comment>
      <Skeleton className="size-10 rounded-full" />
      <Comment.Meta className="w-full">
        <Comment.Row>
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-4 w-20" />
        </Comment.Row>
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-5 w-1/2" />
        <Comment.Row>
          <Skeleton className="h-8 w-14" />
          <Skeleton className="h-8 w-14" />
        </Comment.Row>
      </Comment.Meta>
    </Comment>
  )
}

export default VideoCommentSkeletonContainer
