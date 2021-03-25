import React from 'react';

import { Menu, StyleMenuView, ItensMenu} from './styles';

const MenuComponent = () => {
  return (
  
    <StyleMenuView>

        <Menu>
            <ItensMenu>Inicio</ItensMenu>
            <ItensMenu>Nossas Soluções</ItensMenu>
            <ItensMenu>Quem Somos</ItensMenu>
            <ItensMenu>Contato</ItensMenu>
        </Menu>
    </StyleMenuView>
  
    );
}

export default MenuComponent;