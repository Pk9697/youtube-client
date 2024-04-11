import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import SidebarContainer from './SidebarContainer'
import { toggleSidebar } from '@/app/appSlice'
import { logout } from '@/features/authentication'
import { fetchVideosByQuery } from '@/features/search'

function NavbarContainer({ usersList }) {
  const isLightMode = true
  const dispatch = useDispatch()
  const {
    accessToken,
    user: { fullName, avatar },
  } = useSelector((state) => state.auth)

  const { searchResults } = useSelector((state) => state.search)
  console.log({ searchResults })

  // TODO: Add below logic in useSearchQuery custom hook

  const [query, setQuery] = useState('')
  const handleSearchInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(query)
    dispatch(fetchVideosByQuery({ accessToken, query }))
    setQuery('')
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
      <Navbar.Mode isLightMode={isLightMode} />
      <Navbar.DropdownMenu>
        <Navbar.Avatar src={avatar} />
        <Navbar.DropdownMenuContent>
          <Navbar.DropdownMenuLabel>{fullName}</Navbar.DropdownMenuLabel>
          <Navbar.DropdownMenuSeparator />
          <Navbar.DropdownMenuItem>Settings</Navbar.DropdownMenuItem>
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
