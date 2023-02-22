import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import RadioBox from 'src/components/radiobox'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { MdEmail } from 'react-icons/md'
import { HiUser } from 'react-icons/hi'
import { MdDateRange } from "react-icons/md"
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsFillTelephoneFill } from 'react-icons/bs'
import Link from 'next/link'
import Input from 'src/components/input'
import Button from 'src/components/button'
import * as yup from "yup";
import { useFormik } from 'formik'
import { IErrorInterface, IStudent } from './type'
import { postFecthStudent1 } from './services'
import { toast } from "react-toastify"

const cadastroEstudante: NextPage = () => {

  async function Validation(data: IStudent){
    try{
      const student = await postFecthStudent1(data)
      if(student) toast("Cadastro feito com sucesso", {autoClose: 2000, type: "success"})

    } catch(err){
      const error = err as IErrorInterface
      toast(error.response?.data?.error, {autoClose: 2000, type: "error"})
    }   
  }
  
  const formik = useFormik({
    initialValues:{
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      email: "",
      telefone: "",
      senha: "",
      confirmarSenha: ""
    },
    validationSchema: yup.object({
      nome: yup.string().required("O nome é obrigatorio"),
      sobrenome: yup.string().required("O Sobrenome é obrigatorio"),
      telefone: yup.string().required("O número de telefone é obrigatorio"),
      dataNascimento: yup.string().required("A data de Nascimento é obrigatoria"),
      email: yup.string().email("digite um email valido").required("O email é obrigatorio"),
      senha: yup.string().min(8, "a senha deve ter pelo menos 8 digitos").required("a senha é obrigatoria"),
      confirmarSenha: yup.string().required("A confirmação de senha é obrigatoria").oneOf([yup.ref("senha")], "As senhas não correspondem"),
    }),
    onSubmit: (data) => Validation(data)
  })
  
    

  return (
    <S.Wrapper>
      <S.Form onSubmit={formik.handleSubmit}>
        <S.Title>Crie sua conta</S.Title>
        <Input 
          id="email"
          name="email"
          type="email"
          placeholder="Seu e-mail"
          icon={<MdEmail />}
          onChange={formik.handleChange}
          value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
              <S.ErrorMessage>
                {formik.errors.email}
              </S.ErrorMessage>
          ): null}
        <Input 
          id="nome"
          name="nome"
          type="text"
          placeholder="Nome"
          icon={<HiUser />}
          onChange={formik.handleChange}
          value={formik.values.nome}
          />
          {formik.touched.nome && formik.errors.nome ? (
              <S.ErrorMessage>
                {formik.errors.nome}
              </S.ErrorMessage>
          ): null}
        <Input 
          id="sobrenome"
          name="sobrenome"
          type="text"
          placeholder="Sobrenome"
          icon={<HiUser />} 
          onChange={formik.handleChange}
          value={formik.values.sobrenome}
          />
          {formik.touched.sobrenome && formik.errors.sobrenome ? (
              <S.ErrorMessage>
                {formik.errors.sobrenome}
              </S.ErrorMessage>
          ): null}
        <Input 
          id="dataNascimento"
          name="dataNascimento"
          type="date"
          icon={<MdDateRange />}
          onChange={formik.handleChange}
          value={formik.values.dataNascimento}
          />
          {formik.touched.dataNascimento && formik.errors.dataNascimento ? (
            <S.ErrorMessage>
              {formik.errors.dataNascimento}
            </S.ErrorMessage>
          ): null}
        <Input
          id="telefone"
          name="telefone"
          type="text"
          placeholder="Número de telefone"
          icon={<BsFillTelephoneFill />}
          onChange={formik.handleChange}
          value={formik.values.telefone}
        />
        {formik.touched.telefone && formik.errors.telefone ? (
            <S.ErrorMessage>
              {formik.errors.telefone}
            </S.ErrorMessage>
          ): null}
        <Input
          id="senha"
          name="senha"
          type="password"
          placeholder="Sua senha"
          icon={<RiLockPasswordFill />}
          onChange={formik.handleChange}
          value={formik.values.senha}
        />
        {formik.touched.senha && formik.errors.senha ? (
            <S.ErrorMessage>
              {formik.errors.senha}
            </S.ErrorMessage>
          ): null}
        <Input
          id="confirmarSenha"
          name="confirmarSenha"
          type="password"
          placeholder="Confirme senha"
          icon={<RiLockPasswordFill />}
          onChange={formik.handleChange}
          value={formik.values.confirmarSenha}
        />
        {formik.touched.confirmarSenha && formik.errors.confirmarSenha ? (
            <S.ErrorMessage>
              {formik.errors.confirmarSenha}
            </S.ErrorMessage>
          ): null}

        <Button>Cadastrar</Button>

        <S.Description>
          Ao se cadastrar, você aceita nossos
          <Link href="/">
            <S.Ancora> termos de uso </S.Ancora>
          </Link>
          e a nossa{' '}
          <Link href="/">
            <S.Ancora>politica de privacidade</S.Ancora>
          </Link>
        </S.Description>
      </S.Form>
      <S.Container>
        <LayoutAuthentication
          title="Encontre o financiamento para os seus estudos"
          description="Conectamos você com os nossos parceiros
    que estão dispostos a financiar os seus estudos."
        />
        <S.ContainerRadios>
          <Link href="#">
            <RadioBox
              title="Estudante"
              description="Aluno com o ensino médio concluído frequentando ou não o ensino superior."
              src="/assets/library-bolsas.svg"
              isActive={true}
            />
          </Link>
          <Link href="/parceiro">
            <RadioBox
              title="Parceiro"
              description="Entidades dispostas a contribuir para
              sucesso acádemico dos estudantes."
              src="/assets/parceiro.svg"
              isActive={false}
            />
          </Link>
        </S.ContainerRadios>

        <Link href="/login">
          <S.Text>
            <HiArrowNarrowLeft />
            <S.LinkDescription>Voltar para login</S.LinkDescription>
          </S.Text>
        </Link>
      </S.Container>
    </S.Wrapper>
  )
}

export default cadastroEstudante
