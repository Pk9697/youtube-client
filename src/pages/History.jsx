import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  VideoSearchResultsContainer,
  fetchLoggedInUserWatchHistory,
} from '@/features/videos'
import useApp from '@/app/useApp'

function History() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { isLoading: isLoadingFetchLoggedInUserWatchHistory } = useApp(
    'videos/fetchLoggedInUserWatchHistory'
  )
  const { videosList } = useSelector((state) => state.videos)

  useEffect(() => {
    dispatch(fetchLoggedInUserWatchHistory({ accessToken }))
  }, [])

  return (
    <div className="p-4">
      <VideoSearchResultsContainer
        videosList={videosList}
        inProgress={isLoadingFetchLoggedInUserWatchHistory}
      />
    </div>
  )
}

export default History
