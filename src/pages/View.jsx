import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateSidebar } from '@/app/appSlice'

function View() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(updateSidebar(false))
  }, [])

  return <div>View</div>
}

export default View
