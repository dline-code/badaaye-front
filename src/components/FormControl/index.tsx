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
              options.map(item => (
                <option
                  key={item.value}
                  value={item.value}
                  selected={value === item.value}
                >
                  {item.desc}
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
        <span className="edit" onClick={() => setDisabled(!disabled)}>
          {EndIcon}
        </span>
        <span onClick={handleOptions}>{LastIcon}</span>
      </S.ControlInput>
      <ErrorMessage name={name} component={S.ErrorMessage} />
    </S.ControlContent>
  )
}
