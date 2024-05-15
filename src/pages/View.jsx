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
  VideoRecommendationsContainer,
  fetchVideo,
  fetchVideoComments,
} from '@/features/videos'
import { fetchCurrentPlaylist } from '@/features/playlist'
import { fetchVideosByQuery } from '@/features/search'
import useApp from '@/app/useApp'

function View() {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const videoId = searchParams.get('videoId')
  const playlistId = searchParams.get('playlistId')

  const { isLoading: isLoadingFetchVideo } = useApp('video/fetchVideo')

  const { accessToken } = useSelector((state) => state.auth)
  const { videoDetails, comments, paginate } = useSelector(
    (state) => state.video
  )
  const { inProgress: inProgressSubscription } = useSelector(
    (state) => state.subscription
  )
  const { currentPlaylist } = useSelector((state) => state.playlist)
  const { isSidebarOpen } = useSelector((state) => state.app)
  const { searchResults, inProgress: inProgressSearchResultsFetching } =
    useSelector((state) => state.search)

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
    dispatch(
      fetchVideosByQuery({
        accessToken,
        query: videoDetails?.title?.split(' ')[0],
      })
    )
  }, [videoDetails?.title])

  useEffect(() => {
    if (playlistId) {
      dispatch(fetchCurrentPlaylist({ accessToken, playlistId }))
    }
  }, [playlistId])

  const handleChangePage = (page = 1) => {
    dispatch(fetchVideoComments({ accessToken, videoId, page }))
  }

  return (
    <div
      className={twMerge(
        'grid w-full items-start gap-4 p-4',
        isSidebarOpen ? 'xl:grid-cols-[6fr_3fr]' : 'lg:grid-cols-[6fr_3fr]'
      )}
    >
      <div className="flex flex-col gap-4">
        <VideoPlayerContainer
          videoDetails={videoDetails}
          inProgress={isLoadingFetchVideo}
          inProgressSubscription={inProgressSubscription}
        />
        <VideoCommentsContainer
          videoOwnerId={videoDetails?.owner?._id}
          videoId={videoId}
          comments={comments}
          paginate={paginate}
          handleChangePage={handleChangePage}
        />
      </div>
      <div className="flex flex-col gap-4">
        {playlistId && (
          <VideoPlaylistContainer
            currentPlaylist={currentPlaylist}
            currentVideoId={videoId}
          />
        )}
        <VideoRecommendationsContainer
          videosList={searchResults}
          inProgress={inProgressSearchResultsFetching}
        />
      </div>
    </div>
  )
}

export default View
