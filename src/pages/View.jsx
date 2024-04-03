/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateSidebar } from '@/app/appSlice'
import VideoPlayerContainer from '@/features/videos/layouts/VideoPlayerContainer'
import VideoSingleColContainer from '@/features/videos/layouts/VideoSingleColContainer'

function View() {
  const dispatch = useDispatch()
  const { videosList, inProgress } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(updateSidebar(false))
  }, [])

  return (
    <div className="grid w-full items-start gap-4 p-4 lg:grid-cols-[6fr_3fr]">
      <VideoPlayerContainer />
      <VideoSingleColContainer
        videosList={videosList}
        inProgress={inProgress}
      />
    </div>
  )
}

export default View
