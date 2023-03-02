import styled from 'styled-components'

export const Header = styled.header`
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.tertiary.gray};
`

export const HeaderInner = styled.header`
  max-width: 1039px;
  height: 85px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    padding: 1rem;
    border: ${({ theme }) => theme.border.solid(theme.colors.tertiary.gray)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  }
`

export const Main = styled.main`
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.primary.xblue} 240px,
    #fff 240px
  );
`

export const Content = styled.div`
  max-width: 540px;
  margin: 0 auto;
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
  padding: 2.5rem 2rem 1rem;
  border-radius: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
  background: ${({ theme }) => theme.colors.tertiary.xcinza};
`
