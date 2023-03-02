import { FormControlProps } from './type'
import * as S from './styles'
import { useState } from 'react'

export function FormControl({
  id,
  type,
  inputTitle,
  StarIcon,
  EndIcon,
  ...rest
}: FormControlProps) {
  const [disabled, setDisabled] = useState(true)

  const handleToggleDisabled = () => {
    setDisabled(!disabled)
  }

  return (
    <S.ControlContent>
      <label htmlFor={id}>{inputTitle}</label>
      <S.ControlInput>
        <span>{StarIcon}</span>
        <input type={type} disabled={disabled} id={id} {...rest} />
        <span onClick={handleToggleDisabled}>{EndIcon}</span>
      </S.ControlInput>
    </S.ControlContent>
  )
}
