import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaBookOpen, FaBuilding, FaClosedCaptioning, FaGraduationCap} from 'react-icons/fa'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi'
import Input from 'src/components/input';
import Select from 'src/components/select'

const CadastroEstudantePart2: NextPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <S.Title>Informações Academicas</S.Title>

          <div id='select'>
            <Select
              options={["Grau academico", "1º ano", "3º ano"]}
              icon={<FaGraduationCap />}
            />
          </div>

          <div id='input'>
            <Input
              icon={<FaBookOpen/>}
              type='text'
              placeholder='Seu curso'
            />
          </div>

          <div id='select'>
            <Select
              options={['Instituição de ensino','UNIA','UMA','UAN']}
              icon={<FaBuilding />}
            />
          </div>

          <div id='select'>
            <Select
              options={['Provincia','Bengo','Benguela','Huila','Zaire']}
              icon={<HiLocationMarker />}
            />
          </div>

          <div id='input'>
            <Input
              icon={<HiLocationMarker/>}
              type='text'
              placeholder='Municipio'
            />
          </div>


          <div id='input'>
            <Input
              icon={<HiLocationMarker/>}
              type='text'
              placeholder='Bairro'
            />
          </div>

          <S.Button>Continuar <HiArrowNarrowRight/></S.Button>
        </S.Form>
        <S.BadayeInfo>
          <LayoutAuthentication
            title="Encontre o financiamento para os seus estudos"
            description="Conectamos você com os nossos parceiros
            que estão dispostos a financiar os seus estudos."
            link="#"
          />
        </S.BadayeInfo>
      </S.Wrapper>
    </S.Container>
  )
}
export default CadastroEstudantePart2;
