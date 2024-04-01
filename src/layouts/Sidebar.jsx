import { CircleUser } from 'lucide-react'

import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Sidebar({ className, children, ...restProps }) {
  return (
    <div
      className={twMerge('flex h-full flex-col overflow-auto', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Sidebar.Header = function SidebarHeader({ className, children, ...restProps }) {
  return (
    <div
      className={twMerge(
        'sticky top-0 z-10 flex h-14 items-center bg-background px-4 py-4 lg:h-[60px] lg:px-6',
        className,
        { ...restProps }
      )}
    >
      {children}
    </div>
  )
}

Sidebar.HeaderLink = function SidebarHeaderLink({
  className,
  children,
  ...restProps
}) {
  return (
    <a
      href="/"
      className={twMerge('flex items-center gap-2 font-semibold', className, {
        ...restProps,
      })}
    >
      {children}
    </a>
  )
}

Sidebar.Icon = function SidebarIcon({ className, children, ...restProps }) {
  return (
    <div className={twMerge('', className, { ...restProps })}>{children}</div>
  )
}

Sidebar.Text = function SidebarText({ className, children, ...restProps }) {
  return (
    <div className={twMerge('', className, { ...restProps })}>{children}</div>
  )
}

Sidebar.Nav = function SidebarNav({ className, children, ...restProps }) {
  return (
    <nav
      className={twMerge(
        'grid items-start border-b px-2 py-2 text-sm font-medium last-of-type:border-b-0 lg:px-4',
        className,
        { ...restProps }
      )}
    >
      {children}
    </nav>
  )
}

Sidebar.NavTitle = function SidebarNavTitle({
  className,
  children,
  ...restProps
}) {
  return (
    <div
      className={twMerge('px-3 py-2 text-base', className, { ...restProps })}
    >
      {children}
    </div>
  )
}

Sidebar.NavLink = function SidebarNavLink({
  className,
  children,
  ...restProps
}) {
  return (
    <a
      href="/"
      className={twMerge(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
        className,
        { ...restProps }
      )}
    >
      {children}
    </a>
  )
}

Sidebar.Avatar = function SidebarAvatar({
  className,
  src = 'https://github.com/shadcn.png',
  ...restProps
}) {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage
        src={src}
        className={twMerge('', className)}
        {...restProps}
      />
      <AvatarFallback>
        <CircleUser />
      </AvatarFallback>
    </Avatar>
  )
}

export default Sidebar
