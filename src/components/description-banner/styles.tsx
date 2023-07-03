import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 30rem;
    padding: 5rem 15rem;
    background: ${({ theme }) => theme.colors.primary.xblue};
    color: ${({theme})=> theme.colors.tertiary.white};
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.tertiary.white};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    margin-bottom: 3rem;
`
export const Description = styled.p`
    width: 30rem;
    color: ${({ theme }) => theme.colors.tertiary.white};
`
