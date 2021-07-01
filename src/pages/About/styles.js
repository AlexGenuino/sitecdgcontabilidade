import styled from 'styled-components';
import imgCDG from '../../assets/5.png';



export const Container = styled.div`
  width: 100%;
  height: 60vh;
  //background-color: #F9F3F3;
  background-image: url(${imgCDG});
  background-repeat: no-repeat;
  background-position: 80% 50%;
  background-size:30%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid;
  border-bottom-color: #BABABA;
  
`;

export const Style = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
`;

export const StyleIMG = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:5%;
    img{
        width: 30rem;
        height: 25rem;
    }
`;

export const StyleContent = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    padding: 4%;
`;

export const StyleTittle = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-bottom: 2px solid;
    border-bottom-color: #BABABA;
    margin-bottom: 2%;
`;

export const Tittle = styled.a`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height:2rem;
    color: #474747;
    align-self:flex-start;
    margin-bottom:2%;

`;

export const StyleHistory = styled.div`
    width: 70%;
    height: 60%;
    display: flex;
    flex-direction: column;
    

`;

export const TextHistory = styled.a`
    font-family: 'M PLUS 1p';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height:1.5rem;
    color: #535353;
    align-self:flex-start;

`;