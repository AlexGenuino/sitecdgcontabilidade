import styled from 'styled-components';



export const Container = styled.div`
    height:30vh;
    width:15%;
    display: flex;
    justify-content:center;
    flex-direction:column;
    align-items: center;
    padding: 2%;
    
`;

export const IconeItem = styled.div`
    height: 70%;
    background-color: #F9F3F3;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3rem 3rem 3rem 3rem;
    :hover{
        background-color: #968E8E;
            padding-bottom:2%;
            cursor: pointer;
            height: 80%;
            width: 80%;
    }
    svg{
        color:#470606;
        font-size: 6rem;
        
    }
`;

export const TextItem = styled.a`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #535353;
    margin-top: 5%;
    
    

`;
