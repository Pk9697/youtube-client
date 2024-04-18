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
import { useTheme } from '@/context/theme-provider'

function Navbar({ children, className, ...restProps }) {
  return (
    <header
      className={twMerge(
        'flex h-14 items-center gap-4 border-b bg-muted/95 px-4 lg:h-[60px] lg:px-6',
        className
      )}
      {...restProps}
    >
      {children}
    </header>
  )
}

Navbar.SidebarTriggerMenu = function NavbarSidebarTriggerMenu({
  className,
  ...restProps
}) {
  return (
    <Button
      variant="outline"
      size="icon"
      className={twMerge(
        'hidden shrink-0 md:flex md:items-center md:justify-center',
        className
      )}
      {...restProps}
    >
      <MenuIcon className="h-5 w-5" />
      <span className="sr-only">Toggle navigation menu</span>
    </Button>
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

Navbar.SearchInput = function NavbarSearchInput({
  onSubmit,
  className,
  ...restProps
}) {
  return (
    <div className="w-full flex-1">
      <form onSubmit={onSubmit}>
        <div className="relative">
          <Button
            variant="ghost"
            type="submit"
            size="icon"
            className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
          >
            <SearchIcon />
          </Button>
          <Input
            type="search"
            placeholder="Search ..."
            className={twMerge(
              'w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3',
              className
            )}
            required
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
    <DropdownMenuItem
      className={twMerge('cursor-pointer', className)}
      {...restProps}
    >
      {children}
    </DropdownMenuItem>
  )
}

Navbar.ModeToggle = function NavbarModeToggle() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme('light')}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setTheme('system')}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar
