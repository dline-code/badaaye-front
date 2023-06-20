import * as S from "./styles"
import { AiOutlineArrowLeft } from "react-icons/ai"

export type descriptionBannerProps = {
    title: string,
    description: string,
}

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