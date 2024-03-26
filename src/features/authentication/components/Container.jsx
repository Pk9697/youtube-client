import React from 'react'
import { twMerge } from 'tailwind-merge'

function Container({ children, className, ...restProps }) {
  return (
    <div
      {...restProps}
      className={twMerge(
        'flex min-h-screen flex-row items-center justify-center p-2',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
