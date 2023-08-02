import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.linear.blue};
`

export const Content = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const ContentHeader = styled.div`
  padding-top: ${({ theme }) => theme.spacings.xmultipleeight};
  color: ${({ theme }) => theme.colors.tertiary.white};

  > p {
    margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
`

export const ContentBody = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  padding-top: 2.5rem;
  border-radius: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  background: ${({ theme }) => theme.colors.tertiary.xxwhite};

  > form {
    > div {
      padding: 0 2.5rem;

      &:last-child {
        padding-top: 2rem;
        padding-bottom: 2rem;
        background: ${({ theme }) => theme.colors.tertiary.xcinza};
      }
    }
  }
`
