import React, { useState } from "react";
import Button from "src/components/button";
import Input from "src/components/input";
import { Layout } from "src/components/layout"
import * as S from "./styles"
import { VscCloudUpload } from "react-icons/vsc"
import { IoMdArrowDropdown } from "react-icons/io"
import { useFormik } from "formik";
import * as yup from "yup"
import { useFetch } from "src/hooks/useFetch";
import moment from 'moment';
import { api } from "src/services/api";


interface PageProps {
    hideFooter?: boolean;
    isLogged?: boolean;
}

const SolicitacaoDeFinanciamentoView:React.FC<PageProps> = (props) => {
    const {data: Student} = useFetch("/estudante/dados") 
    const [studentData, setStudentData] = useState(Student)   
    const {data: Grau} = useFetch("/grau")
    const {data: University} = useFetch("/universidade")
    
    const formik = useFormik({
        initialValues:{
            usuarioId: studentData?.estudante?.id,
            nome: "",
            dataNascimento: "",
            sobrenome: "",
            loginId: "",
            universidadeId: "",
            enderecoId: "",
            grauId: "",
            cursoId: "",
            bilheteId:  "",
            bi: "",
            anoAcademico: "",
            certificadoId: "",
            declaracaoNotasId: "",
            declaracaoSemNotasId: "",
            extratoBancarioId: "",
            valorConfirmacao: "",
            valorProprina: "",
            videoMotivacionalId: "", 
        },
        validationSchema: yup.object({
            bilheteId: yup.string().required("campo obrigatório"),
            bi: yup.string().required("campo obrigatório"),
            anoAcademico: yup.string().required("campo obrigatório"),
            certificadoId: yup.string().required("campo obrigatório"),
            declaracaoNotasId: yup.string().required("campo obrigatório"),
            declaracaoSemNotasId: yup.string().required("campo obrigatório"),
            extratoBancarioId: yup.string().required("campo obrigatório"),
            valorConfirmacao: yup.number().required("campo obrigatório"),
            valorProprina: yup.string().required("campo obrigatório"),
            videoMotivacionalId: yup.string().required("campo obrigatório")
        }),
        onSubmit: async (data) =>{
            // const student = {
            //     nome: studentData?.estudante?.nome,
            //     dataNascimento: studentData?.estudante?.dataNascimento,
            //     sobrenome: studentData?.estudante?.sobrenome,
            //     loginId: studentData?.estudante?.login?.id,
            //     universidadeId: data.universidadeId,
            //     enderecoId: studentData?.estudante?.endereco?.id,
            //     grauId: data.grauId,
            //     cursoId: studentData?.estudante?.curso?.id,
            // }
            // console.log(student, "estudante");

            try{
                const formData1 = new FormData();
                const formData2 = new FormData();
                const formData3 = new FormData();
                const formData4 = new FormData();
                const formData5 = new FormData();

                formData1.append('file', data.bilheteId[0])
                formData2.append('file', data.certificadoId[0])
                formData3.append('file', data.declaracaoNotasId[0])
                formData4.append('file', data.declaracaoSemNotasId[0])
                formData5.append('file', data.extratoBancarioId[0])
                
                const [bilheteId, certificadoId, declaracaoNotasId, declaracaoSemNotasId, extratoBancarioId]:any = await Promise.all([
                    getFile(formData1),
                    getFile(formData2),
                    getFile(formData3),
                    getFile(formData4),
                    getFile(formData5)
                ]).then((results) => {
                    return {
                    bilheteId: results[0],
                    certificadoId: results[1],
                    declaracaoNotasId: results[2],
                    declaracaoSemNotasId: results[3],
                    extratoBancarioId: results[4] 
                    };
                });

                data = {...data, bilheteId, certificadoId, declaracaoNotasId, declaracaoSemNotasId, extratoBancarioId }

                console.log(data);
                

            }catch(err){
                console.log(err?.response?.data?.message);
                
            }
        }
    })

    async function getFile (data) {
        const dataD = await api.post("/ficheiro", data)
        return dataD.data
    }
    

    function formateDate(data: string){
        const newDate = moment(data).format("YYYY-MM-DD");
        return newDate
    }
    
    // console.log(formik.errors);
    

    return(
        <Layout {...Object.assign({}, props, {hideFooter: true, isLogged: true})}>
            <S.Container>
                <S.Content onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
                                    id="nome"
                                    name="nome"
                                    onChange={formik.handleChange}
                                    disabled={Student?.estudante?.nome ? true : false}
                                    value={Student?.estudante?.nome}
                                />
                            </S.ContainerInput>
                            <S.ContainerInput>
                                <S.Label>Seu ultimo nome</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Sobrenome"
                                    id="sobrenome"
                                    name="sobrenome"
                                    onChange={formik.handleChange}
                                    disabled={Student?.estudante?.sobrenome ? true : false}
                                    value={Student?.estudante.sobrenome}
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Numero do Bilhete de identidade</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="Ex: 00942324LA041"
                                    id="bi"
                                    name="bi"
                                    onChange={formik.handleChange}
                                    value={formik.values.bi}
                                />
                            </S.ContainerInput>
                            {formik.touched.bi && formik.errors.bi ? (
                                <span className="text-danger">
                                    {formik.errors.bi}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Ano Académico</S.Label>
                                <Input 
                                    type="text"
                                    placeholder="digite o ano académico"
                                    id="anoAcademico"
                                    name="anoAcademico"
                                    onChange={formik.handleChange}
                                    value={formik.values.anoAcademico}
                                />
                            </S.ContainerInput>
                            {formik.touched.anoAcademico && formik.errors.anoAcademico ? (
                                <span className="text-danger">
                                    {formik.errors.anoAcademico}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Data de nascimento</S.Label>
                                <Input  
                                    type="date"
                                    placeholder="Ex: DD/MM/AAAA"
                                    id="dataNascimento"
                                    name="dataNascimento"
                                    onChange={formik.handleChange}
                                    disabled={Student?.estudante?.dataNascimento ? true : false}
                                    value={formateDate(Student?.estudante?.dataNascimento)}
                                />
                            </S.ContainerInput>
                        </S.SectionInput>
                        <h2>Dados académicos</h2>
                        <S.Separator/>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Instituição de ensino</S.Label>
                                <div>
                                <S.Select
                                    id="universidadeId"
                                    name="universidadeId"
                                    onChange={formik.handleChange}
                                    value={Student?.estudante?.universidade?.nome}
                                    disabled={Student?.estudante?.universidade?.nome ? true : false}
                                >
                                    {Student?.estudante?.universidade?.nome ?
                                        <S.Option value={Student?.estudante?.universidade?.nome}>{Student?.estudante?.universidade?.nome}</S.Option> 
                                    :
                                    (
                                        <>
                                        <S.Option value={""}>Selecione a instituição de ensino</S.Option> 
                                        {University?.map((item: {id: string, nome: string}) =>(
                                            <S.Option value={item.id}>{item.nome}</S.Option> 
                                        ))}
                                        </>
                                    )
                                    }
                                </S.Select>
                                <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Grau de escolaridade (Classe)</S.Label>
                                <div>
                                <S.Select
                                    id="grauId"
                                    name="grauId"
                                    onChange={formik.handleChange}
                                    value={Student?.estudante?.grau?.designacao}
                                    disabled={Student?.estudante?.grau?.designacao ? true : false}
                                >
                                    {Student?.estudante?.grau?.designacao ?
                                        <S.Option value={Student?.estudante?.grau?.designacao}>{Student?.estudante?.grau?.designacao}</S.Option> 
                                    :
                                    (
                                        <>
                                        <S.Option value={""} defaultChecked>Selecione o grau de escolaridade</S.Option>
                                        {Grau?.map((item: {id: string, designacao: string}) => (
                                            <S.Option key={item.id} value={item.id}>{item.designacao}</S.Option>
                                        ))}
                                        </>
                                    )}
                                </S.Select>
                                <IoMdArrowDropdown className="icon2"/>
                                </div>
                            </S.ContainerInput>
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Valor da propina (Kz)</S.Label>
                                <Input
                                    id="valorProprina"
                                    name="valorProprina"
                                    onChange={formik.handleChange}
                                    value={formik.values.valorProprina} 
                                    type="text"
                                    placeholder="Ex: 45.000"
                                />
                            </S.ContainerInput>
                            {formik.touched.valorProprina && formik.errors.valorProprina ? (
                                <span className="text-danger">
                                    {formik.errors.valorProprina}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Valor da confirmação (Kz)</S.Label>
                                <Input 
                                    type="text"
                                    id="valorConfirmacao"
                                    name="valorConfirmacao"
                                    onChange={formik.handleChange}
                                    value={formik.values.valorConfirmacao}
                                    placeholder="Ex: 5.000"
                                />
                            </S.ContainerInput>
                            {formik.touched.valorConfirmacao && formik.errors.valorConfirmacao ? (
                                <span className="text-danger">
                                    {formik.errors.valorConfirmacao}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <h2>Documentos</h2>
                        <S.Separator/>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Vídeo motivacional (1min)</S.Label>
                                <S.SectionVideo>
                                    <Input 
                                        id="videoMotivacionalId"
                                        name="videoMotivacionalId"
                                        type="file"
                                        label="procurar"
                                        onChange={(event) => {
                                            formik.setFieldValue('videoMotivacionalId', event?.currentTarget?.files)
                                        }}
                                    />
                                    <div>
                                        <VscCloudUpload className="icon"/>
                                        <span>Arraste e solte o vídeo aqui para carregar</span>
                                        <label htmlFor="videoMotivacionalId">Procurar</label>
                                    </div>
                                </S.SectionVideo>
                            </S.ContainerInput>
                            {formik.touched.videoMotivacionalId && formik.errors.videoMotivacionalId ? (
                                <span className="text-danger">
                                    {formik.errors.videoMotivacionalId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <p>*Deve carregar um video motivacional de aproximadamente 1 minutos</p>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Bilhete de identidade</S.Label>
                                <div>
                                    <Input
                                        id="bilheteId"
                                        name="bilheteId"
                                        onChange={(event) => {
                                            formik.setFieldValue("bilheteId",event?.currentTarget?.files)
                                        }}
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                    />
                                    <Button>
                                        <label id="bilheteId" htmlFor="bilheteId">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                            {formik.touched.bilheteId && formik.errors.bilheteId ? (
                                <span className="text-danger">
                                    {formik.errors.bilheteId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Exatro bancário</S.Label>
                                <div>
                                    <Input
                                        id="extratoBancarioId"
                                        name="extratoBancarioId"
                                        onChange={(event) => {
                                            formik.setFieldValue("extratoBancarioId",event?.currentTarget?.files)
                                        }}
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                    />
                                    <Button>
                                        <label id="extratoBancarioId" htmlFor="extratoBancarioId">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                            {formik.touched.extratoBancarioId && formik.errors.extratoBancarioId ? (
                                <span className="text-danger">
                                    {formik.errors.extratoBancarioId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Certificado</S.Label>
                                <div>
                                    <Input 
                                        id="certificadoId"
                                        name="certificadoId"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                        onChange={(event) => {
                                            formik.setFieldValue("certificadoId", event?.currentTarget?.files)
                                        }}
                                    />
                                    <Button>
                                        <label id="certificadoId" htmlFor="certificadoId">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                            {formik.touched.certificadoId && formik.errors.certificadoId ? (
                                <span className="text-danger">
                                    {formik.errors.certificadoId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Declaração</S.Label>
                                <div>
                                    <Input 
                                        id="declaracaoNotasId"
                                        name="declaracaoNotasId"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                        onChange={(event) => {
                                            formik.setFieldValue("declaracaoNotasId", event.currentTarget.files)
                                        }}
                                    />
                                    <Button>
                                        <label id="declaracaoNotasId" htmlFor="declaracaoNotasId">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                            {formik.touched.declaracaoNotasId && formik.errors.declaracaoNotasId ? (
                                <span className="text-danger">
                                    {formik.errors.declaracaoNotasId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <S.SectionInput>
                            <S.ContainerInput>
                                <S.Label>Declaração sem notas</S.Label>
                                <div>
                                    <Input 
                                        id=" declaracaoSemNotasId"
                                        name=" declaracaoSemNotasId"
                                        type="file"
                                        label="Nenhum arquivo carregado"
                                        onChange={(event) => {
                                            formik.setFieldValue("declaracaoSemNotasId", event.currentTarget.files)
                                        }}
                                    />
                                    <Button>
                                        <label id=" declaracaoSemNotasId" htmlFor=" declaracaoSemNotasId">Procurar</label>
                                    </Button>
                                </div>
                            </S.ContainerInput>
                            {formik.touched. declaracaoSemNotasId && formik.errors. declaracaoSemNotasId ? (
                                <span className="text-danger">
                                    {formik.errors. declaracaoSemNotasId}
                                </span>
                            ): null}
                        </S.SectionInput>
                        <p>*Caso não frequente o primeiro ano da falcudade deve carregar uma declaração com notas</p>
                        <S.LastSection>
                            <Button type="submit">Cadastrar</Button> 
                        </S.LastSection>
                    </S.SecondSection>
                </S.Content>
            </S.Container>
        </Layout>
    )
}

export { SolicitacaoDeFinanciamentoView }