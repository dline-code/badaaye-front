import { InputHTMLAttributes } from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  child: React.ReactNode,
  list: string[],
} & InputTypes
