import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchSubscriptionsVideos } from '@/features/videos'
import useApp from '@/app/useApp'

function Subscriptions() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { isLoading: isLoadingFetchSubscriptionsVideos } = useApp(
    'videos/fetchSubscriptionsVideos'
  )
  const { videosList: allVideos } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchSubscriptionsVideos({ accessToken }))
  }, [])

  return (
    <div className="p-4">
      <VideoContainer
        videosList={allVideos}
        inProgress={isLoadingFetchSubscriptionsVideos}
      />
    </div>
  )
}

export default Subscriptions
