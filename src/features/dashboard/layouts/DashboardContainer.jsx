import { useSelector } from 'react-redux'
import { HeartIcon, UserRoundCheckIcon, ViewIcon } from 'lucide-react'
import Dashboard from '../components/Dashboard'
import { formatViews } from '@/utils/formatViews'

function DashboardContainer({
  children,
  dashboardStats: {
    totalVideosViews = 0,
    totalSubscribers = 0,
    totalVideosLikes = 0,
  } = {},
}) {
  const { user: { fullName } = {} } = useSelector((state) => state.auth)

  return (
    <Dashboard>
      <Dashboard.Group>
        <Dashboard.Title>
          Welcome back, {fullName?.split(' ')[0]}
        </Dashboard.Title>
        <Dashboard.TextSmall>Check your dashboard summary.</Dashboard.TextSmall>
      </Dashboard.Group>

      <Dashboard.CardGrid>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Views</Dashboard.CardTitle>
            <ViewIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>
              {formatViews(totalVideosViews)}
            </Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Followers</Dashboard.CardTitle>
            <UserRoundCheckIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>
              {formatViews(totalSubscribers)}
            </Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Likes</Dashboard.CardTitle>
            <HeartIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>
              {formatViews(totalVideosLikes)}
            </Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
      </Dashboard.CardGrid>

      {children}
    </Dashboard>
  )
}

export default DashboardContainer
