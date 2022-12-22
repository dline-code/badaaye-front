import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaBookOpen, FaBuilding, FaGraduationCap} from 'react-icons/fa'
import { HiArrowNarrowRight, HiLocationMarker } from 'react-icons/hi'
import Input from 'src/components/input';
import Select from 'src/components/select'

const StudantResistrationPart2: NextPage = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Form>
          <S.Title>Informações Academicas</S.Title>

          <S.SelectContainer>
            <Select
              options={["Grau academico", "1º ano", "3º ano"]}
              icon={<FaGraduationCap />}
            />
          </S.SelectContainer>

          <Input
            icon={<FaBookOpen/>}
            type='text'
            placeholder='Seu curso'
          />

          <S.SelectContainer>
            <Select
              options={['Instituição de ensino','UNIA','UMA','UAN']}
              icon={<FaBuilding />}
            />
          </S.SelectContainer>

          <S.SelectContainer>
            <Select
              options={['Provincia','Bengo','Benguela','Huila','Zaire']}
              icon={<HiLocationMarker />}
            />
          </S.SelectContainer>

          <Input
            icon={<HiLocationMarker/>}
            type='text'
            placeholder='Municipio'
          />

          <Input
            icon={<HiLocationMarker/>}
            type='text'
            placeholder='Bairro'
          />

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
export default StudantResistrationPart2;
