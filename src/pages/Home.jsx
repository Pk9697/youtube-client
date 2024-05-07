import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchVideos } from '@/features/videos'

function Home() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const {
    videosList: allVideos,
    inProgress,
    paginate,
  } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchVideos({ accessToken }))
  }, [])

  const handleChangePage = (page = 1) => {
    dispatch(fetchVideos({ accessToken, page }))
  }

  return (
    <div className="p-4">
      <VideoContainer
        videosList={allVideos}
        inProgress={inProgress}
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default Home
