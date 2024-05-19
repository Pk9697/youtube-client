import { Skeleton } from '@/components/ui/skeleton'
import Channel from '../components/Channel'

function ChannelSkeletonContainer() {
  return (
    <Channel>
      <Skeleton className="aspect-video max-h-48 w-full rounded-md" />

      <Channel.Details>
        <Skeleton className="size-40 rounded-full" />

        <Channel.Meta>
          <Skeleton className="h-7 w-52" />
          <Skeleton className="h-5 w-36" />
          <Skeleton className="h-5 w-44" />
        </Channel.Meta>

        <Skeleton className="h-9 w-36 sm:ml-auto" />
      </Channel.Details>
    </Channel>
  )
}

export default ChannelSkeletonContainer
