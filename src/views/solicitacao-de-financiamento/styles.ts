import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 230rem;
`;

export const Content = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    position: relative;
    flex-direction: column;
    padding-top: 6rem;
    gap: 4rem;
    align-items: center;
    /* padding-left: 30rem; */
    background: ${({ theme }) => theme.colors.primary.xblue};
    @media screen and (max-width: 1060px) {
        width: 100%;
    }

    @media screen and (max-width: 1010px) {
        /* padding-left: 5rem;
        padding-right: 5rem; */
        flex-direction: column;
    }


    @media screen and (max-width: 768px) {
        padding-left: ${({ theme }) => theme.spacings.xxxmultipleeight};
        padding-right: ${({ theme }) => theme.spacings.xxxmultipleeight};
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
    width: 100%;
    padding-left: 46.9rem;
    gap: 1.5rem;
        p{
        width: 30rem;
    }
`

export const SecondSection = styled.div`
    width: 60rem;
    height: 190rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 17rem;
    border-radius: 0.7rem;
    padding: 0rem ${({ theme }) => theme.spacings.xmultipleeight};
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

    @media screen and(max-width: 768px){
        width: 100%;
    }
`


export const Separator = styled.hr`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.tertiary.xwhite};
`

export const SectionVideo = styled.section`
    width: 100%;
    height: 30rem;
    display: flex;
    justify-content: center;
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    border: 4px dotted ${({ theme }) => theme.colors.tertiary.xcinza};
    border-radius: 0.5rem;
    .input{
        display: none;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .icon{
        font-size: 10rem;
        color: ${({ theme }) => theme.colors.linear.black};
        margin-top: 5rem;
        }
        gap: ${({ theme }) => theme.spacings.xxxxmultipleeight};
        
        span{
            width: 19rem;
            text-align: center;
        }
        label{
            text-decoration: underline;
        }
    }
`

export const ContainerInput = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    height: auto;
    gap: ${({ theme }) => theme.spacings.xxxxmultipleeight};
    flex: 1;
    .input{
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.colors.tertiary.xxwhite};
        input{
            background: ${({ theme }) => theme.colors.tertiary.xxwhite};
            color: ${({ theme }) => theme.colors.linear.darkBlue};
        }
        input[type="date"]{
            flex:1;
            appearance: none;
        }
    }

    .icon2{
        position: absolute;
        right: 0.5rem;
        top: 1rem;
        z-index: 0.1;
        font-size: 3rem;
    }

    div{
        display: flex;
        position: relative;
        .input{
            width: 90%;
            span{
                position: relative;
                left: -1.5rem;
                width: 100%;
            }
            input[type="file"]{
                display: none;
            }
        }

        select{
            width: 100%;
            
        }

        button{
            height: 4.3rem;
            width: 25%;
            position: absolute;
            right: 0;

            label{
                padding: 1.7rem 3.5rem; 
            }
        }
    }
`
export const SectionInput = styled.div`
    width: 100%;
    height: auto;
    padding-top: 3rem;
    display: flex;
    gap: ${({ theme }) => theme.spacings.xxxmultipleeight};
`
export const Label = styled.label`

`

export const Select = styled.select`
    height: 5rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    padding: 0 ${({ theme }) => theme.spacings.xxxmultipleeight};
    outline: none;
    border: 0.2rem solid ${({ theme }) => theme.colors.tertiary.gray};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.tertiary.gray};
    appearance: none;
`
export const Option = styled.option`
`

export const LastSection = styled.div`
    height: 12rem;
    width: 60rem;
    padding: 0 ${({ theme }) => theme.spacings.xmultipleeight};
    display: flex;
    align-items: center;
    left: 46.8rem;
    background: ${({ theme }) => theme.colors.tertiary.xcinza};
    margin-top: 4rem;
    position: absolute;
    top: 202rem;
    border-radius: 0.2rem 0.2rem 0.5rem 0.5rem;

    button{
        height: 5rem;
    }

    @media screen and(max-width: 1060px){
        left: 0%;
    }
`
