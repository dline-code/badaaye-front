import { Layout } from "src/components/layout"
import * as S from "./styles"
import Button from "../../components/button"
import { RiUser3Fill } from "react-icons/ri"
import { HiAcademicCap } from "react-icons/hi"
import { IoMdBusiness } from "react-icons/io"
import { FaBookOpen } from "react-icons/fa"
import React from "react"
import { useRouter } from "next/router"
import { useFetchData } from "./hooks/useFetchData"
import { IStudent, PageProps } from "./types"

const TelaPrincipalEstudanteView:React.FC<PageProps> = (props) =>{
    const {student,isLoading}=useFetchData();

    const {
      query:{estudanteId}
    }=useRouter();

    
    if (isLoading) {
        return <>Loading...</>
    }
    console.log(student);
    return(
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Container>
                <S.Content>
                    <S.ContentLeft>
                        <S.Title>
                            Bem-vindo
                        </S.Title>
                        <S.Description>
                            Somos uma plataforma de bolsas
                            que conecta você com financiadores
                        </S.Description>
                        <S.CardContentLeft>
                            <h2>
                                Sobre mim
                            </h2>
                            <S.Separator/>
                            <S.InfoContainer>
                                <S.InfoSections>
                                    <RiUser3Fill/>
                                    <span>{student?.estudante?.nome+" "+student?.estudante?.sobrenome}</span>
                                </S.InfoSections>
                                <S.InfoSections>
                                    <HiAcademicCap/>
                                    <span>{student?.estudante?.grau?.designacao}</span>
                                </S.InfoSections><S.InfoSections>
                                    <IoMdBusiness/>
                                    <span>Univ. {student?.estudante?.universidade?.nome}</span>
                                </S.InfoSections><S.InfoSections>
                                    <FaBookOpen/>
                                    <span>{student?.estudante?.curso?.nome}</span>
                                </S.InfoSections>
                            </S.InfoContainer>
                            <Button type="button">
                                ver dados completos
                            </Button>
                        </S.CardContentLeft>
                    </S.ContentLeft>
                    <S.ContentRight>
                        <S.FirstSection>
                            <S.Title>
                                Bolsas
                            </S.Title>
                            <S.Description>
                                Encontre o financiamento que precisa
                                para os seus estudos
                            </S.Description>
                        </S.FirstSection>
                        <S.CardContentRight>
                            <h2>
                                Financiamento
                            </h2>
                            <S.Separator/>
                            <p>
                                Com auxilo dos parceiros e apoiadores ajudamos você
                                a obter a bolsa de estudo que vai reduzir as despesas académicas.
                            </p>
                            <div>
                                <Button type="button">
                                    ver dados completos
                                </Button>
                            </div>
                            </S.CardContentRight>
                        <S.CardContentRightBottom>
                            <h2>
                                Auxilio académico
                            </h2>
                            <S.Separator/>
                            <p>
                                Com auxilo dos parceiros e apoiadores ajudamos você
                                a obter a bolsa de estudo que vai reduzir as despesas académicas.
                            </p>
                            <div>
                                <Button type="button">
                                    ver dados completos
                                </Button>
                            </div>
                        </S.CardContentRightBottom>
                    </S.ContentRight>
                </S.Content>
            </S.Container>
        </Layout>
    )
}

export { TelaPrincipalEstudanteView }