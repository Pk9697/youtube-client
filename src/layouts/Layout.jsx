import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import SidebarContainer from './SidebarContainer'
import NavbarContainer from './NavbarContainer'
import { fetchLoggedInUserSubscribedToChannels } from '@/features/subscription'
import {
  fetchLoggedInUserLikedVideosPlaylistIdByName,
  fetchLoggedInUserPlaylists,
  fetchLoggedInUserWatchLaterPlaylistIdByName,
} from '@/features/playlist'
import useApp from '@/app/useApp'

function Layout() {
  const dispatch = useDispatch()
  const { accessToken, user: { userName } = {} } = useSelector(
    (state) => state.auth
  )
  const { isLoading: isLoadingFetchLoggedInUserSubscribedToChannels } = useApp(
    'subscription/fetchLoggedInUserSubscribedToChannels'
  )
  const { subscribedToChannelsList } = useSelector(
    (state) => state.subscription
  )
  const { isSidebarOpen } = useSelector((state) => state.app)

  useEffect(() => {
    dispatch(fetchLoggedInUserSubscribedToChannels({ accessToken, userName }))
    dispatch(fetchLoggedInUserLikedVideosPlaylistIdByName({ accessToken }))
    dispatch(fetchLoggedInUserWatchLaterPlaylistIdByName({ accessToken }))
    dispatch(fetchLoggedInUserPlaylists({ accessToken, userName }))
  }, [])

  return (
    <div
      className={`grid h-screen w-full flex-grow overflow-auto ${isSidebarOpen ? 'md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]' : ''}`}
    >
      <div
        className={`sticky top-0 z-10 hidden max-h-screen overflow-auto border-r bg-muted dark:bg-slate-900 ${isSidebarOpen ? 'md:block' : ''}`}
      >
        <SidebarContainer
          inProgress={isLoadingFetchLoggedInUserSubscribedToChannels}
          usersList={subscribedToChannelsList}
        />
      </div>
      <div>
        <div className="sticky top-0 z-10">
          <NavbarContainer
            inProgress={isLoadingFetchLoggedInUserSubscribedToChannels}
            usersList={subscribedToChannelsList}
          />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
