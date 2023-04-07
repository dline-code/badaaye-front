import { Layout } from "src/components/layout"
import * as S from "./styles"
import Button from "../../components/button"
import { RiUser3Fill } from "react-icons/ri"
import { HiAcademicCap } from "react-icons/hi"
import { IoMdBusiness } from "react-icons/io"
import { FaBookOpen } from "react-icons/fa"
import React from "react"
import { PageProps } from "./types"
import { useRouter } from "next/router"
import { useFetch } from "src/hooks/useFetch"
import { getCookie } from "react-use-cookie"
import { usePartner } from "./hooks/usePartner"

const TelaPrincipalParceiroView:React.FC<PageProps> = (props) =>{

    const { options } = usePartner()

    const { data: Partner, isLoading } = useFetch("/parceiro/dados", options);

    console.log(Partner, "logadoo");

    if(isLoading) return <h2>Loading...</h2>
    
    
    return(
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Container>
                <S.Content>
                    <S.ContentLeft>
                        <S.Title>
                            Bem-vindo
                        </S.Title>
                        <S.Description>
                            Contribua para a garantia do sucesso
                            académico dos estudantes angolanos
                        </S.Description>
                        <S.CardContentLeft>
                            <h2>
                                Sobre mim
                            </h2>
                            <S.Separator/>
                            <S.InfoContainer>
                                <S.InfoSections>
                                    <RiUser3Fill/>
                                    <span>{}</span>
                                </S.InfoSections>
                                <S.InfoSections>
                                    <HiAcademicCap/>
                                    <span>{}</span>
                                </S.InfoSections><S.InfoSections>
                                    <IoMdBusiness/>
                                    <span>{}</span>
                                </S.InfoSections><S.InfoSections>
                                    <FaBookOpen/>
                                    <span>{}</span>
                                </S.InfoSections>
                            </S.InfoContainer>
                            <Button type="button">
                                Meus dados
                            </Button>
                        </S.CardContentLeft>
                    </S.ContentLeft>
                    <S.ContentRight>
                        <S.CardContentRight>
                            <h2>
                                Lista de estudantes
                            </h2>
                            <S.Separator/>
                            <p>
                                Com auxílio dos parceiros e apoiadores ajudamos
                                você a obter a bolsa de estudo que vai reduzir as suas despesas académicas.
                            </p>
                            <div>
                                <Button type="button">
                                    Saber mais
                                </Button>
                            </div>
                        </S.CardContentRight>
                        <S.CardContentRightMiddle>
                            <h2>
                                Lista de Solicitações
                            </h2>
                            <S.Separator/>
                            <p>
                                Com auxílio dos parceiros e apoiadores ajudamos
                                você a obter a bolsa de estudo que vai reduzir as suas despesas académicas.
                            </p>
                            <div>
                                <Button type="button">
                                    Saber mais
                                </Button>
                            </div>
                        </S.CardContentRightMiddle>
                        <S.CardContentRightBottom>
                            <h2>
                                Área de pagamento
                            </h2>
                            <S.Separator/>
                            <p>
                                Com auxílio dos parceiros e apoiadores ajudamos
                                você a obter a bolsa de estudo que vai reduzir as suas despesas académicas.
                            </p>
                            <div>
                                <Button type="button">
                                    Saber mais
                                </Button>
                            </div>
                        </S.CardContentRightBottom>
                    </S.ContentRight>
                </S.Content>
            </S.Container>
        </Layout>
    )
}

export { TelaPrincipalParceiroView }