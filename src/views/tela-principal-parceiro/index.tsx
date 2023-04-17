import { Layout } from "src/components/layout"
import * as S from "./styles"
import Button from "../../components/button"
import { BsFillTelephoneFill } from "react-icons/bs"
import { HiUsers } from "react-icons/hi"
import { FaBookOpen } from "react-icons/fa"
import { IoMdSchool } from "react-icons/io"
import { BsBagDashFill } from "react-icons/bs"
import React from "react"
import { PageProps } from "./types"
import { useFetch } from "src/hooks/useFetch"
import { usePartner } from "./hooks/usePartner"

const TelaPrincipalParceiroView:React.FC<PageProps> = (props) =>{
    const { options } = usePartner()
    const { data: Partner, isLoading } = useFetch("/parceiro/dados", options);
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
                                    <HiUsers/>
                                    <span>{Partner?.parceiro?.nome}</span>
                                </S.InfoSections>
                                <S.InfoSections>
                                    <BsBagDashFill/>
                                    <span>{Partner?.parceiro?.tipoParceiro?.designacao}</span>
                                </S.InfoSections><S.InfoSections>
                                    <IoMdSchool/>
                                    <span>{Partner?.email?.designacao}</span>
                                </S.InfoSections><S.InfoSections>
                                    <BsFillTelephoneFill/>
                                    <span>{Partner?.telefone?.designacao}</span>
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