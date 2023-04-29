import { Layout } from 'src/components/layout'
import * as S from './styles'
import { PageProps } from './types'

export default function TelaEstudantesFinaciadosView(props: PageProps) {
  return (
    <Layout {...Object.assign({}, props, { hideFooter: true, isLogged: true })}>
      dhjk
    </Layout>
  )
}
