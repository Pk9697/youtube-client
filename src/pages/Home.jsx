import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchVideos } from '@/features/videos'

function Home() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList: allVideos, inProgress } = useSelector(
    (state) => state.videos
  )

  useEffect(() => {
    dispatch(fetchVideos({ accessToken }))
  }, [])

  return (
    <div className="p-4">
      <VideoContainer videosList={allVideos} inProgress={inProgress} />
    </div>
  )
}

export default Home
