import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Dashboard,
  DashboardContainer,
  fetchDashboardStats,
  fetchDashboardVideos,
} from '@/features/dashboard'
import { VideoDashboardContainer } from '@/features/videos'

function DashboardPage() {
  const dispatch = useDispatch()
  const { accessToken } = useSelector((state) => state.auth)
  const { dashboardStats, dashboardVideos } = useSelector(
    (state) => state.dashboard
  )

  useEffect(() => {
    dispatch(fetchDashboardStats({ accessToken }))
    dispatch(fetchDashboardVideos({ accessToken }))
  }, [])

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
          <VideoDashboardContainer videosList={dashboardVideos} />
        </Dashboard.TabsContent>
      </Dashboard.Tabs>
    </DashboardContainer>
  )
}

export default DashboardPage
