import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchSubscriptionsVideos } from '@/features/videos'

function FeedSubscriptions() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList: allVideos, inProgress } = useSelector(
    (state) => state.videos
  )

  useEffect(() => {
    dispatch(fetchSubscriptionsVideos({ accessToken }))
  }, [])

  return (
    <div className="p-4">
      <VideoContainer videosList={allVideos} inProgress={inProgress} />
    </div>
  )
}

export default FeedSubscriptions
