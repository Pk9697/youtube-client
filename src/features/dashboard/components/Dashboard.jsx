import { twMerge } from 'tailwind-merge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function Dashboard({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('flex flex-col gap-4 p-4 md:gap-8', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Dashboard.Group = function DashboardGroup({
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

Dashboard.Title = function DashboardTitle({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('text-xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

Dashboard.TextSmall = function DashboardTextSmall({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge('text-sm text-muted-foreground', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Dashboard.TitleBig = function DashboardTitleBig({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('text-2xl font-bold', className)} {...restProps}>
      {children}
    </div>
  )
}

Dashboard.CardGrid = function DashboardCardGrid({
  children,
  className,
  ...restProps
}) {
  return (
    <div
      className={twMerge('grid gap-4 md:grid-cols-3 lg:gap-8', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Dashboard.Card = function DashboardCard({ children, className, ...restProps }) {
  return (
    <Card className={twMerge('', className)} {...restProps}>
      {children}
    </Card>
  )
}

Dashboard.CardHeader = function DashboardCardHeader({
  children,
  className,
  ...restProps
}) {
  return (
    <CardHeader
      className={twMerge(
        'flex flex-row items-center justify-between space-y-0 pb-2',
        className
      )}
      {...restProps}
    >
      {children}
    </CardHeader>
  )
}

Dashboard.CardTitle = function DashboardCardTitle({
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

Dashboard.CardContent = function DashboardCardContent({
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

Dashboard.Tabs = function DashboardTabs({ children, className, ...restProps }) {
  return (
    <Tabs className={twMerge('', className)} {...restProps}>
      {children}
    </Tabs>
  )
}

Dashboard.TabsList = function DashboardTabsList({
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

Dashboard.TabsTrigger = function DashboardTabsTrigger({
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

Dashboard.TabsContent = function DashboardTabsContent({
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

export default Dashboard
