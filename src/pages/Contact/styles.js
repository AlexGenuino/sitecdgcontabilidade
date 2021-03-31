import styled from "styled-components";

export const Container = styled.div`
    display:1;
    width: 100%;
    height: 100%;
`;

export const StyleMap = styled.div`
    width: 406px;
    height: 294px;
    border-radius:7px;
    margin-left:20%;
    margin-top:4%;

`;

export const PositionMenuContact = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    margin-top:7%;

`;

export const MenuContact = styled.div`
    display:flex;
    width:60%;
    background-color:#470606;
    border-radius: 7px;
    flex-direction:row;
    justify-content:space-around;

`;

export const ItemMenuContact = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:1%;
    svg{
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 22px;
        color: #FFFFFF;
    };
`;

export const TextItem = styled.p`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 350;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
    align-self:center;
`;