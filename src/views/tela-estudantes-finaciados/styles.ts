import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.linear.blue};
`

export const Content = styled.div`
  max-width: 58rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const ContentHeader = styled.div`
  max-width: 30rem;
  height: 19.46rem;
  padding-top: ${({ theme }) => theme.spacings.xmultipleeight};
  padding-bottom: ${({ theme }) => theme.spacings.xxmultipleeight};
  color: ${({ theme }) => theme.colors.tertiary.white};

  a {
    display: block;
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    margin-bottom: ${({ theme }) => theme.spacings.xxxmultipleeight};
  }

  h2 {
    margin-bottom: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  p {
    line-height: 1.5;
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`

export const ContentBody = styled.div`
  padding: 35px 96px;
  border-radius: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  background: ${({ theme }) => theme.colors.tertiary.xxwhite};

  > table {
  }
`
