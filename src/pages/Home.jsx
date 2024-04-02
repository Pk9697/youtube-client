import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchVideos } from '@/features/videos'
import Loader from '@/components/Loader'

function Home() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList, inProgress } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchVideos({ accessToken }))
  }, [])

  return (
    <Loader inProgress={inProgress}>
      <VideoContainer videosList={videosList} />
    </Loader>
  )
}

export default Home
