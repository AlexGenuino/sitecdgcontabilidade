import React from 'react';
import { Container, TituloPrincipal, StyleTitulo } from './styles';
import NavBar from '../../components/NavBar'
import Menu from '../../components/MenuComponent'

const SolutionsContabeis = () => {
  return (
    <Container>
        <NavBar/>
        <Menu/>
        <StyleTitulo>
          <TituloPrincipal>Serviços Contábeis</TituloPrincipal>
        </StyleTitulo>
        
    </Container>


  );
}

export default SolutionsContabeis;