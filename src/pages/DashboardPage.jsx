import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Dashboard,
  DashboardContainer,
  fetchDashboardStats,
  fetchDashboardVideos,
} from '@/features/dashboard'
import { VideoDashboardContainer } from '@/features/videos'
import { PlaylistDashboardContainer } from '@/features/playlist'

function DashboardPage() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { dashboardStats, dashboardVideos, paginate } = useSelector(
    (state) => state.dashboard
  )
  const { loggedInUserPlaylists } = useSelector((state) => state.playlist)

  useEffect(() => {
    dispatch(fetchDashboardStats({ accessToken }))
    dispatch(fetchDashboardVideos({ accessToken }))
  }, [])

  const handleChangePage = (page = 1) => {
    dispatch(fetchDashboardVideos({ accessToken, page }))
  }

  return (
    <DashboardContainer dashboardStats={dashboardStats}>
      <Dashboard.Tabs defaultValue="videos">
        <Dashboard.TabsList>
          <Dashboard.TabsTrigger value="videos">Videos</Dashboard.TabsTrigger>
          <Dashboard.TabsTrigger value="playlists">
            Playlists
          </Dashboard.TabsTrigger>
        </Dashboard.TabsList>

        <Dashboard.TabsContent value="videos">
          <VideoDashboardContainer
            videosList={dashboardVideos}
            paginate={paginate}
            handleChangePage={handleChangePage}
          />
        </Dashboard.TabsContent>
        <Dashboard.TabsContent value="playlists">
          <PlaylistDashboardContainer playlists={loggedInUserPlaylists} />
        </Dashboard.TabsContent>
      </Dashboard.Tabs>
    </DashboardContainer>
  )
}

export default DashboardPage
