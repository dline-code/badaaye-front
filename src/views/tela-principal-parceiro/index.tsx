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

const TelaPrincipalParceiroView:React.FC<PageProps> = (props) =>{
    const router = useRouter()

    const { parceiroId } = router.query

    const { data:parceiro, isLoading, error } = useFetch(`/parceiro/${parceiroId}`)
    const { data:areaInteresse } = useFetch(`/areaInteresse/${parceiroId}`)
    const { data:contacto } = useFetch(`/contacto/${parceiroId}`)

    if(isLoading) return <h1 style={{
        textAlign: 'center',
        marginTop: "50vh"
    }}>Loading...</h1>
    if(error) return <h1>Error</h1>

    

    
    
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
                                    <span>{parceiro?.nome}</span>
                                </S.InfoSections>
                                <S.InfoSections>
                                    <HiAcademicCap/>
                                    <span>{parceiro?.tipoParceiro?.designacao}</span>
                                </S.InfoSections><S.InfoSections>
                                    <IoMdBusiness/>
                                    <span>{areaInteresse ? areaInteresse[0]?.area?.designacao : null}</span>
                                </S.InfoSections><S.InfoSections>
                                    <FaBookOpen/>
                                    <span>{contacto ? contacto[1]?.designacao : null}</span>
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