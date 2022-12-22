import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 100%auto;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
`

export const Form = styled.form`
  width: 32%;
  height: 55rem;
  padding: 5rem 4rem;
  background: #f0f0f0;
  border-radius: .8rem;

  .input {
    margin-top: 1.5rem;
  }

  .button {
    margin-top: 2.5rem;
  }
`

export const Description = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
`

export const Ancora = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.xblue};

  :hover {
    text-decoration: underline;
  }
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.smallbold};
  line-height: 3rem;
  font-weight: ${({ theme }) => theme.font.smallbold};
`

export const Container = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 12rem;
`

export const ContainerRadios = styled.div`
  width: 100%auto;
  height: 23.5rem;
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
