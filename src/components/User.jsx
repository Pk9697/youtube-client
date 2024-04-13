import { CircleUserIcon, SearchIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

function User({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-start gap-4', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

User.Group = function UserGroup({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex flex-col gap-4 overflow-y-auto', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

User.SearchInput = function UserSearchInput({ className, ...restProps }) {
  return (
    <div className="w-full flex-1">
      <form>
        <div className="relative">
          <SearchIcon className="absolute left-4 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search users..."
            className={twMerge(
              'ml-1 mt-1 w-full appearance-none bg-background pl-9 shadow-none md:w-2/3 lg:w-1/3',
              className
            )}
            {...restProps}
          />
        </div>
      </form>
    </div>
  )
}

User.AvatarLink = function UserAvatarLink({
  to = '/',
  src,
  className,
  ...restProps
}) {
  return (
    <Link to={to}>
      <Avatar>
        <AvatarImage
          src={src}
          className={twMerge('', className)}
          {...restProps}
        />
        <AvatarFallback>
          <CircleUserIcon className="h-5 w-5" />
        </AvatarFallback>
      </Avatar>
    </Link>
  )
}

User.Meta = function UserMeta({ className, children, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

User.Title = function UserTitle({ children, className, ...restProps }) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

User.TextLink = function UserTextLink({ children, className, ...restProps }) {
  return (
    <Link
      className={twMerge('text-sm font-semibold hover:text-primary', className)}
      {...restProps}
    >
      {children}
    </Link>
  )
}

User.TextSmall = function UserTextSmall({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('text-xs text-muted-foreground', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

User.Button = function UserButton({ children, className, ...restProps }) {
  return (
    <Button
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default User
