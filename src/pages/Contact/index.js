import React from 'react';
import { Container, PositionMenuContact, MenuContact, ItemMenuContact, TextItem, StyleMap } from './styles';
import NavBar from '../../components/NavBar'
import Menu from '../../components/MenuComponent'
import { AiFillPhone, AiFillMail, AiTwotoneEnvironment } from "react-icons/ai";
import MapLocation from '../../components/MapContact'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
  
    <Container>
        <NavBar/>
        <Menu/>
        <PositionMenuContact>
            <MenuContact>
                <ItemMenuContact>
                <AiFillPhone/>
                <TextItem>(19) 3879-5995</TextItem>
                </ItemMenuContact>
                <ItemMenuContact><AiFillMail/><TextItem>contato@cdgcontabilidade.com.br</TextItem></ItemMenuContact>
                <ItemMenuContact><AiTwotoneEnvironment/><TextItem>Monte Mor-SP</TextItem></ItemMenuContact>
            </MenuContact>
        </PositionMenuContact>
        <StyleMap>
            <MapLocation></MapLocation>
        </StyleMap>



    <Footer/>
    </Container>
  );
}

export default Contact;