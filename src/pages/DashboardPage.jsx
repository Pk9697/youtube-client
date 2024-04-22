import { Dashboard, DashboardContainer } from '@/features/dashboard'
import { VideoDashboardContainer } from '@/features/videos'

function DashboardPage() {
  return (
    <DashboardContainer>
      <Dashboard.Tabs defaultValue="videos">
        <Dashboard.TabsList>
          <Dashboard.TabsTrigger value="videos">Videos</Dashboard.TabsTrigger>
          <Dashboard.TabsTrigger value="playlists">
            Playlists
          </Dashboard.TabsTrigger>
        </Dashboard.TabsList>

        <Dashboard.TabsContent value="videos">
          <VideoDashboardContainer />
        </Dashboard.TabsContent>
      </Dashboard.Tabs>
    </DashboardContainer>
  )
}

export default DashboardPage
