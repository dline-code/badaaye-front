import { Layout } from "src/components/layout"
import * as S from "./styles"
import Button from "../../components/button"

interface PageProps {
    hideFooter?: boolean;
}

const TelaPrincipalEstudanteView = (props: PageProps) =>{
    return(
        <Layout {...Object.assign({}, props, {hideFooter: true})}>
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
                                    <span>1</span>
                                    <span>Osvaldo Sousa</span>
                                </S.InfoSections>
                                <S.InfoSections>
                                    <span>1</span>
                                    <span>Osvaldo Sousa</span>
                                </S.InfoSections><S.InfoSections>
                                    <span>1</span>
                                    <span>Osvaldo Sousa</span>
                                </S.InfoSections><S.InfoSections>
                                    <span>1</span>
                                    <span>Osvaldo Sousa</span>
                                </S.InfoSections>
                            </S.InfoContainer>
                            <Button type="button">
                                ver dados completos
                            </Button>
                        </S.CardContentLeft>
                    </S.ContentLeft>
                    <S.ContentRight>
                        <S.Title>
                            Bolsas
                        </S.Title>
                        <S.Description>
                            Encontre o financiamento que precisa
                            para os seus estudos
                        </S.Description>

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