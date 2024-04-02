import React from 'react'
import { useDispatch } from 'react-redux'
import Navbar from './Navbar'
import SidebarContainer from './SidebarContainer'
import { toggleSidebar } from '@/app/appSlice'

function NavbarContainer() {
  const isLightMode = true
  const dispatch = useDispatch()

  return (
    <Navbar>
      <Navbar.SidebarTriggerMenu onClick={() => dispatch(toggleSidebar())} />
      <Navbar.SidebarContent>
        <SidebarContainer />
      </Navbar.SidebarContent>
      <Navbar.SearchInput type="search" placeholder="Search..." />
      <Navbar.Mode isLightMode={isLightMode} />
      <Navbar.DropdownMenu>
        <Navbar.Avatar src />
        <Navbar.DropdownMenuContent>
          <Navbar.DropdownMenuLabel>My Account</Navbar.DropdownMenuLabel>
          <Navbar.DropdownMenuSeparator />
          <Navbar.DropdownMenuItem>Settings</Navbar.DropdownMenuItem>
          <Navbar.DropdownMenuItem>Support</Navbar.DropdownMenuItem>
          <Navbar.DropdownMenuSeparator />
          <Navbar.DropdownMenuItem>Logout</Navbar.DropdownMenuItem>
        </Navbar.DropdownMenuContent>
      </Navbar.DropdownMenu>
    </Navbar>
  )
}

export default NavbarContainer
