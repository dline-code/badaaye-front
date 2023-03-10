import { SelectHTMLAttributes } from 'react'

type SelectTypes = SelectHTMLAttributes<HTMLSelectElement>

export type SelectContainerProps = {
  icon: React.ReactNode,
  title :string,
  options: IOption[],
}& SelectTypes;

export type IOption={
  id:string,
  nome?:string,
  designacao?:string
}