import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoPlaylistTableContainer } from '@/features/videos'
import Playlist from '../components/Playlist'
import { fetchCurrentPlaylist } from '../services/asyncThunkActions'
import PlaylistEditDetailsContainer from './PlaylistEditDetailsContainer'

function PlaylistEditContainer({ playlist = {} }) {
  const { _id: playlistId } = playlist
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { currentPlaylist = {} } = useSelector((state) => state.playlist)

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchCurrentPlaylist({ accessToken, playlistId }))
    }
  }, [playlistId])

  return (
    <Playlist.Tabs defaultValue="details">
      <Playlist.TabsList>
        <Playlist.TabsTrigger value="details">Details</Playlist.TabsTrigger>
        <Playlist.TabsTrigger value="videos">Videos</Playlist.TabsTrigger>
      </Playlist.TabsList>
      <Playlist.TabsContent value="details">
        <PlaylistEditDetailsContainer playlist={playlist} />
      </Playlist.TabsContent>
      <Playlist.TabsContent value="videos">
        <VideoPlaylistTableContainer
          videosList={currentPlaylist.videos}
          playlistId={playlistId}
        />
      </Playlist.TabsContent>
    </Playlist.Tabs>
  )
}

export default PlaylistEditContainer
