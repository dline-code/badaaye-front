import * as S from "./styles"
import {errorProp} from "./type"

const ErrorMassage: React.FC<errorProp>= ({errorMessage}) => {
    return <S.Container>{errorMessage}</S.Container>
}

export default ErrorMassage;