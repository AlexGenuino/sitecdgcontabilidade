import React from 'react';
import { Container, StyleImg, TituloCard, ParagrafoCard, SobreCard, StyleCardSobre } from './styles';

import { FiPlus } from "react-icons/fi";
import { useHistory  } from "react-router-dom";

const CardSolution = ({titulo, paragrafo, image, link}) => {

  const history = useHistory()

  return(
    
    <Container>
        <StyleImg>
        <img src={image} style={{
          width: 227,
          height: 151,
          borderRadius: '7px 7px 0px 0px',
        }}/>
        </StyleImg>
        <TituloCard>{titulo}</TituloCard>
        <ParagrafoCard>{paragrafo}</ParagrafoCard>
        <StyleCardSobre>
            <SobreCard><FiPlus onClick={() => history.push(link)} /></SobreCard>
        </StyleCardSobre>
    </Container>
    
  )
}

export default CardSolution;