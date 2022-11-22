import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";

type ButtonTypes=ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps={
  children: React.ReactNode,
  Icon:IconType
} & ButtonTypes;
