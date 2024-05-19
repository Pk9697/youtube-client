import User from '@/components/User'
import { Skeleton } from '@/components/ui/skeleton'

function UserSkeleton() {
  return (
    <User>
      <Skeleton className="size-10 rounded-full" />
      <User.Meta>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-20" />
      </User.Meta>
      <Skeleton className="h-9 w-36 sm:ml-auto" />
    </User>
  )
}

export default UserSkeleton
