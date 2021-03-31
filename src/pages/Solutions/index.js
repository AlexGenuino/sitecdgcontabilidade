import React from 'react';
import { Container, StyleCards, TituloPrincipal, TituloSecundario, StyleTitulos, ButtonVerTodos, StyleButton, VerTodos } from './styles';
import Navbar from '../../components/NavBar'
import Menu from '../../components/MenuComponent'
import CardSolution from '../../components/CardSolution'
import Image1Card from '../../assets/ImagemCard1.png'
import Footer from '../../components/Footer'
import Zoom from 'react-reveal/Zoom';

const Cards = [{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: '/solutions/contabeis',
  delay:350
},
{
  titulo:'FISCAL',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: '/solutions/contabeis',
  delay:450
},
{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste',
  delay:550
},
{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste',
  delay:650
}]

const Solutions = () => {
  return (
  <Container>
      <Navbar/>
      <Menu/>
      <StyleTitulos>
        <TituloPrincipal>
          Nossas Soluções
        </TituloPrincipal>
        <TituloSecundario>
          Estamos prontos para te ajudar!
        </TituloSecundario>
      </StyleTitulos>
      <StyleCards>
          {(Cards||[]).map((card) => (
            <Zoom delay={card.delay}>
            <CardSolution titulo = {card.titulo} paragrafo = {card.paragrafo} image = {card.image} link = {card.link}/>
            </Zoom>
          ))}
      </StyleCards>
      <StyleButton>
        <ButtonVerTodos>
          <VerTodos>Ver Todos</VerTodos>
        </ButtonVerTodos>
      </StyleButton>
      <Footer></Footer>
  </Container>
  );
}

export default Solutions;