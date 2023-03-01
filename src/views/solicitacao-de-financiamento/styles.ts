import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80rem;
`;

export const Content = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    position: relative;
    padding-top: 6rem;
    gap: 4rem;
    padding-left: 30rem;
    background: ${({ theme }) => theme.colors.primary.xblue};
    @media screen and (max-width: 1060px) {
        padding-left: 5rem;
        width: 100%;
    }

    @media screen and (max-width: 1010px) {
        padding-left: 5rem;
        padding-right: 5rem;
        flex-direction: column;
    }


    @media screen and (max-width: 768px) {
        padding-left: 2rem;
        padding-right: 2rem;
        flex-direction: column;
    }
`

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.tertiary.white};
    font-size: ${({ theme }) => theme.font.sizes.xxlarge};
`
export const Description = styled.p`
    color: ${({ theme }) => theme.colors.tertiary.white};
`

export const FirstSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p{
        width: 30rem;
    }

`
