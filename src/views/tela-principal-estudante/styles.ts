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
    padding-left: 10rem;
    background: ${({ theme }) => theme.colors.primary.xblue};
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
    }
    h2{
        color: ${({ theme }) => theme.colors.linear.darkBlue};
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
    gap: 1.5rem;
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

export const CardContentRightBottom = styled.div`
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