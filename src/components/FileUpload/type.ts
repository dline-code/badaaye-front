import { InputHTMLAttributes, ReactNode } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  midiaType: 'video' | 'image' | 'pdf'
  label?: string
  errorValue?: ReactNode
} & InputTypes
