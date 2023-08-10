import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  icon?: React.ReactNode,
  label?: string
  type:string,
  open?: boolean
} & InputTypes
