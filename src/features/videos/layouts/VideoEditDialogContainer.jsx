import { twMerge } from 'tailwind-merge'
import Video from '../components/Video'
import VideoEditDialogContentContainer from './VideoEditDialogContentContainer'

function VideoEditDialogContainer({ children }) {
  return (
    <Video.Dialog>
      {children}
      <VideoEditDialogContentContainer />
    </Video.Dialog>
  )
}

VideoEditDialogContainer.DialogTrigger =
  function VideoEditDialogContainerDialogTrigger({
    children,
    className,
    ...restProps
  }) {
    return (
      <Video.DialogTrigger className={twMerge('', className)} {...restProps}>
        {children}
      </Video.DialogTrigger>
    )
  }

export default VideoEditDialogContainer
