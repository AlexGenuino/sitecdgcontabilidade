import React from 'react';
import Carousell from '../../components/Carousel'
import Menu from '../../components/MenuComponent'
import NewSolution from '../NewSolutions';
import About from '../About';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Home = () => {
  return (
  
  <Container>
      <Menu/>
      <Carousell/>
      <NewSolution/>
      <About/>
      <Footer/>
  </Container>
  )
}

export default Home;