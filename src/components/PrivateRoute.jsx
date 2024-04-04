import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/data/constants'

function PrivateRoute() {
  const { isLoggedIn } = useSelector((state) => state.auth)
  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}

export default PrivateRoute
