import React from "react"
import * as S from "./styles"
import {Layout} from "src/components/layout"
import { PageProps } from "../tela-principal-estudante/types"

const  TelaDeFinanciamentoParceiroView: React.FC<PageProps> = (props)=>{
    return (
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Container>
                <div>Tela de financiamento</div>
            </S.Container>
        </Layout>
    )
}

export default TelaDeFinanciamentoParceiroView;