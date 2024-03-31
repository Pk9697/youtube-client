import React from 'react'
import Navbar from './Navbar'
import SidebarContainer from './SidebarContainer'

function NavbarContainer() {
  const isLightMode = true
  return (
    <Navbar>
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
