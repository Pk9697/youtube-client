import { HeartIcon, UserRoundCheckIcon, ViewIcon } from 'lucide-react'
import Dashboard from '../components/Dashboard'

function DashboardContainer({ children }) {
  return (
    <Dashboard>
      <Dashboard.Group>
        <Dashboard.Title>Welcome back, Olivia</Dashboard.Title>
        <Dashboard.TextSmall>Check your dashboard summary.</Dashboard.TextSmall>
      </Dashboard.Group>

      <Dashboard.CardGrid>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Views</Dashboard.CardTitle>
            <ViewIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>221,234</Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Followers</Dashboard.CardTitle>
            <UserRoundCheckIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>4053</Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
        <Dashboard.Card>
          <Dashboard.CardHeader>
            <Dashboard.CardTitle>Total Likes</Dashboard.CardTitle>
            <HeartIcon className="size-4 text-muted-foreground" />
          </Dashboard.CardHeader>
          <Dashboard.CardContent>
            <Dashboard.TitleBig>63,021</Dashboard.TitleBig>
          </Dashboard.CardContent>
        </Dashboard.Card>
      </Dashboard.CardGrid>

      {children}
    </Dashboard>
  )
}

export default DashboardContainer
