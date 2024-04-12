import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { VideoSearchResultsContainer } from '@/features/videos'
import { fetchVideosByQuery } from '@/features/search'

function SearchResults() {
  const { query } = useParams()
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { searchResults } = useSelector((state) => state.search)
  console.log({ searchResults })

  useEffect(() => {
    dispatch(fetchVideosByQuery({ accessToken, query }))
  }, [query])

  return (
    <div className="p-4">
      <VideoSearchResultsContainer videosList={searchResults} />
    </div>
  )
}

export default SearchResults
