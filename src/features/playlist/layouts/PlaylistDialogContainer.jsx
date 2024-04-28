import { twMerge } from 'tailwind-merge'
import Playlist from '../components/Playlist'
import PlaylistDialogContentContainer from './PlaylistDialogContentContainer'

function PlaylistDialogContainer({ children, videoId }) {
  return (
    <Playlist.Dialog>
      {children}
      <PlaylistDialogContentContainer videoId={videoId} />
    </Playlist.Dialog>
  )
}

PlaylistDialogContainer.DialogTrigger =
  function PlaylistDialogContainerDialogTrigger({
    children,
    className,
    ...restProps
  }) {
    return (
      <Playlist.DialogTrigger className={twMerge('', className)} {...restProps}>
        {children}
      </Playlist.DialogTrigger>
    )
  }

export default PlaylistDialogContainer
