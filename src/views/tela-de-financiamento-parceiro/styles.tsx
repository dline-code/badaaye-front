import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;    
`
export const Container = styled.div`
    width: 100%;
    padding: 0 15rem;    
`
export const Content = styled.div`
    width: 100%;
    margin-top: -10rem;
    padding: ${({theme})=> theme.spacings.xxxmultipleeight} 4rem;    
    background: ${({ theme }) => theme.colors.tertiary.xxwhite};
    border-radius: 4px;
`
export const Form = styled.div`
    width: 100%;
    display: flex;
    height: 8rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary.gray};
    margin-bottom: ${({theme})=> theme.spacings.xxxmultipleeight};

    .button {
        width: 20rem;
        margin-left: ${({theme})=> theme.spacings.xxxmultipleeight};
    }
    .input {
        border: 1.75px solid #AAAAAA;
    }
`

export const FinancyTitles = styled.div`
    width: 89%;
    padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${({theme})=> theme.spacings.xxxmultipleeight};

    div {
        width: 25%;
        font-size: ${({ theme }) => theme.font.sizes.midle};
        font-weight: ${({ theme }) => theme.font.regular};
    }
`
export const FinancyList = styled.ul`
    width: 100%;
`
export const FinancyItem = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: ${({theme})=>theme.spacings.xxxxmultipleeight};
    justify-content: space-between;
    align-items: center;
`
export const LeftSide = styled.div`
    width: 100%;
    padding: ${({theme})=>theme.spacings.xxxxmultipleeight};
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.1rem solid ${({ theme }) => theme.colors.tertiary.xcinza};
    border-radius: 4px;

    cursor: pointer;
   
    div {
        width: 25%;
        font-size: ${({ theme }) => theme.font.sizes.midle};
        font-weight: ${({ theme }) => theme.font.regular};
    }

    &:hover {
        transition: ${({ theme }) => theme.transition.default};
        background: ${({theme})=> theme.colors.tertiary.xcinza};
    }
`

    export const RightSide = styled.div`
        width: 10rem;
        margin-left: ${({theme})=>theme.spacings.xxxxmultipleeight};

        display: flex;
        justify-content: space-between;

        .button{
            width: 4rem;
            height: 4rem;

            display: flex;
            justify-content: center;      
            align-items: center;

            font-size: ${({theme})=> theme.font.sizes.xxlarge};

            background: ${({ theme }) => theme.colors.primary.xblue};  
            color: ${({ theme }) => theme.colors.tertiary.white};
            border-radius: 4px;
        }
    `