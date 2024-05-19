import { CircleUser } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Sidebar({ className, children, ...restProps }) {
  return (
    <div
      className={twMerge(
        'no-scrollbar flex h-full max-h-screen flex-col overflow-auto',
        className
      )}
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
        'sticky top-0 z-10 flex h-14 items-center bg-muted px-4 py-4 opacity-100 dark:bg-slate-900 lg:h-[60px] lg:px-6',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Sidebar.HeaderLink = function SidebarHeaderLink({
  className,
  to,
  children,
  ...restProps
}) {
  return (
    <Link
      to={to}
      className={twMerge('flex items-center gap-2 font-semibold', className)}
      {...restProps}
    >
      {children}
    </Link>
  )
}

Sidebar.Icon = function SidebarIcon({ className, children, ...restProps }) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Sidebar.Text = function SidebarText({ className, children, ...restProps }) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Sidebar.Nav = function SidebarNav({ className, children, ...restProps }) {
  return (
    <nav
      className={twMerge(
        'grid items-start border-b px-2 py-2 text-sm font-medium last-of-type:border-b-0 lg:px-4',
        className
      )}
      {...restProps}
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
    <div className={twMerge('px-3 py-2 text-base', className)} {...restProps}>
      {children}
    </div>
  )
}

Sidebar.NavLink = function SidebarNavLink({
  to = '/',
  className,
  children,
  ...restProps
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? twMerge(
              'flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary',
              className
            )
          : twMerge(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              className
            )
      }
      {...restProps}
    >
      {children}
    </NavLink>
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
