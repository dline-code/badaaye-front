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
  max-width: 54rem;
  margin: 0 auto;
  margin-bottom: 2rem;
`

export const ContentHeader = styled.div`
  padding-top: ${({ theme }) => theme.spacings.xmultipleeight};
  color: ${({ theme }) => theme.colors.tertiary.white};
  >span{
    font-size: 2.5rem;
    cursor: pointer;
  }
  > p {
    margin-top: ${({ theme }) => theme.spacings.xxxxmultipleeight};
  }
`

export const ContentBody = styled.div`
  margin-top: ${({ theme }) => theme.spacings.xxmultipleeight};
  padding: 2.5rem 2rem;
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

export const MiniModal = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  flex: 1;
  justify-content: end;
  top: -2.5rem;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: auto;
  position: absolute;
  background: #fff;
  transition: opacity 0.5s ease-in-out;

  span{
    border: 1px solid #ddd;
    padding: 0.2rem;
    cursor: pointer;
  }

`

export const ContainerArea = styled.section`
  display: flex;
  gap: 1rem;

  div{
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 50%;
    font-size: 2rem;
    cursor: pointer;
  }

`
