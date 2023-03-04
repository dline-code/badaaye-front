import React from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import { Layout } from "src/components/layout"
import * as S from "./styles"
import { VscCloudUpload } from "react-icons/vsc"
import { IoMdArrowDropdown } from "react-icons/io"

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
                    <S.SecondSection>
                        <h2>Dados Pessoais</h2>
                        <S.Separator/>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Seu primeiro nome</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Nome"
                                />
                            </S.ContainerInput>
                            <S.ContainerInput>
                                <S.Label>Seu ultimo nome</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Sobrenome"
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Numero do Bilhete de identidade</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Ex: 00942324LA041"
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Data de nascimento</S.Label>
                                <Input  
                                    type="date"
                                    placeholder="Ex: DD/MM/AAAA"
                                    
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Sexo</S.Label>
                                <div>
                                <S.Select>
                                    <S.Option value={""}>Selecione o sexo</S.Option>
                                </S.Select>
                                    <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                            <S.ContainerInput>
                                <S.Label>Estado cívil</S.Label>
                                <div>
                                <S.Select>                                
                                    <S.Option value={""}>Ex: Solteiro</S.Option>
                                </S.Select>
                                <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <h2>Dados académicos</h2>
                        <S.Separator/>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Instituição de ensino</S.Label>
                                <div>
                                <S.Select>
                                    <S.Option value={""}>Selecione a instituição de ensino</S.Option>
                                </S.Select>
                                <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Grau de escolaridade (Classe)</S.Label>
                                <div>
                                <S.Select>
                                    <S.Option value={""}>Selecione o grau de escolaridade</S.Option>
                                </S.Select>
                                <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Valor da propina (Kz)</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Ex: 45.000"
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Valor da confirmação (Kz)</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Ex: 5.000"
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <h2>Documentos</h2>
                        <S.Separator/>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Vídeo motivacional (1min)</S.Label>
                                <S.SectionVideo>
                                    <Input 
                                        id="file"
                                        name="file"
                                        type="file"
                                        label="procurar"
                                    />
                                    <div>
                                        <VscCloudUpload className="icon"/>
                                        <span>Arraste e solte o vídeo aqui para carregar</span>
                                        <label htmlFor="file">Procurar</label>
                                    </div>
                                </S.SectionVideo>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <p>*Deve carregar um video motivacional de aproximadamente 1 minutos</p>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Bilhete de identidade</S.Label>
                                <div>
                                    <Input
                                        id="file"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                    />
                                    <Button>
                                        <label id="file" htmlFor="file">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Certificado</S.Label>
                                <div>
                                    <Input 
                                        id="file"
                                        name="file"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                    />
                                    <Button>
                                        <label id="file" htmlFor="file">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Declaração</S.Label>
                                <div>
                                    <Input 
                                        id="file"
                                        name="file"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                    />
                                    <Button>
                                        <label id="file" htmlFor="file">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <p>*Caso não frequente o primeiro ano da falcudade deve carregar uma declaração com notas</p>
                    </S.SecondSection>
                </S.Content>
                <S.LastSection>
                    <Button>Cadastrar</Button> 
                </S.LastSection>
            </S.Container>
        </Layout>
    )
}

export { SolicitacaoDeFinanciamentoView }