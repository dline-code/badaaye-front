import { FormControlProps } from './type'
import * as S from './styles'
import { useState } from 'react'
import { ErrorMessage, Field } from 'formik'

export function FormControl({
  name = '',
  type,
  id,
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
        <Field type={type} name={name} disabled={disabled} id={id} {...rest} />
        <span onClick={handleToggleDisabled}>{EndIcon}</span>
      </S.ControlInput>
      <ErrorMessage name={name} component={S.ErrorMessage} />
    </S.ControlContent>
  )
}
