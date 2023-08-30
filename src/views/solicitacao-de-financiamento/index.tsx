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

interface PageProps {
  hideFooter?: boolean
  isLogged?: boolean
}

const SolicitacaoDeFinanciamentoView: React.FC<PageProps> = props => {
  const { data: Student } = useFetch('/estudante/dados')
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
        <S.Content onSubmit={formik.handleSubmit} encType="multipart/form-data">
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

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Valor da propina (Kz)</S.Label>
                <Input
                  id="valorProprina"
                  name="valorProprina"
                  disabled={true}
                  value={'45.000'}
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
                  id="valorConfirmacao"
                  name="valorConfirmacao"
                  disabled={true}
                  value={'5.000'}
                  placeholder="Ex: 5.000"
                />
              </S.ContainerInput>
            </S.SectionInput>

            <h2>Documentos</h2>
            <S.Separator />
            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Vídeo motivacional (1min)</S.Label>
                <S.SectionVideo>
                  <Input
                    id="videoMotivacional"
                    name="videoMotivacional"
                    type="file"
                    label="procurar"
                    onChange={event => {
                      formik.setFieldValue(
                        'videoMotivacional',
                        event?.currentTarget?.files
                      )
                    }}
                  />
                  <div>
                    <VscCloudUpload className="icon" />
                    <span>Arraste e solte o vídeo aqui para carregar</span>
                    <label htmlFor="videoMotivacional">Procurar</label>
                  </div>
                </S.SectionVideo>
              </S.ContainerInput>
              {formik.touched.videoMotivacional &&
              formik.errors.videoMotivacional ? (
                <span className="text-danger">
                  {formik.errors.videoMotivacional}
                </span>
              ) : null}
            </S.SectionInput>
            <p>
              *Deve carregar um video motivacional de aproximadamente 1 minutos
            </p>
            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Bilhete de identidade</S.Label>
                <div>
                  <Input
                    id="bilhete"
                    name="bilhete"
                    onChange={event => {
                      formik.setFieldValue(
                        'bilhete',
                        event?.currentTarget?.files
                      )
                    }}
                    type="file"
                    label="Nenhum arquivo carregado"
                  />
                  <Button>
                    <label id="bilhete" htmlFor="bilhete">
                      Procurar
                    </label>
                  </Button>
                </div>
              </S.ContainerInput>
              {formik.touched.bilhete && formik.errors.bilhete ? (
                <span className="text-danger">{formik.errors.bilhete}</span>
              ) : null}
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Exatro bancário</S.Label>
                <div>
                  <Input
                    id="extratoBancario"
                    name="extratoBancario"
                    onChange={event => {
                      formik.setFieldValue(
                        'extratoBancario',
                        event?.currentTarget?.files
                      )
                    }}
                    type="file"
                    label="Nenhum arquivo carregado"
                  />
                  <Button>
                    <label id="extratoBancario" htmlFor="extratoBancario">
                      Procurar
                    </label>
                  </Button>
                </div>
              </S.ContainerInput>
              {formik.touched.extratoBancario &&
              formik.errors.extratoBancario ? (
                <span className="text-danger">
                  {formik.errors.extratoBancario}
                </span>
              ) : null}
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Certificado</S.Label>
                <div>
                  <Input
                    id="certificado"
                    name="certificado"
                    type="file"
                    label="Nenhum arquivo carregado"
                    onChange={event => {
                      formik.setFieldValue(
                        'certificado',
                        event?.currentTarget?.files
                      )
                    }}
                  />
                  <Button>
                    <label id="certificado" htmlFor="certificado">
                      Procurar
                    </label>
                  </Button>
                </div>
              </S.ContainerInput>
              {formik.touched.certificado && formik.errors.certificado ? (
                <span className="text-danger">{formik.errors.certificado}</span>
              ) : null}
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Declaração</S.Label>
                <div>
                  <Input
                    id="declaracaoNotas"
                    name="declaracaoNotas"
                    type="file"
                    label="Nenhum arquivo carregado"
                    onChange={event => {
                      formik.setFieldValue(
                        'declaracaoNotas',
                        event.currentTarget.files
                      )
                    }}
                  />
                  <Button>
                    <label id="declaracaoNotas" htmlFor="declaracaoNotas">
                      Procurar
                    </label>
                  </Button>
                </div>
              </S.ContainerInput>
              {formik.touched.declaracaoNotas &&
              formik.errors.declaracaoNotas ? (
                <span className="text-danger">
                  {formik.errors.declaracaoNotas}
                </span>
              ) : null}
            </S.SectionInput>

            <S.SectionInput>
              <S.ContainerInput>
                <S.Label>Declaração sem notas</S.Label>
                <div>
                  <Input
                    id=" declaracaoSemNotas"
                    name=" declaracaoSemNotas"
                    type="file"
                    label="Nenhum arquivo carregado"
                    onChange={event => {
                      formik.setFieldValue(
                        'declaracaoSemNotas',
                        event.currentTarget.files
                      )
                    }}
                  />
                  <Button>
                    <label
                      id=" declaracaoSemNotas"
                      htmlFor=" declaracaoSemNotas"
                    >
                      Procurar
                    </label>
                  </Button>
                </div>
              </S.ContainerInput>
              {formik.touched.declaracaoSemNotas &&
              formik.errors.declaracaoSemNotas ? (
                <span className="text-danger">
                  {formik.errors.declaracaoSemNotas}
                </span>
              ) : null}
            </S.SectionInput>
            <p>
              *Caso não frequente o primeiro ano da falcudade deve carregar uma
              declaração com notas
            </p>
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
