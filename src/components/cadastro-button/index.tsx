import { ButtonProps } from "./type"
import * as S from './styles';

const CadastroButton:React.FC<ButtonProps>=({
  children,
  type,
  Icon,
})=>{
  return(
    <S.Container>
      {children}
      <Icon/>
    </S.Container>
  )
}
export default CadastroButton;
