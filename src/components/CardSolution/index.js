import React from 'react';
import { Container, StyleImg, TituloCard, ParagrafoCard, SobreCard, StyleCardSobre } from './styles';
import Image1Card from '../../assets/ImagemCard1.png'

const CardSolution = ({titulo, paragrafo, image, link}) => {
  return(
  
    <Container>
        <StyleImg>
        <img src={image} style={{
          width: 226,
          height: 151,
          borderRadius: '7px 7px 0px 0px',
        }}/>
        </StyleImg>
        <TituloCard>{titulo}</TituloCard>
        <ParagrafoCard>{paragrafo}</ParagrafoCard>
        <StyleCardSobre>
            <SobreCard>{link}</SobreCard>
        </StyleCardSobre>
    </Container>
  )
}

export default CardSolution;