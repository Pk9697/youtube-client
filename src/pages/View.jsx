/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateSidebar } from '@/app/appSlice'
import VideoPlayerContainer from '@/features/videos/layouts/VideoPlayerContainer'
import VideoSingleColContainer from '@/features/videos/layouts/VideoSingleColContainer'
import { fetchVideo } from '@/features/videos'
import Loader from '@/components/Loader'

function View() {
  const { videoId } = useParams()
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList, inProgress: inProgressVideosFetching } = useSelector(
    (state) => state.videos
  )
  const { videoDetails, inProgress: inProgressVideoFetching } = useSelector(
    (state) => state.video
  )

  useEffect(() => {
    dispatch(updateSidebar(false))
  }, [])

  useEffect(() => {
    dispatch(fetchVideo({ accessToken, videoId }))
  }, [videoId])

  return (
    <Loader inProgress={inProgressVideoFetching || inProgressVideosFetching}>
      <div className="grid w-full items-start gap-4 p-4 lg:grid-cols-[6fr_3fr]">
        <VideoPlayerContainer
          videoDetails={videoDetails}
          inProgress={inProgressVideoFetching}
        />
        <VideoSingleColContainer
          videosList={videosList}
          inProgress={inProgressVideosFetching}
        />
      </div>
    </Loader>
  )
}

export default View
