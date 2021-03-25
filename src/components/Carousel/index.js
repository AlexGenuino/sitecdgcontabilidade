import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/2.jpeg'
import Image3 from '../../assets/3.jpg'
import {TextImagem, StyleMensagem, Divteste } from './styles';

const CustomCarousel = () => {
  return (

<Carousel autoPlay={true} showArrows={false} showThumbs={false} interval="2000" infiniteLoop={true} showStatus={false} dynamicHeight>
    <Divteste>
        <img src={Image1}/>
        <StyleMensagem>
        <TextImagem>Somos um escritório</TextImagem>
        <TextImagem>de Contabilidade</TextImagem>
        </StyleMensagem>
    </Divteste>

    

</Carousel>


  )
}

export default CustomCarousel;