/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateSidebar } from '@/app/appSlice'
import {
  VideoCommentsContainer,
  VideoPlayerContainer,
  VideoSingleColContainer,
  fetchVideo,
  fetchVideoComments,
} from '@/features/videos'
import Loader from '@/components/Loader'

function View() {
  const { videoId } = useParams()
  const dispatch = useDispatch()
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

  useEffect(() => {
    dispatch(updateSidebar(false))
  }, [])

  useEffect(() => {
    dispatch(fetchVideo({ accessToken, videoId }))
    dispatch(fetchVideoComments({ accessToken, videoId }))
  }, [videoId])

  return (
    <Loader inProgress={inProgressVideoFetching || inProgressVideosFetching}>
      <div className="grid w-full items-start gap-4 p-4 lg:grid-cols-[6fr_3fr]">
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
        <VideoSingleColContainer
          videosList={videosList}
          inProgress={inProgressVideosFetching}
        />
      </div>
    </Loader>
  )
}

export default View
