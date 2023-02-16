import * as S from "./styles"

type errorProp = {
  error: string,  
} 

const ErrorMassage: React.FC<errorProp>= ({error}) => {
    return <S.Container>{error}</S.Container>
}

export default ErrorMassage;