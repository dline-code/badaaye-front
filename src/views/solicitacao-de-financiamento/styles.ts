import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 210rem;
`;

export const Content = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    position: relative;
    flex-direction: column;
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

export const SecondSection = styled.div`
    width: 60rem;
    height: 176rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 17rem;
    border-radius: 0.7rem;
    padding: 0rem 5rem;
    display: flex;
    flex-direction: column;  
    p{
        margin-top: 1.2rem;
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
    }
    h2{
        color: ${({ theme }) => theme.colors.linear.darkBlue};
        margin-top: 4rem;
    }
`


export const Separator = styled.hr`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.tertiary.xwhite};
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    gap: 1rem;
    flex: 1;
    .input{
        border-radius: 0.5rem;
        height: 5rem;
        background: ${({ theme }) => theme.colors.tertiary.xxwhite};
        input{
            background: ${({ theme }) => theme.colors.tertiary.xxwhite};
            color: ${({ theme }) => theme.colors.tertiary.gray};
        }
    }

    div{
        display: flex;
        position: relative;
        .input{
            width: 90%;
        }
        button{
            height: 5rem;
            width: 25%;
            position: absolute;
            right: 0;
        }
    }
`
export const SectionInput = styled.div`
    width: 100%;
    height: auto;
    padding-top: 3rem;
    display: flex;
    gap: 2rem;
`
export const Label = styled.label`

`

export const Select = styled.select`
    height: 5rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    padding: 0 2rem;
    outline: none;
    border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.tertiary.gray};
`
export const Option = styled.option`
`

export const LastSection = styled.div`
    height: 12rem;
    width: 60rem;
    padding: 0 5rem;
    display: flex;
    align-items: center;
    left: 30rem;
    background: ${({ theme }) => theme.colors.tertiary.xcinza};
    margin-top: 4rem;
    position: absolute;
    top: 180rem;
    border-radius: 0.2rem 0.2rem 0.5rem 0.5rem;

    button{
        height: 5rem;
    }
`