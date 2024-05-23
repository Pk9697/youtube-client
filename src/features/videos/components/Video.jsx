/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'
import { CircleUserIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function Video({ children, className, ...restProps }) {
  return (
    <div className={twMerge('grid gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.Group = function VideoGroup({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 overflow-y-auto',
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
        'block h-full w-full rounded-xl bg-muted object-cover',
        className
      )}
      alt="Video Thumbnail"
      loading="lazy"
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
    <div className={twMerge('flex gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.Row = function VideoRow({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-center gap-2', className)}
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
    <DropdownMenu className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenu>
  )
}

Video.DropdownMenuTrigger = function VideoDropdownMenuTrigger({
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

Video.DropdownMenuLabel = function VideoDropdownMenuLabel({
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

Video.DropdownMenuRadioGroup = function VideoDropdownMenuRadioGroup({
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

Video.DropdownMenuRadioItem = function VideoDropdownMenuRadioItem({
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

Video.DropdownMenuSeparator = function VideoDropdownMenuSeparator({
  className,
  ...restProps
}) {
  return (
    <DropdownMenuSeparator className={twMerge('', className)} {...restProps} />
  )
}

Video.DropdownMenuContent = function VideoDropdownMenuContent({
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

Video.DropdownMenuItem = React.forwardRef(function VideoDropdownMenuItem(
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
          loading="lazy"
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

Video.Title = function VideoTitle({ children, className, ...restProps }) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
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

Video.TextSmall = function VideoTextSmall({
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

Video.Icon = function VideoIcon({ children, className, ...restProps }) {
  return (
    <div className={twMerge('', className)} {...restProps}>
      {children}
    </div>
  )
}

Video.PlayerContainer = function VideoPlayerContainer({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}
// Video.Player = function VideoPlayer({
//   src = 'https://docs.material-tailwind.com/demo.mp4',
//   children,
//   className,
//   ...restProps
// }) {
//   // console.log({ src })
//   const publicId = src?.split('/').slice(-1)[0].split('.')[0]
//   console.log({ publicId })
//   const cloudinaryRef = useRef()
//   const videoRef = useRef()

//   useEffect(() => {
//     if (cloudinaryRef.current) return
//     cloudinaryRef.current = window.cloudinary
//     cloudinaryRef.current.videoPlayer(videoRef.current, {
//       cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
//       autoplay: false,
//       controls: true,
//       showJumpControls: true,
//       pictureInPictureToggle: true,
//       showLogo: false,
//       fluid: true,
//     })
//   }, [])

//   return (
//     <video
//       ref={videoRef}
//       data-cld-public-id={publicId}
//       // data-cld-source={`{"publicId": "${publicId}", "transformation": {"streaming_profile": "auto"}}`}
//       data-cld-source-types='["hls"]'
//       className={twMerge('aspect-video w-full rounded-lg', className)}
//       {...restProps}
//     >
//       {/* <source src={src} type="video/mp4" /> */}
//       {children}
//     </video>
//   )
// }
Video.Player = function VideoPlayer({
  src,
  children,
  className,
  ...restProps
}) {
  const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  const publicId = src?.split('/').slice(-1)[0].split('.')[0]
  return (
    <iframe
      title="video"
      src={`https://player.cloudinary.com/embed/?public_id=${publicId}&cloud_name=${CLOUD_NAME}&player[autoplay]=true&player[controls]=true&player[showJumpControls]=true&player[pictureInPictureToggle]=true&player[showLogo]=false&player[fluid]=true&source[sourceTypes][0]=hls`}
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowFullScreen
      className={twMerge('aspect-video w-full rounded-lg', className)}
      {...restProps}
    />
  )
}

Video.Button = React.forwardRef(function VideoButton(
  { children, className, ...restProps },
  ref
) {
  return (
    <Button className={twMerge('', className)} {...restProps} ref={ref}>
      {children}
    </Button>
  )
})

Video.Card = function VideoCard({ children, className, ...restProps }) {
  return (
    <Card className={twMerge('', className)} {...restProps}>
      {children}
    </Card>
  )
}

Video.CardHeader = function VideoCardHeader({
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

Video.CardTitle = function VideoCardTitle({
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

Video.CardDescription = function VideoCardDescription({
  children,
  className,
  ...restProps
}) {
  return (
    <CardDescription
      className={twMerge(
        'max-w-64 hyphens-auto break-words text-primary sm:max-w-lg md:max-w-xl',
        className
      )}
      {...restProps}
    >
      {children}
    </CardDescription>
  )
}

Video.CardContent = function VideoCardContent({
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

Video.CardFooter = function VideoCardFooter({
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

Video.CardActions = function VideoCardActions({
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

Video.CardDetails = function VideoCardDetails({
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

Video.Switch = function VideoSwitch({ className, ...restProps }) {
  return <Switch className={twMerge('', className)} {...restProps} />
}

Video.Table = function VideoTable({ children, className, ...restProps }) {
  return (
    <Table className={twMerge('', className)} {...restProps}>
      {children}
    </Table>
  )
}

Video.TableHeader = function VideoTableHeader({
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

Video.TableHead = function VideoTableHead({
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

Video.TableBody = function VideoTableBody({
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

Video.TableRow = function VideoTableRow({ children, className, ...restProps }) {
  return (
    <TableRow className={twMerge('', className)} {...restProps}>
      {children}
    </TableRow>
  )
}

Video.TableCell = function VideoTableCell({
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

Video.Dialog = function VideoDialog({ children, className, ...restProps }) {
  return (
    <Dialog className={twMerge('', className)} {...restProps}>
      {children}
    </Dialog>
  )
}

Video.DialogTrigger = function VideoDialogTrigger({
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
Video.DialogContent = function VideoDialogContent({
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

Video.DialogHeader = function VideoDialogHeader({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogHeader className={twMerge('', className)} {...restProps}>
      {children}
    </DialogHeader>
  )
}

Video.DialogTitle = function VideoDialogTitle({
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

Video.DialogDescription = function VideoDialogDescription({
  children,
  className,
  ...restProps
}) {
  return (
    <DialogDescription className={twMerge('', className)} {...restProps}>
      {children}
    </DialogDescription>
  )
}

Video.DialogFooter = function VideoDialogFooter({
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

export default Video
