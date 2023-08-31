import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  midiaType: 'video' | 'image' | 'pdf'
  label?: string
} & InputTypes
