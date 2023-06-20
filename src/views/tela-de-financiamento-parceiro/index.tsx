import React,{useState} from "react"
import * as S from "./styles"
import {Layout} from "src/components/layout"
import { PageProps } from "../tela-principal-estudante/types"

import DescriptionBanner from "src/components/description-banner"
import Input from "src/components/input"
import Button from "src/components/button"

import { BsCheck, BsX } from "react-icons/bs"

import {financies} from "./service"

const TelaDeFinanciamentoParceiroView: React.FC<PageProps> = (props) => {
    return (
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Wrapper>
                <DescriptionBanner />
                <S.Container>
                    <S.Content>
                        <S.Form>
                            <Input
                                type="text"
                                placeholder="Procurar por nome, curso, grau"
                            />
                            <Button>Procurar</Button>
                        </S.Form>
                        <S.FinancyTitles>
                                <div>Nome</div>
                                <div>Grau</div>
                                <div>Curso</div>
                                <div>Instituição</div>
                        </S.FinancyTitles>
                        <S.FinancyList>
                            {
                                financies.map(item => (
                                    <S.FinancyItem key={item.id}>
                                        <S.LeftSide>
                                            <div>{item.name}</div>
                                            <div>{item.grad}</div>
                                            <div>{item.course}</div>
                                            <div>{item.instituition}</div>
                                        </S.LeftSide>
                                        <S.RightSide>
                                            <Button><BsCheck /></Button>
                                            <Button><BsX /></Button>
                                        </S.RightSide>
                                    </S.FinancyItem>
                                ))
                            }
                        </S.FinancyList>
                    </S.Content>
                </S.Container>
            </S.Wrapper>
        </Layout>
    )
}

export default TelaDeFinanciamentoParceiroView;