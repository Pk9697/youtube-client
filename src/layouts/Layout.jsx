import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarContainer from './SidebarContainer'
import NavbarContainer from './NavbarContainer'

function Layout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <SidebarContainer />
      </div>
      <div className="flex flex-col">
        <NavbarContainer />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
