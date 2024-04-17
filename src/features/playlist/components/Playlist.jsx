import { CircleUserIcon, ListVideoIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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

Playlist.Dialog = function PlaylistDialog({
  children,
  className,
  ...restProps
}) {
  return (
    <Dialog className={twMerge('', className)} {...restProps}>
      {children}
    </Dialog>
  )
}

Playlist.DialogTrigger = function PlaylistDialogTrigger({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogTrigger className={twMerge('', className)} {...restProps}>
      {children}
    </DialogTrigger>
  )
}
Playlist.DialogContent = function PlaylistDialogContent({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogContent className={twMerge('max-w-xs', className)} {...restProps}>
      {children}
    </DialogContent>
  )
}

Playlist.DialogHeader = function PlaylistDialogHeader({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogHeader className={twMerge('space-y-3', className)} {...restProps}>
      {children}
    </DialogHeader>
  )
}

Playlist.DialogTitle = function PlaylistDialogTitle({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogTitle className={twMerge('', className)} {...restProps}>
      {children}
    </DialogTitle>
  )
}

Playlist.Col = function PlaylistCol({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Playlist.Row = function PlaylistRow({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Playlist.Checkbox = function PlaylistCheckbox({
  children,
  className,
  ...restProps
}) {
  return <Checkbox className={twMerge('', className)} {...restProps} />
}

Playlist.Label = function PlaylistLabel({ children, className, ...restProps }) {
  return (
    <Label
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </Label>
  )
}

Playlist.DialogFooter = function PlaylistDialogFooter({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogFooter className={twMerge('', className)} {...restProps}>
      {children}
    </DialogFooter>
  )
}

Playlist.Collapsible = function PlaylistCollapsible({
  children,
  className,
  ...restProps
}) {
  return (
    <Collapsible
      className={twMerge('w-full space-y-4', className)}
      {...restProps}
    >
      {children}
    </Collapsible>
  )
}

Playlist.CollapsibleTrigger = function PlaylistCollapsibleTrigger({
  children,
  className,
  ...restProps
}) {
  return (
    <CollapsibleTrigger className={twMerge('', className)} {...restProps}>
      {children}
    </CollapsibleTrigger>
  )
}

Playlist.Button = function PlaylistButton({
  children,
  className,
  ...restProps
}) {
  return (
    <Button
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

Playlist.CollapsibleContent = function PlaylistCollapsibleContent({
  children,
  className,
  ...restProps
}) {
  return (
    <CollapsibleContent className={twMerge('', className)} {...restProps}>
      {children}
    </CollapsibleContent>
  )
}

Playlist.Form = function PlaylistForm({ children, className, ...restProps }) {
  return (
    <form className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </form>
  )
}

Playlist.InputContainer = function PlaylistInputContainer({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('space-y-1', className)} {...restProps}>
      {children}
    </div>
  )
}

Playlist.Input = function PlaylistInput({ children, className, ...restProps }) {
  return (
    <Input className={twMerge('', className)} {...restProps}>
      {children}
    </Input>
  )
}

Playlist.Select = function PlaylistSelect({
  children,
  className,
  ...restProps
}) {
  return (
    <Select className={twMerge('', className)} {...restProps}>
      {children}
    </Select>
  )
}

Playlist.SelectTrigger = function PlaylistSelectTrigger({
  children,
  className,
  ...restProps
}) {
  return (
    <SelectTrigger className={twMerge('', className)} {...restProps}>
      {children}
    </SelectTrigger>
  )
}

Playlist.SelectValue = function PlaylistSelectValue({
  children,
  className,
  ...restProps
}) {
  return (
    <SelectValue className={twMerge('', className)} {...restProps}>
      {children}
    </SelectValue>
  )
}

Playlist.SelectContent = function PlaylistSelectContent({
  children,
  className,
  ...restProps
}) {
  return (
    <SelectContent className={twMerge('', className)} {...restProps}>
      {children}
    </SelectContent>
  )
}

Playlist.SelectItem = function PlaylistSelectItem({
  children,
  className,
  ...restProps
}) {
  return (
    <SelectItem className={twMerge('', className)} {...restProps}>
      {children}
    </SelectItem>
  )
}

export default Playlist
