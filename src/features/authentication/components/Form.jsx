import { twMerge } from 'tailwind-merge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'

function Form({ children, className, onSubmit, encType, ...restProps }) {
  return (
    <Card className={twMerge('mx-auto max-w-sm', className)} {...restProps}>
      <form encType={encType} onSubmit={onSubmit}>
        {children}
      </form>
    </Card>
  )
}

Form.Header = function FormHeader({ children, className, ...restProps }) {
  return (
    <CardHeader className={twMerge('', className)} {...restProps}>
      {children}
    </CardHeader>
  )
}

Form.Title = function FormTitle({ children, className, ...restProps }) {
  return (
    <CardTitle className={twMerge('text-2xl', className)} {...restProps}>
      {children}
    </CardTitle>
  )
}

Form.Description = function FormDescription({
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

Form.Content = function FormContent({ children, className, ...restProps }) {
  return (
    <CardContent className={twMerge('', className)} {...restProps}>
      {children}
    </CardContent>
  )
}

Form.GridGroup = function FormGridGroup({ children, className, ...restProps }) {
  return (
    <div className={twMerge('grid gap-4', className)} {...restProps}>
      {children}
    </div>
  )
}

Form.InputContainer = function FormInputContainer({
  children,
  className,
  ...restProps
}) {
  return (
    <div className={twMerge('grid gap-2', className)} {...restProps}>
      {children}
    </div>
  )
}

Form.Label = function FormLabel({ children, className, ...restProps }) {
  return (
    <Label className={twMerge('', className)} {...restProps}>
      {children}
    </Label>
  )
}

Form.Input = function FormInput({ children, className, ...restProps }) {
  return (
    <Input className={twMerge('', className)} {...restProps}>
      {children}
    </Input>
  )
}

Form.FlexRow = function FormFlexRow({ children, className, ...restProps }) {
  return (
    <div className={twMerge('flex items-center', className)} {...restProps}>
      {children}
    </div>
  )
}

Form.Link = function FormLink({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge(
        'inline-block cursor-pointer text-sm underline',
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}

Form.Button = function FormButton({ children, className, ...restProps }) {
  return (
    <Button className={twMerge('w-full', className)} {...restProps}>
      {children}
    </Button>
  )
}

Form.Text = function FormText({ children, className, ...restProps }) {
  return (
    <div
      className={twMerge('mt-4 text-center text-sm', className)}
      {...restProps}
    >
      {children}
    </div>
  )
}

Form.TextArea = function FormTextArea({ className, ...restProps }) {
  return <Textarea className={twMerge('', className)} {...restProps} />
}

Form.Switch = function FormSwitch({ className, ...restProps }) {
  return (
    <Switch className={twMerge('cursor-pointer', className)} {...restProps} />
  )
}

export default Form
