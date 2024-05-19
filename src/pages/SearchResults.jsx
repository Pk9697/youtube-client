import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { VideoSearchResultsContainer } from '@/features/videos'
import { fetchVideosByQuery } from '@/features/search'
import useApp from '@/app/useApp'

function SearchResults() {
  const { query } = useParams()
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { isLoading: isLoadingFetchVideosByQuery } = useApp(
    'search/fetchVideosByQuery'
  )
  const { searchResults, paginate } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(fetchVideosByQuery({ accessToken, query }))
  }, [query])

  const handleChangePage = (page = 1) => {
    dispatch(fetchVideosByQuery({ accessToken, query, page }))
  }

  return (
    <div className="p-4">
      <VideoSearchResultsContainer
        videosList={searchResults}
        paginate={paginate}
        handleChangePage={handleChangePage}
        inProgress={isLoadingFetchVideosByQuery}
      />
    </div>
  )
}

export default SearchResults
