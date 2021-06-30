import React from 'react';
import { Container, StyleNewCard, Style, TituloPrincipal, TituloSecundario, StyleTitulo } from './styles';
import NewCardSolution from '../../components/NewCardSolution';
import Zoom from 'react-reveal/Zoom';

const NewSolution = () => {

  return(
    
    <Container>
        <StyleTitulo>
            <TituloPrincipal>
                Nossas Soluções
            </TituloPrincipal>
            <TituloSecundario>
                Estamos prontos para te ajudar!
            </TituloSecundario>
        </StyleTitulo>
        <Style>
        <StyleNewCard>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
        </StyleNewCard>
        <StyleNewCard>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
            <NewCardSolution></NewCardSolution>
        </StyleNewCard>
        </Style>
    </Container>
    
  )
}

export default NewSolution;