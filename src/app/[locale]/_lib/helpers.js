import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function setActive(pathname, actualPath) {
  return pathname === actualPath ? 'font-bold' : ''
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}