import { useSelector } from 'react-redux'
import { ChevronsUpDownIcon } from 'lucide-react'
import Playlist from '../components/Playlist'
import PlaylistCheckboxContainer from './PlaylistCheckboxContainer'
import PlaylistCreateContainer from './PlaylistCreateContainer'

function PlaylistDialogContentContainer({ videoId }) {
  const { loggedInUserPlaylists = [] } = useSelector((state) => state.playlist)

  return (
    <Playlist.DialogContent>
      <Playlist.DialogHeader>
        <Playlist.DialogTitle>Save video to...</Playlist.DialogTitle>
        <Playlist.Col>
          {loggedInUserPlaylists.map((playlist) => (
            <PlaylistCheckboxContainer
              videoId={videoId}
              key={playlist._id}
              {...playlist}
            />
          ))}
        </Playlist.Col>
      </Playlist.DialogHeader>
      <Playlist.DialogFooter>
        <Playlist.Collapsible>
          <Playlist.CollapsibleTrigger asChild>
            <Playlist.Button type="submit" className="w-full">
              <ChevronsUpDownIcon className="h-4 w-4" />
              Create new playlist
            </Playlist.Button>
          </Playlist.CollapsibleTrigger>
          <Playlist.CollapsibleContent>
            <PlaylistCreateContainer />
          </Playlist.CollapsibleContent>
        </Playlist.Collapsible>
      </Playlist.DialogFooter>
    </Playlist.DialogContent>
  )
}

export default PlaylistDialogContentContainer
