import React from 'react';
import { Menu, StyleMenuTop, ItensMenu, Container, View, StyleIcons, DivImg, SvgHoverWhats, SvgHoverFace, SvgHoverinsta, StyleMenu} from './styles';
import { useHistory  } from "react-router-dom";
import Logo from '../../icons/Logo'
import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook } from "react-icons/ai"

const MenuComponent = () => {

  const history = useHistory()

  const handlerlinkclick = (Link) =>{
    window.open(Link, '_blank')
}

const LinkWhats = "http://wa.me/5519993176589"
const LinkFace = "https://www.facebook.com/cdgcontabildadeeassessoria"
const LinkInsta = "https://www.instagram.com/cdgcontabilidadeassessoria/"

  return (
    <Container>
      <StyleMenuTop>
        <View>
              <Logo/>
              <StyleIcons>
              <DivImg>
                  <SvgHoverWhats>
                  <AiOutlineWhatsApp onClick = { () => handlerlinkclick(LinkWhats)}/>
                  </SvgHoverWhats>
              </DivImg>
              <DivImg>
                  <SvgHoverinsta>
                  <AiFillInstagram onClick = { () => handlerlinkclick(LinkInsta)}/>
                  </SvgHoverinsta>
              </DivImg>
              <DivImg>
                  <SvgHoverFace>
                  <AiOutlineFacebook onClick = { () => handlerlinkclick(LinkFace)}/>
                  </SvgHoverFace>
              </DivImg>
              </StyleIcons>
        </View>
      </StyleMenuTop>
      <StyleMenu>
        <Menu>
          <ItensMenu onClick={() => history.push('/')}>Inicio</ItensMenu>
          <ItensMenu onClick={() => history.push('/solutions')}>Nossas Soluções</ItensMenu>
          <ItensMenu>Quem Somos</ItensMenu>
          <ItensMenu onClick={() => history.push('/contact')}>Contato</ItensMenu>
        </Menu>
      </StyleMenu>
  </Container>
    );
}

export default MenuComponent;