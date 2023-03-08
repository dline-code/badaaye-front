import { FieldProps } from 'formik'
import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
  ReactNode,
  ComponentType
} from 'react'

type InputTypes = InputHTMLAttributes<HTMLInputElement>
type SelectTypes = SelectHTMLAttributes<HTMLSelectElement>
type TextAreaTypes = TextareaHTMLAttributes<HTMLTextAreaElement>

type Options = {
  desc: string
  value: string
  selected: boolean
}

export type FormControlProps = {
  labelName: string
  StarIcon?: ReactNode
  EndIcon?: ReactNode
  blocked?: boolean
  options?: Options[]
  as?: string | ComponentType<FieldProps['field']>
} & InputTypes &
  SelectTypes &
  TextAreaTypes
