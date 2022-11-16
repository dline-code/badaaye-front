import { InputHTMLAttributes } from 'react'
import { IconType } from 'react-icons'

type InputTypes = InputHTMLAttributes<HTMLInputElement>

export type InputContainerProps = {
  placeholder:React.ReactNode
  Icon:  IconType
  type:string,
  open?: boolean
} & InputTypes
