import { v4 as uuid } from 'uuid'
import {
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  SettingsIcon,
  SquareUserRoundIcon,
  ThumbsUpIcon,
  UsersRoundIcon,
  Youtube,
  ClockIcon,
  LayoutDashboardIcon,
} from 'lucide-react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'
import { Skeleton } from '@/components/ui/skeleton'

function SidebarContainer({ usersList = [], inProgress = false }) {
  const { user: { userName: loggedInUserName } = {} } = useSelector(
    (state) => state.auth
  )

  return (
    <Sidebar>
      <Sidebar.Header>
        <Sidebar.HeaderLink to={ROUTES.HOME}>
          <Sidebar.Icon>
            <Youtube color="red" className="size-6" />
          </Sidebar.Icon>
          <Sidebar.Text className="text-base">Youtube</Sidebar.Text>
        </Sidebar.HeaderLink>
      </Sidebar.Header>
      <Sidebar.Nav>
        <Sidebar.NavLink to="/">
          <Sidebar.Icon>
            <HomeIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Home</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={ROUTES.SUBSCRIPTIONS}>
          <Sidebar.Icon>
            <ListVideoIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Subscriptions</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>

      <Sidebar.Nav>
        <Sidebar.NavTitle>You</Sidebar.NavTitle>
        <Sidebar.NavLink to={ROUTES.DASHBOARD}>
          <Sidebar.Icon>
            <LayoutDashboardIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Dashboard</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={`${ROUTES.PROFILE}/${loggedInUserName}`}>
          <Sidebar.Icon>
            <SquareUserRoundIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Your Channel</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={ROUTES.SUBSCRIBERS}>
          <Sidebar.Icon>
            <UsersRoundIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Subscribers</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={ROUTES.HISTORY}>
          <Sidebar.Icon>
            <HistoryIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>History</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={ROUTES.LIKED_VIDEOS}>
          <Sidebar.Icon>
            <ThumbsUpIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Liked Videos</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink to={ROUTES.WATCH_LATER}>
          <Sidebar.Icon>
            <ClockIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Watch Later</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>

      <Sidebar.Nav>
        <Sidebar.NavTitle>Subscriptions</Sidebar.NavTitle>

        {inProgress
          ? 'abcde'.split('').map(() => (
              <div key={uuid()} className="flex items-center gap-3 px-3 py-2">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-5 w-24" />
              </div>
            ))
          : usersList.map(({ _id, avatar, userName, fullName }) => (
              <Sidebar.NavLink key={_id} to={`${ROUTES.PROFILE}/${userName}`}>
                <Sidebar.Avatar src={getPublicUrl(avatar)} />
                <Sidebar.Text>{fullName}</Sidebar.Text>
              </Sidebar.NavLink>
            ))}
      </Sidebar.Nav>

      <Sidebar.Nav className="mt-auto">
        <Sidebar.NavLink to={ROUTES.SETTINGS}>
          <Sidebar.Icon>
            <SettingsIcon className="size-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Settings</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>
    </Sidebar>
  )
}

export default SidebarContainer
