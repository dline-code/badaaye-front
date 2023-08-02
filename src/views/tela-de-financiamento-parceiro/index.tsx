import Link from "next/link"
import React, { useState, useEffect } from "react"
import * as S from "./styles"
import {Layout} from "src/components/layout"
import { PageProps } from "./types"

import DescriptionBanner from "src/components/description-banner"
import Input from "src/components/input"
import Button from "src/components/button"

import {useFetchData} from "./hooks"

const TelaDeFinanciamentoParceiroView: React.FC<PageProps> = (props) => {
    const { data: financies, isFetching, isLoading } = useFetchData()
    
    const [data, setData] = useState(financies)
    const [searchText, setSearchText] = useState("")

    useEffect(() => {
        setData(financies)
    }, [isLoading, isFetching])

    const handleSearchFinancy = () => {
        const text = searchText.trim().toLowerCase();
        
        const newFinancies = financies?.filter(
            ({estudante}) => 
                estudante.nome.toLowerCase().includes(text) || 
                estudante.grau.designacao.toLowerCase().includes(text) || 
                estudante.curso.nome.toLowerCase().includes(text) || 
                estudante.universidade.nome.toLowerCase().includes(text) 
            )
        setData(newFinancies)
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
                                    data?.map( ({id, estudante})=> (
                                        <Link href="#">
                                            <S.FinancyItem key={id}>
                                                <S.LeftSide>
                                                    <div>{estudante.nome}</div>
                                                    <div>{estudante.grau.designacao}</div>
                                                    <div>{estudante.curso.nome}</div>
                                                    <div>{estudante.universidade.nome}</div>
                                                </S.LeftSide>
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