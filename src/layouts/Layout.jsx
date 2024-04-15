import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SidebarContainer from './SidebarContainer'
import NavbarContainer from './NavbarContainer'
import { fetchLoggedInUserSubscribedToChannels } from '@/features/subscription'
import {
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
} from '@/features/playlist'

function Layout() {
  const dispatch = useDispatch()
  const { accessToken, user: { userName } = {} } = useSelector(
    (state) => state.auth
  )
  const { subscribedToChannelsList } = useSelector(
    (state) => state.subscription
  )
  const { isSidebarOpen } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(fetchLoggedInUserSubscribedToChannels({ accessToken, userName }))
    dispatch(fetchLoggedInUserLikedVideosPlaylistIdByName({ accessToken }))
    dispatch(fetchLoggedInUserWatchLaterPlaylistIdByName({ accessToken }))
  }, [])

  return (
    <div
      className={`grid h-screen w-full flex-grow overflow-auto ${isSidebarOpen ? 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]' : ''}`}
    >
      <div
        className={`sticky top-0 z-10 hidden max-h-screen overflow-auto border-r bg-muted/40 ${isSidebarOpen ? 'md:block' : ''}`}
      >
        <SidebarContainer usersList={subscribedToChannelsList} />
      </div>
      <div>
        <div className="sticky top-0 z-10">
          <NavbarContainer usersList={subscribedToChannelsList} />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
