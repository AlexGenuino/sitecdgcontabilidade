import styled from 'styled-components';

export const Container = styled.div`
    
    width: 227px;
    height: 334px;
    background-color:#fff;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 7px 7px 7px 7px;
    
`;

export const StyleImg = styled.div`
    
    width: 100%;
    height: 151px;
    border-radius: 7px 7px 0px 0px;
    
`;

export const TituloCard = styled.h1`

    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    margin-top:7px;
    margin-left:7px;

`;

export const ParagrafoCard = styled.p`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    margin-top:7px;
    margin-left:7px;
`;

export const SobreCard = styled.div`
    
    width: 44px;
    height: 40px;
    background: #470606;
    border-radius: 7px 0px;
    display:flex;
    align-items:center;
    justify-content:center;
    svg{
        color:#fff;
        font-size: 20px;
        cursor: pointer;
    :hover{
        color: #b9b9b9
    }
    }
`;

export const StyleCardSobre = styled.div`
    display: flex;
    flex-direction:row;
    width: 100%;
    justify-content:flex-end;
`;

