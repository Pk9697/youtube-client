import { CircleUserIcon, ListVideoIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Playlist({ children, className, ...restProps }) {
  return (
    <div className={twMerge('grid gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Playlist.Group = function PlaylistGroup({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 overflow-y-auto',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Playlist.ImageContainerLink = function PlaylistImageContainerLink({
  children,
  className,
  ...restProps
}) {
  return (
    <Link className="group relative inline-block aspect-video" {...restProps}>
      {children}
      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 rounded-md bg-black px-2 py-1 text-white brightness-100 group-hover:block">
        Play All
      </div>
    </Link>
  )
}

Playlist.Image = function PlaylistImage({
  src,
  fallbackSrc = 'https://kingdomfellowship.org/wp-content/uploads/2009/08/no-video-available-image.jpg',
  className,
  ...restProps
}) {
  return (
    <img
      className={twMerge(
        'block max-h-full max-w-full rounded-xl bg-muted object-cover hover:brightness-50',
        className
      )}
      src={src || fallbackSrc}
      alt="Video 1 Thumbnail"
      {...restProps}
    />
  )
}

Playlist.Length = function PlaylistLength({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge(
        'absolute bottom-2 right-2 flex items-center gap-2 rounded bg-black bg-opacity-50 px-2 py-1 text-sm text-white',
        className
      )}
      {...restProps}
    >
      <ListVideoIcon className="size-4" />
      {children}
    </div>
  )
}

Playlist.Details = function PlaylistDetails({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('flex gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Playlist.AvatarLink = function PlaylistAvatarLink({
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

Playlist.Meta = function PlaylistMeta({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col', className)} {...restProps}>
      {children}
    </div>
  )
}

Playlist.TitleLink = function PlaylistTitleLink({
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

Playlist.Title = function PlaylistTitle({ children, className, ...restProps }) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

// LOOK up text-secondary-foreground
Playlist.TextLink = function PlaylistTextLink({
  children,
  className,
  ...restProps
}) {
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

Playlist.Text = function PlaylistText({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('text-sm text-muted-foreground', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

export default Playlist
