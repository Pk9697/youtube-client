import { ChevronsUpDownIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { useSelector } from 'react-redux'
import Playlist from '../components/Playlist'
import PlaylistCheckboxContainer from './PlaylistCheckboxContainer'
import useCreatePlaylist from '../hooks/useCreatePlaylist'

function PlaylistDialogContainer({ children, videoId }) {
  const { loggedInUserPlaylists = [] } = useSelector((state) => state.playlist)
  const {
    name,
    description,
    visibility,
    handleChange,
    handleSubmit,
    handleSelectChange,
  } = useCreatePlaylist()

  return (
    <Playlist.Dialog>
      {children}
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
              <Playlist.Form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2"
              >
                <Playlist.InputContainer>
                  <Playlist.Label htmlFor="name">Name</Playlist.Label>
                  <Playlist.Input
                    name="name"
                    value={name}
                    onChange={handleChange}
                    id="name"
                    type="text"
                    autoComplete="text"
                    placeholder="Enter Playlist name"
                    required
                  />
                </Playlist.InputContainer>
                <Playlist.InputContainer>
                  <Playlist.Label htmlFor="description">
                    Description
                  </Playlist.Label>
                  <Playlist.Input
                    name="description"
                    value={description}
                    onChange={handleChange}
                    id="description"
                    type="text"
                    autoComplete="text"
                    placeholder="Enter Playlist description"
                    required
                  />
                </Playlist.InputContainer>

                <Playlist.InputContainer>
                  <Playlist.Label htmlFor="privacy">Privacy</Playlist.Label>
                  <Playlist.Select
                    value={visibility}
                    name="visibility"
                    onValueChange={handleSelectChange}
                  >
                    <Playlist.SelectTrigger id="privacy">
                      <Playlist.SelectValue
                        placeholder="Privacy"
                        // value={visibility}
                        // name="visibility"
                        // onValueChange={handleChange}
                      />
                    </Playlist.SelectTrigger>
                    <Playlist.SelectContent>
                      <Playlist.SelectItem value="public">
                        Public
                      </Playlist.SelectItem>
                      <Playlist.SelectItem value="private">
                        Private
                      </Playlist.SelectItem>
                    </Playlist.SelectContent>
                  </Playlist.Select>
                </Playlist.InputContainer>

                <Playlist.Button type="submit" className="mt-4">
                  Create
                </Playlist.Button>
              </Playlist.Form>
            </Playlist.CollapsibleContent>
          </Playlist.Collapsible>
        </Playlist.DialogFooter>
      </Playlist.DialogContent>
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
