import Link from "next/link"
import React, { useState } from "react"
import * as S from "./styles"
import {Layout} from "src/components/layout"
import { PageProps } from "../tela-principal-estudante/types"

import DescriptionBanner from "src/components/description-banner"
import Input from "src/components/input"
import Button from "src/components/button"

import { BsCheck, BsX } from "react-icons/bs"

import {financies} from "./service"

const TelaDeFinanciamentoParceiroView: React.FC<PageProps> = (props) => {
    const [data, setData] = useState(financies)
    const [searchText, setSearchText] = useState("Osvaldo")

    const handleSearchFinancy = () => {
        const text = searchText.trim().toLowerCase();
        
        const newFinancies = financies.filter(
            ({name, grad, course, instituition }) => 
                name.toLowerCase().includes(text) || 
                grad.toLowerCase().includes(text) || 
                course.toLowerCase().includes(text) || 
                instituition.toLowerCase().includes(text) 
            )
        setData(newFinancies)
        console.log(newFinancies)
    }
    return (
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Wrapper>
                <DescriptionBanner
                    title="Solicitações de estudantes"
                    description="Pode visualizar, aprovar e rejeitar pedidos de solicitação de financiamento"
                />
                <S.Container>
                    <S.Content>
                        <S.Form>
                            <Input
                                type="text"
                                placeholder="Procurar por nome, curso, grau"
                                onChange={e => setSearchText(e.target.value)}
                            />
                            <Button onClick={()=>handleSearchFinancy()}>Procurar</Button>
                        </S.Form>
                        <div>
                            <S.FinancyTitles>
                                    <div>Nome</div>
                                    <div>Grau</div>
                                    <div>Curso</div>
                                    <div>Instituição</div>
                            </S.FinancyTitles>
                            <S.FinancyList>
                                {
                                    data.map(item => (
                                        <Link href="#">
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
                                        </Link>
                                    ))
                                }
                            </S.FinancyList>
                        </div>
                    </S.Content>
                </S.Container>
            </S.Wrapper>
        </Layout>
    )
}

export default TelaDeFinanciamentoParceiroView;