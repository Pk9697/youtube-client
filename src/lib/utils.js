import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// cn-> class name utility fxn

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
