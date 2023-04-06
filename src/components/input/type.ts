import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  icon?: React.ReactNode,
  type:string,
  open?: boolean
} & InputTypes
