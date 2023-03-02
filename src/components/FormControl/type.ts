import { InputHTMLAttributes, ReactNode } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type FormControlProps = {
  inputTitle: string
  StarIcon?: ReactNode
  EndIcon?: ReactNode
} & InputTypes
