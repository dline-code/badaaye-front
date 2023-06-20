import * as S from "./styles"
import {AiOutlineArrowLeft} from "react-icons/ai"

function DescriptionBanner() {
    return (
        <S.Container>
            {false && <AiOutlineArrowLeft />}
            <S.Title>Solicitações de estudantes</S.Title>
            <S.Description>Pode visualizar, aprovar e rejeitar pedidos de solicitação de financiamento</S.Description>
        </S.Container>
    )
}

export default DescriptionBanner;