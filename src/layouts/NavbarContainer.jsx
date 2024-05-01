import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import SidebarContainer from './SidebarContainer'
import { toggleSidebar } from '@/app/appSlice'
import { logout } from '@/features/authentication'
import { ROUTES } from '@/data/constants'
import { getPublicUrl } from '@/utils/getPublicUrl'

function NavbarContainer({ usersList }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { accessToken, user: { fullName, avatar } = {} } = useSelector(
    (state) => state.auth
  )

  // TODO: Add below logic in useSearchQuery custom hook

  const [query, setQuery] = useState('')
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`${ROUTES.SEARCH}/${query}`)
  }

  return (
    <Navbar>
      <Navbar.SidebarTriggerMenu onClick={() => dispatch(toggleSidebar())} />
      <Navbar.SidebarContent>
        <SidebarContainer usersList={usersList} />
      </Navbar.SidebarContent>
      <Navbar.SearchInput
        onSubmit={handleSearchSubmit}
        onChange={handleSearchInputChange}
        name="query"
        value={query}
      />
      <Navbar.ModeToggle />
      <Navbar.DropdownMenu>
        <Navbar.Avatar src={getPublicUrl(avatar)} />
        <Navbar.DropdownMenuContent>
          <Navbar.DropdownMenuLabel>{fullName}</Navbar.DropdownMenuLabel>
          <Navbar.DropdownMenuSeparator />
          <Navbar.DropdownMenuItem onClick={() => navigate(ROUTES.SETTINGS)}>
            Settings
          </Navbar.DropdownMenuItem>
          <Navbar.DropdownMenuSeparator />
          <Navbar.DropdownMenuItem
            onClick={() => dispatch(logout({ accessToken }))}
          >
            Logout
          </Navbar.DropdownMenuItem>
        </Navbar.DropdownMenuContent>
      </Navbar.DropdownMenu>
    </Navbar>
  )
}

export default NavbarContainer
