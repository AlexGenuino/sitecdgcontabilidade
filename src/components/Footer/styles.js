import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 60vh;
background: #F9F3F3;
margin-top:3%;
`;

export const ContentHistory = styled.div`
width: 30%;
height: 90%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-around;
border-right: 2px solid;
border-right-color: #BABABA;

`;

export const StyleSVG = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: space-around;


svg{
    width: 1.5rem;
    height: 1.5rem;
    color: #470606;
    cursor: pointer;
    :hover{
        color: #BABABA;
    }
}

`;

export const StyleContact = styled.div`

width: 90%;
height: 90%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;

`;

export const Contato = styled.div`
width: 95%;
height: 50%;
display:flex;
flex-direction: column;
align-items: center;

`;

export const Services = styled.div`
width: 95%;
height: 50%;
display: flex;
flex-direction: row;
`;

export const ItemService = styled.div`
height: 100%;
width: 30%;
display: flex;
flex-direction: column;
align-items: center;

`;

export const RodapeStyle = styled.div`
width: 100%;
height: 10%;
display:flex;
align-items:center;
background:#E9DFDF;
`;

export const StyleFooter = styled.div`
width: 100%;
height: 90%;
display:flex;
align-items:center;
background:#F9F3F3;

`;

export const TextFooter = styled.h1`
font-family: 'M PLUS 1p';
font-style: normal;
font-weight: 400;
font-size: 0.8rem;
line-height: 21px;
color: #000000;
margin-left:15%;

`;

export const TextHistory = styled.h1`
font-family: 'M PLUS 1p';
font-style: initial;
font-weight: 350;
font-size: 0.8rem;
line-height: 1.5rem;
color: #000000;
text-align: center;

`;

export const Titulo = styled.h1`
font-family: 'M PLUS 1p';
font-style: Bold;
font-weight: 950;
font-size: 1.0rem;
line-height: 2rem;
color: #474747;
text-align: center;
align-self: flex-start;
padding: 1%;

`;

export const Item = styled.a`
font-family: 'M PLUS 1p';
font-style: initial;
font-weight: 350;
font-size: 0.8rem;
line-height: 1.5rem;
color: #000000;
text-align: center;
align-self: flex-start;
`;

export const ServiceText = styled.a`
font-family: 'M PLUS 1p';
font-style: initial;
font-weight: 350;
font-size: 0.8rem;
line-height: 1.5rem;
color: #000000;
text-align: center;
align-self: flex-start;
:hover{
    color:#E9DFDF;
    cursor: pointer;
}
`;

