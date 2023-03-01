import React from "react";
import { Layout } from "src/components/layout"
import * as S from "./styles"

interface PageProps {
    hideFooter?: boolean;
    isLogged?: boolean;
}

const SolicitacaoDeFinanciamentoView:React.FC<PageProps> = (props) => {

    return(
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Container>
                <S.Content>
                    <S.FirstSection>
                        <S.Title>Solicitar Financiamento</S.Title>
                        <S.Description>
                            Deve preencher o formulário abaixo para a solicitacão de um financiamento 
                        </S.Description>
                    </S.FirstSection>
                </S.Content>
            </S.Container>
        </Layout>
    )
}

export { SolicitacaoDeFinanciamentoView }