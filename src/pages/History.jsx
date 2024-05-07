import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  VideoSearchResultsContainer,
  fetchLoggedInUserWatchHistory,
} from '@/features/videos'

function History() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { videosList, inProgress } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchLoggedInUserWatchHistory({ accessToken }))
  }, [])

  return (
    <div className="p-4">
      <VideoSearchResultsContainer
        videosList={videosList}
        inProgress={inProgress}
      />
    </div>
  )
}

export default History
