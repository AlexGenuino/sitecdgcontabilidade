import React from 'react';
import Carousell from '../../components/Carousel'
import Menu from '../../components/MenuComponent'

import { Container } from './styles';

const Home = () => {
  return (
  
  <Container>
      <Menu/>
      <Carousell/>
  </Container>
  )
}

export default Home;