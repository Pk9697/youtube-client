/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { updateSidebar } from '@/app/appSlice'
import {
  VideoCommentsContainer,
  VideoPlayerContainer,
  VideoPlaylistContainer,
  VideoSingleColContainer,
  fetchVideo,
  fetchVideoComments,
} from '@/features/videos'
import Loader from '@/components/Loader'
import { fetchCurrentPlaylist } from '@/features/playlist'

function View() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('videoId')
  const playlistId = searchParams.get('playlistId')

  const { accessToken } = useSelector((state) => state.auth)
  const { videosList, inProgress: inProgressVideosFetching } = useSelector(
    (state) => state.videos
  )
  const {
    videoDetails,
    comments,
    inProgress: inProgressVideoFetching,
  } = useSelector((state) => state.video)

  const { inProgress: inProgressSubscription } = useSelector(
    (state) => state.subscription
  )

  const { currentPlaylist } = useSelector((state) => state.playlist)

  const { isSidebarOpen } = useSelector((state) => state.app)
  useEffect(() => {
    dispatch(updateSidebar(false))
  }, [])

  useEffect(() => {
    if (videoId) {
      dispatch(fetchVideo({ accessToken, videoId }))
      dispatch(fetchVideoComments({ accessToken, videoId }))
    }
  }, [videoId])

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchCurrentPlaylist({ accessToken, playlistId }))
    }
  }, [playlistId])

  return (
    <Loader inProgress={inProgressVideoFetching || inProgressVideosFetching}>
      <div
        className={twMerge(
          'grid w-full items-start gap-4 p-4',
          isSidebarOpen ? 'xl:grid-cols-[6fr_3fr]' : 'lg:grid-cols-[6fr_3fr]'
        )}
      >
        <div className="flex flex-col gap-4">
          <VideoPlayerContainer
            videoDetails={videoDetails}
            inProgress={inProgressVideoFetching}
            inProgressSubscription={inProgressSubscription}
          />
          <VideoCommentsContainer
            videoOwnerId={videoDetails?.owner?._id}
            videoId={videoId}
            comments={comments}
          />
        </div>
        <div className="flex flex-col gap-4">
          {playlistId && (
            <VideoPlaylistContainer
              currentPlaylist={currentPlaylist}
              currentVideoId={videoId}
            />
          )}
          <VideoSingleColContainer
            videosList={videosList}
            inProgress={inProgressVideosFetching}
          />
        </div>
      </div>
    </Loader>
  )
}

export default View
