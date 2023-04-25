import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const Content = styled.div`
    width: 100%;
    height: 30rem;
    display: flex;
    position: relative;
    padding-top: 6rem;
    gap: 4rem;
    padding-left: 10rem;
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

export const ContentLeft = styled.div`
    width: 30rem;
    display: flex;
    flex-direction: column;
    p{
        margin-top: 1.5rem;
        line-height: 2.2rem;
    }
    h2{
        color: ${({ theme }) => theme.colors.linear.darkBlue};
    }
`

export const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    p{
        margin-top: 1.5rem;
        line-height: 2.2rem;
        width: 28rem;
        @media screen and (max-width: 1010px) {
            color: ${({ theme }) => theme.colors.linear.black}; 
        }
    }
    h2{
        color: ${({ theme }) => theme.colors.linear.darkBlue};  
        @media screen and (max-width: 1010px) {
            color: ${({ theme }) => theme.colors.linear.black}; 
        }
    }

    @media screen and (max-width: 1010px) {
        width: 100%;
        position: relative;
        top: 10rem;
    }
`
export const FirstSection = styled.div`
    width: 100%;
    @media screen and (max-width: 1010px) {        
        position: absolute;
        top: 15rem;
        h2{
            color: black;
        }
        p{
            color: black;
        }

    }
`



export const CardContentLeft = styled.div`
    width: 30rem;
    height: 33rem;
    padding: 3rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 18rem;
    display: flex;
    flex-direction: column;
    h2{
        color: ${({ theme }) => theme.colors.linear.darkBlue};
    }
    button{
        height: 5rem;
    }
`

export const InfoSections = styled.div`
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.colors.linear.darkBlue};
`
export const InfoContainer = styled.div`
    padding: 2rem 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

export const CardContentRight = styled.div`
    width: 60rem;
    height: 28rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 18rem;
    padding: 3rem 6rem;
    display: flex;
    flex-direction: column;
    p{
        margin-top: 2rem;
        width: 90%;
        color: ${({ theme }) => theme.colors.linear.darkBlue};
        text-align: left;
        font-size: 1.6rem;
    }

    div{
        width: 25rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;

        button{
            height: 5rem;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        top: 28rem; 
        padding: 2rem 2rem;
        width: 100%;
        
        button{
            width: 90%;
            height: 3rem;
        }
    }

    @media screen and (max-width: 1010px) {
        top: 28rem; 
        width: 100%;
        padding: 2rem 2rem;
    }
`

export const CardContentRightBottom = styled.div`
    width: 60rem;
    height: 28rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 82rem;
    padding: 3rem 6rem;
    display: flex;
    flex-direction: column;
    p{
        margin-top: 2rem;
        width: 90%;
        color: ${({ theme }) => theme.colors.linear.darkBlue};
        text-align: left;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 1010px) {
        top: 92rem; 
        padding: 2rem 3rem;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        width: 100%;

        button{
            width: 90%;
            height: 3rem;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
        width: 100%;
        
    }

    div{
        width: 25rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;

        button{
            height: 5rem;
        }
    }
`


export const CardContentRightMiddle = styled.div`
    width: 60rem;
    height: 28rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    position: absolute;
    top: 50rem;
    padding: 3rem 6rem;
    display: flex;
    flex-direction: column;
    p{
        margin-top: 2rem;
        width: 90%;
        color: ${({ theme }) => theme.colors.linear.darkBlue};
        text-align: left;
        font-size: 1.6rem;
    }

    @media screen and (max-width: 1010px) {
        top: 60rem; 
        padding: 2rem 3rem;
        width: 100%;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        width: 100%;

        button{
            width: 90%;
            height: 3rem;
        }
    }

    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
        width: 100%;
        
    }

    div{
        width: 25rem;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: end;

        button{
            height: 5rem;
        }
    }
`


export const Separator = styled.hr`
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.tertiary.xwhite};
`

export const Loading = styled.h2`
    color: black;
`