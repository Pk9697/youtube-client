/* eslint-disable no-unneeded-ternary */
import { CircleUserIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

function Channel({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col', className)} {...restProps}>
      {children}
    </div>
  )
}

Channel.CoverImage = function ChannelCoverImage({
  src,
  fallbackSrc = 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80',
  className,
  ...restProps
}) {
  return (
    <img
      src={src ? src : fallbackSrc}
      className={twMerge(
        'aspect-video max-h-48 rounded-md bg-muted object-cover',
        className
      )}
      {...restProps}
      alt="coverImage"
    />
  )
}

Channel.Details = function ChannelDetails({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge(
        '-mt-24 flex flex-col items-start gap-4 p-4 sm:-mt-10 sm:flex-row sm:items-end',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Channel.Avatar = function ChannelAvatar({ src, className, ...restProps }) {
  return (
    <Avatar className="size-40">
      <AvatarImage
        src={src}
        className={twMerge('', className)}
        {...restProps}
      />
      <AvatarFallback>
        <CircleUserIcon className="size-40" />
      </AvatarFallback>
    </Avatar>
  )
}

Channel.Meta = function ChannelMeta({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col gap-1', className)} {...restProps}>
      {children}
    </div>
  )
}

Channel.Title = function ChannelTitle({ children, className, ...restProps }) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

Channel.Text = function ChannelText({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('text-sm text-muted-foreground', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Channel.Button = function ChannelButton({ children, className, ...restProps }) {
  return (
    <Button
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default Channel
