import { ReactNode } from 'react'

export type LayoutProps = {
  title: String
  description: String
  linkDescription: String
  link?: String
  children?: React.ReactNode
}
