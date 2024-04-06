import {
  CircleUserIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  Trash2Icon,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

function Comment({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-start gap-4', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Comment.Group = function CommentGroup({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex flex-col gap-4 overflow-y-auto', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Comment.Title = function CommentTitle({ children, className, ...restProps }) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

Comment.Form = function CommentForm({ children, className, ...restProps }) {
  return (
    <form className={twMerge('flex gap-4', className)} {...restProps}>
      {children}
    </form>
  )
}

Comment.AvatarLink = function CommentAvatarLink({
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

Comment.Button = function CommentButton({ children, className, ...restProps }) {
  return (
    <Button
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </Button>
  )
}

Comment.TextArea = function CommentTextArea({ className, ...restProps }) {
  return <Textarea className={twMerge('', className)} {...restProps} />
}

Comment.Meta = function CommentMeta({ className, children, ...restProps }) {
  return (
    <div className={twMerge('flex flex-col gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Comment.Row = function CommentMeta({ className, children, ...restProps }) {
  return (
    <div
      className={twMerge('flex items-center gap-2', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Comment.TextLink = function CommentTextLink({
  children,
  className,
  ...restProps
}) {
  return (
    <Link
      className={twMerge('text-sm font-semibold hover:text-primary', className)}
      {...restProps}
    >
      {children}
    </Link>
  )
}

Comment.TextSmall = function CommentTextSmall({
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

Comment.Text = function CommentText({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'max-w-56 hyphens-auto break-words text-sm sm:max-w-md md:max-w-xl',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Comment.DropdownMenu = function CommentDropdownMenu({
  children,
  className,
  ...restProps
}) {
  return (
    <DropdownMenu asChild>
      <DropdownMenuTrigger
        className={twMerge('ml-auto', className)}
        {...restProps}
      >
        <EllipsisVerticalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-primary">
            <PencilIcon className="h-4 w-4" />
            Edit
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className="flex cursor-pointer items-center gap-3 rounded-lg text-sm font-medium text-muted-foreground transition-all hover:text-primary">
            <Trash2Icon className="h-4 w-4" />
            Delete
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Comment
