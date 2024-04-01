import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarContainer from './SidebarContainer'
import NavbarContainer from './NavbarContainer'

function Layout() {
  return (
    <div className="grid h-screen w-full flex-grow overflow-auto md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="sticky top-0 z-10 hidden max-h-screen overflow-auto border-r bg-muted/40 md:block">
        <SidebarContainer />
      </div>
      <div>
        <div className="sticky top-0 z-10">
          <NavbarContainer />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
