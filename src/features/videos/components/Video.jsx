import {
  CircleUserIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  ListPlusIcon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Video({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.Group = function VideoGroup({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-y-auto p-4',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Video.ImageContainerLink = function VideoImageContainerLink({
  children,
  className,
  ...restProps
}) {
  return (
    <Link className="relative aspect-video" {...restProps}>
      {children}
    </Link>
  )
}

Video.Image = function VideoImage({ className, ...restProps }) {
  return (
    <img
      className={twMerge(
        'block h-full w-full rounded-xl object-cover',
        className
      )}
      alt="Video Thumbnail"
      {...restProps}
    />
  )
}

// CHECK Text Color to align it with shadcn

Video.Duration = function VideoDuration({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'absolute bottom-1 right-1 rounded bg-black px-0.5 text-sm text-white',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Video.Details = function VideoDetails({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-start gap-2', className)}
      {...restProps}
    >
      {children}
      <DropdownMenu asChild>
        <DropdownMenuTrigger className="ml-auto">
          <EllipsisVerticalIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-primary">
              <ListPlusIcon className="h-4 w-4" />
              Save to playlist
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-primary">
              <ClockIcon className="h-4 w-4" />
              Save to Watch Later
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

Video.AvatarLink = function VideoAvatarLink({
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

Video.Meta = function VideoMeta({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.TitleLink = function VideoTitleLink({
  children,
  className,
  ...restProps
}) {
  return (
    <Link className={twMerge('font-semibold', className)} {...restProps}>
      {children}
    </Link>
  )
}

// LOOK up text-secondary-foreground
Video.TextLink = function VideoTextLink({ children, className, ...restProps }) {
  return (
    <Link
      className={twMerge(
        'text-sm text-muted-foreground hover:text-primary',
        className
      )}
      {...restProps}
    >
      {children}
    </Link>
  )
}

Video.Text = function VideoText({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('text-sm text-muted-foreground', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Video.DropdownMenu = function VideoDropdownMenu({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.DropdownMenuContent = function VideoDropdownMenuContent({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.DropdownMenuItem = function VideoDropdownMenuItem({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.Icon = function VideoIcon({ children, className, ...restProps }) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.DropdownMenuText = function VideoDropdownMenuText({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

export default Video
