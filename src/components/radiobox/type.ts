import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type RadioboxProps = {
  title: String
  description: String
  src: any
  onClick?: React.MouseEventHandler<HTMLLabelElement>
} & InputTypes
