import { ButtonHTMLAttributes } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: React.ReactNode
  isDisabled?: boolean
} & ButtonTypes

export type LinkBtnProps = {
  href: string
  value: string
}
