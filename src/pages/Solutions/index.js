import React from 'react';
import { Container, StyleCards } from './styles';
import Navbar from '../../components/NavBar'
import Menu from '../../components/MenuComponent'
import CardSolution from '../../components/CardSolution'
import Image1Card from '../../assets/ImagemCard1.png'

const Cards = [{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste'
},
{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste'
},
{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste'
},
{
  titulo:'CONTABILIDADE',
  paragrafo: 'A essência da empresa, onde é possível analisar o desempenho e sua real situação. Nossos profissionais altamente capacitados estão prontos para atender suas necessidades e expectativas.',
  image: Image1Card,
  link: 'teste'
}]

const Solutions = () => {
  return (
  <Container>
      <Navbar/>
      <Menu/>
      <StyleCards>
          {(Cards||[]).map((card) => (
            <CardSolution 
              titulo = {card.titulo}
              paragrafo = {card.paragrafo}
              image = {card.image}
              link = {card.link}
            />
          ))}
          
      </StyleCards>


  </Container>
  );
}

export default Solutions;