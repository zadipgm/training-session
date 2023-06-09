import styled, { css } from "styled-components";

export const Container = styled.div`
width:25% ;
`;
export const Wrapper = styled.div<{ color: string }>`
display:flex ;
justify-content:space-between ;
align-items:center ;
padding:20px ;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
margin:30px ;
border-radius: 6px;
${({ theme, color }) =>
        theme.isLTR
            ? css`
    border-left:5px solid ${color} ;
    `
            : css`
   border-right:5px solid ${color} ;
    `
    }
`
export const TextWrapper = styled.div<{ color: string }>`
>span{
    font-size:24px;
    font-weight:600 ;
    color:${({ color }) => color}
}
 > h4{
    color:${({ theme }) => theme.colors.gray1};
    font-size:18px;

 }
`
export const IconWrapper = styled.div``