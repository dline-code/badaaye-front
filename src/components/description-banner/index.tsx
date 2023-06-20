import * as S from "./styles"
import { AiOutlineArrowLeft } from "react-icons/ai"
import {descriptionBannerProps} from "./type"

const DescriptionBanner: React.FC<descriptionBannerProps> = ({title, description})=>{
    return (
        <S.Container>
            {false && <AiOutlineArrowLeft />}
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
        </S.Container>
    )
}

export default DescriptionBanner;