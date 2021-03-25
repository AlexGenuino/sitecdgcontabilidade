import React from 'react';
import Navbar from '../../components/NavBar'
import Carousell from '../../components/Carousel'
import Menu from '../../components/MenuComponent'

import { Container } from './styles';

const Home = () => {
  return (
  
  <Container>
      <Navbar/>
      <Menu/>
      <Carousell/>
  </Container>
  )
}

export default Home;