import React from 'react';
import { Container, StyleNewCard } from './styles';
import NewCardSolution from '../../components/NewCardSolution';
import Menu from '../../components/MenuComponent';

const NewSolution = () => {

  

  return(
    
    <Container>
        <Menu/>
        <StyleNewCard>
            <NewCardSolution></NewCardSolution>
        </StyleNewCard>
        


    </Container>
    
  )
}

export default NewSolution;