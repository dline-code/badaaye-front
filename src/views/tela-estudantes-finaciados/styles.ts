import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.linear.blue};
`

export const Content = styled.div`
  width: 928px;
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
  padding: 2.25rem 5.5rem;
  border-radius: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  background: ${({ theme }) => theme.colors.tertiary.white};

  > table {
    width: 100%;
    border-top: ${({ theme }) => theme.border.solid('#E6E6F0;')};
    font-size: ${({ theme }) => theme.font.sizes.midle};
    font-weight: ${({ theme }) => theme.font.regular};
    border-spacing: 0 ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
`

export const THead = styled.thead`
  th {
    padding: ${({ theme }) => theme.spacings.xxxxmultipleeight};
    font-weight: ${({ theme }) => theme.font.regular};
    text-align: left;
  }
`

export const TBody = styled.tbody`
  tr {
    background: #fafafc;
    padding: 0 ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }

  td {
    border: ${({ theme }) => theme.border.solid('#E6E6F0')};
    padding: 1.5rem;
    border-style: solid none solid none;
    text-align: left;
    vertical-align: middle;

    &:first-child {
      border-top-left-radius: ${({ theme }) =>
        theme.spacings.xxxxxmultipleeight};
      border-bottom-left-radius: ${({ theme }) =>
        theme.spacings.xxxxxmultipleeight};
      border-style: solid none solid solid;
    }

    &:last-child {
      border-top-right-radius: ${({ theme }) =>
        theme.spacings.xxxxxmultipleeight};
      border-bottom-right-radius: ${({ theme }) =>
        theme.spacings.xxxxxmultipleeight};
      border-style: solid solid solid none;
    }
  }
`
