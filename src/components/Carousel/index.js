import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/2.jpeg'
import Image3 from '../../assets/3.jpg'
import {PrincipalText, StyleMensagem, Divteste, SecondText, StyleSecondText, ButtonCarousel, StyleButton, TextButton, StylePrincipalText } from './styles';

const CustomCarousel = () => {
  return (

<Carousel autoPlay={true} showArrows={false} showThumbs={false} interval="2500" infiniteLoop={true} showStatus={false} dynamicHeight>
    <Divteste>
      <img src={Image1}/>
      <StyleMensagem>
        <StylePrincipalText>
          <PrincipalText>Somos um escritório de Contabilidade</PrincipalText>
        </StylePrincipalText>
        <StyleSecondText>
          <SecondText>As melhores soluções para sua empresa, serviço ou comércio. Conte conosco!</SecondText>
        </StyleSecondText>
        <StyleButton>
            <ButtonCarousel>
              <TextButton>Faça um orçamento</TextButton>
            </ButtonCarousel>
        </StyleButton>
      </StyleMensagem>
    </Divteste>
    <Divteste>
      <img src={Image1}/>
      <StyleMensagem>
        <StylePrincipalText>
          <PrincipalText>Somos um escritório de Contabilidade</PrincipalText>
        </StylePrincipalText>
        <StyleSecondText>
          <SecondText>As melhores soluções para sua empresa, serviço ou comércio. Conte conosco!</SecondText>
        </StyleSecondText>
        <StyleButton>
            <ButtonCarousel>
              <TextButton>Faça um orçamento</TextButton>
            </ButtonCarousel>
        </StyleButton>
      </StyleMensagem>
    </Divteste>
</Carousel>
  )
}

export default CustomCarousel;