import {
  HistoryIcon,
  HomeIcon,
  ListVideoIcon,
  SettingsIcon,
  SquareUserRoundIcon,
  ThumbsUpIcon,
  UsersRoundIcon,
  Youtube,
} from 'lucide-react'
import Sidebar from './Sidebar'

function SidebarContainer() {
  return (
    <Sidebar>
      <Sidebar.Header>
        <Sidebar.HeaderLink>
          <Sidebar.Icon>
            <Youtube color="red" className="h-6 w-6" />
          </Sidebar.Icon>
          <Sidebar.Text className="text-base">Youtube</Sidebar.Text>
        </Sidebar.HeaderLink>
      </Sidebar.Header>

      <Sidebar.Nav>
        <Sidebar.NavLink className="bg-muted text-primary">
          <Sidebar.Icon>
            <HomeIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Home</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <ListVideoIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Subscriptions</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>

      <Sidebar.Nav>
        <Sidebar.NavTitle>You</Sidebar.NavTitle>
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <SquareUserRoundIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Your Channel</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <UsersRoundIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Subscribers</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <HistoryIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>History</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <ThumbsUpIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Liked Videos</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>

      <Sidebar.Nav>
        <Sidebar.NavTitle>Subscriptions</Sidebar.NavTitle>
        <Sidebar.NavLink>
          <Sidebar.Avatar src />
          <Sidebar.Text>Name 1</Sidebar.Text>
        </Sidebar.NavLink>
        <Sidebar.NavLink>
          <Sidebar.Avatar />
          <Sidebar.Text>Name 2</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>

      <Sidebar.Nav className="mt-auto">
        <Sidebar.NavLink>
          <Sidebar.Icon>
            <SettingsIcon className="h-4 w-4" />
          </Sidebar.Icon>
          <Sidebar.Text>Settings</Sidebar.Text>
        </Sidebar.NavLink>
      </Sidebar.Nav>
    </Sidebar>
  )
}

export default SidebarContainer
