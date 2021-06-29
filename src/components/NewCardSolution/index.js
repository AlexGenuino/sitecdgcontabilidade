import React from 'react';
import { Container,
    IconeItem,
    TextItem } from './styles';

import { HiCalculator } from "react-icons/hi";


import { useHistory  } from "react-router-dom";

const NewCardSolution = () => {

  const history = useHistory()

  return(
    
    <Container>
        <IconeItem><HiCalculator></HiCalculator></IconeItem>
        <TextItem>Serviços de Contabilidade </TextItem>
    </Container>
    
  )
}

export default NewCardSolution;