import Playlist from '../components/Playlist'
import useCreatePlaylist from '../hooks/useCreatePlaylist'

function PlaylistCreateContainer() {
  const {
    name,
    description,
    visibility,
    handleChange,
    handleSubmit,
    handleSelectChange,
    isLoadingCreatePlaylist,
  } = useCreatePlaylist()

  return (
    <Playlist.Form onSubmit={handleSubmit} className="flex flex-col gap-2">
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
        <Playlist.Label htmlFor="description">Description</Playlist.Label>
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
            <Playlist.SelectValue placeholder="Privacy" />
          </Playlist.SelectTrigger>
          <Playlist.SelectContent>
            <Playlist.SelectItem value="public">Public</Playlist.SelectItem>
            <Playlist.SelectItem value="private">Private</Playlist.SelectItem>
          </Playlist.SelectContent>
        </Playlist.Select>
      </Playlist.InputContainer>

      <Playlist.Button
        disabled={isLoadingCreatePlaylist}
        type="submit"
        className="mt-4"
      >
        Create
      </Playlist.Button>
    </Playlist.Form>
  )
}

export default PlaylistCreateContainer
