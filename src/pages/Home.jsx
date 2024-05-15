import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoContainer, fetchVideos } from '@/features/videos'
import useApp from '@/app/useApp'

function Home() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList: allVideos, paginate } = useSelector(
    (state) => state.videos
  )

  const { isLoading: isLoadingFetchVideos } = useApp('videos/fetchVideos')

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
        inProgress={isLoadingFetchVideos}
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default Home
