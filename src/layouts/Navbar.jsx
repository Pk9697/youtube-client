import { twMerge } from 'tailwind-merge'
import {
  CircleUserIcon,
  MenuIcon,
  SearchIcon,
  MoonIcon,
  SunIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function Navbar({ children, className, ...restProps }) {
  return (
    <header
      className={twMerge(
        'flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6',
        className
      )}
      {...restProps}
    >
      {children}
    </header>
  )
}

Navbar.SidebarContent = function NavbarSidebarContent({
  children,
  className,
  ...restProps
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className={twMerge('flex flex-col', className)}
        {...restProps}
      >
        {children}
      </SheetContent>
    </Sheet>
  )
}

Navbar.SearchInput = function NavbarSearchInput({ className, ...restProps }) {
  return (
    <div className="w-full flex-1">
      <form>
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className={twMerge(
              'w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3',
              className
            )}
            {...restProps}
          />
        </div>
      </form>
    </div>
  )
}

Navbar.DropdownMenu = function NavbarDropdownMenu({
  className,
  children,
  ...restProps
}) {
  return (
    <DropdownMenu className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenu>
  )
}

Navbar.Avatar = function NavbarAvatar({
  className,
  src = 'https://github.com/shadcn.png',
  ...restProps
}) {
  return (
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
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

        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
  )
}

Navbar.DropdownMenuContent = function NavbarDropdownMenuContent({
  className,
  children,
  ...restProps
}) {
  return (
    <DropdownMenuContent className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuContent>
  )
}

Navbar.DropdownMenuLabel = function NavbarDropdownMenuLabel({
  className,
  children,
  ...restProps
}) {
  return (
    <DropdownMenuLabel className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuLabel>
  )
}

Navbar.DropdownMenuSeparator = function NavbarDropdownMenuSeparator({
  className,
  ...restProps
}) {
  return (
    <DropdownMenuSeparator className={twMerge('', className)} {...restProps} />
  )
}

Navbar.DropdownMenuItem = function NavbarDropdownMenuItem({
  className,
  children,
  ...restProps
}) {
  return (
    <DropdownMenuItem className={twMerge('', className)} {...restProps}>
      {children}
    </DropdownMenuItem>
  )
}

Navbar.Mode = function NavbarMode({
  isLightMode = true,
  className,
  children,
  ...restProps
}) {
  return (
    <div className={twMerge('cursor-pointer', className)} {...restProps}>
      {isLightMode ? <SunIcon /> : <MoonIcon />}
    </div>
  )
}

export default Navbar
