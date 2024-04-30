import React from 'react'
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

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

Playlist.TextSmall = function PlaylistTextSmall({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge('text-xs text-muted-foreground', className)}
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
    <DialogContent className={twMerge('', className)} {...restProps}>
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

Playlist.Button = React.forwardRef(function PlaylistButton(
  { children, className, ...restProps },
  ref
) {
  return (
    <Button
      className={twMerge('flex items-center gap-2', className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </Button>
  )
})

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

Playlist.Card = function PlaylistCard({ children, className, ...restProps }) {
  return (
    <Card className={twMerge('', className)} {...restProps}>
      {children}
    </Card>
  )
}

Playlist.CardHeader = function PlaylistCardHeader({
  children,
  className,
  ...restProps
}) {
  return (
    <CardHeader className={twMerge('', className)} {...restProps}>
      {children}
    </CardHeader>
  )
}

Playlist.CardTitle = function PlaylistCardTitle({
  children,
  className,
  ...restProps
}) {
  return (
    <CardTitle className={twMerge('', className)} {...restProps}>
      {children}
    </CardTitle>
  )
}

Playlist.CardDescription = function PlaylistCardDescription({
  children,
  className,
  ...restProps
}) {
  return (
    <CardDescription className={twMerge('', className)} {...restProps}>
      {children}
    </CardDescription>
  )
}

Playlist.CardActions = function PlaylistCardActions({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge('ml-auto flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Playlist.CardContent = function PlaylistCardContent({
  children,
  className,
  ...restProps
}) {
  return (
    <CardContent className={twMerge('', className)} {...restProps}>
      {children}
    </CardContent>
  )
}

Playlist.CardFooter = function PlaylistCardFooter({
  children,
  className,
  ...restProps
}) {
  return (
    <CardFooter className={twMerge('', className)} {...restProps}>
      {children}
    </CardFooter>
  )
}

Playlist.CardDetails = function PlaylistCardDetails({
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

Playlist.DropdownMenu = function PlaylistDropdownMenu({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenu className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenu>
  )
}

Playlist.DropdownMenuTrigger = function PlaylistDropdownMenuTrigger({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenuTrigger className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuTrigger>
  )
}

Playlist.DropdownMenuLabel = function PlaylistDropdownMenuLabel({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenuLabel className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuLabel>
  )
}

Playlist.DropdownMenuRadioGroup = function PlaylistDropdownMenuRadioGroup({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenuRadioGroup className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuRadioGroup>
  )
}

Playlist.DropdownMenuRadioItem = function PlaylistDropdownMenuRadioItem({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenuRadioItem className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuRadioItem>
  )
}

Playlist.DropdownMenuSeparator = function PlaylistDropdownMenuSeparator({
  className,
  ...restProps
}) {
  return (
    <DropdownMenuSeparator className={twMerge('', className)} {...restProps} />
  )
}

Playlist.DropdownMenuContent = function PlaylistDropdownMenuContent({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenuContent className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuContent>
  )
}

Playlist.DropdownMenuItem = React.forwardRef(function PlaylistDropdownMenuItem(
  { children, className, ...restProps },
  ref
) {
  return (
    <DropdownMenuItem
      className={twMerge(
        'flex cursor-pointer items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-primary',
        className
      )}
      ref={ref}
      {...restProps}
    >
      {children}
    </DropdownMenuItem>
  )
})

Playlist.Table = function PlaylistTable({ children, className, ...restProps }) {
  return (
    <Table className={twMerge('', className)} {...restProps}>
      {children}
    </Table>
  )
}

Playlist.TableHeader = function PlaylistTableHeader({
  children,
  className,
  ...restProps
}) {
  return (
    <TableHeader className={twMerge('', className)} {...restProps}>
      {children}
    </TableHeader>
  )
}

Playlist.TableHead = function PlaylistTableHead({
  children,
  className,
  ...restProps
}) {
  return (
    <TableHead className={twMerge('', className)} {...restProps}>
      {children}
    </TableHead>
  )
}

Playlist.TableBody = function PlaylistTableBody({
  children,
  className,
  ...restProps
}) {
  return (
    <TableBody className={twMerge('', className)} {...restProps}>
      {children}
    </TableBody>
  )
}

Playlist.TableRow = function PlaylistTableRow({
  children,
  className,
  ...restProps
}) {
  return (
    <TableRow className={twMerge('', className)} {...restProps}>
      {children}
    </TableRow>
  )
}

Playlist.TableCell = function PlaylistTableCell({
  children,
  className,
  ...restProps
}) {
  return (
    <TableCell className={twMerge('', className)} {...restProps}>
      {children}
    </TableCell>
  )
}

Playlist.Tabs = function PlaylistTabs({ children, className, ...restProps }) {
  return (
    <Tabs className={twMerge('', className)} {...restProps}>
      {children}
    </Tabs>
  )
}

Playlist.TabsList = function PlaylistTabsList({
  children,
  className,
  ...restProps
}) {
  return (
    <TabsList className={twMerge('', className)} {...restProps}>
      {children}
    </TabsList>
  )
}

Playlist.TabsTrigger = function PlaylistTabsTrigger({
  children,
  className,
  ...restProps
}) {
  return (
    <TabsTrigger className={twMerge('', className)} {...restProps}>
      {children}
    </TabsTrigger>
  )
}

Playlist.TabsContent = function PlaylistTabsContent({
  children,
  className,
  ...restProps
}) {
  return (
    <TabsContent className={twMerge('', className)} {...restProps}>
      {children}
    </TabsContent>
  )
}

export default Playlist
