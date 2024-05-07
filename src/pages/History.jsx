import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  VideoSearchResultsContainer,
  fetchLoggedInUserWatchHistory,
} from '@/features/videos'

function History() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList, inProgress, paginate } = useSelector(
    (state) => state.videos
  )

  useEffect(() => {
    dispatch(fetchLoggedInUserWatchHistory({ accessToken }))
  }, [])

  const handleChangePage = (page = 1) => {
    dispatch(fetchLoggedInUserWatchHistory({ accessToken, page }))
  }

  return (
    <div className="p-4">
      <VideoSearchResultsContainer
        videosList={videosList}
        inProgress={inProgress}
        paginate={paginate}
        handleChangePage={handleChangePage}
      />
    </div>
  )
}

export default History
