import styled from "styled-components";

export const StyleMenuView = styled.div`
    display:flex;
    justify-content:center;


`;

export const ItensMenu = styled.a`
    font-family: 'M PLUS 1p', sans-serif;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    border: none;
    padding:15px;
    color: #ffff;
    background-color: Transparent;
    :hover{
        color: #b9b9b9
    }

`;
export const Menu = styled.div`
    width: 555px;
    height: 55px;
    background: #470606;
    border-radius: 0px 0px 7px 7px;
    position: absolute;
    z-index: 10;
    display:flex;
    flex-direction:row;
    justify-content:center;
`;

