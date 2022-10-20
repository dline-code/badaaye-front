export type RadioboxProps = {
  title: String
  description: String
  src: any
  isActive: boolean
  activeColor: 'gray' | 'blue'
  onClick?: React.MouseEventHandler<HTMLLabelElement>
}
