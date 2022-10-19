import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%auto;
  height: 60rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  width: 25%;
`
export const Container = styled.div`
  width: 27%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerRadios = styled.div`
  width: 100%auto;
  height: 27rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.midle};
  color: ${({ theme }) => theme.colors.secondary.xxxblue};
  font-weight: ${({ theme }) => theme.font.smallbold};
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  :hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.xblue};
  }
`

export const LinkDescription = styled.span`
  margin-left: ${({ theme }) => theme.spacings.xxxxxmultipleeight};
`
