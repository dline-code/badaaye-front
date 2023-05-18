import { FormControlProps } from './type'
import * as S from './styles'
import { useState } from 'react'
import { ErrorMessage, Field } from 'formik'

export function FormControl({
  name = '',
  type,
  id,
  labelName,
  as,
  blocked,
  StarIcon,
  EndIcon,
  options,
  value,
  handleOptions,
  LastIcon,
  ...rest
}: FormControlProps) {
  const [disabled, setDisabled] = useState(blocked)

  return (
    <S.ControlContent>
      <label htmlFor={id}>{labelName}</label>
      <S.ControlInput>
        <span>{StarIcon}</span>
        {as === 'select' ? (
          <Field name={name} as={as} disabled={disabled} id={id} {...rest}>
            <option value="">Selecione uma opção</option>
            {options &&
              options.map(({ designacao, id, selected }) => (
                <option value={id} selected={selected} key={id}>
                  {designacao}
                </option>
              ))}
          </Field>
        ) : (
          <Field
            type={type}
            name={name}
            as={as}
            disabled={disabled}
            id={id}
            {...rest}
          />
        )}
        <span onClick={() => setDisabled(!disabled)}>{EndIcon}</span>
        <span onClick={() => handleOptions()}>{LastIcon}</span>
      </S.ControlInput>
      <ErrorMessage name={name} component={S.ErrorMessage} />
    </S.ControlContent>
  )
}
