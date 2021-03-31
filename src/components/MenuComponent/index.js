import React from 'react';
import { Menu, StyleMenuView, ItensMenu} from './styles';
import { useHistory  } from "react-router-dom";

const MenuComponent = () => {

  const history = useHistory()

  return (
    <StyleMenuView>
        <Menu>
          <ItensMenu onClick={() => history.push('/home')}>Inicio</ItensMenu>
          <ItensMenu onClick={() => history.push('/solutions')}>Nossas Soluções</ItensMenu>
          <ItensMenu>Quem Somos</ItensMenu>
          <ItensMenu onClick={() => history.push('/contact')}>Contato</ItensMenu>
        </Menu>
    </StyleMenuView>
    );
}

export default MenuComponent;