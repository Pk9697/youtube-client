import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import SidebarContainer from './SidebarContainer'
import { toggleSidebar } from '@/app/appSlice'
import { logout } from '@/features/authentication'

function NavbarContainer({ usersList }) {
  const isLightMode = true
  const dispatch = useDispatch()
  const {
    accessToken,
    user: { fullName, avatar },
  } = useSelector((state) => state.auth)

  return (
    <Navbar>
      <Navbar.SidebarTriggerMenu onClick={() => dispatch(toggleSidebar())} />
      <Navbar.SidebarContent>
        <SidebarContainer usersList={usersList} />
      </Navbar.SidebarContent>
      <Navbar.SearchInput type="search" placeholder="Search..." />
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
