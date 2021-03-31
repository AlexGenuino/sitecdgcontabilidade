import React from 'react';
import { Container, TituloPrincipal, StyleTitulo, StyleService, ItemService, StyleCombo, StyleItem, CardSobreText, ButtonContato, TextPrincipal, PositionButton, TextButton } from './styles';
import NavBar from '../../components/NavBar'
import Menu from '../../components/MenuComponent'
import { AiFillStar } from "react-icons/ai";
import Footer from '../../components/Footer'


const SolutionsContabeis = () => {
  return (
    <Container>
        <NavBar/>
        <Menu/>
        <StyleTitulo>
          <TituloPrincipal>Serviços Contábeis</TituloPrincipal>
        </StyleTitulo>
        <StyleCombo>
          <StyleService>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Gestão Empresarial</ItemService>
            </StyleItem>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Planejamento Fiscal</ItemService>
            </StyleItem>
          </StyleService>
          <StyleService>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Contabilidade consultiva</ItemService>
            </StyleItem>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Legalização empresarial</ItemService>
            </StyleItem>
          </StyleService>
          <StyleService>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Outsourcing contábil</ItemService>
            </StyleItem>
            <StyleItem>
              <AiFillStar/>
              <ItemService>Obrigações contábeis</ItemService>
            </StyleItem>
          </StyleService>
        </StyleCombo>
        <CardSobreText>
            <TextPrincipal>Ficou com alguma Dúvida?</TextPrincipal>
            <TextPrincipal>Nossos Consultores estão aqui prontos para atendê-lo!</TextPrincipal>
        </CardSobreText>
        <PositionButton>
            <ButtonContato>
                <TextButton>
                  Entre em Contato
                </TextButton>
            </ButtonContato>
        </PositionButton>
        <Footer/>
    </Container>
  );
}

export default SolutionsContabeis;