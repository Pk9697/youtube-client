import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { ROUTES } from '@/data/constants'
import { verifyAccessToken } from '@/features/authentication'

function PrivateRoute() {
  const dispatch = useDispatch()
  const { isLoggedIn, accessToken } = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(verifyAccessToken({ accessToken }))
  }, [])

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} />
}

export default PrivateRoute
