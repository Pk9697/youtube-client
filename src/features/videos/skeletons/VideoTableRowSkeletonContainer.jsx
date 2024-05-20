import { Skeleton } from '@/components/ui/skeleton'
import Video from '../components/Video'

function VideoTableRowSkeletonContainer() {
  return (
    <Video.TableRow>
      <Video.TableCell className="">
        <Skeleton className="block aspect-video h-8 w-full rounded-xl" />
      </Video.TableCell>
      <Video.TableCell>
        <Skeleton className="h-5 w-20" />
      </Video.TableCell>
      <Video.TableCell>
        <Skeleton className="h-5 w-10 rounded-2xl" />
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-12" />
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-12" />
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-12" />
      </Video.TableCell>
      <Video.TableCell className="hidden md:table-cell">
        <Skeleton className="h-5 w-20" />
      </Video.TableCell>
    </Video.TableRow>
  )
}

export default VideoTableRowSkeletonContainer
