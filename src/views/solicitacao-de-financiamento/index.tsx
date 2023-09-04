import React, { useState } from 'react'
import Button from 'src/components/button'
import Input from 'src/components/input'
import { Layout } from 'src/components/layout'
import * as S from './styles'
import { VscCloudUpload } from 'react-icons/vsc'
import { IoMdArrowDropdown } from 'react-icons/io'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useFetch } from 'src/hooks/useFetch'
import moment from 'moment'
import { api } from 'src/services/api'
import { SolicitacaoFormSchema } from './validation'
import { useSolicitacao } from './hooks/useSolicitacao'
import { FileUpload, FileUploadWithPreview } from 'src/components/FileUpload'

interface PageProps {
  hideFooter?: boolean
  isLogged?: boolean
}

const SolicitacaoDeFinanciamentoView: React.FC<PageProps> = props => {
  const { studentData, formik } = useSolicitacao()

  // async function getFile(data) {
  //   const dataD = await api.post('/ficheiro', data)
  //   return dataD.data
  // }

  // function formateDate(data: string) {
  //   const newDate = moment(data).format('YYYY-MM-DD')
  //   return newDate
  // }

  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      <S.Container>
        <S.Content>
          <S.FirstSection>
            <S.Title>Solicitar Financiamento</S.Title>
            <S.Description>
              Dados de solicitacão de um financiamento
            </S.Description>
          </S.FirstSection>
          <S.SecondSection>
            <h2>Dados Pessoais</h2>
            <S.Separator />
            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Seu primeiro nome</S.Label>
                <Input type="text" id="nome" disabled={true} value={'Nome'} />
              </S.ContainerInput>
              <S.ContainerInput>
                <S.Label>Seu ultimo nome</S.Label>
                <Input
                  type="text"
                  placeholder="Sobrenome"
                  id="sobrenome"
                  name="sobrenome"
                  disabled={true}
                  value={'Sobre Nome'}
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
                  disabled={true}
                  onChange={formik.handleChange}
                  value={'00942324LA041'}
                />
              </S.ContainerInput>
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Ano Académico</S.Label>
                <Input
                  type="text"
                  placeholder="digite o ano académico"
                  id="anoAcademico"
                  name="anoAcademico"
                  disabled={true}
                  value={'2023/2024'}
                />
              </S.ContainerInput>
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Data de nascimento</S.Label>
                <Input
                  type="date"
                  placeholder="Ex: DD/MM/AAAA"
                  id="dataNascimento"
                  name="dataNascimento"
                  disabled={true}
                  value={'20/05/2023'}
                />
              </S.ContainerInput>
            </S.SectionInput>

            <h2>Dados académicos</h2>
            <S.Separator />
            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Instituição de ensino</S.Label>
                <div>
                  <S.Select
                    id="universidadeId"
                    name="universidadeId"
                    disabled={true}
                    value={'universidadeNome'}
                  >
                    <S.Option>universidadeNome</S.Option>
                  </S.Select>
                  <IoMdArrowDropdown className="icon2" />
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
                    value={'grau'}
                    disabled={true}
                  >
                    <S.Option>GrauName</S.Option>
                  </S.Select>
                  <IoMdArrowDropdown className="icon2" />
                </div>
              </S.ContainerInput>
            </S.SectionInput>

            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
              <S.SectionInput>
                <S.ContainerInput>
                  <S.Label>Valor da propina (Kz)</S.Label>
                  <Input
                    id="valorProprina"
                    name="valorProprina"
                    onChange={event => {
                      formik.setFieldValue(
                        'valorProprina',
                        event?.currentTarget.value
                      )
                    }}
                    type="number"
                    placeholder="Ex: 45.000"
                  />
                  <span>
                    {formik.touched.valorProprina && formik.errors.valorProprina
                      ? formik.errors.valorProprina
                      : null}
                  </span>
                </S.ContainerInput>
              </S.SectionInput>

              <S.SectionInput>
                <S.ContainerInput>
                  <S.Label>Valor da confirmação (Kz)</S.Label>
                  <Input
                    type="number"
                    id="valorConfirmacao"
                    name="valorConfirmacao"
                    onChange={event => {
                      formik.setFieldValue(
                        'valorConfirmacao',
                        event?.currentTarget?.value
                      )
                    }}
                    placeholder="Ex: 5.000"
                  />
                  <span>
                    {formik.touched.valorConfirmacao &&
                    formik.errors.valorConfirmacao
                      ? formik.errors.valorConfirmacao
                      : null}
                  </span>
                </S.ContainerInput>
              </S.SectionInput>

              <h2>Documentos</h2>
              <S.Separator />

              <FileUploadWithPreview
                label="Vídeo motivacional (1min)"
                name="videoMotivacional"
                midiaType="video"
                onChange={event => {
                  formik.setFieldValue(
                    'videoMotivacional',
                    event?.currentTarget?.files?.[0]
                  )
                }}
              >
                {formik.touched.videoMotivacional &&
                formik.errors.videoMotivacional ? (
                  <span className="text-danger">
                    {formik.errors.videoMotivacional}
                  </span>
                ) : null}
              </FileUploadWithPreview>
              <p>
                *Deve carregar um video motivacional de aproximadamente 1
                minutos
              </p>
              <FileUpload
                label="Bilhete de identidade"
                name="bilhete"
                onChange={event => {
                  formik.setFieldValue(
                    'bilhete',
                    event?.currentTarget?.files?.[0]
                  )
                }}
                midiaType="pdf"
              >
                {formik.touched.bilhete && formik.errors.bilhete
                  ? formik.errors.bilhete
                  : null}
              </FileUpload>

              <FileUpload
                label="Exatro bancário"
                name="extratoBancario"
                onChange={event => {
                  formik.setFieldValue(
                    'extratoBancario',
                    event?.currentTarget?.files?.[0]
                  )
                }}
                midiaType="pdf"
              >
                {formik.touched.extratoBancario && formik.errors.extratoBancario
                  ? formik.errors.extratoBancario
                  : null}
              </FileUpload>

              <FileUpload
                label="Certificado"
                name="certificado"
                onChange={event => {
                  formik.setFieldValue(
                    'certificado',
                    event?.currentTarget?.files?.[0]
                  )
                }}
                midiaType="pdf"
              >
                {formik.touched.certificado && formik.errors.certificado
                  ? formik.errors.certificado
                  : null}
              </FileUpload>

              <FileUpload
                label="Declaração"
                name="declaracaoNotas"
                onChange={event => {
                  formik.setFieldValue(
                    'declaracaoNotas',
                    event?.currentTarget?.files?.[0]
                  )
                }}
                midiaType="pdf"
              >
                {formik.touched.declaracaoNotas && formik.errors.declaracaoNotas
                  ? formik.errors.declaracaoNotas
                  : null}
              </FileUpload>

              <FileUpload
                label="Declaração Sem Nota"
                name="declaracaoSemNotas"
                onChange={event => {
                  formik.setFieldValue(
                    'declaracaoSemNotas',
                    event?.currentTarget?.files?.[0]
                  )
                }}
                midiaType="pdf"
              >
                {formik.touched.declaracaoSemNotas &&
                formik.errors.declaracaoSemNotas
                  ? formik.errors.declaracaoSemNotas
                  : null}
              </FileUpload>
              <p>
                *Caso não frequente o primeiro ano da falcudade deve carregar
                uma declaração com notas
              </p>
              <S.LastSection>
                <Button type="submit">Cadastrar</Button>
              </S.LastSection>
            </form>
          </S.SecondSection>
        </S.Content>
      </S.Container>
    </Layout>
  )
}

export { SolicitacaoDeFinanciamentoView }
