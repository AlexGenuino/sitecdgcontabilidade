import React from 'react';
import { Container, 
  TextFooter, 
  RodapeStyle, 
  StyleFooter, 
  ContentHistory, 
  TextHistory, 
  StyleSVG, 
  Contato, 
  Services,  
  StyleContact,
  Titulo,
  Item,
  ItemService,
  ServiceText} from './styles';
import LogoPNG from '../../assets/CDGLOGO.png';
import { AiOutlineWhatsApp, AiFillInstagram, AiOutlineFacebook} from "react-icons/ai"

    const handlerlinkclick = (Link) =>{
      window.open(Link, '_blank')
    }

    const LinkWhats = "http://wa.me/5519993176589"
    const LinkFace = "https://www.facebook.com/cdgcontabildadeeassessoria"
    const LinkInsta = "https://www.instagram.com/cdgcontabilidadeassessoria/"

const Footer = () => {
  return (
  
    <Container>
        <StyleFooter>
          <ContentHistory>
              <img src={LogoPNG} style={{
                height: '3.1rem'}}>
              </img>
          <StyleSVG>
            <AiOutlineWhatsApp onClick = { () => handlerlinkclick(LinkWhats)}/>
            <AiFillInstagram onClick = { () => handlerlinkclick(LinkInsta)}/>
            <AiOutlineFacebook onClick = { () => handlerlinkclick(LinkFace)}/>
          </StyleSVG>
          <div style={{width:'50%'}}>
            <TextHistory>Buscamos sempre a melhoria contínua dos nossos serviços oferecendo uma gestão contábil, fiscal e trabalhista de excelência, e, além de consultoria nessas áreas, também buscamos prestar serviços de qualidade através de planejamento tributário.</TextHistory>
          </div>
          </ContentHistory>
          <StyleContact>
            <Contato>
                <Titulo>Contato</Titulo>
                <Item>Rua Pedro Galdino Moreira, 142 | Jardim Paulista | Monte Mor | SP</Item>
                <Item>(19) 3879-5995</Item>
                <Item>(19) 99317-6589</Item>
                <Item>contato@cdgcontabilidade.com.br</Item>
            </Contato>
            <Services>
                <ItemService>
                  <Titulo>Serviços</Titulo>
                  <ServiceText>Contabilidade</ServiceText>
                  <ServiceText>Fiscal e Tributario</ServiceText>
                  <ServiceText>Administração de Pessoal</ServiceText>
                  <ServiceText>Consultoria</ServiceText>
                </ItemService>
                <ItemService>
                  <Titulo>Navegação</Titulo>
                  <ServiceText>Home</ServiceText>
                  <ServiceText>Nossas Soluções</ServiceText>
                  <ServiceText>Quem Somos</ServiceText>
                  <ServiceText>Contato</ServiceText>
                </ItemService>
                <ItemService>
                  <Titulo>Especilidades</Titulo>
                  <ServiceText>Prestadores de Serviços</ServiceText>
                  <ServiceText>Comércio</ServiceText>
                  <ServiceText>Indústia</ServiceText>
                  <ServiceText>Construção Civil</ServiceText>
                </ItemService>
            </Services>
          </StyleContact>
        </StyleFooter>
        <RodapeStyle>
          <TextFooter>Contabilidade em Monte Mor - SP</TextFooter>
          <TextFooter>2021 - Todos os direitos reservados</TextFooter>
          <TextFooter>Desenvolvido por</TextFooter>
        </RodapeStyle>
    </Container>
  
  );
}

export default Footer;