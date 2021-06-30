import styled from "styled-components";

export const Container = styled.div`
    width: 9rem;
    height: 3rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 0.5rem;
    background-color: #470606;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        color: #b9b9b9;
        cursor: pointer;
        a{
            color: #b9b9b9;
        }
    }
`;

export const Text = styled.a`
    font-family: 'Mplus 1p';
    font-style: normal;
    font-weight: 300;
    font-size: 1rem;
    line-height: 1.5px;
    color: #FFFFFF;
    text-align: center;
`;