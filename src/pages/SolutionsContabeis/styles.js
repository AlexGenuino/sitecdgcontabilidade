import styled from 'styled-components';

export const Container = styled.div`
    display:1;
    width: 100%;
    height: 100%;
`;

export const StyleItem = styled.div`
    padding:1%;
    display:flex;
    align-self:flex-start;
`;

export const CardSobreText = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    padding-top:4%;

`;

export const TextPrincipal = styled.h1`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #535353;
    padding-left:20%;
`;

export const PositionButton = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    padding-top:5%;
    

`;

export const ButtonContato = styled.div`
    width: 175px;
    height: 50px;
    background: #470606;
    border-radius: 7px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const TextButton = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    cursor: pointer;
    :hover{
        color: #b9b9b9
    }
`;


export const StyleCombo = styled.div`
    margin-top:2%;
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`;

export const StyleService = styled.div`
    width:80%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:space-around;

    
    padding:1%;
    
    svg{
        color:#FBFF22;
        font-size: 36px;
    }

`;



export const ItemService = styled.h1`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #535353;
    
`;

export const TituloPrincipal = styled.h1`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 800;
    font-size: 28px;
    line-height: 42px;
    color: #474747;
`;

export const StyleTitulo = styled.div`
    width:100%;
    margin-top:15vh;
    display:flex;
    justify-content:center;
    align-items:center;

`;